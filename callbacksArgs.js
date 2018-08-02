function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);
    }
  }
}

function actionWhenFound(index) {
  console.log("Waldo has index of: ", index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
