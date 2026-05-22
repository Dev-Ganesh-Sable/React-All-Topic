import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'

function GetData() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                setUsers(response.data);
            });
    }, []);

    return (
        <div>
            <h3>GetData</h3>

            {users.map((user) => (
                <h2 key={user.id}>{user.name}</h2>
            ))}
        </div>
    )
};

export default GetData