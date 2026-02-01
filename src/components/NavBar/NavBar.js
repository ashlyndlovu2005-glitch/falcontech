
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll'
import './Nav.css'

const NavBar = () => {

    const [mobile,setMobile] = useState(false)
    const [sticky, setStick] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 500 ? setStick(true) : setStick(false)
        })
    }, []);

    const openDashboard =()=>{
        mobile ? setMobile(false) : setMobile(true)
        console.log(mobile)
    }
    return (

        <nav className='navbar' >
            <div className={`logo ${sticky ? "dark" : ""}`}>
                <h2>FAlCON TECH</h2>

                <ul className={mobile ? '' : 'hidemenu'}>
                    <li className='info'><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
                    <li className='info'><Link to="contacts" smooth={true} offset={0} duration={500}>Contacts</Link></li>
                    <li className='info'><Link to="testimonial" smooth={true} offset={0} duration={500}>Testimonial</Link></li>
                    <li className='info'><Link to="about" smooth={true} offset={0} duration={500}>About</Link></li>
                     <button className='btnnn info '>Updates</button>
                </ul>
                <div className='dash'> 
                    <button className='dashboard' onClick={() => { openDashboard() }}>Dashboard</button>
                </div>
        
            </div>

        </nav>

    );
}

export default NavBar