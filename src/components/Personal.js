import "./Personal.css"
import axios from "axios"
import { useState } from "react"
export default function Personal(){
    const [bmiData,setBmiData]=useState(null)
    const [bfpData,setBfpData]=useState(null)
    const [ibwData,setIbwData]=useState(null)
    const [whrData,setWhrData]=useState(null)
    const [absiData,setAbsiData]=useState(null)
    const [tdeeData,setTdeeData]=useState(null)
    const [weight,setWeight]=useState("")
    const [height,setHeight]=useState("")
    const [age,setAge]=useState("")
    const [gender,setGender]=useState("")
    const [hip,setHip]=useState("")
    const [waist,setWaist]=useState("")
    const [activitylevel,setActivitylevel]=useState("")
    const handlesearch =()=>{
        axios.get(`http://localhost:4000/personalhealth/bmi?weight=${weight}&height=${height}`)
        .then(
          (response) => {
            setBmiData(response.data)
          }
        )
        .catch((error) =>{
          console.log(error)
        }
        )
        axios.get(`http://localhost:4000/personalhealth/bfp?weight=${weight}&height=${height}&age=${age}&gender=${gender}`)
        .then(
          (response) => {
            setBfpData(response.data)
          }
        )
        .catch((error) =>{
          console.log(error)
        }
        )
        axios.get(`http://localhost:4000/personalhealth/ibw?weight=${weight}&height=${height}&gender=${gender}`)
        .then(
          (response) => {
            setIbwData(response.data)
          }
        )
        .catch((error) =>{
          console.log(error)
        }
        )
        axios.get(`http://localhost:4000/personalhealth/whr?gender=${gender}&hip=${hip}&waist=${waist}`)
        .then(
          (response) => {
            setWhrData(response.data)
          }
        )
        .catch((error) =>{
          console.log(error)
        }
        )
        axios.get(`http://localhost:4000/personalhealth/absi?weight=${weight}&height=${height}&age=${age}&gender=${gender}&waist=${waist}`)
        .then(
          (response) => {
            setAbsiData(response.data)
          }
        )
        .catch((error) =>{
          console.log(error)
        }
        )
        axios.get(`http://localhost:4000/personalhealth/tdee?weight=${weight}&height=${height}&age=${age}&gender=${gender}&activitylevel=${activitylevel}`)
        .then(
          (response) => {
            setTdeeData(response.data)
          }
        )
        .catch((error) =>{
          console.log(error)
        }
        )
      }
    return(
        <div className="Outerlayout">
            <div className="leftbar">
              <article>
                  <section><img src={require('./icons/home.png')}/></section>
                  <section><img src={require('./icons/bar.png')}/></section>
                  <section><img src={require('./icons/heart.png')}/></section>
              </article>
                  <section><img src={require('./icons/power.png')}/></section>
                  </div>
            <div className="human">
              <div className="meter">
                <input type="text" placeholder="weight" value={weight}
                onChange={(e) => setWeight(e.target.value)}/>
                <input type="text" placeholder="height" value={height}
                onChange={(e) => setHeight(e.target.value)}/>
                <input type="text" placeholder="age" value={age}
                onChange={(e) => setAge(e.target.value)}/>
                <input type="text" placeholder="gender" value={gender}
                onChange={(e) => setGender(e.target.value)}/>
                <input type="text" placeholder="hip" value={hip}
                onChange={(e) => setHip(e.target.value)}/>
                <input type="text" placeholder="waist" value={waist}
                onChange={(e) => setWaist(e.target.value)}/>
                <input type="text" placeholder="activity level" value={activitylevel}
                onChange={(e) => setActivitylevel(e.target.value)}/>
                <button onClick={handlesearch}><img src={require('./icons/search.png')}/></button>
                </div>
                <section>
                <img src={require('./icons/human.jpg')}/>
                </section>
            </div>
            <div className="info">
                <section>Heart</section>
                <section>Lung</section>
                <section>legs</section>
            </div>
            <div className="tool">
                    <li>Body Mass Index
                      <div>
                        {bmiData && (
                            <div>
                            <h2>{bmiData.info.bmi}</h2>
                            <h2>{bmiData.info.health}</h2>
                            <h2>{bmiData.info.healthy_bmi_range}</h2>
                            </div>
                        )}
                        </div>
                    </li>
                    <li>Body Fat Percentage
                    {bfpData && (
                            <div>
                            <h2>{bfpData.info.bfp}</h2>
                            <h2>{bfpData.info.fat_mass}</h2>
                            <h2>{bfpData.info.lean_mass}</h2>
                            <h2>{bfpData.description}</h2>
                            <h2>{bfpData.info.male}</h2>
                            </div>
                        )}
                    </li>
                    <li>Ideal Body Weight
                    {ibwData && (
                            <div>
                            <h2>{ibwData.info.robinson}</h2>
                            <h2>{ibwData.info.miller}</h2>
                            <h2>{ibwData.info.devine}</h2>
                            <h2>{ibwData.info.devine}</h2>
                            <h2>{ibwData.info.hamwi}</h2>
                            </div>
                        )}
                    </li>
                    <li>Waist Hip Ration
                    {whrData && (
                            <div>
                            <h2>{whrData.info.whr}</h2>
                            <h2>{whrData.info.bodyShape}</h2>
                            <h2>{whrData.info.risLevel}</h2>
                            </div>
                        )}
                    </li>
                    <li>Body shape Index
                    {absiData && (
                            <div>
                            <h2>{absiData.info.absi}</h2>
                            <h2>{absiData.info.absiZ}</h2>
                            <h2>{absiData.info.mortalityRisk}</h2>
                            </div>
                        )}
                    </li>
                    <li>Total Daily Energy Expenditure
                    {tdeeData && (
                            <div>
                            <h2>{tdeeData.info.tdee}</h2>
                            </div>
                        )}
                    </li>
                
            </div>
              
            
        </div>
    )
}