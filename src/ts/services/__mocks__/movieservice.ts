// Det är en enkel getData mock som bara skickar 
// tillbaka en film oberoende om något skickas in
// tänkte göra en mer avancerad mock men detta är vad
// det blev denna gång

import { IMovie } from "../../models/Movie";


let mockData: IMovie[] = [{
    Title: "Harry Potter",
    imdbID: "1",
    Type: "Movie",
    Poster: "Harry Potter Poster",
    Year: "2003", 
}];


  export const getData = async (): Promise<IMovie[]> => {
    return new Promise((resolve) => {
      resolve(mockData);
    });
};