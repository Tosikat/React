import React, {useState} from 'react';
import Footer from "./footer";
import Header from "./header";
function App(){
  const [str, setStr] = useState('');

 function transData(str){
    setStr(str)
  }
    return (
      <div>
        <Footer value={str.toUpperCase()} transData={transData}/>
        <Header value={str.toLowerCase()} transData={transData}/>
      </div>
    );

}

export default App;
