Array.prototype.map = function (callback) {
  for (const item of this) {
    console.log("from custom map");
    callback(item);
  }
};

["a", "b", "c", "d"].map((item) => console.log(item));
