/**
 * SpecializationController
 *
 * @description :: Server-side logic for managing specializations
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    fileUpload: function (req, res, next) {
        var self = this;
        req.file('pic').upload({
            dirname: sails.config.appPath + '/assets/pics/' + this.identity + '/',
            maxBytes: 12000000
        }, function (err, uploadedFiles) {
            if (err) {
                sails.log.info('error while upload file in' + self.identity + ' : ', err);
                req.body.pic = '';
            } else if (uploadedFiles.length === 0) {
                req.body.pic ? delete req.body.pic : null;
            } else {
                let fileName = uploadedFiles[0].fd.split('/')[uploadedFiles[0].fd.split('/').length - 1];
                copyToTemp(self.identity, fileName);
                req.body.pic = '/pics/' + self.identity + '/' + fileName;
            }
            return next();
        });

    },
    populate: function (req, res, next) {
        Specialization.findOne({ id: req.params.parentid }).populate(req.options.alias).then(ok => {
            return Promise.map(ok[req.options.alias], (master) => {
                return Master.findOne({ id: master.id }).populate('specializations').populate('services').populate('user');
            }).then(masta => {
                return masta;
            });
        }).then(filledMasters => {
            return res.json(filledMasters);
        }).catch(err => {
            return next(err);
        });
        /**
         * req.params.parentid  -- ид специализации, которую надо собрать
         * req.options.alias - field to populate
         */
        // return res.ok();
    }
};

/**
 * 
 * @api {post} /specialization create specialization
 * @apiName createSpec
 * @apiGroup Specialization
 * @apiVersion  0.0.0
 * 
 * 
 * @apiParam  {String} pic multipart/form-data
 * @apiParam  {String} name specialization name
 * @apiParam  {int} parent specialization-parent-id
 * 
 * @apiSuccess (200) {String} noname json-string specialization model
 * 
 * @apiParamExample  {type} Request-Example:
   {
       pic : multipart/form-data,
       name : "IT",
       parent : null,
   }
 * 
 * 
 * @apiSuccessExample {type} Success-Response:
   {
       "id": 1,
       "name": "IT",
       "pic": "/link/to/pic",
       "parent": "null",
       "child": [
           { specialization1 },
           { specialization2 },
           ...
       ],
       inMaster: [
           { master1 },
           { master2 },
           ...
       ]
   }
 * 
 * 
 */

/**
 * 
 * @api {get} /specialization get all specializations
 * @apiName getSpecializations
 * @apiGroup Specialization
 * @apiVersion  0.0.0
 * @apiDescription to get hi speed use /specialization?populate=child
 * 
 * @apiSuccess (200) {string} noname json-string array of getSpecializations
 * 
 * @apiSuccessExample {type} Success-Response:
   {
       [
           {
                "id": 1,
                "name": "IT",
                "pic": "/link/to/pic",
                "parent": "null",
                "child": [
                    { specialization1 },
                    { specialization2 },
                    ...
                ],
                inMaster: [
                    { master1 },
                    { master2 },
                    ...
                ]
            },
            {
                "id": 2,
                "name": "Автоперевозки",
                "pic": "/link/to/pic",
                "parent": "null",
                "child": [
                    { specialization1 },
                    { specialization2 },
                    ...
                ],
                inMaster: [
                    { master1 },
                    { master2 },
                    ...
                ]
            }
       ]
   }
 * 
 * 
 */
/**
 * 
 * @api {get} /specialization/:id get specialization by id
 * @apiName getSpecialization
 * @apiGroup Specialization
 * @apiVersion  0.0.0
 * 
 * 
 * @apiSuccess (200) {string} noname json-string of specialization model
 * 
 * @apiSuccessExample {type} Success-Response:
   {
        "id": 2,
        "name": "Автоперевозки",
        "pic": "/link/to/pic",
        "parent": "null",
        "child": [
            { specialization1 },
            { specialization2 },
            ...
        ],
        inMaster: [
            { master1 },
            { master2 },
            ...
        ]
   }
 * 
 * 
 */
/**
 * 
 * @api {put} /specialization/:id update specialization by id
 * @apiName updateSpecialization
 * @apiGroup Specialization
 * @apiVersion  0.0.0
 * 
 * 
 * @apiParam  {blob} pic multipart/form-data pic of specialization
 * @apiParam  {String} name name of specialization
 * 
 * @apiSuccess (200) {string} noname json-string specialization model
 * 
 * @apiParamExample  {type} Request-Example:
   {
       pic : multipart/form-data,
       name: "new name"
   }
 * 
 * 
 * @apiSuccessExample {type} Success-Response:
   {
       "id": 2,
        "name": "new name",
        "pic": "/link/to/new_pic",
        "parent": "null",
        "child": [
            { specialization1 },
            { specialization2 },
            ...
        ],
        inMaster: [
            { master1 },
            { master2 },
            ...
        ]
   }
 * 
 * 
 */
/**
 * 
 * @api {delete} /specialization/:id delete specialization by id
 * @apiName deleteSpecialization
 * @apiGroup Specialization
 * @apiVersion  0.0.0
 * 
 * 
 * @apiSuccess (200) {string} noname json-string deleted model
 * 
 * @apiSuccessExample {type} Success-Response:
   {
        "id": 2,
        "name": "new name",
        "pic": "/link/to/new_pic",
        "parent": "null",
        "child": [
            { specialization1 },
            { specialization2 },
            ...
        ],
        inMaster: [
            { master1 },
            { master2 },
            ...
        ]
   }
 * 
 * 
 */

