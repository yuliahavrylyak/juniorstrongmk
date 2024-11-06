(function() {

    const slidestype = [
    `<div class="slide-honey">
      <img class="imgcarouselone" src="img/img-ann/icon-clover-honey.svg" alt="icon-clover-honey">
      <h4 class="hslide">Clover Honey</h4>
      <p class="text-carusel-one">Thick honey is produced by honeybees that collect the nectar of clover plants. Mild in taste and light in color. </p>
      <a href="#store" class="buttonoutlinebuttontype">Shop Now</a>
  	</div>`,
  	`<div class="slide-honey">
      <img class="imgcarouselone" src="img/img-ann/icon-buckwheat-honey.svg" alt="icon-buckwheat-honey">
      <h4 class="hslide">Buckwheat Honey</h4>
      <p class="text-carusel-one">It is highly nutritious amber-colored honey with a slight reddish tint. It has a has a pleasant sweet taste. </p>
      <a href="#store" class="buttonoutlinebuttontype">Shop Now</a>
  	</div>`,
  	`<div class="slide-honey">
      <img class="imgcarouselone" src="img/img-ann/icon-wildflower-honey.svg" alt="icon-wildflower-honey">
      <h4 class="hslide">Wildflower Honey</h4>
      <p class="text-carusel-one">It is also known as polyfloral honey. It is made from the nectar of different species of flowers or blossoms. </p>
      <a href="#store" class="buttonoutlinebuttontype">Shop Now</a>
 	</div>`,
	  `<div class="slide-honey">
		<img class="imgcarouselone"  src="img/img-ann/icon-blossom-honey.svg" alt="icon-blossom-hone">
		<h4 class="hslide">Citrus Blossom Honey</h4>
		<p class="text-carusel-one">This honey is sweet and relatively thick, a perfect match for your tea or toast. It is the best association with California! </p>
		<a href="#store" class="buttonoutlinebuttontype">Shop Now</a>
  	</div>`
];
  
let firstSlidetype = 1;
	let slidestypeToShow = 2;
  
	function showCurrentSlidetype() {
	  const slidestypeContainer = document.querySelector('.slidestype');
	  let slidetypeIdx = firstSlidetype;
	  let html = '';
	  for (let i = 1; i <= slidestypeToShow; i++) {
		html += slidestype[slidetypeIdx];
		slidetypeIdx = slidetypeIdx + 1 >= slidestype.length ? 0 : slidetypeIdx + 1;
	  }
	  slidestypeContainer.innerHTML = html;
	}
	
	function nextSlidetype() {
	  firstSlidetype = firstSlidetype + 1 >= slidestype.length ? 0 : firstSlidetype + 1;
	  showCurrentSlidetype();
	}

	function prevSlidetype() {
		firstSlide = firstSlidetype - 1 > 0 ? 0 : firstSlidetype + 1;
		showCurrentSlidetype();
	}
  
	function resizetype() {
	  console.log(window.screen.width);
	  if (window.screen.width <= 500) {
		slidestypeToShow = 1;
	  } else {
		slidestypeToShow = 2;
	  }
	  showCurrentSlidetype();
	}
   
	window.addEventListener('resizetype', resizetype);
	showCurrentSlidetype();
	
	document.querySelector('.nextt').addEventListener('click', nextSlidetype);
	document.querySelector('.prevv').addEventListener('click', prevSlidetype);
  
  })();

