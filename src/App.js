import axios from 'axios';
import { useEffect, useState,useMemo } from 'react';
import './App.css';

function App() {
  const [{data,data2},setData]=useState({ data: [], data2: [] })
  const urls = [`https://api.spoonacular.com/recipes/complexSearch?number=5223&apiKey=27f915ce5b034dcab3f16802886fd15b`,`https://api.spoonacular.com/recipes/informationBulk?ids=715538,716429&apiKey=27f915ce5b034dcab3f16802886fd15b`];
 

  useEffect(()=>{
        const fetchData = async()=>{
          const datarep= await axios.get(`https://api.spoonacular.com/recipes/complexSearch?number=5223&apiKey=e82171ec37ef4732842db3c51540289b`);
          const data2rep = await axios.get(`https://api.spoonacular.com/recipes/informationBulk?ids=715538,716429&apiKey=e82171ec37ef4732842db3c51540289b`)
          setData({ data: datarep.data, data2: data2rep.data })
        }
        fetchData();
       // eslint-disable-next-line react-hooks/exhaustive-deps 
  },[])
/*
  const button=()=>{
    const promises=urls.map(url=>axios.get(url));
    Promise.all(promises)
    .then((response)=>{
      let data = [];
      response.forEach(response => {
        data = data.concat(response.data);
    });

       setData(data);
      
      console.log(data)
    })
  } */
  

  const filteredPosts = useMemo(() => {
    const filteredPosts = [];
    if (data.results)
        for (let i = 0; i < data.results.length && i < 5224; i++) {
            filteredPosts.push(data.results[i]);
        }
    return filteredPosts;
}, [data.results]);
console.log(filteredPosts)
  return (
    <div className="App">
      
          <div className='recipes'>
            
          
            <ul>
          {filteredPosts.map((item) => {
          return <div className='fooditem' key={item.id}><li >
            <h2>{item.title}</h2>
            <img src={item.image}></img>
            
            </li></div>;
        })}
        </ul>

          
          </div>
         
    </div>
  );
}

export default App;
