import styles from "./Header.module.css"
import logo from '../../assets/logo.png'

import { AiOutlinePlusCircle } from 'react-icons/ai'
import { useRef } from "react"

export function Header({ tasks, createNewTask }){
    const inputRef = useRef(null)
    
    function handleSumbit(){
        event.preventDefault()
        createNewTask(
            {
                
                id: tasks.length+1,
                title: inputRef.current.value,
                isComplete: false
            }                   
            );
        inputRef.current.value = "";
    }

    return(
        <div>
            <header className={styles.header}>
                <img src={logo}/>

                
            <form onSubmit={handleSumbit} className={styles.formTask}>
                    <input ref={inputRef} placeholder="Adicione uma nova tarefa"/>
                    <button type="submit" className={styles.create}>
                        Criar
                        <AiOutlinePlusCircle size={20}/>
                    </button>
            </form>
            </header>
        </div>
    )    
}