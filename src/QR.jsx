import { useState } from "react"

// import React from 'react'

export const QR = () => {
  const [img,setImg]=useState("");
  const [loading,setLoading]=useState(false);
  const [qrData,setQrData]=useState("")
const [qrSize,setQrSize]=useState("150")
  async function genQr(){
    setLoading(true);
    try{
        const url=`https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
        setImg(url);

    }catch(error){
        console.error("Error getting QR code",error);
    }
    finally{
        setLoading(false);
    }
 }
 function downQr(){
    fetch(img).then((response)=>response.blob()).then((blob)=>{
        const link=document.createElement("a");
        link.href=URL.createObjectURL(blob);
        link.download="qrcode.png"
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    })
 }
  return (
    <div className="app-container" >
        <h1>QR CODE GENERATOR</h1>
        {loading && <p>Please wait...</p>}
        {img && <img src={img} className="qr-image" />}
        <div>
            <label htmlFor="dataInput" className="input-label">
                Data for QR code:
            </label>
            <input type="text" value={qrData} id="dataInput" placeholder="Enter data for QR code" onChange={(e)=>setQrData(e.target.value)} />
            <label htmlFor="sizeInput" className="input-label" >
                Image size(e.g., 150):
            </label>
            <input type="text"value={qrSize} id="sizeInput" placeholder="Enter image size"  onChange={(e)=>setQrSize(e.target.value)} />
            <button className="gen-button" disabled={loading} onClick={genQr}>Generate QR code</button>
            <button className="down-button" onClick={downQr}>Download QR code</button>
        </div>
        <p className="footer">Designed by Bane</p>
    </div>
  )
}
