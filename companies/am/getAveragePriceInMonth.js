const productMap = {
  apple: "code1",
  banana: "code2",
  orange: "code3",
  peach: "code4",
};

const salesMap = {
  code1: {
    "2022-02-01": 12,
    "2022-02-02": 13,
    "2022-02-05": 14,
    "2022-02-07": 11,
    "2022-03-02": 12,
    "2022-03-09": 14,
  },
  code2: {
    "2022-04-01": 12,
    "2022-04-02": 3,
    "2022-04-05": 4,
    "2022-03-02": 12,
    "2022-03-07": 1,
    "2022-03-09": 14,
  },
  code3: {
    "2022-03-01": 12,
    "2022-04-02": 13,
    "2022-05-05": 14,
    "2022-06-02": 12,
    "2022-07-07": 13,
    "2022-07-09": 14,
  },
};

function getAveragePriceInMonth(product, month) {
  const barcode = productMap[product];

  const sales = salesMap[barcode];
  if (!sales) return 0;

  let average = 0;
  let counter = 0;

  Object.entries(sales).forEach(([key, value]) => {
    if (new Date(key).getMonth() + 1 === month) {
      average += value;
      counter++;
    }
  });

  return counter ? average / counter : 0;
}

console.log(getAveragePriceInMonth("apple", 2));
console.log(getAveragePriceInMonth("apple", 12));
console.log(getAveragePriceInMonth("orange", 4));
console.log(getAveragePriceInMonth("orange", 5));
console.log(getAveragePriceInMonth("peach", 5));
