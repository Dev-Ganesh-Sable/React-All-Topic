
import React, { useState } from 'react'

function List() {

    // const student = ["ritesh", "karan", "divya", "ankita", "diksha"]

    // with arrya of object
    const array = [
        {
            name: "ritesh",
            email: "ritesh@123gmail.com",
            phoneNo: 123456789
        },
        {
            name: "divya",
            email: "divya@123gmail.com",
            phoneNo: 123456789
        },
        {
            name: "diksha",
            email: "diksha@123gmail.com",
            phoneNo: 123456789
        }
    ]
    const [students, setStudents] = useState(array);


    return (
        <div>
            <h4>List</h4>
            <table border={1}>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Phone No</td>
                </tr>
                {
                    array.map((data, key) => 
                        <tr key={key}>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.phoneNo}</td>

                        </tr>
                    )
                }
            </table>
        </div>
    )
}

export default List