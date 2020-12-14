import Movie from "./Movie";

const MovieList = ({movies}) => {



    const movieNodes = movies.map((movie) => {
        // MovieLink = "<a href ="{movie.url}"></a>"

        return (
            <>
            <Movie key={movie.id} />
            <a href={movie.url}>{movie.name}</a>
            </>
        )
    })


    return (
        <>
        {movieNodes}
        </>
    )
}

export default MovieList;