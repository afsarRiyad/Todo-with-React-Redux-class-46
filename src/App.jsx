import { useDispatch, useSelector } from 'react-redux'
import { addTodo, editIndex, input, todoDelete, todoUpdate } from './features/todoSlice'

function App() {
 
  let dispatch = useDispatch()
  let selector = useSelector(state=> state.todo.value.arr)
  let InputValue = useSelector(state => state.todo.value.input)
  let isTrue = useSelector(state => state.todo.value.isTrue)


  const handleSubmit = () =>{
     dispatch(addTodo())
     dispatch(input(''))
  }

  const handleDelete = (index) =>{
        dispatch(todoDelete(index))
        dispatch(input(''))
  }

  const handleEdit = (items, index) =>{
      dispatch(editIndex({
        index : index
      }))
      dispatch(input(items))
  }

  const handleUpdate = () =>{
          dispatch(todoUpdate())
           dispatch(input(''))
  }

  
  return (
    <>
     <input type="text" onChange={(e)=>dispatch(input(e.target.value))} value={InputValue} />
     {
      isTrue ?
      <button onClick={handleSubmit}>Submit</button> 
       :
       <button onClick={handleUpdate}>Update</button>
     }
     
    
     <ol>
        {
          selector.map((items, index) => (
            <li  key={index}>
              {items}
              <button onClick={()=> handleDelete(index)}>Delete</button>
              <button onClick={()=> handleEdit(items, index)}>Edit</button>
            </li>
          ))
        }
     </ol>
    </>
  )
}

export default App
