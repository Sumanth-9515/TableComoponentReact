import "./Student.css"

import { students } from "../Studentsdata";
function Student(){

    return(
        <>
<h2>Student Information</h2>
    <table>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone No</th>
            <th>Gender</th>
            <th>Age</th>
        </tr>

      
          {students.map((student,index)=>(
             <tr key={index}>
               <td>{student.name}</td>
               <td>{student.email}</td>
               <td>{student.phone}</td>
               <td>{student.gender}</td>
               <td>{student.age}</td>
               
               </tr>
          ))}
          </table>
        </>
    )
}
export default Student;