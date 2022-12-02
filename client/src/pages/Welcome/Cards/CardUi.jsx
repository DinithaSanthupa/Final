import React from 'react'
import { Route, useNavigate, Routes } from "react-router-dom"

import './card-style.css'
//import CompanySignup from '../../CompanySignup/CompanySignup'


const CardUi = (props) => {
  const navigate = useNavigate();

  return (
    <div className="card text-center">
        <div className="overflow">
            <img src={props.imgsrc} alt="compnay image" className='card-img-top' />
        </div>
        <div className="card-body text-dark">
            <h4 className="card-title">{props.title}</h4>
            <p className="card-text text-secondary">
            In case you are using Sass the simplest way is to include the Bootstrap’s source Sass files in your main Sass file and then require it on your src/index.js or App.js file. This applies to a typical create-react-app application in other use cases you might have to setup the bundler of your choice to compile Sass/SCSS stylesheets to CSS.
            </p>
            <a  onClick={() => navigate('/login')} className='btn btn-outline-success'>Login</a>
            {props.role === 2 ? <a onClick={() => navigate('/companysignup')} className='new-user' >Register ?</a> : ''}
            {props.role === 1 ? <a onClick={() => navigate('/researchersignup')} className='new-user' >Register ?</a> : ''}
        </div>
    </div>
  )
}

export default CardUi