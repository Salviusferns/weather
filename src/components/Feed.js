import "./Feed.css"
export default function Feed(){
  return(
    <div className="app">
          <div className="Outerlayout">
            <div className="leftbar">
                  <div>Home</div>
                  <div>personal Health</div>
                  <div>Dashboard</div>
            </div>
              <div className="header">
                <div>logo</div>
                <div>Pfp</div>
                <div>name</div>
                <input type="text" placeholder="search"/>
                <button>logo</button>
                <div class="parent">
                  <section>temperature</section>
                  <section> slider</section>
                  <section>air quality</section>
                  <section> advice</section>
                </div>
              </div>

              <div className="rightbar">
                <div>moon</div>
              </div>
          </div>
    </div>
  )
}