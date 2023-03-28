import axios from "axios"
import { useState } from "react"
import "./Home.css"
export default function Home(){
  const [cityData,setCityData]=useState(null)
  const [weatherData,setWeatherData]=useState(null)
  const [query,setQuery]=useState("")
  const handlesearch1 =()=>{
    axios.get(`http://localhost:4000/search?q=${query}`)
    .then(
      (response) => {
        setCityData(response.data)
      }
    )
    .catch((error) =>{
      console.log(error)
    }
    )
    axios.get(`http://localhost:4000/weather?q=${query}`)
    .then(
      (response) => {
        setWeatherData(response.data)
      }
    )
    .catch((error) =>{
      console.log(error)
    }
    )
  }

  return(
    <div className="app">
          <div className="Outerlayout">
            <div className="leftbar">
              <article>
                  <section><img src={require('./icons/home.png')}/></section>
                  <section><img src={require('./icons/bar.png')}/></section>
                  <section><img src={require('./icons/heart.png')}/></section>
              </article>
                  <section><img src={require('./icons/power.png')}/></section>
              
            </div>
              <div className="header">
                  
                <div className="logo">
                <div><img src={require('./icons/logo.png')}/></div>
                </div>
                <section>pfp</section>
                <section>name</section>
                <input type="text" placeholder="search" value={query}
                onChange={(e) => setQuery(e.target.value)}/>
                <button onClick={handlesearch1}><img src={require('./icons/search.png')}/></button>
                
                
                <div className="parent-box">
                  <div>hows the weather today?
                  </div>
                    <div class="parent">
                      <section1>temperature
                        <article>
                      {weatherData && (
                            <div>
                            <h2>{weatherData.main.temp}</h2>
                            <h2>{weatherData.main.humidity}</h2>
                            <h2>{weatherData.main.pressure}</h2>
                            <h2>{weatherData.visibility}</h2>
                            </div>
                        )}
                        </article>
                      </section1>
                      <section2> slider
                        <article></article>
                      </section2>
                      <section3>air quality
                        <article></article>
                      </section3>
                      <section4> advice
                        <article>
                      {cityData && (
                            <div>
                            <h2>{cityData.data.recommendations.pollution.exercice.text}</h2>
                            <h2>{cityData.data.recommendations.pollution.windows.text}</h2>
                            </div>
                        )}
                        </article>
                      </section4>
                    </div>
                </div> 
              </div>

              <div className="rightbar">
                
                  <section>
                    <div className="rightbar-flex">
                      <div>moon</div>
                      <box>clock</box>
                      <box2>20 uvi</box2>
                      <div>weather prediction</div>
                      <box1>cloudy</box1>
                      <box1>rainy</box1>
                      <button></button>
                    </div>
                  </section>
                
              </div>
          </div>
    </div>
  )
}