import React from 'react';
import { useState } from 'react';
import { Outlet, Link} from 'react-router-dom';

const Career = () => {
 
  const [currentPage, setCurrentPage] = useState(1);

  const totalPage= 5;

  const handleNext = ()=>{
    if(currentPage < totalPage ){

      setCurrentPage(currentPage+1);
    }
  
    }
   
  const handleRest = () =>{
    setCurrentPage(1);
  }

  const handlePrevious = ()=>{
    if(currentPage>1){
      setCurrentPage(currentPage-1);
    }
    }
    

  return (
 <>
<div className='button-card'>
<button type="button" class="btn btn-primary" onClick={handleRest}>RESET</button>
<button type="button" class="btn btn-secondary" onClick={handlePrevious} >PREVIOUS</button>
<button type="button" class="btn btn-success" onClick={handleNext}>NEXT</button>
   </div>
   <div className='container'>
   
     {currentPage === 1 && <div>Content of Page 1</div>}
     {currentPage === 2 && <div>Content of Page 2</div>}
     {currentPage === 3 && <div>Content of Page 3</div>}
     {currentPage === 4 && <div>Content of Page 4</div>}
     {currentPage === 5 && <div>Content of Page 5</div>}
   


     <ul>
                    <li>
                        
                        <Link to="create">Create User</Link>
                        </li>
                    <li>
                        
                        <Link to="read">Read User</Link>
                        </li>
                    
                      </ul>


   </div>

   
   <Outlet/>
 </>
   
  )
}

export default Career;