import "./Login.css"
export default function Login(){
    return(
        <div className="main">
            <a>
                <img src={require('./icons/back.png')}/>
            </a>
        <div class="container">
            <div class="image">
              
            </div>
            <div class="login">
  
              <div>USER LOGIN</div>
              <input type="text" placeholder="EMAIL"></input>
              <input type="text" placeholder="PASSWORD"></input>
              <button>SIGN IN</button>
              </div>
        </div>
      </div>
    )
}