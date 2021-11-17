import React, {useEffect, useRef, useState} from 'react'

const List = () => {

  const [todos, setTodos] = useState([])
  const [page, setPage] = useState(1)
  const limit = 20
  const parentRef = useRef()
  const childRef = useRef()

  const fetchTodos = (page, limit) => {
    fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`)
      .then(response => response.json())
      .then(json => setTodos(json))
  }

  useEffect(() => {
    fetchTodos(page, limit)
  },[])

  return (
    <div ref={parentRef}>
      {
        todos.map(todo =>
          <div style={{ padding: 15, border: '2px solid black', marginBottom: '-2px' }} key={todo.id}>
            {todo.id}. {todo.title}
          </div>
        )
      }
      <div ref={childRef} style={{height: 20, background: 'green'}}></div>
    </div>
  )
}

export default List