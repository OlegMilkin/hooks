
import  useInput  from './hooks/useInput'

function App() {

  const userName = useInput('')
  const password = useInput('')
 

  return (
    <div className="App">
      <input {...userName} type="text" placeholder="username"/>
      <input {...password} type="text" placeholder="password"/>
      <hr/>
      { 'name:' + userName.value }
      <hr/>
      { 'password:' + userName.value }
    </div>
  );
}

export default App;
