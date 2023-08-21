const express = require('express');
const jodhpurRoutes = express.Router();

const address = {
  'janta sweet home': 'Siwanchi gate',
  chai: 'bakra mandi any shope',
  chicken: 'delhi wala',
  'horror-place': 'mandore nagadari',
};

jodhpurRoutes.get('/get-speciality/:speciality', (req, res) => {
  try{
    const currentNeed = req.params.speciality;
    console.log(currentNeed);
    res.send(address[currentNeed]);
  } catch(err) {
    console.log(err);
    res.send(500);
  }
});

jodhpurRoutes.post('/update-details', (req, res) => {
  console.log(req.query);
  res.send('ok');
});

module.exports = jodhpurRoutes;
