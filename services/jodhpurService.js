const jodhpurService = (currentNeed, res) => {
  const address = {
    "janta sweet home": "Siwanchi gate",
    chai: "bakra mandi any shope",
    chicken: "delhi wala",
    "horror-place": "mandore nagadari",
  };
  console.log(currentNeed);
  res.status(200).send(address[currentNeed]);
};

export default {
  jodhpurService,
};
