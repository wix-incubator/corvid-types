import { session } from "wix-storage";
import wixLocation from "wix-location";
import wixWindow from "wix-window";
import {getWixLocation} from "public/core";

let previousPageURL;
let lastClicked
$w.onReady(function() {
  previousPageURL = session.getItem("page");
  session.setItem("page", wixLocation.url);
  session.setItem("location", getWixLocation());
  $w("#button1").onClick(() => {
    lastClicked = "button1";
    wixWindow.trackEvent("Button1Clicked",{})
  })

  $w("#button2").onClick(() => {
    lastClicked = "button2";
    wixWindow.trackEvent("Button2Clicked",{})
  })

  $w("#text1").text = lastClicked
  $w("#text2").text = previousPageURL
  $w("Button").hide()
  $w("Button").forEach(b => b.show())
  $w("Button, Text").anyProperty()
  $w("#button1, Text, Document").anyProperty2

});

