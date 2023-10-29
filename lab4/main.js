let btns = document.getElementsByClassName("btn");
for (let index = 0; index < btns.length; index++) {
    btns[index].addEventListener("click",function(){
        let btStayle = getComputedStyle(this);
        let buttonBgcolor =
        btStayle["backgroundColor"];
        document.body.style.backgroundColor = buttonBgcolor;
    });
    }
