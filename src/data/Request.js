const API_KEY = "fd6a8cc1215ccc43372bf7e8d3164343"

const Request = {
    fetchTrending:`/trending/movie/week?api_key=${API_KEY}`,
    fetchNetflixOrinals:`/discover/tv?api_key=${API_KEY}&with_nrtworks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-us`,
    fetchActionMovie:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComdyMovise:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMoves:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMove:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
}
export default Request
// https://api.themoviedb.org/3/trending/movie/week?api_key=fd6a8cc1215ccc43372bf7e8d3164343
// https://api.themoviedb.org/3/discover/tv?api_key=fd6a8cc1215ccc43372bf7e8d3164343&with_nrtworks=213
// https://api.themoviedb.org/3/movie/top_rated?api_key=fd6a8cc1215ccc43372bf7e8d3164343&language=en-us
// https://api.themoviedb.org/3/discover/movie?api_key=fd6a8cc1215ccc43372bf7e8d3164343&with_genres=28
// https://api.themoviedb.org/3/discover/movie?api_key=fd6a8cc1215ccc43372bf7e8d3164343&with_genres=35
// https://api.themoviedb.org/3/discover/movie?api_key=fd6a8cc1215ccc43372bf7e8d3164343&with_genres=27
// https://api.themoviedb.org/3/discover/movie?api_key=fd6a8cc1215ccc43372bf7e8d3164343&with_genres=10749
// https://api.themoviedb.org/3/discover/movie?api_key=fd6a8cc1215ccc43372bf7e8d3164343&with_genres=99




