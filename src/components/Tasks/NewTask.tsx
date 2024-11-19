import styles from './NewTask.module.css'
import { TbTrash } from 'react-icons/tb'
import { BsFillCheckCircleFill } from 'react-icons/bs'

export function NewTask({ title, completeTask, id, status, deleteTask}){
    const isComplete = true;

    function setCheckButton(){
        return(
            completeTask(id)
        )
    }

    function setCheckDelete(){
        return(
            deleteTask(id)
        )
    }
    
    return(
        <div className={status ? styles.taskCompleted : styles.task}>
            <button onClick={setCheckButton} className={styles.checkContainer}>
               {status ? <BsFillCheckCircleFill /> : <div />}
            </button>
            <p>{title}</p>
            <button onClick={setCheckDelete} className={styles.deleteTask}>
                <TbTrash size={20}/>
            </button>
        </div>
    )
}

