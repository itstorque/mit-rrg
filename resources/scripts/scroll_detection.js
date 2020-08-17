window.addEventListener('load', (event) => {

	is_home_page = document.title=="Home";
	offset = 40;

	resize_func = (event) => {

		document.body.classList.add("scrolled");

		offset = window.innerHeight*0.7+40;

		if (window.innerWidth < 800) {
			offset = window.innerHeight*0.1+40;
		}

		console.log("resize", window.innerWidth < 800, offset)

		scroll_func();

	}

	scroll_func = (event) => {

		if (window.scrollY > offset && !document.body.classList.contains("scrolled")) {
			document.body.classList.add("scrolled");
		} else if (window.scrollY <= offset) {
			document.body.classList.remove("scrolled");
		}

		console.log("scroll", window.scrollY <= offset)

	}

	resize_func();

	window.addEventListener('resize', resize_func, { passive: true });

	window.addEventListener('scroll', scroll_func, { passive: true });

	scroll_func()

});
