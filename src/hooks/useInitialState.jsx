import {useState} from "react";
 const initialState = { htmlColection: [], }

const useInitialState =()=> {
 const [state, setState] = useState(initialState);

 return {
	 state,
 };  }; export { useInitialState };