const url = "https://localhost:8080/";
document.getElementById("button").addEventListener("click",calculate);
function calculate(){
    var name = document.getElementById("name");
    var year = document.getElementById("year");
    var heading = document.getElementById("url");
    if(name.value==="" && year.value===""){
        heading.innerHTML=`${url}`
    }
    else if(year.value===""){
         heading.innerText=`${url}?name=${name.value}`
         console.log(heading.innerText)
    }
    else if(name.value===""){
        heading.innerText=`${url}?year=${year.value}`
    }
    else{
        heading.innerText=`${url}?name=${name.value}&year=${year.value}`
    }
}