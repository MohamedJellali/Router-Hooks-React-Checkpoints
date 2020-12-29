// import React from 'react'
// import React, { useState } from 'react';
// import Moviecard from '../MovieCard/MovieCard';
// import "./MovieList.css"

// class Addlist extends React.Component {

//     constructor() {
//         super();
//         this.state = {
//         };
//         this.onInputchange = this.onInputchange.bind(this);
//         this.onSubmitForm = this.onSubmitForm.bind(this);
//       }

//     var list = [
//         {
//           nameOfMovie: 'Joker',
//           description: 'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.',
//           image: 'https://media.senscritique.com/media/000018727645/source_big/Joker.jpg',
//           rate: 4,
//         },
//         {
//             nameOfMovie: 'The Godfather',
//             description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
//             image: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY1200_CR107,0,630,1200_AL_.jpg',
//             rate: 5,
//           },
//         {
//             nameOfMovie: 'Interstellar',
//             description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity survival.',
//             image: 'https://images-na.ssl-images-amazon.com/images/I/91kFYg4fX3L.jpg',
//             rate: 4.2,
//           },
//           {
//               nameOfMovie: 'Capernaum',
//               description: 'While serving a five-year sentence for a violent crime, a 12-year-old boy sues his parents for neglect.',
//               image: 'https://fr.web.img2.acsta.net/pictures/18/09/11/09/08/2776515.jpg',
//               rate: 4,
//             },
//             {
//                 nameOfMovie: 'The Ring',
//                 description: 'A journalist must investigate a mysterious videotape which seems to cause the death of anyone one week to the day after they view it.',
//                 image: 'https://d1w8cc2yygc27j.cloudfront.net/2083456129639841013/-2755161209674298117.jpg',
//                 rate: 3.5,
//               }
//       ];

//       //add
//       const [filmlist, setFilmlist] = useState(
//     {
//       nameOfMovie: '',
//       description:'' ,
//       image:'' ,
//       rate: 1 ,
//     })

//     //   const handleChange = e => {
//     //     const { filmlist, value } = e.target;
//     //     setFilmlist(prevState => ({
//     //         ...prevState,
//     //         [filmlist]: value
//     //     }));
//     // };

//       const Addadd = (filmlist) => ( list.push(filmlist));

//       //add

//       const List = ({ list }) => (
//         <ul>
//           {list.map(item => (
//             <ListItem key={item.nameOfMovie} item={item} />
//           ))}
//         </ul>
//       );

//       const ListItem = ({ item }) => (
//         <li>
//   <Moviecard
//   nameOfMovie={item.nameOfMovie}
//   image={item.image}
//   description={item.description}
//   rate={item.rate}
//   />
//         </li>
//       );

//     render() {
//       return (

//         <div className="list">
//         <List list={list} />

//         <div className="addstyle">

//           <form action={Addadd(filmlist)}>
// <label for="name">Name of Movie:</label><br/>
// <input type="text" value={filmlist.nameOfMovie} name="nameOfMovie"  onChange={event => setFilmlist(filmlist.nameOfMovie = event.target.value)} /><br/>

// <label for="image">URL image:</label><br/>
// <input type="text" value={filmlist.image} name="image"  onChange={event => setFilmlist(filmlist.image = event.target.value)}  /><br/>

// <label for="des">Description:</label><br/>
// <input type="text" value={filmlist.description} name="description" onChange={event => setFilmlist(filmlist.description = event.target.value)}  /><br/>

// <label for="rate">Rating:</label><br/>
// <input type="text" value={filmlist.rate} name="rate" onChange={event => setFilmlist(filmlist.rate = event.target.value)}  /><br/><br/>

// <input type="submit" value="Add a Movie"></input><br/>
//          </form>
//       </div>
//       </div>

//       );
//     }
//   }

// export default Addlist

// import React, { useState } from 'react';

// function Addlist() {

//     const [filmlist, setfilmlist] = useState({nameOfMovie: '',
//     description:'' ,
//     image:'' ,
//     rate: 1 , })

//     const handleChange = e => {
//         const { filmlist, value } = e.target;
//         setfilmlist(prevState => ({
//             ...prevState,
//             [filmlist]: value
//         }));
//     };

//     const Addadd = (list, {filmlist}) => (list ===  Object.assign(list, {filmlist}));

//     return (
//         <div>

//             <form action={Addadd(filmlist)}>
//   <label for="name">name:</label>
//   <input type="text" name="name" value={filmlist.nameOfMovie} onChange={handleChange} /><br/><br/>

//   <label for="image">URL image:</label>
//   <input type="text" name="image" value={filmlist.image} onChange={handleChange} /><br/><br/>

//   <label for="des">Description:</label>
//   <input type="text" name="des" value={filmlist.description} onChange={handleChange} /><br/><br/>

//   <label for="rate">Rating:</label>
//   <input type="text" name="rate" value={filmlist.rate} onChange={handleChange} /><br/><br/>

//   <input type="submit" value="Add"></input>
//            </form>

//         </div>
//     )
// }

// export default Addlist
