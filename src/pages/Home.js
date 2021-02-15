import { Carousel } from 'react-bootstrap'
import  {Link} from 'react-router-dom'
import styled from 'styled-components'
// components
import {LinkBtn} from '../components/styled-comps'
import ReviewCard from '../components/ReviewCard'
// images
import roofing from '../images/roofing.webp'
export default function Home() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={roofing}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Roofing</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={roofing}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>General Contracting</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={roofing}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Plumbing</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="row m-0 p-5 d-flex justify-content-center">
                <div className="w-50">stuff</div>
                <div className="w-50 text-right">
                    <h1>Residential And Commercial</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia velit a feugiat finibus. Morbi iaculis diam id tellus iaculis, eu pretium metus fermentu</p>
                    <LinkBtn>
                        Free Estimates
                    </LinkBtn>
                </div>
            </div>
            <StormDamage className="row m-0 text-center p-5">
                <h1>Storm Damage? We can help get you a new roof free of cost!*</h1>
                <p className="mb-5 mx-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia velit a feugiat finibus. Morbi iaculis diam id tellus iaculis, eu pretium metus fermentu</p>
                <Link to='/contact' className="mx-auto">
                    <LinkBtn>Contact us now!</LinkBtn>
                </Link>
            </StormDamage>
            <div className="p-5 text-center">
                <h1>Reviews</h1>
                <ReviewScroll>
                    <ReviewCard/>
                    <ReviewCard/>
                    <ReviewCard/>
                </ReviewScroll>
            </div>
        </div>
    )
}
const ReviewScroll = styled.div`
    border: 1px solid black;
    width: 90vw;
    display: flex;
    overflow-x: scroll;
    white-space: nowrap;
    .review-card {
        width: 20rem;
        margin: 0 1rem;
    }
`
const StormDamage = styled.div`
    background: rgba(0,51,102,.3);
`