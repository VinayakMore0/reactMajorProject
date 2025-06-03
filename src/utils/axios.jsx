import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTQ2ODcyMTg1NzQxNGFmYjU2OGE0YmQ3OWQxZWFhZCIsIm5iZiI6MTc0ODg0OTA0OS42MjksInN1YiI6IjY4M2Q1MTk5MzljYTdlMDFkZWFkN2U2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZgtsxXX0H3iLjwvdcGiZJBJq6so_J7h8KOHCbZcxbh0",
  },
});

export default instance;
