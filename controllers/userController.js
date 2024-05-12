import services from "../services/index.js";

const userController = (req, res) => {
  const query = req.query;
  services.userServices.userService(query, res);
};

export default { userController };
