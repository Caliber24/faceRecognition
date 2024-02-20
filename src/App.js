import React from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Logo from "./Components/Logo/Logo.js"
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm.js"
import Rank from "./Components/Rank/Rank.js"
import Clarifai from 'clarifai'


const app = new Clarifai.App({
  apiKey: '19a5f6d5d2cb464c9ac65e40fc483d16'
 });

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      input : ''  ,
    }
  }

  onInputChange = (event) =>{
      console.log(event.target.value)
  }

  onButtonSubmit = () =>{
    app.models
            .predict(
            Clarifai.FACE_DETECT_MODEL,
                // URL
                "https://samples.clarifai.com/metro-north.jpg"
            )
            .then(function(response) {
                console.log(response);
                },
                function(err) {// there was an error 
                }
            );
  }


  render() {
    return (
        <div className='App'>
        
        <Navigation/>
        
        <Logo/>
        
        <Rank/>
        
        <ImageLinkForm 
        onInputChange = {this.onInputChange}
        onButtonSubmit = {this.onButtonSubmit}/>
        
        {/* <FaceRcognition/> */}
        

      </div>
    )
  }

}

export default App;
