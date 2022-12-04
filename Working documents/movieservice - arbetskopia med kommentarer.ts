// I denna kopia av movieservice.ts lägger jag in kommentarer och tänkta tester
// för mig känns det bra att göra det innan jag börjar att skriva testerna,
// Hoppas det är OK.

//F: inteface IomdResponse och IMove
import { IOmdbResponse } from "./../models/IOmdbResponse";
import { IMovie } from "./../models/Movie";
import axios from "axios";

//F: Denna kallas på movieApp.ts och funktionen handleSubmit dvs när man söker på
//   en film. Söker på texten och skickar tillbaka svar eller tom om catch
//   känns som det är denna som ska göra en mock på för testning
export const getData = async (searchText: string): Promise<IMovie[]> => {
  return axios
    .get<IOmdbResponse>("http://omdbapi.com/?apikey=416ed51a&s=" + searchText)
    .then((data) => {
      return data.data.Search;
    })
    .catch(() => {
      return [];
    });
};