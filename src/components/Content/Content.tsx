import { NewTask } from '../Tasks/NewTask'
import styles from './Content.module.css'
  
export function Content({tasks, completeTask}){
    const createdTasks = tasks.length
    const completedTasks = tasks.filter(task => task.isComplete).length;
    
    return(
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <p>Tarefas criadas</p>
                    <span>{createdTasks}</span>
                </div>
                <div>
                    <p style={{color: 'var(--purple)'}}>Concluidas</p>
                    <span> {completedTasks} de {createdTasks}</span>
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