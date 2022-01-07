import './App.css';
import React, {useState, useEffect} from 'react';
import Header from './components/Header'
import Planet from './components/Planet'
import Gallery from './components/Gallery'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [planets, setPlanets] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [startDay, setStartDay] = useState(new Date());
  const [endDay, setEndDay] = useState(new Date());
  const [isLoaded, setIsLoaded] = useState(false);



  const formatteDactualdDay = convertDateToString(endDay);
  const apiKey = 'IKCprAisLHN808TsA7nf2x6L2SINwTUH0zasB7QG';
  let formattedChoosenDay = convertDateToString(startDay);
  let galleryNumber = 3;
  //let url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${formattedChoosenDay}&end_date=${formatteDactualdDay}`;
  let url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${formattedChoosenDay}`;
  let urlGallery = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${galleryNumber}`;



  useEffect(() => {
    const getPlantes = async (url) => {
      const planetsFromAPI = await fetchPlanets(url);
      setPlanets(planetsFromAPI)
      setIsLoaded(true)
    }
    getPlantes(url)
  }, [startDay])

  useEffect(()=>{
    const getRandomGallery = async (urlGallery) => {
      const galleryFromAPI = await fetchPlanets(urlGallery);
      setGallery(galleryFromAPI)
      setIsLoaded(true)
    }
    getRandomGallery(urlGallery)
  }, [])

  //console.log(gallery)


  // Fetch Planets
  const fetchPlanets = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    return data
  }


  function convertDateToString(day) {
    var yyyy = day.getFullYear();
    var mm = day.getMonth() + 1;// getMonth() is zero-based
    var dd = day.getDate();
    const formattedDay = String(10000 * yyyy + 100 * mm + dd);
    const year = formattedDay.substring(0,4)
    const month = formattedDay.substring(4,6)
    const dayD = formattedDay.substring(6,8)
    const joinedDay = [year, month, dayD];
    return joinedDay.join("-");// Leading zeros for mm and dd
  }

  //console.log(url)

  let body;
  if (!isLoaded) {
    body =  <div>
      <h1> Pleses wait some time.... </h1> </div> ;
  } else {
    body =  (
        <div className = "App">
          <Gallery gallery={gallery} />
          <h3>You can choose previous day here:</h3>
          <DatePicker onChange={(date) => setStartDay(date)}
                      popperPlacement="auto"
                      maxDate={new Date()}/>
          <Header />
          <Planet planets={planets}/>
        </div>
    );
  }

  return (
      <div>
        {body}
      </div>
  );
  
}

export default App;
