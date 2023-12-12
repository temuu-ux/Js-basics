function Loan(salary, ssc, passport, idencart, person, cre, debt) {
  if (
    salary > 2000000 &&
    ssc == "yes" &&
    (passport == "yes" || idencart == "yes") &&
    (person == "yes" || cre == "yes") &&
    debt < 1000000
  ) {
    console.log("you can get a loan");
  } else {
    console.log("you can not get a loan");
  }
}
Loan(1000, "yes", "yes", "no", "no", "yes", 9000);
