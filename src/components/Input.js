import { useEffect, useState } from 'react'
import TodoTask from './TodoTask'
import CompletedTask from './CompletedTask'
import './Input.css'
import { createPortal } from 'react-dom'
export default function Input(props) {
     const [allTask, setAllTask] = useState([])
     const [newTask, setNewTask] = useState('')
     const [comTask, setComTask] = useState([])
     const [Id, setId] = useState(0);
     const [countMark, setCountMark] = useState(0);
     let change = (e) => {
          setNewTask(e.target.value);
     }
     let keypress = (e) => {
          if (e.key === 'Enter') {
               if (newTask !== '') {
                    let dummytask = {
                         id: Id,
                         name: newTask,
                         completed: false
                    }
                    setAllTask((data) => [...data, dummytask]);
                    setNewTask('');
                    setId(Id + 1);
               }
          }
     }
     let clicked = () => {
          if (newTask !== '') {
               let dummytask = {
                    name: newTask,
                    completed: false
               }
               setAllTask((data) => [...data, dummytask]);
               setNewTask('');
               setId(Id + 1);
          }
     }

     function removecheck(name, flag) {
          allTask.map((el) => {
               if (el.name === name) {
                    if (flag === true) {
                         el.completed = true;
                         setCountMark(countMark + 1);
                    }
                    else if (flag === false) {
                         el.completed = false;
                         setCountMark(countMark - 1);
                    }

               }
               return el;
          })
          console.log(allTask)
     }

     let markComplete = () => {
          let dummymarktask = allTask.filter((el) => {
               if (el.completed !== true) {
                    return el;
               }
               else if (el.completed === true) {
                    setComTask(data => [...data, el])
               }
          })
          setAllTask(dummymarktask);
          setCountMark(0);
     }

     useEffect(() => {
          console.log(allTask)
     }, [allTask])

     return (
          <div>
               <div className="inputbar">
                    <div className='barspace'>
                         <input className="bar" type='text' onChange={change} onKeyPress={keypress} value={newTask} placeholder="Add Todo Task..." />
                    </div>
                    <button className="btn" onClick={clicked}>+</button>
               </div>


               <div className="taskeval">
                    <div className='evaltodotask shape'>
                         <div className='todoheading'>Todo Tasks</div>
                         {allTask.map((el) => {
                              return <TodoTask sortcheck={removecheck} singleTask={el} key={el.id}></TodoTask>

                         })}
                    </div>
                    <div className='evalcompletedtask shape'>
                         <div className='todoheading'> Completed Tasks</div>
                         {
                              comTask.map((el) => {
                                   return <CompletedTask singleTaskcompleted={el} key={el.id}></CompletedTask>
                              })
                         }
                    </div>

               </div>
               {
                    countMark > 0 ? <div className='completebtn'>
                         <button className='completebutton' onClick={markComplete}>Mark Completed</button>
                    </div> : null
               }

          </div>
     )
}