import services from "../services/index"

const firstController = (req , res) =>{
    services.firstServices.firstService('first',res);
}

export default {firstController}