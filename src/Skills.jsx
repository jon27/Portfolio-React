import React, { Component } from 'react'
import './Layout.css';
import './Skills.css';

class Skills extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <div className='main-page-content'>
                <div className='left-col'>
                    <h1 className='highlight'>Skills</h1>
                </div>
                <div className='right-col'>
                    <div className='skills'>
                        <div className='skill'>ReactJS</div>
                        <div className='skill'>Redux</div>
                        <div className='skill'>AngularJS</div>
                        <div className='skill'>Sass</div>
                    </div>
                    <div className='skills'>
                        <div className='skill'>JavaScript</div>
                        <div className='skill'>TypeScript</div>
                        <div className='skill'>HTML</div>
                        <div className='skill'>CSS</div>
                    </div>
                </div>
            </div>
        )
    }
}
 
export default Skills 