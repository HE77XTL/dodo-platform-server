'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, jwt } = app;
  router.get('/', controller.home.index);
  router.get('/login', controller.home.login);
  router.get('/getUser', jwt, controller.home.getUser);
};
