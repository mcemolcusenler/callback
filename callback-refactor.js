function findWaldo(arr, found) {
  arr.forEach(function(e, i) {
    if (e === "Waldo") {
      found(i);   // execute callback
    }
  });
}

function actionWhenFound(i) {
  console.log("Found him at index " + i + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);