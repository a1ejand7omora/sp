const API = "https://api.themoviedb.org/3";

export function get (patth) {
  return fetch (API + patth, {
    headers: {
      Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NzFjNjRiYzNmYTcxNTk3Y2M4Y2UxZjdjOGRiYjRlNyIsInN1YiI6IjYyMTNiYjFiMGJiMDc2MDA2YjcxOWNiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yCy_lAO-oORCg1H0AXTSDzf9NwqkVjZ2xe7rX6pCCcI",
      "Content-Type": "application/json;charset=utf-8",
    },
  }) 
  .then((result) => result.json());
}
