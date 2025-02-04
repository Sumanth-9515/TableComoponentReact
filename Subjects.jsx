
import { Studentsmarks } from "../Studentsdata";

function Subjects(){
    return(
        <>
        <h2>Student Subject Marks</h2>
               <table>

                <thead>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Gender</th>
                    <th>Age</th>
                    <th>Marks</th>

                </thead>

                <tbody>

                  

                        {Studentsmarks.map((marksdata,index)=>(
                                <tr key={index}>
                                        
                                        <td>{marksdata.name}</td>
                                        <td>{marksdata.email}</td>
                                        <td>{marksdata.phone}</td>
                                        <td>{marksdata.gender}</td>
                                        <td>{marksdata.age}</td>
                                        <td>{JSON.stringify(marksdata.marks)}</td>


                                </tr>
                 


                            

                                


                        ))}



                  



                </tbody>





               </table>

        
        </>
    )
}
export default Subjects;