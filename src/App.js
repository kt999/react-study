import React from 'react';
import axios from 'axios';
import Movie from './Movie';

// function Test({id,name, age, fav}) {
//     return (
//         <div className="test">
//             <div>id : {id}</div>
//             <div>name : {name}</div>
//             <div>age : {age}</div>
//             <div>fav : {fav[0]},{fav[1]},{fav[2]}</div>
//         </div>
//     );
// }
//
// Test.propTypes = {
//     id : PropTypes.number.isRequired,
//     name : PropTypes.string.isRequired,
//     age : PropTypes.number.isRequired,
//     fav : PropTypes.arrayOf(PropTypes.string.isRequired)
// }
//
// const peopleData = [
//     {
//         "id" : 1,
//         "name" : "kiteak",
//         "age" : 21,
//         "fav" : ["a","b","c"]
//     },
//     {
//         "id" : 2,
//         "name" : "json",
//         "age" : 35,
//         "fav" : ["d","e","f"]
//     }
// ]
//
// function renderData(dataObject) {
//     return <Test key = {dataObject.id} id = {dataObject.id} name={dataObject.name}  age={dataObject.age}  fav={dataObject.fav} />
// }
//
// function App() {
//   return (
//     <div className="App">
//         hello~~!!
//         {peopleData.map(renderData)}
//     </div>
//   );
// }

class App extends React.Component {

    state = {
        isLoading:true,
        movies:[]
    };

    getMovies = async () => {
        const movies = await axios.get("https://yts.mx/api/v2/list_movies.json");

        this.setState({
            isLoading:false,
            movies:movies.data.data.movies
        });

    };

    componentDidMount() {
        this.getMovies();
    }

    render() {
        return (
            <div>
                {this.state.isLoading ?
                    <div>
                        <span>Loading...</span>
                    </div>
                    :
                    <div>
                        {this.state.movies.map(movie => (
                        <Movie
                            key={movie.id}
                            title={movie.title}
                            summary={movie.summary}
                            imgUrl={movie.medium_cover_image}
                            rating={movie.rating}
                            runningTime={movie.runningTime}
                        />
                        ))}
                    </div>
                }
            </div>
        );
    }

}

export default App;
