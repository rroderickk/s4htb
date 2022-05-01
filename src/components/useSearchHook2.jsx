import React from "react";
import {Dataset} from "./Dataset";
import savi from "@icons/savi.jpg"

const NotFound =(p)=> { return (<>
  <p style={{
      fontSize: "1.5rem",
      fontFamily: "Hack",
    }}
  >
    {p} not found!<br/>
  </p>
  <img width="100px" src={savi}
    style={{
      marginTop: "10px",
      borderRadius: "50%",
      margin: "20px auto",
    }}
  />
  <h2 style={{
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "red",
    paddingTop: "10px",
    paddingBottom: "30px",
  }}>
    SE TENSÓ!
  </h2>
</>)};

const useSearchHook =()=> {
  const [searchValue, setSearchValue] = React.useState('');

  let searchedText = [];

  if (!searchValue.length >= 1) { 
    searchedText = Dataset; 
  } 
  else {
    var searchValueLower = searchValue.toLowerCase();

    const removeAccents =(str)=> {
      return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    };

    const searchValueLowerNoAccents = removeAccents(searchValueLower);

    searchedText = Dataset.filter(
      (obj)=> {
      return obj.name.toLowerCase()
        .includes(searchValueLowerNoAccents)       ||

        removeAccents(obj.dificultad.toLowerCase())
          .includes(searchValueLowerNoAccents)     ||

        obj.skills.toLowerCase()
          .includes(searchValueLowerNoAccents)     ||

        obj.like.toLowerCase()
          .includes(searchValueLowerNoAccents)     ||

        obj.so.toLowerCase()
          .includes(searchValueLowerNoAccents)     ||

        obj.activeDirectory && obj.activeDirectory.toLowerCase()
          .includes(searchValueLowerNoAccents)     ||

        obj.bufferOverFlow && obj.bufferOverFlow.toLowerCase() 
          .includes(searchValueLowerNoAccents)
    });
  };

  return {
    searchValue,
      setSearchValue, 
    searchedText,
  } 

}; export {useSearchHook, NotFound};