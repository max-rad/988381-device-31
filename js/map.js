const mapLink = document.querySelector(".contacts-map");
const mapPopup = document.querySelector(".modal-map");
const mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
	evt.preventDefault();

	mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
	evt.preventDefault();

	mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
	if (evt.key === "Esc" || evt.key === "Escape") {
		if (writeUsPopup.classList.contains("modal-show")) {
			evt.preventDefault();
			writeUsPopup.classList.remove("modal-show");
			writeUsPopup.classList.remove("modal-error");
		}
	}
});

window.addEventListener("keydown", function (evt) {
	if (evt.key === "Esc" || evt.key === "Escape") {
		if (mapPopup.classList.contains("modal-show")) {
			mapPopup.classList.remove("modal-show");
		}
		evt.preventDefault();
	}
});
