// I denna kopia av functions.ts lägger jag in kommentarer och tänkta tester
// för mig känns det bra att göra det innan jag börjar att skriva testerna,
// Hoppas det är OK.

//OBS!!! Jag hittar inte att denna funktion används i dagsläget i movieApps.ts
//       jag antar att den är här för en framtida funktion att sortera.
//       men att jag ska testa den ändå


//F: Skickar in array med filmer och hur filmerna ska
//   ska sorteras i fallande ordning (desc). Onm första titeln a är större än b
//   så returnerar den 1 för då är den fallande och annars -1 om inget så 0
//   och tvärtom om det inte är fallande sortering utan stigande

//T: Behövs många olika tester eftersom många if satser

import { IMovie } from "./models/Movie";

export const movieSort = (movies: IMovie[], desc: boolean = true) => {
  return movies.sort((a: IMovie, b: IMovie) => {
    if (desc) {
      if (a.Title > b.Title) return 1;
      if (a.Title < b.Title) return -1;

      return 0;
    } else {
      if (a.Title > b.Title) return -1;
      if (a.Title < b.Title) return 1;

      return 0;
    }
  });
};