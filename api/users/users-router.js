const express = require('express');

// You will need `users-model.js` and `posts-model.js` both
const Users = require("./users-model.js");
const Posts = require("../posts/posts-model.js");

// The middleware functions also need to be required
const mw = require("../middleware/middleware.js");
const { logger, validateUserId, validateUser, validatePost } = mw

const router = express.Router();

router.get('/', logger, (req, res) => {
  // RETURN AN ARRAY WITH ALL THE USERS
  Users.get()
      .then(users => {
        res.status(200).json(users)
      })
      .catch(error => {
        res.status(500).json({message: error.message})
      })
});

router.get('/:id', logger, validateUserId, (req, res) => {
  // RETURN THE USER OBJECT
  // this needs a middleware to verify user id
  const {id} = req.params.id
  Users.getById(id)
       .then(user => {
           res.status(200).json(user)
        })
       .catch(error => {
         res.status(500).json({message: error.message})
       })
});

router.post('/', (req, res) => {
  // RETURN THE NEWLY CREATED USER OBJECT
  // this needs a middleware to check that the request body is valid
});

router.put('/:id', (req, res) => {
  // RETURN THE FRESHLY UPDATED USER OBJECT
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
});

router.delete('/:id', (req, res) => {
  // RETURN THE FRESHLY DELETED USER OBJECT
  // this needs a middleware to verify user id
});

router.get('/:id/posts', (req, res) => {
  // RETURN THE ARRAY OF USER POSTS
  // this needs a middleware to verify user id
});

router.post('/:id/posts', (req, res) => {
  // RETURN THE NEWLY CREATED USER POST
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
});

// do not forget to export the router
module.exports = router