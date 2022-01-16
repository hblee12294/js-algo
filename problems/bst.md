// 1
let kthSmallest = function(root, k) {      
  function rec(root, arr) {
      if (root == null) return arr
      
      rec(root.left, arr)
      arr.push(root.val)
      rec(root.right, arr)
      return arr
  }

  return rec(root, [])[k - 1]
}

// 2
function print(node, start, end) { 
   if (!root)  return
  
   if ( start < node.data ) 
     print(node.left, start, end);
  
   if ( start <= node.data && end >= node.data ) 
     console.log(node.data);

   if ( end > node.data ) 
     print(node.ight, start, end); 
} 

//3 

function ceil(node, input) { 
  if(!node) return -1 

  if(node.data === input ) return node.data 

  if(node.data < input ) return ceil(node.right, input)

  let ceil = ceil(node.left, input)
  return (ceil >= input) ? ceil : node.data
}
