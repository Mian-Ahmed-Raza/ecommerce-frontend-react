import './Copyright.css'


export default function Copyright(){

    return(
        <div className='copyright'>
            <div>
                <p>&copy; {new Date().getFullYear()} E-commerce. All rights reserved.</p>
            </div>
        </div>
    )
}