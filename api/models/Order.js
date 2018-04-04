/**
 * Order.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */


/**
 * @namespace Order
 * @prop {model} user user
 * @prop {model} master master
 * @prop {datatime} date Время записи
 * @prop {boolean} masterApprove Подтверждение мастером
 */
module.exports = {

  attributes: {
    user: { model: 'user', required: true },
    master: { model: 'master', required: true },
    date: { type: 'datetime' }, //время записи
    masterApprove: { type: 'boolean', defaultsTo: false },
    fillMaster: function () {
      var Obj = this.toObject();
      return Master.findOne({ id: this.master }).populate('user').then(gotIt => {
        Obj.master = gotIt;
        // console.log(Obj);
        return Obj;
      })
    }
  }
};

