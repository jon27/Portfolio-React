import React, { Component } from 'react'
import './App.css';
import './About.css';
import './Layout.css';

import Pic4 from './AJ.jpeg';
import Pic5 from './AJ2.jpeg';
import Pic3 from './AJ-TJ.jpeg';
import Pic1 from './Army.jpeg';
import Pic2 from './Baby-Shower.jpeg';
import Pic6 from './Wedding.jpeg';


class AboutMe extends Component {
    componentDidMount() {
    }
    HandleImages (){
        console.log("Images");
    }
    render() {
        return (
            <div className="main-page-content">
                <div className='left-col'>
                    <h1 className='highlight'>About Me</h1>
                    <p>I served the Unites States Army for 8 years, I am a family man and I have a love for technology.</p>
                    <p>"Don't limit your challenges, challenge your limits"</p>
                </div>
                <div className='right-col'>
                    {/* this will be a loop or a function  */}
                    <div className='image-container'>
                        <img alt="1" src={Pic1} />
                        <img alt="2" src={Pic2} />                        
                        <img alt="3" src={Pic3} />
                    </div>
                    <div  className='image-container'>
                        <img alt="4" src={Pic4} />
                        <img alt="5" src={Pic5} />
                        <img alt="6" src={Pic6} />
                    </div>
                </div>
            </div>
        )
    }
}
 
export default AboutMe 