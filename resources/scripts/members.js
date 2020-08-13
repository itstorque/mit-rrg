window.addEventListener('load', (event) => {

	console.log("hi")

	const colorThief = new ColorThief();
	const cards = document.getElementsByClassName('card');

	Array.prototype.forEach.call(cards, function (card, index) {

		img = card.getElementsByClassName("upper")[0];

		set_card_color = function(img) {

			if (!(img instanceof Element || img instanceof HTMLDocument)) {
				// this means the img passed is an event listener from the load fallback
				img = img.currentTarget;
			}

			palette = colorThief.getPalette(img);

			c_sum = palette.map(x => x[0] + x[1] + x[2]);

			console.log(c_sum)

			c_sum = c_sum.map(x => ((x > 255*1.5) ? 0 : x))

			color = palette[c_sum.indexOf(Math.max(...c_sum))];

			card.style.backgroundColor = "rgb("+color[0]+","+color[1]+","+color[2]+")";

		}

		if (img.complete) {

			set_card_color(img);

		} else {

			img.addEventListener('load', set_card_color );

		}

	});

});
