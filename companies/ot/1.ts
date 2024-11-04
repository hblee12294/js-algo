/* # template = 'dcba'
 *  # target = 'dcbasabcd'
 *  # output = 'ddccbbaas'
 */

function sort(template: string, target: string) {
  const templateCodes = template.split("").map((char) => char.charCodeAt(0));
  const targetCodes = target.split("").map((char) => char.charCodeAt(0));

  function compareFn(a: number, b: number) {
    if (templateCodes.includes(a) && templateCodes.includes(b)) {
      const aPos = templateCodes.indexOf(a);
      const bPos = templateCodes.indexOf(b);

      return aPos - bPos;
    }

    if (templateCodes.includes(a)) {
      return -1;
    }

    if (templateCodes.includes(b)) {
      return 1;
    }

    return a - b;
  }

  return String.fromCharCode(...targetCodes.sort(compareFn));
}

console.log(sort("dcba", "dcbasabcd"));
