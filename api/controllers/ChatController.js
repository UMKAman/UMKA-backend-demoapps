/**
 * ChatController
 *
 * @description :: Server-side logic for managing chats
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    find: function (req, res, next) {
        var criteria = {};
        /** check if master */
        if (req.master !== null) {
            criteria.master = req.master.id;
        } else {
            criteria.user = req.user.id;
        }

        if (req.query && req.query.master) {
            criteria.master = req.query.master;
            criteria.user = req.user.id;
        }

        //if admin or manager and there is where clause in request set criteria to its clause
        if (req.user.isAdmin || req.user.isManager) {
            if (req.query && req.query.where) {
                criteria = JSON.parse(req.query.where);
            }
        }

        // Lookup for records that match the specified criteria
        var query = Chat.find()
            .where(criteria)
            .limit(actionUtil.parseLimit(req))
            .skip(actionUtil.parseSkip(req))
            .sort(actionUtil.parseSort(req));
        query.populate('messages', { limit: 1, sort: 'id DESC' }).populate('user')
            .exec(function found(err, matchingRecords) {
                if (err) return res.serverError(err);
                /** populate each master to user */
                let result = [];
                Promise.each(matchingRecords, chat => {
                    let Obj = chat.toObject();
                    return Master.findOne({ id: Obj.master }).populate('user').then(user => {
                        Obj.master = {
                            user: user,
                        };
                        result.push(Obj);
                    })
                }).then(() => {
                    res.json(result);
                }).catch(err => {
                    next(err);
                })
            });
    }
};

/**
 * 
 * @api {get} /chat?master=masterId get chat with master (masterId!! not userId!!)
 * @apiName getChatWithMaster
 * @apiGroup Chat
 * @apiVersion  0.1.0
 * 
 */
/**
 * 
 * @api {get} /chat get all users/master chats
 * @apiName getChats
 * @apiGroup Chat
 * @apiVersion  0.1.0
 * 
 */
/**
 * 
 * @api {get} /chat/:id get chat by id
 * @apiName getChat
 * @apiGroup Chat
 * @apiVersion  0.1.0
 * 
 */
/**
 * 
 * @api {post} /chat create chat
 * @apiName createChat
 * @apiGroup Chat
 * @apiVersion  0.1.0
 * 
 *  @apiParam  {Number} user user-id
 *  @apiParam  {Number} master master-id
 * 
 */
