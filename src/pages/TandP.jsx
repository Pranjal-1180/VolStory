import React from 'react';

const TandP = () => {
    return (
        <div>
            <h1 >Terms and Privacy</h1><br></br><hr width="200%"></hr>
            <h2>Restriction of app abuses</h2><br>
            </br><hr width="200%"></hr>
           <div className="text"> Retention of rights of ownership or ban on infringement</div> 


        </div>
    );
};

// import React,{useState,useEffect} from 'react'
// import axios from 'axios';
// function TandP() {
//     const[tandp,setTandP]=useState([])
//     useEffect(()=>{
//         axios.get('https://development.volstory.com/users/get-termsAndCondition')
//         .then(res=>{
//             console.log(err)
//             setTandP(res.data)
//         })
//         .catch(err=>{
//             console.log(err)
//         })
//     },[])
//   return (
//     <div className="top">
//         <ul>
//             {
//             tandp.map(tandp => <li key={tandp.termsAndCondition}></li>)
// }
//         </ul>
      
//     </div>
//   )
// }

export default TandP

