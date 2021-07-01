/* ===== MODAL WRITE US ===== */

const writeUsLink = document.querySelector(".contacts-button");
const writeUsPopup = document.querySelector(".modal-write-us");
const writeUsClose = writeUsPopup.querySelector(".modal-close");
const writeUsForm = writeUsPopup.querySelector(".write-us-form")
const writeUsName = writeUsPopup.querySelector(".write-us-name");
const writeUsEmail = writeUsPopup.querySelector(".write-us-email");
const writeUsTextArea = writeUsPopup.querySelector(".write-us-textarea");

let isStorageSupport = true;
let storageName = "";
let storageEmail = "";

try {
	storageName = localStorage.getItem("name");
	storageEmail = localStorage.getItem("email");
} catch (err) {
	isStorageSupport = false;
}

writeUsLink.addEventListener("click", function(evt) {
	evt.preventDefault();

	writeUsPopup.classList.add("modal-show");

	if (storageName) {
		writeUsName.value = storageName;
	}

	if (storageEmail) {
		writeUsEmail.value = storageEmail;
	}

	if (storageName && storageEmail) {
		writeUsTextArea.focus();
	}

	if (storageName && !storageEmail) {
		writeUsEmail.focus();
	}

	if (!storageName && storageEmail) {
		writeUsName.focus();
	}
});

writeUsClose.addEventListener("click", function(evt) {
	evt.preventDefault();

	writeUsPopup.classList.remove("modal-show");
	writeUsPopup.classList.remove("modal-error");
});

writeUsForm.addEventListener("submit", function(evt) {
	if (!writeUsName.value || !writeUsEmail.value || !writeUsTextArea.value) {
		evt.preventDefault();
		writeUsPopup.classList.remove("modal-error");
		writeUsPopup.offsetWidth = writeUsPopup.offsetWidth;
		writeUsPopup.classList.add("modal-error");
	} else {
		if (isStorageSupport) {
			localStorage.setItem("name", writeUsName.value);
			localStorage.setItem("email", writeUsEmail.value);
		}
	}
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

/* ===== MODAL MAP ===== */

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

/* ===== SLIDER ===== */

const sliderSlides = document.querySelectorAll(".slide");
const sliderControls = document.querySelectorAll(".slider-control");

let slideIndex = 0;
showSlides(slideIndex);

for (let i = 0; i < sliderControls.length; i++) {
	sliderControls[i].addEventListener("click", function () {
		showSlides(i);
	});
}

function showSlides(n) {
	for (let i = 0; i < sliderSlides.length; i++) {
		if (sliderSlides[i].classList.contains("slider-current")) {
			sliderSlides[i].classList.remove("slider-current");
		}
	}

	for (let i = 0; i < sliderControls.length; i++) {
		if (sliderControls[i].classList.contains("slider-control-current")) {
			sliderControls[i].classList.remove("slider-control-current");
		}
	}

	sliderSlides[n].classList.add("slider-current");
	sliderControls[n].classList.add("slider-control-current");
}

/* ===== SERVICES ===== */

const servicesSlides = document.querySelectorAll(".service-slide");
const servicesControls = document.querySelectorAll(".service-button");

let servicesSlideIndex = 0;
showServiceSlides(servicesSlideIndex);

for (let i = 0; i < servicesControls.length; i++) {
	servicesControls[i].addEventListener("click", function () {
		showServiceSlides(i);
	});
}

function showServiceSlides(n) {
	for (let i = 0; i < servicesSlides.length; i++) {
		if (servicesSlides[i].classList.contains("service-slide-current")) {
			servicesSlides[i].classList.remove("service-slide-current");
		}
	}

	for (let i = 0; i < servicesControls.length; i++) {
		if (servicesControls[i].classList.contains("service-button-current")) {
			servicesControls[i].classList.remove("service-button-current");
		}
	}

	servicesSlides[n].classList.add("service-slide-current");
	servicesControls[n].classList.add("service-button-current");
}
