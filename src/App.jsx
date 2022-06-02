import UseEffect from "../components/UseEffect";
import { useEffect, useState } from "react";
import UseReducer from "../components/UseReducer";



function App(){
  
    const [visible, setVisible] = useState(true);

    // useEffect(() => {
    //   setTimeout(() => {
    //     setVisible(false);
    //   }, 3000);
    // }, []);

    return <>{visible ? <UseEffect /> : null}</>;

    // return (<> <UseReducer /> </>)
}

export default App;

// data = reviews[0]
// <Review {... data}/>