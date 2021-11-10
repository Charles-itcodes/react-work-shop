import React, { useState } from 'react';

const DataTable = () => {
    const initialData =[{id:1,firstName:'Charles',lastName:'Rudahusha',age:30,birthDate:'1990-01-20',country:'Sweden',city:'Varnamo'},
                       {id:2,firstName:'James',lastName:'Rurangwa',age:28,birthDate:'1993-01-20',country:'Sweden',city:'Varnamo'}];

    const [studentList, setStudentList]= useState(initialData);

    const TableHeader=()=>{
        return(<thead>
            <td>Id</td>
            <td>FirstName</td>
            <td>LastName</td>
            <td>Age</td>
            <td>Action</td>
        </thead>
        );
    };

const TableRow=(props)=>{
        return(
        <tbody>
            {
                props.list.map((student)=>(
                <tr>
                    <td>{student.id}</td>
                    <td>{student.firstName}</td>
                    <td>{student.lastName}</td>
                    <td>{student.age}</td>
                    </tr>))
            }
        </tbody>
        );
    };

    return (
        <div className="container">
          <table className="table .table-striped">
              <TableHeader/>
              <TableRow list={studentList}/>
          </table>
        </div>
    );
};

export default DataTable;