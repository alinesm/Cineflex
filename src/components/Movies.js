import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Movie from "./Movie";
import axios from "axios";

// const listMovies = [
//   {
//     id: 1,
//     title: "2067",
//     posterURL:
//       "https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
//     overview:
//       "A lowly utility worker is called to the future by a mysterious radio signal, he must leave his dying wife to embark on a journey that will force him to face his deepest fears in an attempt to change the fabric of reality and save humankind from its greatest environmental crisis yet.",
//     releaseDate: "2020-10-01T00:00:00.000Z",
//   },
//   {
//     id: 2,
//     title: "Welcome to Sudden Death",
//     posterURL:
//       "https://image.tmdb.org/t/p/w500/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg",
//     overview:
//       "Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.",
//     releaseDate: "2020-09-29T00:00:00.000Z",
//   },
//   {
//     id: 3,
//     title: "2067",
//     posterURL:
//       "https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
//     overview:
//       "A lowly utility worker is called to the future by a mysterious radio signal, he must leave his dying wife to embark on a journey that will force him to face his deepest fears in an attempt to change the fabric of reality and save humankind from its greatest environmental crisis yet.",
//     releaseDate: "2020-10-01T00:00:00.000Z",
//   },
//   {
//     id: 4,
//     title: "Welcome to Sudden Death",
//     posterURL:
//       "https://image.tmdb.org/t/p/w500/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg",
//     overview:
//       "Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.",
//     releaseDate: "2020-09-29T00:00:00.000Z",
//   },
//   {
//     id: 5,
//     title: "2067",
//     posterURL:
//       "https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
//     overview:
//       "A lowly utility worker is called to the future by a mysterious radio signal, he must leave his dying wife to embark on a journey that will force him to face his deepest fears in an attempt to change the fabric of reality and save humankind from its greatest environmental crisis yet.",
//     releaseDate: "2020-10-01T00:00:00.000Z",
//   },
//   {
//     id: 6,
//     title: "Welcome to Sudden Death",
//     posterURL:
//       "https://image.tmdb.org/t/p/w500/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg",
//     overview:
//       "Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.",
//     releaseDate: "2020-09-29T00:00:00.000Z",
//   },
// ];

function Movies() {
  const [listMovies, setListMovies] = useState(null);

  useEffect(() => {
    const URL = "https://mock-api.driven.com.br/api/v8/cineflex/movies";
    const promise = axios.get(URL);
    promise.then((res) => setListMovies(res.data));
    promise.catch((err) => console.log(err.response.data));
  }, []);

  if (listMovies === null) {
    return <div>Carregando...</div>;
  }

  return (
    <MoviesContainerStyle>
      {listMovies.map((m) => (
        <Movie key={m.id} movieImage={m.posterURL} id={m.id} />
      ))}
    </MoviesContainerStyle>
  );
}

export default Movies;

const MoviesContainerStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;
