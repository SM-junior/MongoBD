import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers]=useState(loadedUsers)

    const handleDelete = _id => {
        console.log(_id);
        fetch(`http://localhost:3000/users/${_id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                alert('User deleted successfully')
                const remainingUsers=users.filter(user=>user._id !==_id)
                setUsers(remainingUsers)
            }
            console.log(data);
        })
    }

    return (
        <div>
            <h2>Total users: {users.length}</h2>
            <div>
                {
                    users.map(user =>
                        <div key={user._id}>
                            <p
                                style={{ textAlign: 'left' }}
                            >Name: {user.name}, Email:{user.email}, ID: {user._id} 
                            <Link to={`/update/${user._id}`}><button>Update</button></Link>
                            <button onClick={() => handleDelete(user._id)}>x</button></p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Users;