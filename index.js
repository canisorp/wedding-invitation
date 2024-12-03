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

function setUpModal() {
	const modal = document.getElementById('place_image_modal');
	const trigger = document.getElementById('open_place_image_modal');
	const close = document.getElementsByClassName('close')[0];

	trigger.onclick = function () {
		modal.style.display = 'block';
	};

	close.onclick = function () {
		modal.style.display = 'none';
	};

	window.onclick = function (event) {
		if (event.target == modal) {
			modal.style.display = 'none';
		}
	};
}

setUpModal();
