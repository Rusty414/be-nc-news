exports.handle404 = (err, req, res, next) => {
  if (err.status === 404) res.status(404).send({ message: err.message });
  else next(err);
};

exports.handle400 = (err, req, res, next) => {
  const codes400 = ['22PO2', '23503', '23502', '42703', '22P02', '23505'];
  if (codes400.includes(err.code)) res.status(400).send({ message: err.toString() });
  else next(err);
};

exports.handle405 = (req, res, next) => {
  res.status(405).send({ message: 'Invalid method for this endpoint' });
};
