import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import DoubleCol from "./formate_style/DoubleCol"

const DownloadFile = () => {
  const componentRef = useRef(null);

  const generatePdf = async () => {
    
    const pdf = new jsPDF('p','mm','a4');

    const canvas = await html2canvas(componentRef.current);
    let imgWidth = 208;
    let imgHeight = canvas.height * imgWidth / canvas.width;
   
    const imageData = canvas.toDataURL('image/png');

    pdf.addImage(imageData, 'PNG', 0, 0,imgWidth,imgHeight);

    pdf.save('my-pdf.pdf');
  };

  
  return (
    <div>
    <div className=' text-center' ref={componentRef}>
    <DoubleCol/>
    <p className='text-center text-3xl text-black mx-auto p-6 w-[50%] ' >this is me from download component</p>
    </div>
    <button onClick={generatePdf}>DOWNLOAD</button>
    </div>
  );

}

export default DownloadFile;
