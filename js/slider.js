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

