import { useState } from "react"
import './TodoTask.css'
export default function TodoTask(props) {


     return (
          <div className="singletasktodo" >
               <input type='checkbox' onClick={(e) => props.sortcheck(props.singleTask.name, e.target.checked)} />
               <div className="tasknametodo">{props.singleTask.name}</div>
          </div>
     )
}