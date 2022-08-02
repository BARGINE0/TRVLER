import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className='home'>
        <div className="landing-wrap">
            <div className="landing">
                <h1 className='slogan'>TRAVAL FASTER EZIER, <br/> AND PARISING</h1>
                <br /><br /><br /><br />
                <input type="text"  placeholder='Email' className='email'/>
                <button className='sign-up'>Sign Up</button>
            </div>
        </div>
    </div>
  )
}

export default Home