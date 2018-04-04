const moment = require('moment');

module.exports  = {
    paymentApply: (product, master) => {
        switch(product.product_id) {
            case 'city.umka.riseup3':
                return payments.riseupApply(product, master, 3);
                break;
            case 'city.umka.riseup':
                return payments.riseupApply(product, master, 1);
                break;
            case 'city.umka.riseup5':
                return payments.riseupApply(product, master, 5);
                break;
            case 'city.umka.premium':
                return payments.premiumApply(product, master, 1).then(() => {
                    return payments.riseupApply(product, master, 10);
                })
                break;
            case 'city.umka.premium3':
                return payments.premiumApply(product, master, 3).then(() => {
                    return payments.riseupApply(product, master, 10);
                })
                break;
            case 'city.umka.premium6':
                return payments.premiumApply(product, master, 6).then(() => {
                    return payments.riseupApply(product, master, 10);
                })
                break;
            case 'city.umka.premium12':
                return payments.premiumApply(product, master, 12).then(() => {
                    return payments.riseupApply(product, master, 10);
                })
                break;
            default: 
                throw 'Wrong product_id';
                break;
        }
    },
    riseupApply: (product, master, days) => {
        days = days * parseInt(product.quantity);
        var time;
        if (master.raisedUntil && moment(master.raisedUntil).isAfter(moment())) {
            time = moment(master.raisedUntil).add(days, 'days').format('MM-DD-YYYY HH:mm');
        } else {
            time = moment(parseInt(product.purchase_date_ms)).add(days, 'days').format('MM-DD-YYYY HH:mm');
        }
        return Master.update({id: master.id}, {raisedUntil: time})
    },
    premiumApply: (product, master, months) => {
        months = months * parseInt(product.quantity);
        var time;
        if (master.premiumUntil && moment(master.premiumUntil).isAfter(moment())) {
            time = moment(master.premiumUntil).add(months, 'months').format('MM-DD-YYYY HH:mm');
        } else {
            time = moment(parseInt(product.purchase_date_ms)).add(months, 'months').format('MM-DD-YYYY HH:mm');
        }
        return Master.update({id : master.id}, {premiumUntil: time});
    },
    getObjectFromGoogle: (response) => {
        var product = {
            quantity: 1,
            purchase_date_ms: response.receipt.purchaseTimeMillis || response.receipt.startTimeMillis
        }
        switch (response.productId) {
            case 'raised_1':
                product.product_id = 'city.umka.riseup';
                break;
            case 'raised_5':
                product.product_id = 'city.umka.riseup5';
                break;
            case 'raised_3':
                product.product_id = 'city.umka.riseup3';
                break;
            case 'premium_1':
                product.product_id = 'city.umka.premium';
                break;
            case 'premium_3':
                product.product_id = 'city.umka.premium3';
                break;
            case 'premium_1_year':
                product.product_id = 'city.umka.premium12';
                break;
            default: 
                product.product_id = 'undefined';
                break;
        }
        return product;
    }
}