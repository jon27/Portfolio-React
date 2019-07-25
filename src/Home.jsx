import React, { Component } from 'react'
import './Home.css'; 
import './App.css';
// import Code1 from './Computer2.jpg';

class Home extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <div className="main-page-content home-background">
                <div className="home-left">
                    <h1>Hello I'm <span className="highlight">Jon Cabre</span></h1>
                    <p>Front - End Developer</p>
                    <p>Jon.Cabre@gmail.com</p>
                </div>
                {/* <div className="home-right">
                    <img src={Code1} alt="computer"/>
                </div> */}
            </div>
        )
    }
}
 
export default Home 