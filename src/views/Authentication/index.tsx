import React from 'react' 
import './style.css';

function SignIn (){
    return(
        <>Sign In</>
    )
}

function SignUp (){
    
}

export default function Authentication() {
    return (
        <div id="authentication-wrapper">
            <div className='authentication-image-box'></div>
            <div className='authentication-box'>
                <div className='authentication-container'>
                    <div className='authentication-title h1'>{'임대 주택 가격서비스'}</div>
                    <SignIn />
                </div>
            </div>
        </div>
    );
    
}
