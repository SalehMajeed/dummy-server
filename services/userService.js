const userService = (query, res) => {
  res.status(200).send(query);
};

export default {
  userService,
};
