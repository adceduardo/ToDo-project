import styles from './NewTask.module.css'
import { TbTrash } from 'react-icons/tb'

export function NewTask(props){
    console.log(props)
    return(
        <div className={styles.task}>
            <button className={styles.checkContainer}>
                <div />
            </button>
            <p>{props.title}</p>
            <button className={styles.deleteTask}>
                <TbTrash size={20}/>
            </button>
        </div>
    )
}