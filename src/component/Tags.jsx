import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
var dr;
const Tags=[];
let coverName;
export default function Tgs(props) {
  const navigate = useNavigate();
  const url = `https://serpapi.com/search.json?engine=google&q=${props.coverName}%20manga%20genre%20tags%20anilist&api_key=cba1f5b986d4a3420c25e4459aa91ca8e5a77422300f7ed0d1add9ac5771cd75`;
  const [data, setData] = useState({});
    const NameUrl = `https://serpapi.com/search.json?engine=google_reverse_image&image_url=${props.imgLink}&api_key=cba1f5b986d4a3420c25e4459aa91ca8e5a77422300f7ed0d1add9ac5771cd75&source=AniList`

  const Name=()=>{
    return fetch(url)
      .then((res) => res.json())
      .then((d) => {setData(d);
        
        coverName = d["image_results"][0]["snippet_highlighted_words"][0];
        console.log(coverName)
    
      
      
      setTimeout(() => navigate('/tags'), 1000);

      });

     
  }

  
  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => {setData(d);
     
      dr=d["answer_box"]["list"];
      for(var i=0;i<dr.length;i++){
        Tags.push(dr[i]);
      } console.log(Tags.length);
      setTimeout(() => navigate('/tags'), 1000);

      });
      
     
  }

  
  
  useEffect(() => {
    Name();
  
  },[]);
console.log(dr);;
  return (
    <div className="App">
      <h1 style={{ color: "green" }}>Finding Tags..</h1>
    
      
    </div>
  );
}