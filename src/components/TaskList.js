import React, {useState} from "react";
import Task from "./Task"
function TaskList({tasks}) {
  const [taskList, setTaskList] = useState(tasks);

  const onDelete = (task) => {
    const updatedTaskList = taskList.filter((t) => t !== task);
    setTaskList(updatedTaskList);
  };
  return (
    <div className="tasks">
      {taskList.map((task, index)=>
        <Task key={index} task={task} onDelete={onDelete}/>
      )}
    </div>
  );
}

export default TaskList;
