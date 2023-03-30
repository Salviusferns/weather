import React from "react"
import axios from "axios"
import Clockm from "./Clockm"
import { useState } from "react"
import "./Home.css"
export default function Home(){
  const [cityData,setCityData]=useState(null)
  const [weatherData,setWeatherData]=useState(null)
  const [forecasData,setForecastData]=useState(null)
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
    axios.get(`http://localhost:4000/forecast?q=${query}`)
    .then(
      (response) => {
        setForecastData(response.data)
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
                            <p1>{weatherData.main.temp}</p1>
                            <p1>{weatherData.main.humidity}</p1>
                            <p1>{weatherData.main.pressure}</p1>
                            <p1>{weatherData.visibility}</p1>
                            </div>
                        )}
                        </article>
                      </section1>
                      <section2> slider
                        <article></article>
                      </section2>
                      <section3>air quality
                        <article>
                        {cityData && (
                            <div>
                      <p>{cityData.data.current_measurement.ts}</p>
                      <p>p2:{cityData.data.current_measurement.p2.aqius}</p>
                      </div>
                        )}
                        </article>
                      </section3>
                      <section4> advice
                        <article>
                      {cityData && (
                            <div>
                            <p>{cityData.data.recommendations.pollution.exercice.text}</p>
                            <p>{cityData.data.recommendations.pollution.windows.text}</p>
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
                      <box>
                        <Clockm/>
                      </box>
                      <div>weather prediction</div>
                      <box1>{forecasData && (
                            <div>
                            <p1>{forecasData.list[0].weather[0].description}</p1>
                            </div>
                        )
                        }
                        </box1>
                       <box1>{forecasData && (
                            <div>
                             <p1>{forecasData.list[1].weather[0].description}</p1>
                            </div>
                        )
                        }</box1>
                      <button></button>
                    </div>
                  </section>
                
              </div>
          </div>
    </div>
  )
}