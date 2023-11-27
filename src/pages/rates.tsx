import React, { useState, useEffect } from 'react';

const Rates = () => {


  
    

  return (
    <div>
       <p>Document content goes here...</p> 
       
       <iframe src = "https://www.x-rates.com/table/?from=USD&amount=1" width = "555" height = "200"> 
          Sorry your browser does not support inline frames. 
       </iframe> 
        
       <p>Document content also go here...</p>
    </div>
  );
};

export default Rates;
