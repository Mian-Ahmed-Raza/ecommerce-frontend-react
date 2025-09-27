import './Copyright.css'


export default function Copyright(){

    return(
        <div className='copyright'>
            <div>
                <p>&copy; {new Date().getFullYear()} Mian-Ahmed. All rights reserved.</p>
            </div>
        </div>
    )
}