
let form = document.querySelector("form");

form.addEventListener("submit" , function(event){

    event.preventDefault();

    let obj ={
        id:Math.random(),
        image_url: form.cover.value,
        book_name: form.name.value,
        author: form.author.value,
		genre: form.genre.value,
		edition: form.edition.value,
		publisher:form.publisher.value,
		cost: form.cost.value,
		borrowed: false
    }

    fetch("https://json-backend.onrender.com/books",{
        method:"POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body:JSON.stringify(obj)
    })
    .then((res)=>{
        console.log(res);
        display();
    })
    .catch((err)=>{
        console.log(err);
    })
})

function display(){

    fetch("https://json-backend.onrender.com/books")
    .then((res)=>{
      return res.json();
    })
    .then((res)=>{
        console.log(res);
        displaydata(res);
    })
    .catch((err)=>{
        console.log(err);
    })
}


function displaydata(data){
    
    document.querySelector("#content").innerHTML="";

     data.forEach(function(el,i){

        let tr = document.createElement("tr");

        let td = document.createElement("td");
        let img = document.createElement("img");
        img.src = el.image_url;
        td.append(img);
        let td1 = document.createElement("td");
        td1.innerText = el.book_name;
        let td2= document.createElement("td");
        td2.innerText = el.author;
        let td3 = document.createElement("td");
        td3.innerText = el.genre;
        let td4 = document.createElement("td");
        td4.innerText = el.edition;
        let td5 = document.createElement("td");
        td5.innerText = el.publisher;
        let td6 = document.createElement("td");
        td6.innerText = el.cost;
        let td7 = document.createElement("td");
        td7.innerText = "Edit";
        td7.style.cursor="pointer";
        td7.style.color = "blue"
        let td8 = document.createElement("td");
        td8.innerText = "Delete";
        td8.style.cursor ="pointer";
        td8.style.color ="red"
        td8.addEventListener("click" , function(){

            mydelete(el.id)
        })
        tr.append(td,td1,td2,td3,td4,td5,td6,td7,td8);

        document.querySelector("#content").append(tr);
     })
}

display();

function mydelete(i){

    fetch(`https://json-backend.onrender.com/books/${i}`,{
        method:"DELETE"
    })
    .then((res)=>{
        console.log(res);
        display();
    })
    .catch((err)=>{
        console.log(err);
    })

}

