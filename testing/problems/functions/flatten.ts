export function flatten(value: Array<any>): Array<any> {
  const resultArr: any[] = [];
  const queue = [...value];

  while (queue.length) {
    const head = queue.shift();

    if (Array.isArray(head)) {
      queue.unshift(...head);
    } else {
      resultArr.push(head);
    }
  }

  return resultArr;
}
