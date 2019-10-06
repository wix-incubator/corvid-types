import wixWindow from "wix-window"

let previousPageURL;
let lastClicked
$w.onReady(function() {
  $w("#button3").onClick(() => {
    lastClicked = "button1";
    wixWindow.trackEvent("Button1Clicked",{})
  })

  $w("#button4").onClick(() => {
    lastClicked = "button2";
    wixWindow.trackEvent("Button2Clicked",{})
  })

  $w("#text1").text = lastClicked
  $w("#text2").text = previousPageURL
});

