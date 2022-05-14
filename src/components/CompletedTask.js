import './CompletedTask.css'
export default function CompletedTask(props) {
     return (
          <div className="singletaskcompleted" >
               <div className="tasknamecompleted">{props.singleTaskcompleted.name}</div>
          </div>
     )
}