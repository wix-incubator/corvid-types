/// <reference path="../common/$w.d.ts" />
/// <reference path="../common/declaration.d.ts" />

// declaration file is not splitted into atomic pieces
// WixHttpFunctionResponse and mediaManager is using Buffer type
// in order to pass compilation we add mock Buffer class
declare class Buffer {
}

// $w.d.ts declaration file is using PageElementsMap 
// in order to pass compilation we add empty PageElementsMap type
type PageElementsMap = {}