
$w.onReady(function() {

    $w("#appWidget1").zProperty = "testo1"
    $w("#appWidget1").onSomeEvent2(() => {
    console.log("im am some event onSomeEvent2")
    })

    $w("#appWidget3").zProperty = "testo3"
    $w("#appWidget3").onSomeEvent(() => {
    console.log("im am some event onSomeEvent")
    })
    $w("#appWidget3").methodWithParams("one", "another")

    $w("#appWidget2").onOtherSomeEvent(e => {
    console.log(e)
    })
    $w("#appWidget2").zProperty2 = "testo2"
    $w("#appWidget2").methodWithParams3("1", "2", "3")
    $w("#appWidget2").methodWithNoParams()
});