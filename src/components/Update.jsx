import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const loadedUser=useLoaderData();
    const handleUpdate=e=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        const updateUser={name, email}
        console.log(updateUser);

        fetch(`http://localhost:3000/users/${loadedUser._id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updateUser)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount>0){
                alert('User updated successfully')
            }
            form.reset()
        })
    }


    return (
        <div>
            <h2>update information of {loadedUser.name}</h2>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={loadedUser.name} id="" /><br />
                <input type="text" name="email" defaultValue={loadedUser.email} id="" /><br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;