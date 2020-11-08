/**
 * this tests checks that any non-string selector in public files is NOT allowed
 */
const arr = ["firstSelector", "secondSelector"]
const obj = {
    test: "testSelector"
}
$w(arr).anyProperty();
$w(obj).z()
$w(8).testo()
$w(true).another()
