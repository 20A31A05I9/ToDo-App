import React from 'react'
import '../components/Aside.css'

export default function Aside() {
    let items =["Freelance Project","SBI Outsource","HPCL Project 1"];
  return (
    <>
    <div className='aside-projects'>
        <div className="aside-head">
            <img src='src\assets\ghost-org.png'></img>
            <h4>Task boards</h4>
        </div>
        <div className="aside-list">
            {
                items.map((item)=>   
                    (
                    <div className="aside-item" onClick={
                        console.log("clicked")
                    }>
                        <h5>{item}</h5>
                    </div>
                    )
                )
            }
        </div>
        <div className="aside-add-button">
            <img src='src\assets\Vector.png'></img>
            <h6>Add new Project</h6>
        </div>
    </div>
    </>
  )
}
