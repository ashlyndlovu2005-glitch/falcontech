
import './Hero.css'
import {Link,Routes,Route,BrowserRouter as Router} from 'react-router-dom'
import  About from '../../pages/about.js'

function Hero() {
    return (
    
        <Router>
                <div className='hero-container' name='hero'>
                    <div className='text-container'>
                        <div className='text-area'>
                            <h1 className='hero'>The Best Way To Secure Your Childrens Future Future</h1>
                            <p className='herotext'>Our instute offers the best curricullum education <br />
                                to prepare your childrens Future

                            </p>

                            <Link className='herobtn btn' to={'/about'}>Learn More</Link>
                            

                        </div>

                    </div>

                </div>
        
        
            <Routes>
                <Route path='/about' element={<About/>}/>
            </Routes>
        </Router>

            
    )
}

export default Hero