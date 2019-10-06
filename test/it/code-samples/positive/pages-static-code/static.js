import { session } from "wix-storage";
import wixLocation from "wix-location";
import {getWixLocation} from "public/core"
let previousPageURL;

$w.onReady(function() {
  previousPageURL = session.getItem("page");
  session.setItem("page", wixLocation.url);
  session.setItem("location", getWixLocation());
});
