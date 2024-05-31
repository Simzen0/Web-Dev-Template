const banner = document.querySelector("#banner");
const title = document.querySelector("#title");
const footer = document.querySelector("#footer");

const bannerContent = `
  <a href="index.html"><img src="../images/logo.png" alt="Website logo" /></a>

  <div id="navBar">
    <a href="../HTML/index.html" >Home</a>
    <a href="../HTML/goal1.html">Goal 1</a>
    <a href="../HTML/goal2.html" class="active">Goal 2</a>
    <a href="../HTML/goal3.html">Goal 3</a>
    <a href="../HTML/team.html">Team</a>
    <a href="../HTML/signup.html">Sign Up</a>    
  </div>
`;

const titleContent = `
    <h1>
        Goal 2: Clean Energy
    </h1>
`;

const footerContent = `
    © 2023 Sustainable Development Goals. All rights reserved.
    <section id="icons">
        <a
            href="https://www.facebook.com/globalgoalsUN/"
            class="fa fa-facebook"
            target="_blank"
        ></a>
        <a
            href="https://twitter.com/globalgoalsun"
            class="fa fa-twitter"
            target="_blank"
        ></a>
        <a
            href="https://vimeo.com/globalgoalsun"
            class="fa fa-vimeo"
            target="_blank"
        ></a>
        <a
            href="https://www.flickr.com/photos/globalgoalsun/"
            class="fa-brands fa-flickr fa-2xl"
            target="_blank"
        ></a>
    </section>
`;

banner.innerHTML = bannerContent;
title.innerHTML = titleContent;
footer.innerHTML = footerContent;

class Energy {
    constructor(id, title, img, desc) {
        this.id = id;
        this.title = title;
        this.img = img;
        this.desc = desc;
    }
}
const info1 = new Energy(
    1,
    "Solar Farms",
    "../images/solar-farm.jpeg",
    "Solar farms are an amazing way to generate electricity through conductive methods even a small soloar panel the size of a phone will constantly produce electricity to charge anything from a mobile phone to a laptop as long as there is sunlight and even on cloudy days. Solar technologies can deliver heat, cooling, natural lighting, electricity, and fuels for a host of applications."
);
const info2 = new Energy(
    2,
    "Wind Turbines",
    "../images/Windfarm1.jpg",
    "Wind energy harnesses the kinetic energy of moving air by using large wind turbines located on land (onshore) or in sea- or freshwater (offshore). Wind energy has been used for millennia, but onshore and offshore wind energy technologies have evolved over the last few years to maximize the electricity produced - with taller turbines and larger rotor diameters. Though average wind speeds vary considerably by location, the worlds technical potential for wind energy exceeds global electricity production, and ample potential exists in most regions of the world to enable significant wind energy deployment."
);
const info3 = new Energy(
    3,
    "Hydro Electric",
    "../images/Hydroplant1.png",
    "Hydropower harnesses the energy of water moving from higher to lower elevations. It can be generated from reservoirs and rivers. Reservoir hydropower plants rely on stored water in a reservoir, while run-of-river hydropower plants harness energy from the available flow of the river. Hydropower reservoirs often have multiple uses - providing drinking water, water for irrigation, flood and drought control, navigation services, as well as energy supply. This is currently the largest source of renewable energy."
);

const energies = [];
energies.push(info1);
energies.push(info2);
energies.push(info3);

console.log(energies.length);

energies.map((item) => {
    console.log(`item ${item.id}`);
});
function clickHandler(e) {
    console.log(e.currentTarget);
    console.log(e.target);
    if (e.currentTarget != e.target) {
        const targetID = e.target.id;
        console.log(targetID);
        const item = energies.find((i) => i.id == targetID);
        console.log(item.title);
        if (typeof item !== "undefined") {
            alert(item.desc);
        }
    }
}
const sectionCenter = document.querySelector("#section-center");

function loadcontent() {
    let displayitem = energies.map((item) => {
        return `
        <article class="item">
        <img src=${item.img} alt=${item.title} id=${item.id} class="photo"/>
        
        <div class="item-info">
        <div class ="item-header">
            <h4>${item.title}</h4>
        </div>
            <p class ="item-texe">
            ${item.desc}
            </p>
        
        </div>
        <div id="result"></div>
        </article>
        `;
    });
    displayitem = displayitem.join("");
    console.log(displayitem);
    sectionCenter.innerHTML = displayitem;
    sectionCenter.addEventListener("click", clickHandler);
}

window.addEventListener("DOMContentLoaded", loadcontent, false);
