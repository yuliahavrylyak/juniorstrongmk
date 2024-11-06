(function() {

	const slides = [
	    `<div class="person-one person-tes">
			<img src="img/testimonials-people/tsm2.webp" alt="Portrait1" class="testimonials-image">
			<h4 class="testimonial-person-h">Jessica Peterson</h4>
			<p class="testimonial-person-p">“This is great honey, 100% natural! It is not the first time I order honey from this company, and every time I know that I will get delicious, high-quality, not crystallized honey. I use honey as a topping for pancakes, various desserts, and marinades. It is delicious and my children also like this honey!"</p>
			<p class="testimonial-person-p-2">October 28, 2020</p>
		</div>`,
	    `<div class="person-two person-tes">
					  <img src="img/testimonials-people/tsm1.webp" alt="Portrait2" class="testimonials-image">
					  <h4 class="testimonial-person-h">Dean Nillstorm</h4>
					  <p class="testimonial-person-p">“Nowadays it is not so easy to find really good, tasty, and natural honey. I first tried the HoneyBee honey several years ago, and since then I have been a regular customer of this producer. I know for sure that these guys work with feeling and sell real honey from their swaths. I am always happy with the product I receive"</p>          
					  <p class="testimonial-person-p-2">February 12, 2021</p>
				  </div>`,
	  `<div class="person-three person-tes">
					  <img src="img/testimonials-people/tsm3.webp" alt="Portrait3" class="testimonials-image">
					  <h4 class="testimonial-person-h">Diana Fergusson</h4>
					  <p class="testimonial-person-p">“Having tasted this honey once, I no longer needed alternatives. This is the tastiest honey I've ever tried! I buy different types of honey, from clover to buckwheat. Each jar of honey is a real triumph of taste. This is real honey — thick, aromatic, dark, and moderately sweet. Exactly what I need!"</p>
					  <p class="testimonial-person-p-2">April 18, 2021</p>
				  </div>`,
	];
  
	let firstSlide = 0;
	let slidesToShow = 2;
  
	function showCurrentSlide() {
	  const slidesContainer = document.querySelector('.slides');
	  let slideIdx = firstSlide;
	  let html = '';
	  for (let i = 1; i <= slidesToShow; i++) {
		html += slides[slideIdx];
		slideIdx = slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
	  }
	  slidesContainer.innerHTML = html;
	}
  
	function nextSlide() {
	  firstSlide = firstSlide + 1 >= slides.length ? 0 : firstSlide + 1;
	  showCurrentSlide();
	}

	function prevSlide() {
		firstSlide = firstSlide - 1 > 0 ? 0 : firstSlide + 1;
		showCurrentSlide();
	  }
  
	function resize() {
	  console.log(window.screen.width);
	  if (window.screen.width <= 767) {
		slidesToShow = 1;
	  } else {
		slidesToShow = 2;
	  }
	  showCurrentSlide();
	}
   
	window.addEventListener('resize', resize);
	
	showCurrentSlide();
	
	document.querySelector('.next').addEventListener('click', nextSlide);
	document.querySelector('.prev').addEventListener('click', prevSlide);
  
  })();
