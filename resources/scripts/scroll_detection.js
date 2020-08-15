window.addEventListener('load', (event) => {

	is_home_page = document.title=="Home";
	offset = 40;

	if (is_home_page) {

		offset = window.innerHeight*0.7+40;

	}

	window.addEventListener('resize',(event) => {

		offset = window.innerHeight*0.7+40;

	}, { passive: true });

	window.addEventListener('scroll',(event) => {

		if (window.scrollY > offset && !document.body.classList.contains("scrolled")) {
			document.body.classList.add("scrolled");
		} else if (window.scrollY <= offset) {
			document.body.classList.remove("scrolled");
		}

	}, { passive: true });

});
