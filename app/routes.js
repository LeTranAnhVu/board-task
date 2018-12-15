/* eslint-disable global-require, func-names */

module.exports = function (app) {
  // home
  app.use('/', require('./controllers/home'));
  app.use('/addtask', require('./controllers/addtask'));
  app.use('/login',require('./controllers/login'));
  app.use('/check', require('./controllers/check'));
};
