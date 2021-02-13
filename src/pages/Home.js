import { Carousel } from 'react-bootstrap'
import  {Link} from 'react-router-dom'
import styled from 'styled-components'
import {LinkBtn} from '../components/styled-comps'
export default function Home() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=First slide&bg=373940"
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
                    src="holder.js/800x400?text=Second slide&bg=282c34"
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
                    src="holder.js/800x400?text=Third slide&bg=20232a"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Plumbing</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="row m-0 p-5 d-flex justify-content-center">
                <LinkBtn>
                    Free Estimates
                </LinkBtn>
            </div>
            <div className="row m-0 text-center p-5">
                <h1>Storm Damage? We can help get you a new roof free of cost!*</h1>
                <Link to='/contact' className="mx-auto">
                    <LinkBtn>Contact us now!</LinkBtn>
                </Link>
            </div>
        </div>
    )
}
