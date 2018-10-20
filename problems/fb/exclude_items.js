/*
items = [
  {color: 'red', type: 'tv', age: 18},
  {color: 'silver', type: 'phone', age: 20}
  ...
  ]
  
  excludes = [
  {k: 'color', v: 'silver'},
  {k: 'type', v: 'tv'},
  ....
  ]

function excludeItems(items, excludes) {
  excludes.forEach(pair => {
    items = items.filter(item => item[pair.k] === item[pair.v]);
  });
  return items;
}

1. Describe what this function is doing...
2. What is wrong with that function ?
3. How would you optimize it ?  
*/



/* Q
  1. The function is to exclude items with features in 'excludes' array.
  2. (1) 
*/

items = [
  {color: 'red', type: 'tv', age: 18},
  {color: 'silver', type: 'phone', age: 20},
  {color: 'blue', type: 'phone', age: 23},
  {color: 'blue', type: 'tv', age: 40},
  {color: 'silver', type: 'tablet', age: 12}
]

excludes = [
  {k: 'color', v: 'silver'},
  {k: 'type', v: 'tv'}
]

/*
function excludeItems(items, excludes) {
  excludes.forEach(pair => {
    items = items.filter(item => item[pair.k] !== pair.v);
  });
  return items;
}
*/

function excludeItems(items, excludes) {
  const results = []
  const excludesObj = {}

  excludes.forEach(item => {
    excludesObj[item.k] || (excludesObj[item.k] = [])
    excludesObj[item.k].push(item.v) 
  })

  items.forEach(item => {
    for (const key of Object.keys(excludesObj)) {
      if (excludesObj[key].includes(item[key])) return
    }
    results.push(item)
  })

  return results
}

console.dir(excludeItems(items, excludes))
