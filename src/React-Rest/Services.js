const fetchUsers=(callback)=>{
    let usersObj=[];

    fetch("http://localhost:15000/SpringMVCHibernateCRUD/employee/fetchData").then(
        res=>{
            console.log(res.json()
              .then(endRes=>{callback(endRes); return endRes}))
            
        })
        .catch(err=>console.log(err))
        
        }
    
        
    

    

   

    const deleteUser=(empId)=>{
        const apiUrl = `http://localhost:15000/SpringMVCHibernateCRUD/employee/deleteEmployee/${empId}`;
        console.log(empId);
        try{
            fetch (apiUrl, {
                method : "DELETE"
            }).then(data => {
                if(data.status > 400){
                    alert("Data Cannot be deleted")
                }else{
                    alert("Data Successfully deleted")
                
                }
                return data.json();
            }).then(data => alert("data not Successfully deleted"));
        }catch(err){
            console.log(err);
        }
    }   
    

    const insertUser=(employeedetails)=>{
        fetch("http://localhost:15000/SpringMVCHibernateCRUD/employee/saveEmployee",{
            method:'POST',
            body:JSON.stringify(employeedetails),
            headers:{
                'content-type':'application/json'
            }
        }
        ).then(result=>result.json().then(data=>console.log(data))).catch(err=>console.log(err))}
    

     
    
    const getUsers=(callback)=> {
        const apiUrl = 'http://localhost:3000/users/';
        fetch(apiUrl).then((response) => response.json())
            .then((data) => callback(data));
    }

    const loginUser=(employeedetails,callback)=>{
        const empId = employeedetails.empId;
        const apiUrl = `http://localhost:15000/SpringMVCHibernateCRUD/employee/fetchData/${empId}`;
        fetch(apiUrl).then(data => {if (data.status >  400){
        alert("invalid user")};return data.json()}).then(data=> callback(employeedetails,data)).catch(err => console.log(err));
    }




    const updateUser=(employeedetails,callback)=>{
        fetch("http://localhost:15000/SpringMVCHibernateCRUD/employee/updateEmployee",{
            method:'PUT',
            body:JSON.stringify(employeedetails),
            headers:{
                'content-type':'application/json'
            }
        }
        ).then(result=>result.json().then(data=>callback())).catch(err=>console.log(err))}
    export {fetchUsers,insertUser,deleteUser,getUsers,loginUser,updateUser}


