/* Given an input array and another array that describes a new  index for each element,
 mutate the input array so that each element ends up in their new index.
 Discuss the runtime of the algorithm and how you can be sure there won't be any infinite loops.
 */

 const arr = ['a', 'b', 'c', 'd', 'e']
 const indices = [4, 3, 0, 2, 1]

 function reposition(arr, indices) {
   return indices.map((item, index) => arr[indices.indexOf(index)]) // O(n^2)
 }

 function reposition0(arr, indices) {
   const newArray = []

   for (let index = 0; index < indices.length; ++index) {
     newArray[indices[index]] = arr[index]
   }

   return newArray
 }

 console.log(reposition0(arr, indices))
 console.log(reposition(arr, indices))