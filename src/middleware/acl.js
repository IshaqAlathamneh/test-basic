'use strict';

module.exports = (capability) => {

  return (req, res, next) => {
    console.log('Middleware' , req.user);

    try {
      if (req.user.capabilities.includes(capability)) {
        next();
      }
      else {
        next('Access Denied');
      }
    } catch (e) {
      next('ACL: Invalid Login');
    }
  }
}