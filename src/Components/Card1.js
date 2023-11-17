import React from 'react'
import "../App.css"

function Card1() {
  return (
    <>
    <div className="how-section1">   
                    <div className="row">
                        <div className="col-md-6 how-img">
                             <img src="img3.svg" className="rounded img-fluid" alt=""/>
                        </div>
                        <div className="col-md-6">
                            <h5>Empower Your Teaching Journey with Infonity</h5>
                            <p>Join a community of passionate educators who use our platform to create, manage, and elevate their courses.</p>
                            <button type="button" className="btn btn-dark btn-rounded m-2">Login as Instructor</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <h5>Unlock Your Learning Potential with Infonity</h5>
                                        <p>Explore a world of knowledge with courses tailored to your interests and learning style</p>
                                        <button type="button" className="btn btn-dark btn-rounded m-2">Login/Signup as Student</button>
                        
                        </div>
                        <div className="col-md-6 how-img">
                            <img src="img4.svg" className="rounded img-fluid" alt=""/>
                        </div>
                    </div>
                </div>
                
    </>
  )
}

export default Card1