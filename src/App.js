import Vid from './myVideo.mp4';
import image from './imageInSrc.jpg';
import './style.css';


function App() {
  return ( <div className = "App" >
    <div style = {{border:"solid 1 black", maxWidth:'100vw'}}>

    <h1 className = 'title red'> Your name here </h1> 
    <br></br>
    <img src={image} alt=""/>
    <br></br>

    <img src = "/imageInPublic.jpg" alt=""/>
    </div>

    <video width = "600" height = "560" autostart autoPlay controls src = {Vid} type = 'video/mp4'/>
    
    </div>
  );
}

export default App;