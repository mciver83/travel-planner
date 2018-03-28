module.exports = function(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    return res.status(404).send("you can't sit with us");
  }
};
