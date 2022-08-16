Array.prototype.map = function (callback) {
  const results = [];

  for (const item of this) {
    console.log("from custom map");
    results.push(callback(item));
  }

  return results;
};

["a", "b", "c", "d"].map((item) => console.log(item));
