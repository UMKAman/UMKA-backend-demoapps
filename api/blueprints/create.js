/**
 * Module dependencies
 * 
 * 
 * 
 * СУПЕР КОСТЫЛЬ
 */
var _ = require('lodash');

module.exports = function createRecord(req, res) {

    var Model = actionUtil.parseModel(req);

    var data = actionUtil.parseValues(req);


    Model.create(data).then(newInstance => {
        var q = [];
        q.push(newInstance);
        switch (Model.identity) {
            case 'chat':
            case 'order':
                q.push(User.findOne({ id: newInstance.user }));
                q.push(Master.findOne({ id: newInstance.master }).populate('user'));
                break;
            case 'review':
                q.push(User.findOne({ id: newInstance.writter }));
                q.push(Master.findOne({ id: newInstance.master }).populate('user'));
                break;
            case 'chatmessage':
                q.push(User.findOne({ id: newInstance.ownerUser }));
                q.push(Master.findOne({ id: newInstance.ownerMaster }).populate('user'));
                break;
            default:
                break;
        }
        return Promise.all(q);
    }).spread((inst, user, master) => {
        var ok = inst.toObject();
        switch (Model.identity) {
            case 'chat':
            case 'order':
                ok.user = user;
                ok.master = master;
                return res.created(ok);
            case 'review':
                ok.writter = user;
                ok.master = master;
                return res.created(ok);
            case 'chatmessage':
                ok.ownerUser = user;
                ok.ownerMaster = master;
                return res.created(ok);
            default:
                res.created(inst);
        }
        // res.created(ok);
    }).catch(err => {
        res.negotiate(err);
    })
};
