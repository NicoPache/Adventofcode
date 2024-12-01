import React, { useEffect, useState } from 'react';
import archivo from '../constants/day1.txt'
const DayChallenge = () => {
  
  const [raw, setRaw] = useState("");
 
  useEffect(()=>{
  fetch(archivo)
  .then(r => r.text())
  .then(text => { 
    const rows = text.trim().split("\n"); 
    const columns = rows[0].trim().split(/\s+/).length;
    
   
    const columnsData = Array.from({ length: columns }, () => []);

    
   saveInArrays(columnsData,rows,columns)
  columnsData[0].sort();
  columnsData[1].sort();

  console.log(acumDiff(columnsData))


  setRaw(text)
  })
},[]);
 

const acumDiff = (columnsData) =>{

  console.log(columnsData)

    let acum = 0;

    for (let i = 0; i < columnsData[0].length; i++) {
        acum += Math.abs(columnsData[0][i]- columnsData[1][i]) 
      }
      return acum
}

    const saveInArrays = (columnsData,rows,columns) =>{

      console.log(rows.length)
      for (let i = 0; i < rows.length; i++) {
      
        rows[i] =  rows[i].replace(/\s+/g, '').trim().split('')
        
        for (let j = 0; j < columns; j++) {
      
          columnsData[j].push(rows[i][j])
        
      }


    }
  }

  return (
    <div>
      <h1>{raw}</h1>
     </div>
  );
};

export default DayChallenge;
