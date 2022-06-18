import React, {useState, useEffect} from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faClapperboard } from '@fortawesome/free-solid-svg-icons'


function App() {
  const [endPoint, setEndPoint] = useState('');
  const [container, setContainer] = useState([]);
  const [finalPoint, setFinalPoint] = useState('');
  useEffect (() => {
    fetchMe()
  },[finalPoint])

  const fetchMe = () =>{
    
    const options = {
	    method: 'GET',
	    headers: {
		    'X-RapidAPI-Key': '0f95eff7f1msh80e4a001daf2412p15774fjsnf6def8aa0c6b',
		    'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	  }
    };
    fetch(`https://online-movie-database.p.rapidapi.com/auto-complete?q=${endPoint}`, options)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setContainer(data.d);
      })
      .catch(err => console.error(err));

  }
  const submitHandler = e =>{
    e.preventDefault();
    setFinalPoint(endPoint)
  }
  
  const onChangeHandler = (e) =>{
    setEndPoint(e.target.value);
  }
  return (
    <div className="App">

      <h1 className='title'>MovApi
        <span>
        <FontAwesomeIcon icon={faClapperboard} />
        </span>
      </h1>
      <form onSubmit={submitHandler}>
        <input type="text" value={endPoint} onChange={onChangeHandler} placeholder='Escribe tu película'/>
        <button type='submit'>Buscar</button>
      </form>

      <div className="wrapper">
      {container.map((item, index) => {
        return (
            <div className='wrapper_info' key={index}>
              <img src={item.i.imageUrl} alt="" />
              <p><span className='destacados'>Título:</span> {item.l}</p>
              <p><span className='destacados'>Actores/Actrices: </span>{item.s}</p>
              <p><span className='destacados'>Año:</span> {item.y}</p>
            </div>
        )
      })}
      </div>
    </div>
  );
}

export default App;
