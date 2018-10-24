// Saves options to chrome.storage
function save_options() {
	var isSavedTab = document.getElementById('saved-tab').checked;
	var filesPerPage = document.getElementById('files-per-page').value;
	chrome.storage.sync.set({
		savedTab: isSavedTab,
		filesPerPage: filesPerPage
	}, function () {
		// Update status to let user know options were saved.
		var status = document.getElementById('status');
		status.textContent = 'Options saved.';
		setTimeout(function () {
			status.textContent = '';
		}, 750);
	});
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
	// Use default value color = 'red' and likesColor = true.
	chrome.storage.sync.get({
		savedTab: false,
		darkTheme: false,
		filesPerPage: 11
	}, function (items) {
		document.getElementById('saved-tab').checked = items.savedTab;
		document.getElementById('files-per-page').value = items.filesPerPage;
	});
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
var rot = 0;

var content = document.querySelector(".content");
var save = document.querySelector("#save");

var mouseon = false;
var mousebt = false;

content.addEventListener("mouseenter", e => {
	mouseon = true;
})

content.addEventListener("mouseleave", e => {
	mouseon = false;
})

save.addEventListener("mouseenter", e => {
	mousebt = true;
})

save.addEventListener("mouseleave", e => {
	mousebt = false;
})


setInterval(function(){
	if (!mouseon) {
		document.querySelector(".content").style.transform = `rotate(${rot+=2}deg)`;
	}

}, 10);

setInterval(function(){
	if (mouseon && mousebt) {
		save.style.transform = `rotate(${rot+=20}deg)`;
	}

}, 10);
setInterval(function(){
	if (!mouseon) {
		let x = 50;
		x = x > 0 ? -50 : 50;
		document.querySelector(".content").style.boxShadow = `${x }px ${x}px ${8}px #888888`

	}

}, 500);
