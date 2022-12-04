import React, { useState } from 'react';

const Todo = () => {

    const [activity,setActivity] = useState("")
    const [listData,setListDate] = useState("")
    
    function addActivity(){
        setListDate((listData)=>{
            const updatedList = [...listData,activity]
            console.log(updatedList)
            setActivity("");
            return updatedList
        })

    }

  const removeActivity = (i) => {
    const updatedList = listData.filter((elem,id)=> {
        console.log(i);
        return i!==id;

    })
    setListDate(updatedList)
  }


    return (
        <>
        <div className='container'> 
            <div className='header text-danger mt-3 mb-4' style={{ fontWeight : "700" }}>My Todo List</div>
            <div className='row'>
                
                <div className='col-md-6'>
                <input type='text' placeholder='Add Activity' value={activity} className="form-control bg-light " onChange={(e)=>setActivity(e.target.value)}></input>
                </div>
                <div className='col-md-2'>
                <button  className='btn btn-success float-start' onClick={addActivity}>Add</button>
                </div>
            </div>
            
            <p className='list-heading'>Here is your List : {") "}</p>
            { listData && listData?.map((data, i)=>{
               
                return(
                    <>
                        <p key={i}>
                            
                            <div className='listdata'>{data}</div>
                            <button className='btn btn-danger' onClick={()=>removeActivity(i)}>remove(-)</button>
                            
                        </p>
                    </>
                )
            })}
        </div>
        </>
    );
};

export default Todo;
