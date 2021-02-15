import ContactForm from '../components/ContactForm'
import {Link} from 'react-router-dom'
export default function Contact() {
    return (
        <div>
            <h1>Contact Us</h1>
            <div className="card p-3 my-5">
                <ContactForm/>
            </div>
            <Link to='/ready_for_service'>
                Already know what you need?
            </Link>
            <div className="card p-5">
                <p><strong>Call :</strong> <a href="tel:7048917992"> (704) 891-7992</a></p>
                <p><strong>Email :</strong> <a href="mailto:info@turnkeyroofingnc.com"> info@turnkeyroofingnc.com</a></p>
                <p><strong>Visit Us :</strong> <a href="https://www.google.com/maps/place/160+Cupped+Oak+Dr,+Matthews,+NC+28104/@35.0962889,-80.6651607,17z/data=!3m1!4b1!4m5!3m4!1s0x88542492b2faaaab:0xeaef13ff3106a1c5!8m2!3d35.0962889!4d-80.6651607?hl=en">160-B Cupped OAK Drive, Matthews, NC 28104</a></p>
            </div>
        </div>
    )
}