import React from 'react'
import Navbar from '../../component/Navbar';
import { storage } from '../../config/firebase-config';
import {ref, uploadBytes , listAll} from 'firebase/storage'



import {useState , useEffect} from 'react';

export function UploadPage() {
    const [file , setFile] = useState(null);
    const [pdfList , setpdfList] = useState([])

    const storageRef = ref(storage)

    const UploadFile = () =>{
        if(file === null)
            {alert("file is null")
            return;}
        const FileRef = ref(storage , `${file.name}`)
        uploadBytes(FileRef ,file).then(()=>{
            alert("uploaded")

            setFile(null)
        })

    }
    useEffect(()=>{
            listAll(storageRef).then((response)=>{
                console.log(response);
            }) ;
        } , [])

  return (
    <div>
        <Navbar/>
        <div class="container my-5">
        <input class="btn btn-primary my-5 mx-4" type="file" name="file" onChange={(e)=>{setFile(e.target.files[0])}}/>
        <button onClick={UploadFile} type="button" class="btn btn-primary my-5">Upload File</button>
    </div>
    </div>
  )
}
