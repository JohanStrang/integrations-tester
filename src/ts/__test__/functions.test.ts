import { IMovie } from "./../models/Movie";
import * as functions from "./../functions";

//------------------------------------------------
// Testa av functions.ts och moviesort
// Jag ser inte att denna funktion används men
// den är väl för framtida bruk. 
// många varianter pga flera if-satser
//------------------------------------------------
describe("1. movieSort", () => {
    test("1a. test if desc and a.title > b.title", () => {
        //Arrange
        let testIMovies: IMovie[] = [{
          Title: "A Harry Potter",
          imdbID: "1",
          Type: "Movie",
          Poster: "Harry Potter Poster",
          Year: "2003", 
      }, 
      {
          Title: "B Harry Potter",
          imdbID: "2",
          Type: "Movie",
          Poster: "Harry Potter Poster",
          Year: "2005", 
      }]; 
  
        let desc=true;
    
        //Act
        let sort = functions.movieSort(testIMovies, desc);
    
        //Assert
        expect(sort).toBe("1");
      });
    test("1b. test if desc false and a.title > b.title", () => {
        //Arrange
        let testIMovies: IMovie[] = [{
          Title: "A Harry Potter",
          imdbID: "1",
          Type: "Movie",
          Poster: "Harry Potter Poster",
          Year: "2003", 
      }, 
      {
          Title: "B Harry Potter",
          imdbID: "2",
          Type: "Movie",
          Poster: "Harry Potter Poster",
          Year: "2005", 
      }]; 
  
        let desc=false;
    
        //Act
        let sort = functions.movieSort(testIMovies, desc);
    
        //Assert
        expect(sort).toBe("-1");
      });

      test("1c. test if desc and a.title > b.title", () => {
        //Arrange
        let testIMovies: IMovie[] = [{
          Title: "B Harry Potter",
          imdbID: "1",
          Type: "Movie",
          Poster: "Harry Potter Poster",
          Year: "2003", 
      }, 
      {
          Title: "A Harry Potter",
          imdbID: "2",
          Type: "Movie",
          Poster: "Harry Potter Poster",
          Year: "2005", 
      }]; 
  
        let desc=true;
    
        //Act
        let sort = functions.movieSort(testIMovies, desc);
    
        //Assert
        expect(sort).toBe("1");
      });

      test("1d. test if desc false and a.title > b.title", () => {
        //Arrange
        let testIMovies: IMovie[] = [{
          Title: "B Harry Potter",
          imdbID: "1",
          Type: "Movie",
          Poster: "Harry Potter Poster",
          Year: "2003", 
      }, 
      {
          Title: "A Harry Potter",
          imdbID: "2",
          Type: "Movie",
          Poster: "Harry Potter Poster",
          Year: "2005", 
      }]; 
  
        let desc=false;
    
        //Act
        let sort = functions.movieSort(testIMovies, desc);
    
        //Assert
        expect(sort).toBe("-1");
      });

      test("1e. test if empty sorting", () => {
        //Arrange
        let testIMovies: IMovie[] = []; 
  
        let desc=true; //både true or false ska ge 0 tillbaka
    
        //Act
        let sort = functions.movieSort(testIMovies, desc);
    
        //Assert
        expect(sort).toBe("0");
      });

      test("1f. test if title exactly the same", () => {
        //Arrange
        let testIMovies: IMovie[] = [{
          Title: "A",
          imdbID: "1",
          Type: "Movie",
          Poster: "Poster",
          Year: "2003", 
      }, 
      {
          Title: "A",
          imdbID: "2",
          Type: "Movie",
          Poster: "Poster",
          Year: "2003", 
      }]; 
  
        let desc=true; //ska ge 0 båpde fölr true och false
    
        //Act
        let sort = functions.movieSort(testIMovies, desc);
    
        //Assert
        expect(sort).toBe("0");
      });

    });