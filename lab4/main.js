let btns = document.getElementsByClassName("btn");

for (let index = 0; index < 1; index++) {
    btns[index].addEventListener("click",changeBackgroud);
   
    }
   
    
    
    function changeBackgroud(){
        let btStayle = getComputedStyle(this);
        let buttonBgcolor =
        btStayle["backgroundColor"];
        document.body.style.backgroundColor = buttonBgcolor;
    };
    