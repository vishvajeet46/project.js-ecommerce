async function ProductData() {
  try {
    let response = await fetch("https://dummyjson.com/products");
    let data = await response.json();
    displayProducts(data.products); // try block se bahar nikalne ke liye iska use kiya hai
  } catch (error) {
    console.log(error);
  }
  function displayProducts(value) {
    // console.log(value)
    let html = "";
    value.forEach((items) => {
      console.log(items);

      html += `<div class="card" style="width: 18rem;">
  <img src=${items.images[0]} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${items.title}</h5>
    <p class="card-text">${items.description}</p>
    <a href="#" class="btn btn-primary">Price :- ${items.price}</a>
  </div>
</div>`;
    });
    document.getElementById("product_container").innerHTML = html
  }
}
ProductData();
