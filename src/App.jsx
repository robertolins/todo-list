import { useState } from 'react'
import './assets/Theme.css'

function App() {
  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <form action="">
          <input type='text' placeholder="Adicione uma tarefa" />
          <button type="submit">Adicionar</button>
      </form>
      <div className='listaTarefas'>
        <div className='item'>
            <span>A tarefa ficará aqui</span>
            <button>Excluir</button>
        </div>
        <div className='item completo'>
            <span>A tarefa ficará aqui</span>
            <button>Excluir</button>
        </div>
      </div>
    </div>
  )
}

export default App