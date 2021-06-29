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

