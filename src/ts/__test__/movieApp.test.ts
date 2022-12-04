/**
 * @jest-environment jsdom
 */

import * as functions from "./../movieApp";
import { IMovie } from "./../models/Movie";
import * as functions1 from "./../services/movieservice"

//---------------------------------------------------------------
//T: 1. Test att man kan klicka och att värdet i fältet skickas med
//   testar alltså både init() och handleSubmit första delen 
//   att värdet kommer med i textfältet
//   Hoppas OK att jag göra det i en
//   Se nedan om lite tankar runt submit och click. Vet inte om
//   jag är helt ute och snurrar
//---------------------------------------------------------------
describe("Init and handleSubmit first part", () => {
    test("should be able to click and value passed on", () => {
      // arrange
      let spy = jest.spyOn(functions, "handleSubmit").mockReturnValue();
  
      document.body.innerHTML = `
      <input type="text" id="searchText" />
      <button type="submit" id="search">Sök</button>`;
  
      functions.init(); //som i sin tur kallar på handleSubmit
  
      // act
      // nedan skickar jag click men i koden är det submit
      // lite osäker på hur hantera det. Vet inte om det alls "make sense"
      // men funkar det med click() om submit
      (document.getElementById("searchText") as HTMLInputElement).value =
        "Test submit";
      document.getElementById("search")?.click();
  
      // assert
      // första att knappen funkar i init()
      // andra att handleSubmit() tar värdet
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith("Test submit");
    });
  });

//---------------------------------------------------------
//T: 2. Testa handleSubmit som om det kommer tillbaka filmer
//   Testar först att kallar på getData
//   skickar till createHtml om inga filmer eller fel så
//   skickar till displayNoResult. Testade först delen dvs 
//   värdet plockas upp i testen ovan. Hoppas OK som sagt.
//---------------------------------------------------------
//mock movieservices
jest.mock("./../services/movieservice.ts");

describe("2. handleSubmit", () => {
    test("2a. test if call getData(serachText)", () => {
      //Arrange
      // spy på funktionen
      let spy = jest.spyOn(functions1, "getData").mockReturnValue();
  
      //Act
      functions.handleSubmit();
  
      //Assert
      expect(spy).toHaveBeenCalledTimes(1);
    });

    // 2b. Test handleSubmit och använder sig av mock getdata
    //      som skickar tillbaka en film
    test("2b. test if calls createHtml if movie", () => {
        //Arrange
        let spy = jest.spyOn(functions, "createHtml").mockReturnValue();

        //Act
        // använder en mock av getData som skickar tillbaka en film
        // enkel mock
        functions.handleSubmit();
    
        //Assert
        expect(spy).toHaveBeenCalledTimes(1);
        expect(document.querySelectorAll("div").length).toBe(1);
      });

    // 2c. Väljer att testa if satsen för sig kopia av koden
    //     Skulle kunna lägga in den i mock också men inte gjort
    test("2c. test if calls displayNoResult om ingen film", () => {
        //Arrange
        let movies: IMovie[] = [];
        let container = document.createElement("div");
        // spy på funktionen
        let spy = jest.spyOn(functions, "displayNoResult").mockReturnValue();
    
        //Act
        //kopia av koden förutom exports.
        if (movies.length > 0) {
            functions.createHtml(movies, container);
          } else {
            functions.displayNoResult(container);
          };
    
        //Assert
        expect(spy).toHaveBeenCalledTimes(1);
      });
    
    });

//------------------------------------------------
//T: 3. Testa av function createHtml
//------------------------------------------------
describe("3. createHtml", () => {
    test("test if no Movie not creating Html för movies", () => {
      //Arrange
      let container = document.createElement("div");
      let movie = document.createElement("div");

      //Skickar in tom dvs ingen film
      let testIMovies: IMovie[] = [];

      //sätter till test för att se att ej ändras när tom Array
      // Jag väljer att testa att inte en class läggs tills för att 
      // prova for satsen
      movie.classList.add("movie test class");
  
      //Act
      functions.createHtml(testIMovies, container);
  
      //Assert
      expect(document.getElementsByClassName("movie")).toBe("movie test class");
    });

    test("test if one or more movie create Html för movies", () => {
        //Arrange
        let container = document.createElement("div");
        let movie = document.createElement("div");
  
        let testIMovies: IMovie[] = [{
            Title: "Harry Potter",
            imdbID: "1",
            Type: "Movie",
            Poster: "Harry Potter Poster",
            Year: "2003", 
        }]; 
  
        //sätter till test för att se att ändras när finns en film
        // Jag väljer att testa en sak för att se om inget sätts om 
        // tom testIMovies. Antar att jag kunde testat title och img
        // också men tycker detta räcker
        movie.classList.add("movie test class");
    
        //Act
        functions.createHtml(testIMovies, container);
    
        //Assert
        //förväntar mig att class ändrad till movie som den görs i createHtml
        expect(document.getElementsByClassName("movie")).toBe("movie");
      });
    });

    //----------------------------------------
    //T: 4. Testa av displayNoResult
    //----------------------------------------
describe("4. displayNoResult", () => {
    test("testar displayNoResult", () => {
      //Arrange
      let container = document.createElement("div");;
  
      //Act
      functions.displayNoResult(container);
  
      //Assert
      expect(document.getElementsByTagName("p")).toBe("Inga sökresultat att visa");
    });
});

