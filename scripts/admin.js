
document.querySelector("form").addEventListener("submit",
loginFun);

function loginFun(event){

    event.preventDefault();

    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    fetch("https://reqres.in/api/login" ,{
        method:"POST",
        headers:{
            "Content-type" :"application/json"
        },
        body:JSON.stringify({
            email,password
        })
    })
    .then((res)=>res.json())
    .then((res)=>{
        if(res){
            window.location.href="dashboard.html";
        }
       else{
        alert("Wrong Credentials")
       }
    })
    .catch((err)=>{
        console.log(err);
    })
}