/**
 * this tests checks that any string selector in public files is allowed and that the return value is any 
 */
let elems = {
    first: "anyText2"
}
let anyText = "anyText1"
let prefix = "#"
$w(elems.first).anyProperty1()
$w("#button1").anyProperty2()
$w(`#${anyText}`).anyProperty3()
$w(prefix + anyText).anyProperty4()
