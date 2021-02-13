import {ServiceText, ServiceImage} from './styled-comps'
import {Link} from 'react-router-dom'
export default function ServiceLeft(props) {
    return (
        <Link to='/services'>
            <div className="row m-0">
                <div className="col-md-6">
                    <ServiceText>
                    <h1>{props.service}</h1>
                    <p>{props.info}</p>

                    </ServiceText>
                </div>
                <div class="col-md-6 d-flex align-items-center">
                    <ServiceImage src={props.image} alt="image"/>
                </div>
            </div>
        </Link>
    )
}