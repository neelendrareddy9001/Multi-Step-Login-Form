import React from 'react';

export const Pg2 = () => {
    const {phone, rPhone, setPhone, setRPhone} = useContext(FormContext);
    return (
        <div className='container'>
      <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Phone</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={phone} onChange={(e) => setPhone(e.target.value)}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label"> Repeat Phone</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={rPhone} setRPhone={(e) => setRPhone(e.target.value)} />
  </div>
 
</form>
      </div>
    )
}
