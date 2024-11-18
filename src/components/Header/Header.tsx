import styles from "./Header.module.css"
import logo from '../../assets/logo.png'

import { AiOutlinePlusCircle } from 'react-icons/ai'


export function Header(){
    return(
        <div>
            <header className={styles.header}>
                <img src={logo}/>

                
            <form className={styles.formTask}>
                    <input placeholder="Adicione uma nova tarefa"/>
                    <button>
                        Criar
                        <AiOutlinePlusCircle size={20}/>
                    </button>
            </form>
            </header>
        </div>
    )    
}