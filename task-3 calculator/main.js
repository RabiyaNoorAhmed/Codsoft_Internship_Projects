//Calculator Animation

let btn = document.getElementsByClassName("btn");
let display = document.getElementById("display");
let string = " ";

let box = document.querySelector(".main");
box.addEventListener("mousemove", (e) => {
    let Bwidth = box.offsetWidth;
    let Bheight = box.offsetHeight;
    let centerX = box.offsetLeft + Bwidth / 2;
    let centerY = box.offsetTop + Bheight / 2;
    let eventX = e.clientX - centerX;
    let eventY = e.clientY - centerY;
    let rotateX = (20 * eventY) / (Bheight / 2);
    let rotateY = (-1 * 20 * eventX) / (Bwidth / 2);

    box.style.transform = `perspective(1500px)rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
});

box.addEventListener("mouseenter", () => {
    box.style.transition = "all 0.05s ease";
})

box.addEventListener("mouseleave", () => {
    box.style.transform = `rotateX(${0}deg)  rotateY(${0}deg)`;
    box.style.transition = "all 0.05s ease";
})

// Calculator Logic

Array.from(btn).forEach((element) => {
    element.addEventListener("click", (e) => {
        let val = e.target.innerHTML;
        if (val == "=") {
            string = eval(string);
            display.value = string
        } else if (val == "c") {
            string = "";
            display.value = string;
        } else {
            string = string + val;
            display.value = string;
        }
    })
}
)
