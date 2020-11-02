function myFunction() {
    var d = new Date();
    var n = d.getHours();
    var y = d.getMinutes();
    var z = y.toString()
    var k = d.getSeconds();

    if (z.length == 2) {
        document.getElementById("CLOCK").innerHTML = n + ":" + y + ":" + k;

    } else {
        document.getElementById("CLOCK").innerHTML = n + ":" + "0" + y + ":" + k;

    }
}
window.setInterval(function() {
    myFunction()
}, 1000);