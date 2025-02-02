function countdown(date, elementId) {
	const countdownElement = document.getElementById(elementId);
	const endDate = new Date(date);
	const now = new Date();

	const intervalId = setInterval(() => {
		const timeDiff = endDate.getTime() - now.getTime();

		const months = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30));
		const days = Math.floor(
			(timeDiff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
		);
		const hours = Math.floor(
			(timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
		);
		const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

		countdownElement.innerHTML = `${months}&nbsp;mjeseci, ${days}&nbsp;dana, ${hours}&nbsp;sati, ${minutes}&nbsp;minuta, ${seconds}&nbsp;sekundi`;

		now.setSeconds(now.getSeconds() + 1);
		if (timeDiff <= 0) {
			clearInterval(intervalId);
		}
	}, 1000);
}

countdown('2025-06-20T00:00:00', 'countdown');

let currentImageIndex = 1;
showSlides();
function showSlides(n) {
	let slides = document.getElementsByClassName('slide_image');
	let allSlides = slides.length;
	if (currentImageIndex > allSlides) {
		currentImageIndex = 1;
	}
	if (currentImageIndex < 1) {
		currentImageIndex = allSlides;
	}
	for (let i = 0; i < allSlides; i++) {
		slides[i].style.display = 'none';
		slides[i].style.visibility = 'hidden';
	}
	slides[currentImageIndex - 1].style.display = 'block';
	slides[currentImageIndex - 1].style.visibility = 'visible';
}

function changeSlide(n) {
	currentImageIndex += n;
	showSlides();
}
