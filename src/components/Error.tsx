import React from 'react'
import '../Styles/Error.css'
import {Link} from 'react-router-dom'
import errorSvg from '../Asset/24.svg'

const Error = () => {
    return (
        <React.Fragment>
            <div className="errorPage">
                <div className="errorNav">

                </div>
                <div className="errorBody">
                    <div className="errorMessage">
                        <div className="message">
                            <h1>404 Not Found</h1>
                            <Link to='/'><button>Back to Home</button></Link>
                        </div>
                    </div>
                    <div className="errorSvg">
                        <img src={errorSvg} alt="" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Error
