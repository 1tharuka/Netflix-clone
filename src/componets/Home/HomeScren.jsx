import"./homescren.css"
import Nav from "../Nav/Nav"
import Baner from "../baner/Baner"
import Colse from "../Cols/Cols"
import Request from "../../data/Request"

const HomeScree = () => {
  return (
    <div>
    {/* navbar */}
       <Nav />
    {/* baner */}
       <Baner />
    {/* rows */}
       <Colse title="NETFLIX ORIGINAL" fetchUrl={Request.fetchNetflixOrinals} isLargeRow={true}/>
       <Colse title="Top Rated" fetchUrl={Request.fetchTopRated} />
       <Colse title="Action Movies" fetchUrl={Request.fetchActionMovie} />
       <Colse title="Comedy Movies" fetchUrl={Request.fetchComdyMovise} />
       <Colse title="Horror Movies" fetchUrl={Request.fetchHorrorMoves} />
       <Colse title="Romance Movies" fetchUrl={Request.fetchRomanceMove} />
       <Colse title="Documenter" fetchUrl={Request.fetchDocumentaries} />
  
     
       
    </div>
  )
}

export default HomeScree
