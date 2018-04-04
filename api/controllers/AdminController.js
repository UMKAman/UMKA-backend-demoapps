/**
 * AdminController
 *
 * @description :: Server-side logic for managing admins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    index: (req, res, next) => {
        return res.view('vasya-admin/index', { layout: false });
    },
    login: (req, res, next) => {
        return res.view('admin/index', { layout: false });
    }
};

