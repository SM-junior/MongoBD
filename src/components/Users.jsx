import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const users=useLoaderData();

    return (
        <div>
            <h2>Total users: {users.length}</h2>
            {
                users.map(user=>
                    <p style={{textAlign:'left'}} key={user._id}>Name: {user.name}, Email:{user.email}, ID: {user._id}</p>
                )
            }
        </div>
    );
};

export default Users;