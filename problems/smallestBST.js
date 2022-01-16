let kthSmallest = function(root, k) {
  return rec(root, [])[k - 1];
      
  function rec(root, arr) {
      if (root == null) return arr;
      
      rec(root.left, arr);
      arr.push(root.val);
      rec(root.right, arr);
      return arr;
  }
};