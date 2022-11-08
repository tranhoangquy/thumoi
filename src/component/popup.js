import { useState } from 'react';
import '../App.css';

function Popup() {
    const [name,setName] = useState()
    const changeName = (event)=> {
        console.log(event.target.value)
        setName(event.target.value)
    }
    const nhapten = ()=>{
        localStorage.setItem('nameF10',name)
    }

  return (
   
      <div className='propup'>
        <div style={{marginBottom:'5px'}}>Nhập tên khách mời (tên mình)</div>
        <form onSubmit={nhapten}>
        <input placeholder='Vui lòng nhập tên' type="text" id="lname" name="lname" onChange={changeName} /><br></br>
        <button type='submit' value="submit" style={{marginTop:'15px'}}> Click để nhập thiệp</button>
        </form>
      </div>

  );
}

export default Popup;