
let formSubmit = () =>{
    if(document.querySelector("#name").value == ""){
        console.log("empty");
        document.querySelector(".name-alert").style.visibility="visible";

        setTimeout(()=>{
            document.querySelector(".name-alert").style.visibility="hidden";
        },3000)
        


    };

}
