import { NewTask } from "../Tasks/NewTask";
import TaskVoid from "../TaskVoid"; 
import styles from "./Content.module.css";

export function Content({ tasks, completeTask, deleteTask }) {
  const createdTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.isComplete).length;

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>{createdTasks}</span>
        </div>
        <div>
          <p style={{ color: "var(--purple)" }}>Concluidas</p>
          <span>
            {" "}
            {completedTasks} de {createdTasks}
          </span>
        </div>
      </header>

      {createdTasks > 0 ? (
        <div>
          {tasks.map((task, idx) => {
            return (
              <NewTask
                title={task.title}
                id={idx}
                status={task.isComplete}
                completeTask={completeTask}
                deleteTask={deleteTask}
              />
            );
          })}
        </div>
      ) : (
        <div><TaskVoid /></div>
      )}
    </section>
  );
}
