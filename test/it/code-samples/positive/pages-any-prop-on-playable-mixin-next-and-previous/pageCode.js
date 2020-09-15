$w("#gallery1")
  .next()
  .then(nextItem => (nextItem.nonExistingProp = "something"));
  
$w("#gallery1")
  .previous()
  .then(previousItem => (previousItem.nonExistingProp = "something"));
