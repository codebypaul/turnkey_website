import ServiceLeft from '../components/ServiceLeft'
import ServiceRight from '../components/ServiceRight'
import roofing from '../images/roofing.webp'
import plumbing from '../images/plumbing.jpeg'
import remodel from '../images/remodel.jpg'
export default function Services() {
    const info  = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    return (
        <div className="text-center">
            <h1 className="mx-auto">Services</h1>
            <ServiceRight service="Leaks" info={info} image={plumbing} id=""/>
            <ServiceLeft service="Roofing" info={info} image={roofing} id=""/>
            <ServiceRight service="Remodels" info={info} image={remodel} id=""/>
        </div>
    )
}