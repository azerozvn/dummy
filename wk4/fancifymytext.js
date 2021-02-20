function bigger() {
	document.getElementById("textArea").style.fontSize = "24pt";
}

function fancify(e) {
	if (e.target.checked) {
		document.getElementById("textArea").style.fontWeight = "bold";
		document.getElementById("textArea").style.color = "blue";
		document.getElementById("textArea").style.textDecoration = "underline";
	}
}

function unfancify(e) {
	if (e.target.checked) {
		document.getElementById("textArea").style.fontWeight = "normal";
		document.getElementById("textArea").style.color = "black";
		document.getElementById("textArea").style.textDecoration = "none";
	}
}

function moo() {
	var strs = document.getElementById("textArea").value.split(".");
	var newStrs = [];
	strs.forEach(function(str) {
		if (str.split(" ") != ""){
			str += "-Moo";
			newStrs.push(str);
		}
	});
	document.getElementById("textArea").value = newStrs.join(".").toUpperCase() + ".";
}