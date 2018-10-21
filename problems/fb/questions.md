## Given a picture, how would you hide/show a child picture on hovering on this parent? 

I would use CSS to control it  

    .parent child {
      display: block;
    }
    
    .parent:hover child {
      display: none;
    }

## How would you ensure clicking on this picture would go to a specific link? 
1. Wrap the picture with an anchor tag.
2. add 'click' event listener to the picture.

## How would you ensure the child is positioned in the top right of the parent picture?

1. Set the child position as 'absolute', the parent should be 'relative, absolute or fixed'. Then make 'top' and 'right' to 0.
2. Using float
3. Using flex or grid layout