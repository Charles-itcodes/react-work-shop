import React, { useState } from 'react';

const DataTable = () => {
    const initialData =[{id:1,firstName:'Charles',lastName:'Rudahusha',age:30,birthDate:'1990-01-20',country:'Sweden',city:'Varnamo'},
                       {id:2,firstName:'Egidia',lastName:'Uwera',age:21,birthDate:'2000-01-01',country:'Sweden',city:'Varnamo'},
                       {id:3,firstName:'James',lastName:'Rurangwa',age:28,birthDate:'1992-05-10',country:'Sweden',city:'Varnamo'}];

    const [studentList, setStudentList]= useState(initialData);
    const [showDetails, setShowDetails]= useState(false);
    const [student, setStudent]= useState({id:0,firstName:"", lastName:"", age:0,birthDate:"",country:"",city:""});

    const TableHeader=()=>{
        return(<thead>
            <td>Id</td>
            <td>FirstName</td>
            <td>LastName</td>
            <td>Age</td>
            <td>BirthDate</td>
            <td>Country</td>
            <td>City</td>
            <td>Action</td>
        </thead>
        );
    };

const TableRow=(props)=>{
        return(
        <tbody>
            {
                props.list.map((student)=>(
                <tr key={student.id}> 
                    <td>{student.id}</td>
                    <td>{student.firstName}</td>
                    <td>{student.lastName}</td>
                    <td>{student.age}</td>
                    <td>{student.birthDate}</td>
                    <td>{student.country}</td>
                    <td>{student.city}</td>
                    <td><TableAction student={student}/></td>
                    </tr>))
            }
        </tbody>
        );
    };

    const TableAction=(props)=>{
        const showData=()=>{
            setShowDetails(true);
console.log("SHOW DATA", props.student);
setStudent(props.student);
        };
        return(<button type="button" className="btn btn-primary" onClick={showData}>Details</button>);

    };
    const ShowStudentDetails=()=>{
        if (ShowStudentDetails){}

        return(
            <div className="card">
                <div className="card-header bg-info text-white">Student information</div>
            </div>
        );
    };

    return (
        <div className="container">
          <table className="table .table-striped">
              <TableHeader/>
              <TableRow list={studentList}/>
          </table>
          <br/>
          <ShowStudentDetails/>
          <div className="card-body">
              <h5 className="card-tittle">Country and City</h5>
              <p className="card-text">ID:{student.id}</p>
              <p className="card-text">Name:{student.firstName} {student.lastName}</p>
              <p className="card-text">BirthDate:{student.birthDate}</p>
              <p className="card-text">Country:{student.country}</p>
              <p className="card-text">City:{student.city}</p>
              


          </div>
        </div>
    );
};

export default DataTable;