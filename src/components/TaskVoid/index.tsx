import styles from './TaskVoid.module.css'
import clipboard from '../../assets/clipboard.png'

export default function TaskVoid(){
    return(
        <div className={styles.div}>
            <img src={clipboard}/>
            <p className={styles.firstParagraph}>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}

