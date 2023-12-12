function weather(today) {
  if (today == "raining") {
    console.log(" if it's raining, take umbrella");
  } else if (today == "snowing") {
    console.log(" if it's snowing, take umbrella");
  } else if (today == "sunny") {
    console.log(" if it's sunny, take umbrella");
  } else {
    console.log(" Do not take umbrella");
  }
}
weather("raining");
