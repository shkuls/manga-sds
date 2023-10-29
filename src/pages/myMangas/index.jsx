import React from 'react'
import {useEffect} from 'react'
import Navbar from '../../component/Navbar';
import { storage } from '../../config/firebase-config';
import {ref, listAll, getDownloadURL} from 'firebase/storage'
import Cards from '../../component/Cards';

export default function MyMangas() {
  
  const storageRef = ref(storage);
  let LinkArray=[1,3,4];

useEffect(()=>{
  listAll(storageRef).then((response)=>{
    
      
        response.items.forEach(element => {
          getDownloadURL(element).then((res)=>{
            LinkArray.push(res);//
            console.log(res)
          })
          
        });
        
        })
        
    } ,[]) ;



console.log(LinkArray)


  return (
    <div>
      <Navbar/>
      {}
      {
        LinkArray.map((link)=>
        <Cards url={link}/>
        )
      }

    </div>
  )
}
