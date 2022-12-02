import React from 'react'
import Card from './CardUi'

import compnay from '../assets/compnay.jpg'
import researcher from '../assets/research.jpg'
import admin from '../assets/admin.png'

const Cards = () => {
  return (
    <div className="container-fluid d-flex justify-content-center">
        <div className="row">
            <div className="col-md-4">
                <Card imgsrc={compnay} title='Login as Company' role = {2}/>
            </div>
            <div className="col-md-4">
                <Card imgsrc={researcher} title='Login as Researcher' role = {1}/>
            </div>
            <div className="col-md-4">
                <Card imgsrc={admin} title='Login as Admin' role = {0}/>
            </div>
        </div>
    </div>
  )
}

export default Cards
