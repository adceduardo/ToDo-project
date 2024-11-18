import { NewTask } from '../Tasks/NewTask'
import styles from './Content.module.css'

export function Content(){
    return(
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <p>Tarefas criadas</p>
                    <span>10</span>
                </div>
                <div>
                    <p style={{color: 'var(--purple)'}}>Concluidas</p>
                    <span>2 de 5</span>
                </div>
            </header>
            
             <NewTask 
                title='exemplinho'
                id='1'
            />       
        </section>
    )
}