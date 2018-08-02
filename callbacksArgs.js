function findWaldo(arr, found) {
  arr.forEach(function(name, index) {
    if (name === "Waldo") {
      found(index);
    }
  });
}

function actionWhenFound(index) {
  console.log("Waldo has index of: ", index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
