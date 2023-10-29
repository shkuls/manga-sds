import React from 'react'
import Navbar from '../../component/Navbar';
import { storage } from '../../config/firebase-config';
import {ref, uploadBytes , listAll, getDownloadURL} from 'firebase/storage'

import { Document , Text , Page , PDFViewer } from '@react-pdf/renderer';

import Tgs from "../../component/Tags"



import {useState , useEffect} from 'react';

export function UploadPage() {
    const [file , setFile] = useState(null);
    const [pdfList , setpdfList] = useState([])
    const [pdfUrl , setpdfurl] = useState("");


    const [image, setImage] = useState("")

    const storageRef = ref(storage)

    const UploadFile = () =>{
        if(file === null)
            {alert("file is null")
            return;}
        const FileRef = ref(storage , `pdfs/${file.name}`)
        uploadBytes(FileRef ,file).then(()=>{
            alert("uploaded")
            console.log(file)
            setFile(null)
        })
    const UploadIMG = () =>{
        if(file === null)
            {alert("file is null")
            return;}
        const FileRef = ref(storage , `img/${file.name}`)
        uploadBytes(FileRef ,file).then(()=>{
            alert("uploaded")
            console.log(file)
            setFile(null)
        })

    }
    

  return (
    <div>
        <Navbar/>
        <div class="container my-5">
            <p>Upload PDF File</p>
        <input class="btn btn-primary my-5 mx-4" type="file" name="file" onChange={(e)=>{setFile(e.target.files[0])}}/>
        <button onClick={UploadFile} type="button" class="btn btn-primary my-5">Upload File</button>

        <p>Upload Cover Image</p>
        <input class="btn btn-primary my-5 mx-4" type="file" name="file" onChange={(e)=>{setImage(e.target.files[0])}}/>
        <button onClick={UploadIMG} type="button" class="btn btn-primary my-5">Upload File</button>


        <Tgs/>


        

    
    
    </div>
    </div>
  )
}
}