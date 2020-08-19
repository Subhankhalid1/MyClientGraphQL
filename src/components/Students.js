import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_STUDENTS = gql`
  query GetAllStudents {
    students {
      id,
      name,
      email,
      age
    }
  }
`;

function Students() {

    const { loading, error, data } = useQuery(GET_STUDENTS);

    if (loading)
        return <h1>
            Loading...
            </h1>

    if (error)
        return <h1>
            error

        </h1>
console.log("data: "+ data)
    const { students } = data;
    return (
        <div>

            <h1>Students List</h1>
            <table border="3" width="600">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                    </tr>
                </thead>
                {
                    students.map(ev => {
                        return (
                            <tr>
                                <td>
                                    {ev.name}
                                </td>
                                <td>
                                    {ev.age}
                                </td>
                                <td>
                                    {ev.email}
                                </td>
                            </tr>
                        )
                    })
                }
            </table>

        </div>
    );
}

export default Students;
