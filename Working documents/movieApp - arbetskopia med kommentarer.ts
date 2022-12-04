// I denna kopia av movieApp.ts lägger jag in kommentarer som beskriver
// koden och underlättar att göar tester


//F: importerar interface from mobvie.ts i models med Title, imdbId, Type, Poster, Year
//   importerar öven hämta data getData som hämtar data via omdapi. Se filen
//   movieservices - arbetskopia med kommentarer för förklarimng och testfall
//   samt även om täönkta tester

import { IMovie } from "./models/Movie";
import { getData } from "./services/movieservice";

//F: sätter IMovie till tom []
let movies: IMovie[] = [];

//F: Lyssnar efter submit som kommer från button i searchForm och när det kommer
//   kör funktionen handleSubmit() som kommer senare

//T: 1) Testa att när man trycker på knappen att funktionen handleSubmit
export const init = () => {
  let form = document.getElementById("searchForm") as HTMLFormElement;
  form.addEventListener("submit", (e: SubmitEvent) => {
    e.preventDefault();
    handleSubmit();
  });
};

//F: Tar inskrivna värdet i texfältet med id=searchText och definierar container
//   som är den div movie-container som definierats i index.html och sätter den 
//   till "" tom först
//   kör sedan en try och catch och getData från services/movieservice.ts
//   om får tillbaka någon dvs length > 0 så vidare till funktionen createHtml
//   om inte så till displayNoResult och detta även om catch

export async function handleSubmit() {
  let searchText = (document.getElementById("searchText") as HTMLInputElement)
    .value;

  let container: HTMLDivElement = document.getElementById(
    "movie-container"
  ) as HTMLDivElement;
  container.innerHTML = "";

  try {
    movies = await getData(searchText);

    if (movies.length > 0) {
      exports.createHtml(movies, container);
    } else {
      exports.displayNoResult(container);
    }
  } catch {
    exports.displayNoResult(container);
  }
}

//F: Skapar html container för att visa filmerna. SKickar in array med filmerna
//   och html div som är movie-container i index.html
//   snurrar igenom alla filmer som fått som resultat och som finns i arrayen
//   skapar div, h3, img. Skapar en movie med en titel och sedan en bild
//   om ingen bild titeln igen 
//   Nästa steg med appendChild så att de visas i container

//T: 3) Testa att html skapas. DOM test
export const createHtml = (movies: IMovie[], container: HTMLDivElement) => {
  for (let i = 0; i < movies.length; i++) {
    let movie = document.createElement("div");
    let title = document.createElement("h3");
    let img = document.createElement("img");

    movie.classList.add("movie");
    title.innerHTML = movies[i].Title;
    img.src = movies[i].Poster;
    img.alt = movies[i].Title;

    movie.appendChild(title);
    movie.appendChild(img);

    container.appendChild(movie);
  }
};

// F: Om inget resultat eller fel från handleSubmot så körs denna funktion
//    och visas meddelande i en p-tag att det inte finns något sökresultat att visa

export const displayNoResult = (container: HTMLDivElement) => {
  let noMessage = document.createElement("p");

  noMessage.innerHTML = "Inga sökresultat att visa";

  container.appendChild(noMessage);
};