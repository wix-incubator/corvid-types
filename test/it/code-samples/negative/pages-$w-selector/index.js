$w.onReady(function() {
  // show work
  $w("#button1").hide()
  // 1 error expected because zProperty does not exist on $w.Button
  // checks that the complier knows the types of valid selectors => $w("#button1"):$w.Button
  // and that the validation is working on unknown property or method
  $w("#button1").zProperty = "testo"
  // 1 error expected  because "#appwidget1, AnotherSelector" is an invalid selector
  // and it makes sure that we treat this uknown type as any
  $w("#appwidget1, AnotherSelector").zProperty = "testo"
  // 1 error expected because can't know what is the result of this string concatenation so the fallback is a string that is unknown to $w
  // and it makes sure that we treat this uknown type as any
  $w("#appwidget" + 1).zProperty = "testo"
});

