
let generate=document.querySelector(".generate");
let copy=document.querySelector(".copy");
let store=document.querySelector(".store")
generate.addEventListener("click",()=>{
    let inp=document.querySelector(".inp").value;
    let chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrestuvwxyz123456789@#$&";
    let size=Number(inp);
    let pass="";
    
     if(size<1 || size >40  ){
            alert("Please Enter vaild length size between 1 to 40");
            return;
            
            
    }
    for(let i=0;i<size;i++){
       
        
        
        let random=Math.floor(Math.random()*chars.length);
        pass=pass+chars[random];
    }
    store.textContent= `${pass}`;
})
copy.addEventListener("click",()=>{
    if(store.textContent==""){
        alert("First Click Genertae Password Then Click on Copy Password");
        return;
    }
    navigator.clipboard.writeText(store.textContent);
    alert("Password Copied");
    
    
    
    
})
document.querySelector(".inp").addEventListener("keydown",(e)=>{
    if(e.key==="Enter"){
        generate.click();
    }
})

