
import './App.css'

function App() {

  const submitUser=(e)=>{
    e.preventDefault();
    const form=e.target;
    const name=form.name.value;
    const email=form.email.value;
    const user={name, email}

    fetch('http://localhost:3000/users',{
      method:"POST",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
      const newUser=data;
      console.log(newUser);
    })
  }
  return (
    <>
      <h1>Vite + React</h1>
      <form onSubmit={submitUser}>
        <input type="text" name="name" placeholder='name' id="" /><br />
        <input type="text" name="email" placeholder='email' id="" /><br />
        <input type="submit" value="Add user" />
      </form>
    </>
  )
}

export default App
