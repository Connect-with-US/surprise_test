import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import SingleCol from './formates/SingleCol';
import { useEffect } from 'react';

const DownloadFile = ({index}) => {
  const componentRef = useRef(null);
  
  const generatePdf = async () => {
    
    const pdf = new jsPDF('p','mm','a4');

    const canvas = await html2canvas(componentRef.current);
    let imgWidth = 208;
    let imgHeight = canvas.height * imgWidth / canvas.width;
   
    const imageData = canvas.toDataURL('image/png');

    pdf.addImage(imageData, 'PNG', 0, 0,imgWidth,imgHeight);

    pdf.save('questions.pdf');
  };
  useEffect(()=>{
    generatePdf();
  },[])
  
  return (
    <div>
    <div ref={componentRef}>
    
    <div className=' text-3xl text-black mx-auto  w-full m-6'>
    {/* <QuestionStyle/> */}
    <SingleCol/>
    </div>
    
    </div>
    <button onClick={generatePdf}></button>
    </div>
  );

}

export default DownloadFile;
