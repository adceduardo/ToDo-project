import styles from './NewTask.module.css'
import { TbTrash } from 'react-icons/tb'

export function NewTask({ title, completeTask, id, status}){
    
    function setCheckButton(){
        return(
            completeTask(id)
        )
    }
    
    return(
        <div className={status == false ? styles.task : styles.taskTeste}>
            <button onClick={setCheckButton} className={styles.checkContainer}>
                <div />
            </button>
            <p>{title}</p>
            <button className={styles.deleteTask}>
                <TbTrash size={20}/>
            </button>
        </div>
    )
}

