import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState([])
   useEffect(() => {
    fetch('https://www.reddit.com/r/reactjs.json')
      .then(res => res.json())
      .then(data => {
        const children = data.data.children.map(child => child.data);
        setCount(children);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <>
        <div className='container-fluid my-5 px-lg-5 px-md-2'>
          <div className='row justify-content-center'>
           
                {
                  count.map((detail)=>{ 
                    return(
                      <div style={{"background-color":"#ebe3e3"}} className='col-lg-3 col-md-6 col-sm-12 card m-3 p-3'>
                        <h5 className='card-title'>{detail.title}</h5>
                        <p>{detail.selftext_html}</p>
                        <p>Open the link here : <a href={detail.url}>{detail.url}</a></p>
                        <p>Score : {detail.score}</p>
                        
                      </div>
                    )
                  })
                }
          </div>
        </div>
    </>
  )
}

export default App
