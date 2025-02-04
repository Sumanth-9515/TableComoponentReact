import { StrictMode } from 'react' 
import { createRoot } from 'react-dom/client'
import Parent from './props/parent'
import Student from './Tablesconcept/Student/Student'
import Subjects from './Tablesconcept/Subjects/Subjects'
import Studentsgrades from './Tablesconcept/Grades/Grades'
// import './index.css'
// import products from "./products.js"
// import Sumanth from './react.jsx'
// import Sumanth from './Project'
// import Vismai from './Vismai/Vismai'
// import Apipage from './Fakeapi/Apipage'

createRoot(document.getElementById('root')).render(
 <StrictMode>

    {/* // <Apipage/>
    // <Vismai/>
    // <Apipage/>
    //   <Parent/> */}
    <Student/>
    <Subjects/>
    <Studentsgrades/>


    </StrictMode>

    
    

)
