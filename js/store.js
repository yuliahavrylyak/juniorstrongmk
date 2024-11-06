//function loadProducts () {
//    fetch('products.json')
//        .then( response => response.json() )
//        .then (productsData => {
//            products = productsData;
//            renderProducts (products, 'ascending');
//        });
//}

async function loadProducts () {
  const response = await fetch('products.json');
  products = await response.json();
  renderProducts (products, 'ascending');
}

function renderProducts(products){
  let html = "";
  for (const product of products) {
      html += `<div class="slide-shop">
      <a href="${product.pages}" target="_blank">
      <img class="img-carousel-two" src="${product.imageUrl}" alt="wildflower-honey"/></a>
      <h4>${product.title}</h4>
      <h5>$${product.price}USA </h5>
      <a href="#store" class="button-outline-button">${product.button}</a>
      </div>`;
  }
  document.querySelector('.carousel-two').innerHTML = html;
}
loadProducts();


