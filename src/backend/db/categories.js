import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Action",
    src:"https://images.unsplash.com/photo-1608889476561-6242cfdbf622?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    description:
      "Action film is a film genre in which the protagonist is thrust into a series of events that typically involve violence and physical feats",
  },
  {
    _id: uuid(),
    categoryName: "Comedy",
    src:"https://rukminim2.flixcart.com/image/416/416/jcc9ci80/poster/b/m/p/medium-pl-movie-comedy-horror-paranorman-background-web-wall-original-imaetdvagwrszbtb.jpeg?q=70",
    description:
      "Comedy Films are make em laugh films designed to elicit laughter from the audience",
  },
  {
    _id: uuid(),
    categoryName: "Horror",
    src:"https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701043798.jpg",
    description:
      "A horror movie is a movie made to scare the viewer. The main stories of horror movies often involve supernatural forces or characters of evil origin.",
  },
  {
    _id: uuid(),
    categoryName: "Thriller",
    src:"https://wallup.net/wp-content/uploads/2019/09/501139-shutter-island-dicaprio-mystery-thriller-crime-horror-748x421.jpg",
    description:
      "Thriller film, also known as suspense film or suspense thriller, is a broad film genre that evokes excitement and suspense in the audience.",
  },
  {
    _id: uuid(),
    categoryName: "Drama",
    src:"https://c4.wallpaperflare.com/wallpaper/96/707/647/actor-comedy-drama-forrest-wallpaper-preview.jpg",
    description:
      "In film and television, drama is a category of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone.",
  },
  {
    _id: uuid(),
    categoryName: "Romance",
    src:"https://media1.popsugar-assets.com/files/thumbor/n16qp_h8d6p7fUc1FKnsrzX-tDo/704x0:3504x2800/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2021/09/27/805/n/1922283/54ea15c661520b381f15a1.49620806_/i/movies-like-after-on-netflix.jpg",
    description:
      "Romance film can be defined as a genre wherein the plot revolves around the love between two protagonists.",
  },
];
