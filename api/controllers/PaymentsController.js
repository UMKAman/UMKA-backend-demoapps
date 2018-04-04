/**
 * PaymentsController
 *
 * @description :: Server-side logic for managing Payments
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var iap = require('iap');
var moment = require('moment');
module.exports = {
    index: (req, res, next) => {
        if (!req.body.receipt || !req.body.platform) {
            return next('Not all fields sent');
        }
        if (req.body.platform == 'ios') {
            var platform = 'apple';
            var payment = {
                receipt: req.body.receipt,
                secret: '5e77ea3f094348e2b7aa9ed4a2af68a0'
            }
            iap.verifyPayment(platform, payment, (error, response) => {
                if (error) return next(error);
                var in_app = response.receipt.in_app;
                Master.findOne({ user: req.user.id }).then(found => {
                    if (!found) return next('No master found');
                    return Promise.map(in_app, product => {
                        return payments.paymentApply(product, found);
                    })
                }).then(() => {
                    return res.json({payment: true});
                }).catch(err => {
                    return next(err);
                })
            })
        } else if (req.body.platform == 'android') {
            if (!req.body.receipt.productId) {
                return next('No product id');
            }
            var platform = 'google';
            var payment = {
                receipt: req.body.receipt.purchaseToken,
                packageName: req.body.receipt.packageName,
                productId: req.body.receipt.productId,
                keyObject: {
                    //watch config
                },
            }
            if (req.body.receipt.productId.indexOf('premium_') != -1) {
                payment.subscription = true;
            }
            iap.verifyPayment(platform, payment, (error, response) => {
                if (error) return next(error);
                if (response.purchaseState && response.purchaseState == 0) {
                    return next('Payment cancelled');
                }
                Master.findOne({ user: req.user.id }).then(found => {
                    if (!found) return next('No master found');
                    var product = payments.getObjectFromGoogle(response);
                    return payments.paymentApply(product, found);
                }).then(() => {
                    return res.json({payment: true});
                }).catch(err => {
                    return next(err);
                })
            })
        } else {
            return next('Wrong platform');
        }
    }
};

