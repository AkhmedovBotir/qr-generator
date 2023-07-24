import React, { useState, useEffect } from 'react';
import './style.css'
const Main = () => {
     const [temp, setTemp] = useState("");
     const [word, setWord] = useState("https://akhmedov-botir.uz");
     const [qrCode, setQrCode] = useState("");

     useEffect(() => {
          setQrCode(`http://api.qrserver.com/v1/create-qr-code/?data=${word}&size=${""}x${""}`)
     }, [word]);

     function handleGenerate() {
          setWord(temp);
     }

     return (
          <div className="body">
               <div className="container">
                    <input
                         type="text"
                         placeholder="Matn yoki link yozing..."
                         className="bodyInput"
                         onChange={(e) => { setTemp(e.target.value) }}
                    />
                    <div className="bodyContent">
                         <button
                              className="btn btn-success"
                              onClick={handleGenerate}
                         >
                              Generate
                         </button>
                         <a href={qrCode} download="QRCode" className=''>
                              <button className="btn btn-primary" type="button">Download</button>
                         </a>

                    </div>
                    <img src={qrCode} className="qrImage" />
               </div>
          </div>
     );
};

export default Main;