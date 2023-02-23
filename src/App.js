import React, {useState} from 'react'
import './App.css';
import { Pg1 } from './form/pg1.form';
import { Pg2 } from './form/pg2.form';
import { Pg3 } from './form/pg3.form';

function App() {
  const [page, setPage] = useState(1);
  return (
    <>
      <div className='container mt-4'>
        <center>
          <h3>Multi step register form</h3>
        </center>
        <p>page {page} / 3</p>
        <div>
        {
          page === 1 ? <Pg1/> : page === 2 ? <Pg2/> : <Pg3/>
        }
        </div>
        <center>
        <button className='btn btn-primary mx-4'
            onClick={() => {
              const backPage = page -1;
              setPage(backPage);
            }}
          >Back</button>
           <button 
              className='btn btn-primary'
              onClick={() => {
                const nextPage = page + 1;
                setPage(nextPage);
              }}
          >
            Next
          </button> 
        </center>
      </div>
      
    </>
  );
}

export default App;
