const express = require('express');
const router = express.Router();

const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');
const { userById } = require('../controllers/user');

/*
Whenever the Express app receives a request to a route that matches a path containing the  :userid parameter in it, the app will execute the userByID controller function, which fetches and loads the user into the Express request object, before propagating it to the next function that's specific to the request that came in.
*/
// test route
router.get('/secret/:userId', requireSignin, isAuth, isAdmin, (req, res) => {
  res.json({
    user: req.profile
  });
});

router.param('userId', userById);

module.exports = router;
