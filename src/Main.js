import React, { useState, useEffect } from 'react';
import './style.css'
const Main = () => {
     const [temp, setTemp] = useState("");
     const [word, setWord] = useState("");
     const [qrCode, setQrCode] = useState("");

     useEffect(() => {
          setQrCode(`http://api.qrserver.com/v1/create-qr-code/?data=${word}&size=${""}x${""}`)
     }, [word]);

     function handleGenerate() {
          setWord(temp);
     }

     return (
          <div className='d-flex flex-column justify-content-center align-items-center' style={{height: '100vh'}}>
               <h1 className="text-light text-uppercase my-3">QR Code generator</h1>
               <div className="w-100 py-3 d-flex justify-content-center">
                    <input 
                         type="text"
                         placeholder="Matn yoki link yozing..."
                         className="form-control w-25"
                         onChange={(e) => {setTemp(e.target.value)}}
                    />
               </div>
               <div className="output">
                    <img src={qrCode} alt="" />
               </div>
               <div className="w-25 d-flex justify-content-center py-3">
                    <button 
                         className="btn btn-danger px-3 mx-3"
                         onClick={handleGenerate}
                    >
                         Generate
                    </button>
                    <a href={qrCode} download="QRCode"  className='btn btn-primary mx-3'>
                         <button className="bg-transparent border-0 text-light" type="button">Download</button>
                    </a>
                    
               </div>
          </div>
     );
};

export default Main;