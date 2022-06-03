// import React, { useEffect } from 'react';
import React from 'react';
import { useState } from 'react';



const Form = () => {

    const[form,setForm]=useState({
        username:"",
        age:"",
        email:"",
        password:"",
        isIndian:false,
      
    });

    const onChange=(e)=>{
        let {checked,type,name,value,files}=e.target;
        console.log(e)
        console.log(type,name,value,checked)
        // console.log(target.name,target.value);
        // if(e.keyCode===13){
        //     console.log("Press Enter Key")
        // }
        // if(e.keyCode===13){
        //     console.log("Press space Key")
        // }
        if(type==="checkbox")
        {
            setForm({
                ...form,
                [name]:checked,
            })
        }
        else if(type==="file")
          {
                setForm({
                    ...form,
                    [name]:files,
                })
            }    
        else
        {
            setForm({
                ...form,
                [name]:value,
            });
        }

      
    };
    // useEffect(()=>{
    //     console.log(form)
    // },[form]);
    const handleOnSubmit=(e)=>{
        e.preventDefault();
        console.log(form)
    }
  return (
    <div>Form

        <form onSubmit={handleOnSubmit}> 
           <div>
            <label>Name :</label>
            <input type="text"
            name="username"
             placeholder='Enter Name....' 
            value={form.name}
             onChange={onChange}
            // onKeyUp={onchange}
            // onKeyDown={onChange}
            // onClick={onchange}
            //  onChange={(e)=>setForm({
            //     ...form,
            //     name:e.target.value,
            // })
        // }
                />
           </div>
           <div>
            <label>Age :</label>
            <input type="number" name="age"
                 placeholder='Enter Age....'
             onChange={onChange}
             />
           </div>

           <div>
            <label>Email :</label>
            <input type="email" 
            name="email"
            placeholder='Enter Email....'
            
            value={form.email} 
            onChange={onChange}
            // onChange={(e)=>setForm({
            //     ...form,
            //     email:e.target.value,
            // }
            // )
            //  }
            />
           </div>

           <div>
            <label>Password :</label>
            <input type="text" 
            name="password"
            placeholder='Enter pass....'
            value={form.password}
            onChange={onChange}/>
           </div>

            <div>
                <label> Gender</label>
                <select name="selectGender"
                 value={form.selectgender}
                  onChange ={onChange} >
                      <option>select Gender</option>
                    <option value="male"> Male</option>
                    <option value="female"> Female</option>
                </select>

            </div>
           
           <div>
           
            <input type="checkbox" 
            name="isIndian"
            checked={form.isIndian}
            onChange={onChange}/>
             <label>Is Indian :</label>
           </div>

           
        <div>  
           <div>
           
            <input type="radio" 
            name="gender"
            value={"Male"}
            onChange={onChange}/>
            <label>Male</label>
         </div>


        <div>

            <input type="radio" 
            name="gender"
            value={"Female"}
            onChange={onChange}/>
          <label> Female</label>

           </div>
           </div> 

            <div>
            <label>User Resume:</label>
        
            <input type="file" 
            name="resume"
            files={form.resume}
            onChange={onChange}/>
            
           </div>
           <button type="submit" >Submit </button>
        </form>
    </div>
  );
};

export default Form