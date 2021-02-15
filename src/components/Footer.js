import styled from 'styled-components'
//  images
import AmericanExpress from '../images/american-express.png'
import Visa from '../images/visa.png'
import Discover from '../images/discover.png'
import Mastercard from '../images/mastercard.png'
import PayPal from '../images/paypal.png'


export default function Footer() {
    return (
        <FooterWrapper>
            <div className="d-flex justify-content-between links-area">
                <div>
                    <h1>Help</h1>
                    <p>Email Us: <br/>
                    info@turnkeyroofingnc.com</p>
                    <p>Call Us: 704-891-7992</p>
                </div>
                <div>
                    <h1>About Us</h1>
                    <p>About Us</p>
                </div>
                <div>
                    <h1>Legal</h1>
                    <p>Privacy Policy</p>
                    <p>Licenses and Certifications</p>
                    <p>Terms of Service</p>
                    <p>Privacy Poicy</p>
                </div>
            </div>
            <div className="social-payment d-flex justify-content-between">
                <div>
                    
                </div>
                <div className="payment-methods">
                    <img src={AmericanExpress} alt="" className="payment-method"/>
                    <img src={Visa} alt="" className="payment-method"/>
                    <img src={Mastercard} alt="" className="payment-method"/>
                    <img src={PayPal} alt="" className="payment-method"/>
                    <img src={Discover} alt="" className="payment-method"/>
                </div>
            </div>
        </FooterWrapper>
    )
}
const FooterWrapper = styled.footer`
    background: rgba(0,51,102,1);
    padding: 2rem;
    .links-area {
        width: 100%;
        color: white;
    }
    .payment-methods {
        
        
    }
    .payment-method {
        padding: .25rem .75rem;
        background: white;
        width: 4rem;
        margin: 0 .5rem;
        border-radius: .5rem;
    }
`