import services from "../services/index.js";

const jodhpurController = (req, res) => {
  const { speciality } = req.params;
  services.jodhpurServices.jodhpurService(speciality, res);
};

export default { jodhpurController };
