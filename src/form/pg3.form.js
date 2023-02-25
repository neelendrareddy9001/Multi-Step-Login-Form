import React from 'react';

export const Pg3 = () => {
    const {password, rPassword, setPassword, setRPassword} = useContext(FormContext);
  <div className='container'>
      <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Password</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={password} onChange={(e) => setPassword(e.target.value)} />
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label"> Repeat Password</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={password} onChange={(e) => setRPassword(e.target.value)}/>
  </div>
  
</form>
      </div>
    )
}
