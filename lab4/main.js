let btns = document.getElementsByClassName("btn");
<<<<<<< HEAD

for (let index = 0; index < 1; index++) {
    btns[index].addEventListener("click",changeBackgroud);
   
    }
   
    
    
    function changeBackgroud(){
=======
for (let index = 0; index < btns.length; index++) {
    btns[index].addEventListener("click",function(){
>>>>>>> e1ceb246f1adaa2d06598bf52d007737cb684d31
        let btStayle = getComputedStyle(this);
        let buttonBgcolor =
        btStayle["backgroundColor"];
        document.body.style.backgroundColor = buttonBgcolor;
<<<<<<< HEAD
    };
    
=======
    });
    }
>>>>>>> e1ceb246f1adaa2d06598bf52d007737cb684d31
