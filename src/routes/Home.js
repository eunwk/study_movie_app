import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

// const foodLike = [
//   {
//     id  : 1,
//     name : "김치",
//     image : "https://res.heraldm.com/phpwas/restmb_idxmake.php?idx=507&simg=/content/image/2019/09/27/20190927000594_0.jpg"
//   },
//   {
//     id  : 2,
//     name : "감자",
//     image : "https://newsteacher.chosun.com/site/data/img_dir/2018/03/04/2018030401904_0.jpg",
//     rating : 4.0
//   },
//   {
//     id  : 3,
//     name : "고구마",
//     image : "https://d20aeo683mqd6t.cloudfront.net/ko/articles/title_images/000/026/550/medium/IMG_2236s.jpg?2019",
//     rating : 3.2
//   },
//   {
//     id  : 4,
//     name : "씨앗",
//     image : "https://lh3.googleusercontent.com/proxy/VX7-S4rFX5iLkM0awFitOioo6TsF9kweaKHOHw4hEQYmmr7BUshclb7rl61LNMVdJKr0W6kvAqHvsqCIBlTbAsW8IMGXhT_pOsL3zarNfriqafgVe5tebfJg_Sc6SSw8ZoZUMRKZZzxnuuQ7CjrnvF32HEw27pI7CbHTlQ",
//     rating : 5.0
//   }
// ]


// function Food({name, picture, rating}) {
// return <div>
//   니는 {name}
// <span>{rating}/5.0</span>
//   <img src={picture} alt={name} />
// </div>
// }

// Food.propTypes = {
//   name : PropTypes.string.isRequired,
//   picture : PropTypes.string.isRequired,
//   rating : PropTypes.number
// }

// function App() {
//   return (
//     <div>
//       <h1>타이틀</h1>
//       {
//         foodLike.map(dish => (
//           <Food key={dish.id} name={dish.name} picture={dish.image}  rating={dish.rating} />
//         ))
//       }
     
//     </div>
//   );
// }

class Home extends React.Component {
  state = {
     isLoading : true,
      movies : []
  };
   
  getMovies = async () => {
    // const movies = await axios.get("https://yts.mx/api/v2/list_movies.json"); 
    // console.log(movies.data.data.movies)

    const {
      data : { 
        data : {movies}
      }
    } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating"); 
   // this.setState({movies : movies});
    // this.setState({movies});
     this.setState({movies, isLoading: false});
   // console.log(movies)
  }

  componentDidMount() {
     
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;  //객체를 카피하여 변수를 생성 this.state의 isLoading 을 복사함.
    return (
      <div className="container">{isLoading 
        ? (<div className="loader">
            <span className="loader_text">"Loding..."</span>
          </div>
        ) : (
          <div className="movies">

          {movies.map(movie => (
              <Movie 
                key={movie.id} 
                id={movie.id} 
                year={movie.year} 
                title={movie.title} 
                summary={movie.summary} 
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />        
          ))}
          </div>
        )}
      </div>   
    )
  }

}

export default Home;
