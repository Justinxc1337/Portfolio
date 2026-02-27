document.addEventListener('DOMContentLoaded', () => {
	const cards = document.querySelectorAll('.project-card');

	if (!('IntersectionObserver' in window)) {
		cards.forEach(c => c.classList.add('in-view'));
		return;
	}

	const observer = new IntersectionObserver((entries, obs) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('in-view');
				obs.unobserve(entry.target);
			}
		});
	}, { threshold: .1, rootMargin: '0px 0px -1% 0px' });

	cards.forEach(card => observer.observe(card));
});

