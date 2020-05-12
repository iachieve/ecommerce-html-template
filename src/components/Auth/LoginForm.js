import React from "react";
import './auth.scss';

import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';
import img4 from './images/4.jpeg';
import img5 from './images/5.jpg';
import img6 from './images/6.jpg';
import img7 from './images/7.jpg';


const LoginForm = (props) => {
    function onLgin(e) {
        alert(e)
    }
    return (
        <div className='auth-bg'>
            <img src={img1} alt='bg'/>
            <img src={img2} alt='bg'/>
            <img src={img3} alt='bg'/>
            <img src={img4} alt='bg'/>
            <img src={img5} alt='bg'/>
            <img src={img6} alt='bg'/>
            <img src={img7} alt='bg'/>

            <div className='auth-form-container'>
                <form onSubmit={onLgin}>
                    <div className='auth-form-control'>
                        <input type='text' placeholder='username'/>
                    </div>
                    <div className='auth-form-control'>
                        <input type='password' placeholder='password'/>
                    </div>
                    <div className='auth-form-control'>
                        <button type='submit' className='btn-login'>Login</button>
                        <button type='submit' className='btn-login btn-demo'>Demo User</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;