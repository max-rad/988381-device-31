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
