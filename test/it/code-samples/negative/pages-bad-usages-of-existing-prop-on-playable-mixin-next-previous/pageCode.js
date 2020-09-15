$w("#gallery1")
  .next()
  .then(nextItem => (nextItem.onMouseIn("notAFunction")));
  
$w("#gallery1")
  .previous()
  .then(previousItem => (previousItem.onMouseIn("notAFunction")));
