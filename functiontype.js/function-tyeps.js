function doSomething() {
  console.log("Doing something");
}

// array function
let doAnotherThing = () => {
  console.log("Doing something");
};
let doAnotherThing1 = (input) => {
  console.log("Doing something", input);
};
doAnotherThing1("Hello");

// function dotor functio
function parentFunction() {
  console.log("Doing something");
}

let parentFunction = () => {
  parentFunction();
  console.log("Doing something");
};

parentFunction("Hello");
