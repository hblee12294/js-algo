function compareVersions(version1, version2) {
  let resultSign = "=";

  let v1 = version1;
  let v2 = version2;

  if (version1.startsWith("v")) v1 = version1.substring(1);
  if (version2.startsWith("v")) v2 = version2.substring(1);

  const subV1 = v1.split(".");
  const subV2 = v2.split(".");

  const round = Math.max(subV1.length, subV2.length);

  for (let i = 0; i < round; ++i) {
    const result = compare(subV1[i] || "0", subV2[i] || "0");
    if (result > 0) {
      resultSign = ">";
      break;
    } else if (result < 0) {
      resultSign = "<";
      break;
    }
  }

  return `${version1} ${resultSign} ${version2}`;
}

function compare(str1, str2) {
  const num1 = parseInt(str1);
  const num2 = parseInt(str2);

  return num1 - num2;
}

console.log(compareVersions("4.10.2", "2.1.3"));
console.log(compareVersions("4.10.2", "4.10.2.1"));
console.log(compareVersions("4.10.2", "4.10.2.0"));
console.log(compareVersions("v4.10.2", "v2.1.3"));
