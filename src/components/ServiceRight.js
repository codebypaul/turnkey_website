import {ServiceText,ServiceImage} from './styled-comps'
import {Link} from 'react-router-dom'
export default function ServiceRight(props) {
    return (
        <Link to='/services' style={{ textDecoration: 'none'}}>
        <div class="row m-0">
            <div class="col-md-6 d-flex align-items-center">
                <ServiceImage src={props.image} alt="image"/>
            </div>
            <div className="col-md-6">
                <ServiceText>
                    <h1>{props.service}</h1>
                    <p>{props.info}</p>
                </ServiceText>
            </div>
        </div>
        </Link>
    )
}

