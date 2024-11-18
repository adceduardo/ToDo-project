import { Header } from './components/Header/Header'
import { Content } from './components/Content/Content'

import './global.css'

const tasks = [
  {
    id: '1',
    title: 'exemplo',
    isComplete: 'completa'
  },
  {
    id: '2',
    title: 'exemplo2',
    isComplete: 'completa'
  }
]

export function App() {

  return (
    <>
      <Header />
      {tasks.map(task => {
        return(
          <Content />
        )
      })}
    </>
  )
}


