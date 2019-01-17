const apiRouter = require('express').Router();
const topicsRouter = require('./topics');
const articlesRouter = require('./articles');
const usersRouter = require('./users');
const { sendEndpoints } = require('../controllers/api');

apiRouter.use('/topics', topicsRouter);
apiRouter.use('/articles', articlesRouter);
apiRouter.use('/users', usersRouter);

// apiRouter.route('/').get(sendEndpoints);

module.exports = apiRouter;
