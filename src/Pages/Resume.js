import React from 'react';
import { useSelector } from 'react-redux';
import Resume1 from './Resume1';
import Resume2 from './Resume2';


function Resume({fontSize}) {
const skinvalue="1";
  if(skinvalue=="1") {
    console.log("from resume",fontSize)
      return <Resume1 fontSize={fontSize}/>
  } else if (skinvalue=="2") {
      return <Resume2 fontSize={fontSize}/>
  }
}

export default Resume