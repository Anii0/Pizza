const doughbutton = document.getElementById("doughbutton");
const saucebutton = document.getElementById("saucebutton");
const cheesebutton = document.getElementById("cheesebutton");
const olivebutton = document.getElementById("olivebutton");
const mushroombutton = document.getElementById("mushroombutton");
const pepperonibutton = document.getElementById("pepperonibutton");
const pepperbutton = document.getElementById("pepperbutton");
const onionbutton = document.getElementById("onionbutton");
const donebutton = document.getElementById("donebutton");
const pizzadiv = document.getElementById("pizzadiv");
const resetbutton = document.getElementById("resetbutton");
const toppings = document.getElementById("toppings");
const pizzatitle = document.getElementById("pizzatitle");
const cookbutton = document.getElementById("cookbutton");
const finishbutton = document.getElementById("finishbutton");

doughbutton.addEventListener("click", () => {
    const img = document.createElement("img");
    img.src = "images/crust.png";
    img.style.position = "absolute";
    pizzadiv.appendChild(img);
    doughbutton.style.display = "none";
    document.getElementById("saucebutton").style.display = "inline-block";
});

saucebutton.addEventListener("click", () => {
    const img = document.createElement("img");
    img.src = "images/sauce.png";
    img.style.position = "absolute";
    pizzadiv.appendChild(img);
    saucebutton.style.display = "none";
    document.getElementById("cheesebutton").style.display = "inline-block";
});

cheesebutton.addEventListener("click", () => {
    const img = document.createElement("img");
    img.src = "images/cheese.png";
    img.style.position = "absolute";
    pizzadiv.appendChild(img);
    cheesebutton.style.display = "none";
    document.getElementById("toppings").style.display = "inline-block";
    cookbutton.style.display = "none";
});

olivebutton.addEventListener("click", () => {
    const img = document.createElement("img");
    img.src = "images/olive.png";
    img.style.position = "absolute";
    pizzadiv.appendChild(img);
    olivebutton.style.display = "none";
});

mushroombutton.addEventListener("click", () => {
    const img = document.createElement("img");
    img.src = "images/mushroom.png";
    img.style.position = "absolute";
    pizzadiv.appendChild(img);
    mushroombutton.style.display = "none";
});

pepperbutton.addEventListener("click", () => {
    const img = document.createElement("img");
    img.src = "images/pepper.png";
    img.style.position = "absolute";
    pizzadiv.appendChild(img);
    pepperbutton.style.display = "none";
});

pepperonibutton.addEventListener("click", () => {
    const img = document.createElement("img");
    img.src = "images/meat.png";
    img.style.position = "absolute";
    pizzadiv.appendChild(img);
    pepperonibutton.style.display = "none";
});

olivebutton.addEventListener("click", () => {
    const img = document.createElement("img");
    img.src = "images/olive.png";
    img.style.position = "absolute";
    pizzadiv.appendChild(img);
    olivebutton.style.display = "none";
});

resetbutton.addEventListener("click", () => {
    const images = pizzadiv.querySelectorAll("img");
    images.forEach(img => {
        if (
            img.src.endsWith("images/olive.png") || img.src.endsWith("images/mushroom.png") || img.src.endsWith("images/pepper.png") || img.src.endsWith("images/meat.png")
        )
        pizzadiv.removeChild(img);
        
    });
    olivebutton.style.display = "inline-block";
    mushroombutton.style.display = "inline-block";
    pepperonibutton.style.display = "inline-block";
    pepperbutton.style.display = "inline-block";
});

donebutton.addEventListener("click", () => {
    olivebutton.style.display = "none";
    mushroombutton.style.display = "none";
    pepperonibutton.style.display = "none";
    pepperbutton.style.display = "none";
    resetbutton.style.display = "none";
    donebutton.style.display = "none";
    cookbutton.style.display = "inline-block";
    pizzatitle.textContent = "Time to Bake!";
});

cookbutton.addEventListener("click", () => {
    const img = document.createElement("img");
    img.src = "images/oven.png";
    img.style.position = "absolute";
    pizzadiv.appendChild(img);
    cookbutton.style.display = "none";
    pizzatitle.textContent = "Wait For It...";
    setTimeout(() => {
        document.getElementById("finishbutton").style.display = "inline-block";
        pizzatitle.textContent = "It's Ready!";
    }, 3000);
});

finishbutton.addEventListener("click", () => {
    const images = pizzadiv.querySelectorAll("img");
    images.forEach(img => {
        if (
            img.src.endsWith("images/oven.png")
        )
        pizzadiv.removeChild(img);
        
    });
    pizzatitle.textContent = "Enjoy!!";
    finishbutton.style.display = "none";
});

