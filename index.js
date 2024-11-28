function countdown(date, elementId) {
	const countdownElement = document.getElementById(elementId);
	const endDate = new Date(date);
	const now = new Date();

	const intervalId = setInterval(() => {
		const timeDiff = endDate.getTime() - now.getTime();
		const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
		const months = Math.floor(days / 30);
		const hours = Math.floor(
			(timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
		);
		const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

		countdownElement.innerHTML = `${months}&nbsp;mjeseci, ${
			days % 30
		}&nbsp;dana, ${hours}&nbsp;sati, ${minutes}&nbsp;minuta, ${seconds}&nbsp;sekundi`;

		now.setSeconds(now.getSeconds() + 1);
		if (timeDiff <= 0) {
			clearInterval(intervalId);
		}
	}, 1000);
}

countdown('2025-05-01T00:00:00', 'countdown');
