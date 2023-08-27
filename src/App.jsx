import react, { useState } from 'react'
import './assets/Theme.css'

function App() {
  const [list, setList] = useState([])
  const [descTask, setDescTask] = useState('')

  const addTask = form => {
    form.preventDefault()

    if (!descTask) return
    const newTask = { description: descTask, isCompleted: false }
    setList([...list, newTask])
    setDescTask('')
  }

  const completeTask = index => {
    const listAux = [...list]
    listAux[index].isCompleted = !listAux[index].isCompleted
    setList(listAux)
  }

  const removeTask = index => {
    const listAux = [...list]
    listAux.splice(index, 1)
    setList(listAux)
  }

  const removeAll = () => setList([])

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <form onSubmit={addTask}>
          <input 
            type='text' 
            placeholder="Adicione uma tarefa" 
            value={ descTask }
            onChange={(e) => setDescTask(e.target.value)}
          />
          <button type="submit">Adicionar</button>
      </form>
      <div>
        {
          list.length < 1 
            ?
            <div>
              <span>Lista Vazia</span>
            </div>
            :
            list.map((item, index) => (
              <div key={ index } className={ item.isCompleted ? 'completed' : ''}>
                <span onClick={ () => { completeTask(index) } }>{ item.description }</span>
                <button onClick={ () => { removeTask(index) } }>Excluir</button>
              </div>
            ))
        }
        {
          list.length > 0 && 
          <div>
            <button onClick={ () => { removeAll() } }>Excluir Tudo</button>
          </div>
        }
      </div>
    </div>
  )
}

export default App