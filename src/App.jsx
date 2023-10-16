
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
      body:JSON.stringify(user)  // UI sending this user info to server & server receive it as req.body
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if(data.insertedId){
        alert('User is added successfully');
        form.reset()
      }
    })
  }
  return (
    <>
      <h1>MongoDB client site is running</h1>
      <form onSubmit={submitUser}>
        <input type="text" name="name" placeholder='name' id="" /><br />
        <input type="text" name="email" placeholder='email' id="" /><br />
        <input type="submit" value="Add user" />
      </form>
    </>
  )
}

export default App
