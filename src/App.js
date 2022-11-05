import axios from 'axios';
import { useState } from 'react';
import './App.css';

function App() {
  const [data,setData]=useState([])
  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=27f915ce5b034dcab3f16802886fd15b`;
 

  const button=()=>{
    axios.get(url)
    .then(response=> response.data)
    .then(data=>{
      console.log(data.results)
      setData([data.results])
    }
    ).catch((error) => {
      console.log(error);
   });
  }
  

  {console.log(data)}
  return (
    <div className="App">
        <button  onClick={button}> Search recipe</button>
          <div className='recipes'>
            
          

          {data.map((item) => {
          return <li>
            <img src={item[1].image}></img>
            </li>;
        })}

          
          </div>
         
    </div>
  );
}

export default App;
