export const validateBody = (fields) => {
  return (req, res, next) => {
    for(let field of fields) {
      if(!req.body[field]) {
        res.status(400);
        return next(new Error(`${field} is required`));
      }
    }
    next();
  };
};
