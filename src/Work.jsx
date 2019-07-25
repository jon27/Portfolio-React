import React, { Component } from 'react'
import './Layout.css';
import './Work.css';

class Work extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <div className='main-page-content'>
                <div className='left-col'>
                    <h1 className='highlight'>My Work</h1>
                    <p>Just a few projects I have put together</p>
                </div>

        {/*This will be a function that spits out the divs*/}
                <div className='right-col work-col'>
                    <div className='work-tile expensify'>
                        <a href='https://expensify-app-jon.herokuapp.com/' target="_blank" rel='noopener noreferrer'> 
                            <p>&nbsp;</p>
                        </a>
                    </div>
                    <div className='work-tile omni'>
                        <a href='https://omnifood-4100.herokuapp.com/' target="_blank" rel='noopener noreferrer'> 
                            <p>&nbsp;</p>
                        </a>
                    </div>
                    <div className='work-tile beat'>
                        <a href='https://drop-the-beat.herokuapp.com/' target="_blank" rel='noopener noreferrer'> 
                            <p>&nbsp;</p>
                        </a>
                    </div>
                  </div>
            </div>
        )
    }
}
 
export default Work 