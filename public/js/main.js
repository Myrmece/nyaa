// Night mode
var night = localStorage.getItem("night");
if (night == "true") {
    $("head").append('<link id="style-dark" rel="stylesheet" type="text/css" href="/css/style-night.css">');
}

function toggleNightMode() {
    var night = localStorage.getItem("night");
    if(night == "true") {
        $("#style-dark")[0].remove()
    } else {
        $("head").append('<link id="style-dark" rel="stylesheet" type="text/css" href="/css/style-night.css">');
    }
    localStorage.setItem("night", (night == "true") ? "false" : "true");
}

// Used by spoiler tags
function toggleLayer(elem) {
	if (elem.classList.contains("hide"))
		elem.classList.remove("hide");
	else
		elem.classList.add("hide");
}

// Date formatting
function formatDate(date) { // thanks stackoverflow
    var monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return day + ' ' + monthNames[monthIndex] + ' ' + year;
}

var list = document.getElementsByClassName("date-short");
for(var i in list) {
	var e = list[i];
	e.title = e.innerText;
	e.innerText = formatDate(new Date(e.innerText));
}

var list = document.getElementsByClassName("date-full");
for(var i in list) {
	var e = list[i];
	e.title = e.innerText;
	var date = new Date(e.innerText);
	e.innerText = date.toDateString() + " " + date.toLocaleTimeString();
}
