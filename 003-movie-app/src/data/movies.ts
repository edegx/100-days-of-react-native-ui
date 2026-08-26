import { CategoryTab, Movie, MovieDetail } from "@/types";

export const categoryTabs: CategoryTab[] = [
  { id: "all", label: "All" },
  { id: "movie", label: "Movies" },
  { id: "drama", label: "Drama" },
  { id: "tvshows", label: "Tv Shows" },
  { id: "webseries", label: "Webseries" },
];

export const featuredBanners: Movie[] = [
  {
    id: "f1",
    title: "Twilight",
    posterColor: "#3A6E68",
    posterColorAlt: "#16221F",
    posterImage: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfDqKxUTHKn9wIfkSymaTgMQF3K5w990lJk1c-n-fcVw&s=10",
    },
    quality: "4K HDR",
    year: "2008",
    genre: "Romance, Fantasy",
    duration: "2:02:00",
    rating: "4.2 Ratings",
    description:
      "When Bella Swan moves to a small town in Washington, she falls in love with Edward Cullen, a mysterious classmate who reveals himself to be a vampire. Their forbidden romance is tested by dangerous forces that threaten their love.",
  },
  {
    id: "f2",
    title: "Spider-Man: No Way Home",
    posterColor: "#3A6E68",
    posterColorAlt: "#16221F",
    posterImage: {
      uri: "https://i0.wp.com/thefutureoftheforce.com/wp-content/uploads/2025/04/Spider-Man-Brand-New-Day-Announced-by-Marvel-and-Sony.jpg?fit=1024%2C579&ssl=1",
    },
    quality: "4K Ultra HD",
    year: "2026",
    genre: "Action, Adventure, Sci-Fi",
    duration: "2:28:00",
    rating: "4.8 Ratings",
    description:
      "Peter Parker's identity is revealed to the world, forcing him to seek help from Doctor Strange. When a spell goes wrong, dangerous foes from other universes start to appear, putting everything Peter holds dear at risk.",
  },
  {
    id: "f3",
    title: "Avengers: Endgame",
    posterColor: "#3A6E68",
    posterColorAlt: "#16221F",
    posterImage: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP0nvYjULW_f7GficJX5bW3NkudSj3xw1xM0NwE-di3A&s=10",
    },
    quality: "IMAX Enhanced",
    year: "2019",
    genre: "Action, Adventure, Drama",
    duration: "3:01:00",
    rating: "4.9 Ratings",
    description:
      "After the devastating events of Infinity War, the remaining Avengers must assemble once more to undo Thanos's actions and restore balance to the universe. The fate of all existence hangs in the balance.",
  },
  {
    id: "f4",
    title: "Varanasa",
    posterColor: "#3A6E68",
    posterColorAlt: "#16221F",
    posterImage: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX1DsbM1LR6SedDkgv1N_Y3wCxuCdhSyRwUnS5ZC3tyw&s=10",
    },
    quality: "Full HD",
    year: "2022",
    genre: "Drama, Thriller",
    duration: "1:55:00",
    rating: "4.0 Ratings",
    description:
      "Set in the ancient city of Varanasi, this gripping drama follows a young musician's journey of self-discovery as he confronts his past and navigates the spiritual complexities of life along the sacred Ganges.",
  },
  {
    id: "f5",
    title: "Jigra",
    posterColor: "#3A6E68",
    posterColorAlt: "#16221F",
    posterImage: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtoLwOaNKKzVKr9X5rIOgVHpcQRlzKC12GFhVdtTTfhA&s=10",
    },
    quality: "4K",
    year: "2024",
    genre: "Action, Drama",
    duration: "2:10:00",
    rating: "4.3 Ratings",
    description:
      "A high-octane action drama that follows the story of a fearless woman who will stop at nothing to protect her family. Filled with intense action sequences and emotional depth, Jigra is a testament to the human spirit.",
  },
  {
    id: "f6",
    title: "Falimy: Malayalam",
    posterColor: "#7AA8C4",
    posterColorAlt: "#C48A4A",
    posterImage: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfDqKxUTHKn9wIfkSymaTgMQF3K5w990lJk1c-n-fcVw&s=10", // You can replace this with a proper Falimy poster
    },
    quality: "4K Ultra",
    year: "2018",
    genre: "Comedy, Family Drama",
    duration: "1:41:19",
    rating: "4.5 Ratings",
    description:
      "Falimy is a Malayalam family drama film directed by Nithin Lukose. The movie follows the story of an interesting dysfunctional family and explores the dynamics and complexities of their relationships. A heartwarming tale of love, laughter, and understanding.",
  },
  {
    id: "f7",
    title: "The Dark Knight",
    posterColor: "#1A1A2E",
    posterColorAlt: "#16213E",
    posterImage: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpV_CFK1J_XvQZpLcIFjfQkR3VrP-L_mLhTw&s=10",
    },
    quality: "4K HDR",
    year: "2008",
    genre: "Action, Crime, Drama",
    duration: "2:32:00",
    rating: "4.9 Ratings",
    description:
      "When the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice. A masterpiece of modern cinema.",
  },
  {
    id: "f8",
    title: "Inception",
    posterColor: "#2C3E50",
    posterColorAlt: "#34495E",
    posterImage: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpV_CFK1J_XvQZpLcIFjfQkR3VrP-L_mLhTw&s=10",
    },
    quality: "4K HDR",
    year: "2010",
    genre: "Sci-Fi, Action, Thriller",
    duration: "2:28:00",
    rating: "4.8 Ratings",
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O. A mind-bending journey through layers of reality.",
  },
  {
    id: "f9",
    title: "The Godfather",
    posterColor: "#4A3728",
    posterColorAlt: "#2C1810",
    posterImage: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpV_CFK1J_XvQZpLcIFjfQkR3VrP-L_mLhTw&s=10",
    },
    quality: "Remastered",
    year: "1972",
    genre: "Crime, Drama",
    duration: "2:55:00",
    rating: "5.0 Ratings",
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son. A timeless classic that defined the gangster genre.",
  },
];

export const continueWatching: Movie[] = [
  {
    id: "cw1",
    title: "ALIEN: ROMULUS",
    posterColor: "#7A1F1F",
    posterColorAlt: "#1B1B24",
    progress: 0.55,
    duration: "1:21:19",
    posterImage: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1dYfFqGEQ9KqrynvcJ9lJaBZHriOkDVGSLHMw9c2XnA&s=10",
    },
  },
  {
    id: "cw2",
    title: "X-MEN",
    posterColor: "#8A2E2E",
    posterColorAlt: "#241B1B",
    progress: 0.3,
    posterImage: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5mu0bCAU0LZ-pt96oOzRXgqbFUQ4BzTumpkze1FfzmQ&s=10",
    },
  },
  {
    id: "cw3",
    title: "VENOM",
    posterColor: "#8A2E2E",
    posterColorAlt: "#241B1B",
    progress: 0.3,
    posterImage: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZai18c7dMbrnlGAGKn9a6q7qSIJ57YMRVDbIijQQCjw&s=10",
    },
  },
];

export const topTrending: Movie[] = [
  {
    id: "tt1",
    title: "Avatar",
    posterColor: "#1E2A3A",
    posterImage: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSwlSpqoha0ugtHIys7ObtrVGP9NvK71kgQtPulWV6xA&s=10",
    },
  },
  {
    id: "tt2",
    title: "Avengers Assemble",
    posterColor: "#3A2A38",
    posterImage: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1a4KSjQl3vf8elY-17W0511yxvda0qaZeJqM1j3vzPA&s=10",
    },
  },
  {
    id: "tt3",
    title: "Weapons",
    posterColor: "#4A3320",
    posterImage: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkk-l9EwJYcqFF7GKR1nzPvMody3Xs3oUsrR15iDyFFA&s=10/",
    },
  },

  {
    id: "tt4",
    title: "The Hunger Games",
    posterColor: "#4A3320",
    posterImage: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcCJnxb7BROI0Ye_uUNQPchBJ6PyaUyO0OzvwN5Si4GQ&s=10",
    },
  },
];

export const relatedMovies: Movie[] = [
  {
    id: "r1",
    title: "Avatar",
    posterColor: "#1F3A2E",
    posterImage: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq010bqRxLSrratyFJ-6HvVXKKR7lMrnYsovLlAOsYFA&s=10",
    },
  },
  {
    id: "r2",
    title: "twilight",
    posterColor: "#3A2F1F",
    posterImage: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT0uOGxfH3HwI5Cs4roy1Du0rFWZfnc3ulTdKGn3eQTw&s=10",
    },
  },
  {
    id: "r3",
    title: "The Odyssey",
    posterColor: "#3A1F1F",
    posterImage: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzcqVmoBeWevUdUHFf0WSVMx188cKZpDF-bEf0iRaNfg&s=10",
    },
  },
  {
    id: "r4",
    title: "BISON",
    posterColor: "#3A1F1F",
    posterImage: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3BpG1DsiMv1E_Knq3ZNYLvziAR9efb_Rzf7w-dcI4DQ&s=10",
    },
  },
];

export const movieDetail: MovieDetail = {
  id: "falimy",
  title: "Falimy : Malayalam",
  bannerColor: "#7AA8C4",
  bannerColorAlt: "#C48A4A",
  quality: "4k Ultra",
  year: "2018",
  genre: "Comedy",
  duration: "1:41:19",
  rating: "4.5 Ratings",
  description:
    "Falimy is a Malayalam family drama film directed by the Nithin Lukose. The movie follows the story of a inten is dysfunctional family and explores the dynamics of over complexities of their relationship...",
  related: relatedMovies,
};
