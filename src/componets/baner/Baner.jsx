import { useEffect, useState } from "react"
import "./Baner.css"
import axios from "../../data/Axios"
import Request from "../../data/Request"


const Baner = () => {
const textfu = (string,n) =>{
return string?.length > n ? string.substr(0,n-1) + "...." :
string
}
const [move , setMove] = useState([])
useEffect(()=>{
  async function fetchData() {
    const data = await axios.get(Request.fetchNetflixOrinals);
    setMove(data.data.results[
      Math.floor(Math.random() * data.data.results.length - 1)
    ]
    );
    return data
  }
  fetchData()
}
,[])
  return (
    <header className="baner" style={{
      backgroundImage:`url("https://image.tmdb.org/t/p/original/${move?.backdrop_path}")`,
     backgroundPosition:"center center"
    }}>
      <div className="banner__text">
        <h1>{move?.title || move?.name || move?.original_name}</h1>
        <div className="button__contaner">
          <button>Play</button>
          <button>My List</button>
        </div>
        <h4>{textfu(`${move?.overview}`,100)}</h4>
      </div>
      <div className="bottom__gray"/>
    </header>
  )
}

export default Baner;
