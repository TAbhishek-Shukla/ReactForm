import React,{useState} from 'react';
import './App.css';

function App() {
  const [data, setData] = useState({
    username:"",
    email: "",
    phone: "",
    password: "",
  });
  const [record, setRecord] = useState([]);
  const onchangeHAndler=(e)=>{
    const name=e.target.name;
    const value= e.target.value;
    setData({...data,[name]:value})
  }
  const onsubmitHandler =(e)=>{
    e.preventDefault();
    if(data.username && data.email && data.phone && data.password){
    const newrecord={...data,id: new Date().getTime().toString()}
    setRecord([...record,newrecord])
    setData({username:"",email: "",phone: "", password: "",})
  }
  else{
    alert("please fill  all the data fields!")
  }
}

  return (
    <>
      <div className='container'>

        <div className='form-field'>
         <div className='head'> <p>User Registration</p>
         </div>
          <form  action='' onSubmit={onsubmitHandler}>
            <div className='username'>
              <label>Username:</label>
              <input type="text"  autoComplete='off' value={data.username} onChange={onchangeHAndler} name='username' id='username' />
            </div>
            <div className='email'>
               <label htmlFor='email'>Email:</label>
               <input value={data.email} type="text" autoComplete='off' name='email' onChange={onchangeHAndler} id='email' />
            </div>
            <div className='phone'>
              <label>Phone:</label>
              <input type="text" autoComplete='off' value={data.phone}  onChange={onchangeHAndler} name='phone' id='phone' />
            </div>
            <div className='password'>
              <label>Password:</label>
              <input type="password" autoComplete='off' value={data.password} onChange={onchangeHAndler}  name='password' id='password'/>
            </div>
            <button className='submit-btn'  type='submit'>Submit</button>


          </form>
          {   
        record.map((curelem)=>{
          const {id,username,email,phone,password}=curelem;
          return (
           
            <div className='showdata' id={id}>
                 <p>Username: {username}</p>
                 <p> Email:  {email}</p>
                 <p>Phone: {phone}</p>
                 <p>Password: {password}</p>
            </div>
          )
        })}
        </div>
       
      </div>
    </>
  );
}

export default App;
