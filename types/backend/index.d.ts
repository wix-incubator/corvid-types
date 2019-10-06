/// <reference path="../common/declaration.d.ts" />

// declaration file is not splitted into atomic pieces
// some of the apis are using $w.$w type
// in order to pass compilation we add mock $w.$w declaration
declare namespace $w {
    type $w = any;
}