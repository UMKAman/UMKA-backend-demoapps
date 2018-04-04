/**
 * Review.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

const _ = require('lodash');
const Promise = require('bluebird');

/**
 * @namespace Review
 * @prop {model} writter user который написал
 * @prop {model} master master которому написали
 * @prop {string} text Текст отзыва
 * @prop {string} rating Рейтинг
 */
module.exports = {

  attributes: {
    writter: { model: 'user', required: true },
    master: { model: 'master', required: true },
    text: { type: 'string' },
    rating: { type: 'string' },
  },
  afterCreate: function (data, cb) {
    if (data.rating && data.master) {
      Promise.all([
        Review.find({ master: data.master, rating: { '!': null } }).average('rating'),
        Review.count({ master: data.master, rating: { '!': null } }),
        Review.find({ master: data.master, rating: { '!': null } }).groupBy('rating+5-5').sum('rating'),
        Master.findOne({ id: data.master }),
      ])
        .spread((average, count, grouped, master) => {
          master.averageRating = average[0].rating;
          master.voices = count;
          master.ratingsAndCounts = [];
          _.each(grouped, group => {
            master.ratingsAndCounts.push({ [group.group0.toFixed(1)]: group.rating.toFixed(1) / group.group0.toFixed(1) })
          })
          master.ratingsAndCounts = JSON.stringify(master.ratingsAndCounts);
          return master.save();
        }).finally(() => {
          cb();
        })
    } else {
      cb();
    }
  },
  afterUpdate: function(data, cb) {
    if (data.rating && data.master) {
      Promise.all([
        Review.find({ master: data.master, rating: { '!': null } }).average('rating'),
        Review.count({ master: data.master, rating: { '!': null } }),
        Review.find({ master: data.master, rating: { '!': null } }).groupBy('rating+5-5').sum('rating'),
        Master.findOne({ id: data.master }),
      ])
        .spread((average, count, grouped, master) => {
          master.averageRating = average[0].rating;
          master.voices = count;
          master.ratingsAndCounts = [];
          _.each(grouped, group => {
            master.ratingsAndCounts.push({ [group.group0.toFixed(1)]: group.rating.toFixed(1) / group.group0.toFixed(1) })
          })
          master.ratingsAndCounts = JSON.stringify(master.ratingsAndCounts);
          return master.save();
        }).finally(() => {
          cb();
        })
    } else {
      cb();
    }
  }
};

