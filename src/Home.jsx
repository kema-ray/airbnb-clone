import React from 'react'
import './Home.css';
import Banner from './Banner'

// ES7 snippets to do "rfce"

function Home() {
  return (
    <div className='home'>
      {/*<h1>Home Component</h1>*/}
      <Banner />
    </div>
  )
}

export default Home
