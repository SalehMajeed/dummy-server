const firstService = (data,res) => {
    try{
       res.send(data);
    }
    catch(err){
      console.log(err); 
    }
};

export default {firstService}