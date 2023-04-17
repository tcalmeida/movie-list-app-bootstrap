async function getData() {
  const response = await fetch('https://api.b7web.com.br/cinema/');
  const jsonData = await response.json();
  return jsonData;
}

const movieList = getData();
movieList.then((movies) => {
  movies.forEach((movie) => {
    const cardMovie = `
    <div class="col-md-4 mt-4"  >
    <div class="card shadow" style="width: 18rem; border: none">
  <img src="${movie.avatar}" class="card-img-top" alt="...">
  <div class="card-body ">
    <p class="card-text text-center"> ${movie.titulo}</p>
  </div>
</div>
    `;
    document.querySelector('.movies').innerHTML += cardMovie;
  });
});

const carousel = getData();
carousel.then((items) => {
  const slide = `
      <div id="carouselExampleIndicators" class="carousel slide mt-4 d-flex ">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner ">
          <div class="carousel-item active w-100 ">
            <img src="${items[0].avatar}" class="d-block w-80" alt="...">
          </div>
          <div class="carousel-item w-100">
            <img src="${items[1].avatar}" class="d-block w-80" alt="...">
          </div>
          <div class="carousel-item w-100">
            <img src="${items[2].avatar}" class="d-block w-80" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    `;
  document.querySelector('.movies').innerHTML += slide;
});