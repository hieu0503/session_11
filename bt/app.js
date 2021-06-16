// const btn = document.getElementById("btn");
const form = document.getElementById("form");
const div = document.getElementById("div");

form.onsubmit = function(event) {
    event.preventDefault();
    
    // lay du lieu tu nguoi dung
    const title = (form.title.value);
    
    console.log(form.title.value);
    // tao the div
    const newdiv = document.createElement("div");
    // tao p
    const newdiv_check = document.createElement("button");
    const newdiv_value = document.createElement("p");
    const newdiv_d = document.createElement("button");
    const br = document.createElement("br");
    // gan noi dung cho the div, p
    // newdiv_check.innerText = "v";
    newdiv_value.innerText = title;
    newdiv_d.innerText = 'x';

    newdiv_d.addEventListener("mouseenter", function( event ) {
        // highlight the mouseenter target
        event.target.style.backgroundColor = "red";
      
        // reset the color after a short delay
        setTimeout(function() {
          event.target.style.backgroundColor = "";
        }, 500);
    }, false);

    newdiv_check.innerText = "";
    newdiv_check.addEventListener("click", function() {
        if (newdiv_check.innerText == "") {
            newdiv_check.innerText = "ok";
            newdiv_value.style.textDecoration = "line-through";
        } else {
            newdiv_check.innerText = "";
            newdiv_value.style.textDecoration = "none";
        }
    });

    // appendChild vao div
    div.appendChild(newdiv);
    newdiv.appendChild(newdiv_check);
    newdiv.appendChild(newdiv_value);
    newdiv.appendChild(newdiv_d);
    
    
    form.title.value = ''; // sau moi lan nhap se clear o input
    // xoa
    newdiv_d.onclick = function() {
        console.log(newdiv.remove());
    }
}