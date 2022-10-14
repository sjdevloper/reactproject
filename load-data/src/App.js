import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  // const[img, setImg] = useState([]);
  // const[status, setStatus] = useState([]);

  //  1.fetch API
  // useEffect (() => {
  //   fetch("https://dog.ceo/api/breeds/image/random")
  //   .then ((resp) => resp.json())
  //   .then((apiData) => {
  //     setImg(apiData.message);
  //     setStatus(apiData.status);

  //   });
  // }, []);

  // return (
  //   <div className="cards">
  //       <div className="blob-top"></div>
  //     <span>
  //     <img width={500} src={img}/>
  //     </span>

  //     <span>
  //     <h4>{status}</h4>
  //     </span>
  //     <div className="blob-bottom"></div>

  //   </div>
  // )

  // 2. axios fechData
//   const [img, setImg] = useState([]);
//   const[status, setStatus] = useState([]);
//   useEffect(() => {
//     axios.get("https://dog.ceo/api/breeds/image/random").then((res) => {
//       setImg(res.data.message);
//       setStatus(res.data.status);
//     });
//   }, []);

//   return (
//     <div className="cards">
//       <div className="blob-top"></div>
//       <span>
//         <img width={500} src={img} />
//       </span>
//       <span>
//         <h3>{status}</h3>
//       </span>
//       <div className="blob-bottom"></div>
//     </div>
//   );
// }


// fettch data from https://api.quotable.io/random

const [con, setCon] = useState([]);
const[aut, setAut] = useState([]);
const [tag, setTag] = useState([]);
const[autSlug, setAutSlug] = useState([]);
const [len, setLen] = useState([]);
const[dateAd, setDateAd] = useState([]);
const[dateMod, setDateMod] = useState([]);



  useEffect(() => {
    axios.get("https://api.quotable.io/random").then((res) => {
      setCon(res.data.content);
      setAut(res.data.author);
      setTag(res.data.tags);
      setAutSlug(res.data.authorSlug);
      setLen(res.data.length);
      setDateAd(res.data.dateAdded);
      setDateMod(res.data.dateModified);
    });
  }, []);

  return (
    <div className="App">
      
      <div className="card">
      <span>
      <h1> {aut}</h1>
      <a>length: {len}</a> 
        <a>date Added:{dateAd}</a>
        <p className="pa"> {con}</p>
        
      </span>
      
        
        <h4>{autSlug}</h4>
        <div>
          
           <a>{dateMod}</a>
            <a>{tag}</a>
        </div>
        </div>
      
      <div className="blob-bottom"></div>
    </div>
  );
}

export default App;
