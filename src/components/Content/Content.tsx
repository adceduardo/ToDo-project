import { NewTask } from '../Tasks/NewTask'
import styles from './Content.module.css'
  
export function Content({tasks, completeTask}){
    return(
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <p>Tarefas criadas</p>
                    <span>{tasks.length}</span>
                </div>
                <div>
                    <p style={{color: 'var(--purple)'}}>Concluidas</p>
                    <span>2 de 5</span>
                </div>
            </header>
            
            {tasks.map((task, idx) => {
                return(
                    <NewTask 
                        title={task.title}
                        id={idx}
                        status={task.isComplete}
                        completeTask={completeTask}
                    />
                )
            })}       
        </section>
    )
}