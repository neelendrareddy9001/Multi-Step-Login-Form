import React, {useContext} from 'react';

export const Pg1 = () => {
    const { } = useContext(FormContext);
    return (
        <div className='container'>
      <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Username</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={userName}
          onChange={(e) => {
            setUsername(e.target.value);
          }} />
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label"> Repeat Username</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={cUsername}
          onChange={(e) => {
            setCUsername(e.target.value);
          }} />
  </div>
 
  
</form>
      </div>
    )
}
