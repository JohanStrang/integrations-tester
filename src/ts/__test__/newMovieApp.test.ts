 
 //---------------------------------------------------------
 //T: Testa med Mockdata.
 //---------------------------------------------------------

 const getData = require('../services/movieservice');
 jest.mock('../services/movieservice')
 
 describe("Use Mock data for movie", () => {


    // Test with Mock och använder sig av mock getdata
    //      som skickar tillbaka en film
    test("2b. test if calls createHtml if movie", () => {
        //Arrange
        let spy = jest.spyOn(getData, "createHtml");
        let searchText = "Harry Potter"

        //Act
        // använder en mock av getData som skickar tillbaka en film
        // enkel mock
        let movie = getData(searchText);
    
        //Assert
        expect(spy).toHaveBeenCalledTimes(1);
        expect(document.querySelectorAll("div").length).toBe(1);
      });

 });