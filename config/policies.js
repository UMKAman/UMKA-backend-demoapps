/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your controllers.
 * You can apply one or more policies to a given controller, or protect
 * its actions individually.
 *
 * Any policy file (e.g. `api/policies/authenticated.js`) can be accessed
 * below by its filename, minus the extension, (e.g. "authenticated")
 *
 * For more information on how policies work, see:
 * http://sailsjs.org/#!/documentation/concepts/Policies
 *
 * For more information on configuring policies, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.policies.html
 */


module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions (`true` allows public     *
  * access)                                                                  *
  *                                                                          *
  ***************************************************************************/
  // RegisterController: true,
  AuthController: true,
  PaymentsController: ['hasToken', 'isUser'],
  AdminController: {
    admin: ['hasToken', 'isAdmin'],
    login: true,
  },
  ServiceController: true,
  ChatController: ['hasToken'],
  FireTokenController: true,
  ChatMessageController: ['hasToken'],
  SpecializationController: true, //todo
  CurrencyController: true, // todo
  MasterServiceController: {
    '*': ['hasToken', 'isUser', 'hasMaster'], //todo THAT MASTER for update/remove/add!!!
    find: ['hasToken', 'isUser'],
    findOne: ['hasToken', 'isUser'],
  },
  UserController: {
    '*': ['noOne'],
    index: ['hasToken', 'isUser', 'thatUser'],
    add: ['hasToken', 'isUser', 'thatUser'],
    populate: ['hasToken', 'isUser', 'thatUser'],
    remove: ['hasToken', 'isUser', 'thatUser'],
    findOne: ['hasToken', 'isUser', 'thatUser'],
    update: ['hasToken', 'isUser', 'thatUser'],
  },
  MasterController: {
    '*': ['noOne'],
    index: ['hasToken', 'isUser'],
    create: ['hasToken', 'isUser'],
    add: ['hasToken', 'isUser'], // todo think about this
    remove: ['hasToken', 'isUser', 'hasMaster'],
    find: ['hasToken', 'isUser'],
    findOne: ['hasToken', 'isUser'],
    update: ['hasToken', 'isUser', 'MasterPolicy'],
  },
  MessageController: {
    '*': ['noOne'],
    index: ['hasToken', 'isUser'],
    create: ['hasToken', 'isUser'],
    find: ['hasToken', 'isUser', 'findUserOrMaster'],
    findOne: ['hasToken', 'isUser', 'messageUserOrMaster'],
    update: ['hasToken', 'isUser', 'messageUserOrMaster'],
  },
  OrderController: {
    '*': ['noOne'],
    index: ['hasToken', 'isUser'],
    create: ['hasToken', 'isUser'],
    find: ['hasToken'],
    findOne: ['hasToken', 'isUser', 'orderUserOrMaster'],
    update: ['hasToken', 'isMaster', 'orderMaster'],
  },
  PortfolioController: {
    '*': ['hasToken', 'isUser'],
    index: ['hasToken', 'isUser', 'hasMaster'],
    add: ['hasToken', 'isUser', 'hasMaster'],
    remove: ['hasToken', 'isUser', 'hasMaster'],
    create: ['hasToken', 'isUser', 'hasMaster'],
    update: ['hasToken', 'isMaster', 'portfolioMaster'],
    delete: ['hasToken', 'isMaster', 'portfolioMaster'],
  },
  PortfolioPicController: {
    '*': ['hasToken', 'isUser'],
    index: ['hasToken', 'isUser', 'hasMaster'],
    create: ['hasToken', 'isUser', 'hasMaster'],
    update: ['hasToken', 'isMaster', 'portfolioPicMaster'],
    delete: ['hasToken', 'isMaster', 'portfolioPicMaster'],
  },
  ReviewController: {
    '*': ['hasToken', 'isUser'],
    update: ['hasToken', 'isUser', 'userReview'],
    delete: ['hasToken', 'isUser', 'userReview'],
  },
  WorkdayController: {
    '*': ['hasToken', 'isUser'],
    index: ['hasToken', 'isUser', 'hasMaster'],
    add: ['hasToken', 'isUser', 'hasMaster'],
    remove: ['hasToken', 'isUser', 'hasMaster'],
    create: ['hasToken', 'isUser', 'hasMaster'],
    update: ['hasToken', 'isMaster', 'workdayMaster'],
    delete: ['hasToken', 'isMaster', 'workdayMaster'],
  },
  WorkhourController: {
    '*': ['hasToken', 'isUser'],
    create: ['hasToken', 'isUser', 'hasMaster'],
    update: ['hasToken', 'isMaster', 'workhourMaster'],
    delete: ['hasToken', 'isMaster', 'workhourMaster'],
  },



  // '*': true,

  /***************************************************************************
  *                                                                          *
  * Here's an example of mapping some policies to run before a controller    *
  * and its actions                                                          *
  *                                                                          *
  ***************************************************************************/
  // RabbitController: {

  // Apply the `false` policy as the default for all of RabbitController's actions
  // (`false` prevents all access, which ensures that nothing bad happens to our rabbits)
  // '*': false,

  // For the action `nurture`, apply the 'isRabbitMother' policy
  // (this overrides `false` above)
  // nurture	: 'isRabbitMother',

  // Apply the `isNiceToAnimals` AND `hasRabbitFood` policies
  // before letting any users feed our rabbits
  // feed : ['isNiceToAnimals', 'hasRabbitFood']
  // }
};
