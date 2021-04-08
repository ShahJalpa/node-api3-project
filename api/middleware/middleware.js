const User = require("../users/users-model.js")

function logger(req, res, next) {
  // DO YOUR MAGIC
  console.log(`Request Method: ${req.method} Request URL: ${req.url} timestamp: ${new Date ()}`)
}

function validateUserId(req, res, next) {
  // DO YOUR MAGIC
  const {id} = req.params;
  try{
    const user = User.getById(id)
    if(!user){
      res.status(404).json({message: "user not found" })
    }else{
      req.user = user
      next()
    }
  }catch(error){
    next(error)
  }
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
  const name = req.body.name

  if(!name){
    res.status(400).json({ message: "missing required name field" })
  } else{
    next()
  }
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
  const newPost = req.body;
  const text = req.body.text;

  if(!text){
    res.status(400).json({ message: "missing required text field" })
  }else{
    next()
  }

}

// do not forget to expose these functions to other modules
module.exports = {logger, validateUserId, validateUser, validatePost}