function trimURL(url, paramArray) {
  const segments = url.split("?");

  if (segments.length === 1) return url;
  const prefix = segments[0];
  const params = segments[1];

  const paramsPairs = params.split("&").map((param) => param.split("="));

  const paramsMap = {};

  paramsPairs.forEach(([key, value]) => {
    if (!paramArray.includes(key)) {
      paramsMap[key] = value;
    }
  });

  const newParams = Object.entries(paramsMap).reduce(
    (preValue, [key, value], index) => {
      return preValue + `${index === 0 ? "" : "&"}${key}=${value}`;
    },
    ""
  );

  return `${prefix}?${newParams}`;
}

const testURL =
  "https://example.com/path/to/page?name=ferret&color=purple&name=apple&taste=sweet";

console.log(trimURL(testURL, []));
console.log(trimURL(testURL, ["taste"]));
console.log(trimURL(testURL, ["name"]));
console.log(trimURL(testURL, ["name", "taste", "color"]));
