let content = document.querySelector(".content");


// DATA RESOURCES
let dataResource = [
    {
        heading: "Turbine",
        content: "Wind turbines convert the kinetic energy in the wind into mechanical power.Wind energy is a very economical spurce of energy as it works with the wind and produces a huge ampunt of electricity",
        imgAlt: "wind"
    }, {
        heading: "Solar",
        content: "Solar energy is derived from the Sun. Solar panels are rapidly becoming an affordable, and is a very good source to harness renewable energy from the sun. and this form of energy can be produced at any part of the globe",
        imgAlt: "solar photovoltaic"
    }, {
        heading: "Hydro",
        content: "Moving water producer Hydro electricity, Human beings have created artificial dams across the world to harness this form of energy, this for of energy is limited as it requires rivers and oceans to produce the energy, infact majority of Canada’s electricity is generated through hydro electricity.",
        imgAlt: "Hydroelectricity"
    },
];

let btns = document.querySelectorAll('.menu a');

// EVENT-OBJECT is accessed 
// as the first parameter of the event-handler
function eventHandler(e) {
    // read the text inside the button
    let btnClass = this.className;

    if (btnClass === "Turbine") {
        content.innerHTML = `<h2>${dataResource[0].heading}</h2>
                            <div class="box">
                                <p>${dataResource[0].content}</p>
                            </div>`;
    } else if (btnClass === "solar") {
        content.innerHTML = `<h2>${dataResource[1].heading}</h2>
                            <div class="box">
                                <p>${dataResource[1].content}</p>
                            </div>`;
    } else {
        content.innerHTML = `<h2>${dataResource[2].heading}</h2>
                            <div class="box">
                                <p>${dataResource[2].content}</p>
                            </div>`;
    }
}
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", eventHandler);
}



// active link button on second navigation
function handleEvent(e) {
    for (let i = 0; i < btns.length; i++) {
        if (btns[i].hasAttribute("id")) {
            btns[i].removeAttribute("id");
        }
    }
    this.setAttribute("id", "active");
}

for (let btn of btns) {
    btn.addEventListener("click", handleEvent);
}
