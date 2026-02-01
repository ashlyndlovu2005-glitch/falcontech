import { useState } from 'react'
import './App.css'
import About from './components/About-Us/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import NavBar from './components/NavBar/NavBar'
import Programs from './components/programs/Programs'
import Testimonals from './components/Testimonals/Testimonals'
import Tittle from './components/tittle/Tittle'
import Video from './components/Videoplayer/Video'



function App() {
    const [playState, setPlaystate] = useState(false)



    return (
        
        <div className='App'>
            <NavBar />
            <Hero />
            <Tittle title={'OUR PROGRAMS'} subtittle={'WHAT WE OFFER'} />
            <Programs />
            <Tittle title={'ABOUT'} subtittle={'LEARN ABOUT US'} />
            <About  setPlaystate ={setPlaystate} />
          
            <Testimonals/>
            <Tittle title={'CONTACT US'} subtittle={'GET IN TOUCH'}/>
            <Contact/>
            <Footer/>
            <div>
                <Video  setPlaystate={setPlaystate} playState={playState}/>
            </div>
            

        </div>
    )
}

export default App