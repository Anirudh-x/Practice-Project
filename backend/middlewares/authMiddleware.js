
const authMiddleware = (req, res, next) => {
  console.log("AuthChecked");

  next();
}

module.exports = authMiddleware;
