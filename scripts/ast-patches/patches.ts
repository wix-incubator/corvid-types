import allowAnyPropOn$wEventTarget from "./allowAnyPropOn$wEventTarget";
import allowAnyPropOnContainerChildren from "./allowAnyPropOnContainerChildren";
import allowAnyPropOnPlayableMixinNextPrevious from "./allowAnyPropOnPlayableMixinNextPrevious";
import changeWixAuthElevateFunctionType from "./changeWixAuthElevateFunctionType";

const astPatches = [
  allowAnyPropOn$wEventTarget,
  allowAnyPropOnContainerChildren,
  allowAnyPropOnPlayableMixinNextPrevious,
  changeWixAuthElevateFunctionType
];
export default astPatches;
