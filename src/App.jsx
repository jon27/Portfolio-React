import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { TiHomeOutline, TiUserOutline, TiDeviceDesktop, TiCodeOutline } from "react-icons/ti";
import Home from './Home';
import AboutMe from './About';
import Work from './Work';
import Skills from './Skills';
import './App.css';


function Index() {
  return <Home />;
}

function About() {
  return <AboutMe />;
}

function MyWork() {
  return <Work />;
}

function MySkills() {
  return <Skills />;
}

const SVG = ({
  style = {},
  fill = '#ff8e0e',
  width = '64',
  className = '',
  height = '64',
  viewBox = '0 0 64 64',
  fontWeight= '700',
  fontSize = '30',
  strokeWidth = '1',
  stroke='#ff8e0e'
}) => 
  <svg
    width={width}
    fontWeight={fontWeight}
    fontSize={fontSize}
    style={style}
    strokeWidth={strokeWidth}
    height={height}
    viewBox={viewBox}
    className={className}
    stroke={stroke}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g id="Group_19" data-name="Group 19" transform="translate(-28 -16)">
    <g id="Rectangle_1105" data-name="Rectangle 1105" transform="translate(28 16)" fill="none" >
     <rect width="64" height="64" stroke="none"/>
     <rect x="0.5" y="0.5" width="63" height="63" fill="none"/>
    </g>
      <text id="J" transform="translate(47 48)" fill="#ff8e0e" ><tspan x="0" y="0">J</tspan></text>
      <text id="C" transform="translate(61 68)" fill="#ff8e0e" ><tspan x="0" y="0">C</tspan></text>
    </g>
    <path d="" fill={fill} />
  </svg>;

function AppRouter() {
  return (
    <Router>
      <div className="container">
        <div >
          <div className="logo">
            <SVG />
          </div>
    <div className="Navbar">
        <nav >
          <ul>
            <li>
              <Link className="link" to="/"><TiHomeOutline /></Link>
            </li>
            <li>
              <Link className="link" to="/about/"><TiUserOutline /></Link>
            </li>
            <li>
              <Link className="link" to="/work/"><TiDeviceDesktop /></Link>
            </li>
            <li>
              <Link className="link" to="/skills/"><TiCodeOutline/></Link>
            </li>
          </ul>
        </nav>
        </div>
        </div>
        <div className="main-page-content">
          <Route path="/" exact component={Index} />
          <Route path="/about/" component={About} />
          <Route path="/work/" component={MyWork} />
          <Route path="/skills/" component={MySkills} />
        </div>
      </div>
    </Router>
  );
}

export default AppRouter;