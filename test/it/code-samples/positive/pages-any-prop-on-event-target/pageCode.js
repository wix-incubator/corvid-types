$w("#button1").onClick(event => {
  event.target.nonExistingProp = "something";
});
