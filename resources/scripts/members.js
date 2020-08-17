window.addEventListener('load', (event) => {

	const colorThief = new ColorThief();
	const cards = document.getElementsByClassName('card');

	Array.prototype.forEach.call(cards, function (card, index) {

		card.addEventListener("mouseenter", function() {
            this.style.backgroundColor = this.getAttribute("secondary-color");
        });

        card.addEventListener("mouseleave", function() {
			this.style.backgroundColor = this.getAttribute("primary-color");
        });

		img = card.getElementsByClassName("upper")[0];

		set_card_color = function(img) {

			if (!(img instanceof Element || img instanceof HTMLDocument)) {
				// this means the img passed is an event listener from the load fallback
				img = img.currentTarget;
			}

			palette = colorThief.getPalette(img);

			c_sum = palette.map(x => x[0] + x[1] + x[2]);

			l_sum = palette.map(x => 0.5*( Math.max(...x) + Math.min(...x) ));

			s_sum = palette.map((x, i) => (Math.max(...x) - Math.min(...x)) / (1 - Math.abs(2*l_sum[i]/255 - 1)) );

			c_sum = c_sum.map(x => ((x > 255*1.5) ? 0 : x))

			color_index = c_sum.indexOf(Math.max(...c_sum))

			color = palette[color_index];

			palette.splice(color_index, 1);
			c_sum.splice(color_index, 1);
			l_sum.splice(color_index, 1);
			s_sum.splice(color_index, 1);

			color2_index = s_sum.indexOf(Math.max(...s_sum))

			color2 = palette[color2_index];

			card.style.backgroundColor = "rgb("+color[0]+","+color[1]+","+color[2]+")";

			card.setAttribute("primary-color", card.style.backgroundColor);

			card.setAttribute("secondary-color", "rgb("+color2[0]+","+color2[1]+","+color2[2]+")");

		}

		if (img.complete) {

			set_card_color(img);

		} else {

			img.addEventListener('load', set_card_color);

		}

	});

});
