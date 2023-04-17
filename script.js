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
