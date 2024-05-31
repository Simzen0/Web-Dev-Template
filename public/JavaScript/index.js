const banner = document.getElementById("banner");
const footer = document.getElementById("footer");

const bannerContent = `
  <a href="index.html"><img src="../images/logo.png" alt="Website logo" /></a>

  <div id="navBar">
    <a href="../HTML/index.html" class="active">Home</a>
    <a href="../HTML/goal1.html">Goal 1</a>
    <a href="../HTML/goal2.html">Goal 2</a>
    <a href="../HTML/goal3.html">Goal 3</a>
    <a href="../HTML/team.html">Team</a>
    <a href="../HTML/signup.html">Sign Up</a>    
  </div>
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
footer.innerHTML = footerContent;

const Goaldata = [
    {
        title: "Goal 1: Clean Energy ",
        content:
            " Is about ensuring access to clean and affordable energy, which is key to the development of agriculture, business, communications, education, healthcare and transportation.",
    },
    {
        title: "Goal 2: Climate Action",
        content:
            "The climate crisis continues unabated as the global community shies away from the full commitment required for its reversal",
    },
    {
        title: "Goal 3: Industries , Innovation and Infrastructure",
        content:
            "Seeks to build resilient infrastructure, promote sustainable industrialization and foster innovation.",
    },
    // Add more news items as needed
];

function createNewsColumn() {
    const newsColumn = document.getElementById("goalColumn");

    // Iterate through the newsData array and create news items
    Goaldata.forEach((newsItem) => {
        const div = document.createElement("div");
        div.classList.add("newsItem");

        const title = document.createElement("h3");
        title.textContent = newsItem.title;

        const content = document.createElement("p");
        content.textContent = newsItem.content;

        div.appendChild(title);
        div.appendChild(content);
        newsColumn.appendChild(div);
    });
}

createNewsColumn();

const JSDFdata = [
    {
        title: "SGDs ",
        content:
            " The 2030 Agenda for Sustainable Development, adopted by all United Nations Member States in 2015, provides a shared blueprint for peace and prosperity for people and the planet, now and into the future. At its heart are the 17 Sustainable Development Goals (SDGs), which are an urgent call for action by all countries - developed and developing - in a global partnership.",
    },
];

function createjsdfColumn() {
    const jsdfColumn = document.getElementById("aboutGoals");

    // Iterate through the newsData array and create news items
    JSDFdata.forEach((newItem) => {
        const div = document.createElement("div");
        div.classList.add("newItem");

        const title = document.createElement("h3");
        title.textContent = newItem.title;

        const content = document.createElement("p");
        content.textContent = newItem.content;

        div.appendChild(title);
        div.appendChild(content);
        jsdfColumn.appendChild(div);
    });
}

// Call the function to populate the news column
createjsdfColumn();

const Partnershipdata = [
    {
        title: "Partnerships ",
        content:
            "In March 2023 the world will come together during the UN 2023 Water Conference convened by the UN General Assembly. The parameters of the outcomes of the UN 2023 Water Conference are described in General Assembly resolution 75/212. The mandated outcome document of the Conference is a summary of its proceedings.",
    },
];

function createpartnershipColumn() {
    const partnershipColumn = document.getElementById("partnership");

    // Iterate through the newsData array and create news items
    Partnershipdata.forEach((nextItem) => {
        const div = document.createElement("div");
        div.classList.add("nextItem");

        const title = document.createElement("h3");
        title.textContent = nextItem.title;

        const content = document.createElement("p");
        content.textContent = nextItem.content;

        div.appendChild(title);
        div.appendChild(content);
        partnershipColumn.appendChild(div);
    });
}

// Call the function to populate the news column
createpartnershipColumn();

/*


class News{
    constructor (id, title, img, desc){
    this.id = id;
    this.title = title;
    this.img = img;
    this.desc = desc
    }
}
const info1 = new News (1,"News 1");
const info2 = new News (2,"News 2");
const info3 = new News (3,"News 3");

const Newsinfo = [];
Newsinfo.push(info1)
Newsinfo.push(info2)
Newsinfo.push(info3)


console.log(Newsinfo.length);

Newsinfo.map((item)=>{
    console.log(`item ${item.id}`);
})
function clickHandler(e){
    console.log(e.currentTarget);
    console.log(e.target);
    if (e.currentTarget != e.target){
        const targetID = e.target.id;
        console.log(targetID);
        const item = Newsinfo.find (i => i.id == targetID);
        console.log (item.title);
        if (typeof item !== 'undefined'){
            alert(item.desc);
        }
    }
}
const sectionCenter = document.querySelector("#News-banner");

function loadcontent(){
    let displayitem = Newsinfo.map( (item) =>{
        return `
        <article class="item">
        <img src=${item.img} alt=${item.title} id=${item.id} class="photo"/>
        <div class="item-info">
        <div class ="item-header">
            <h4>${item.title}</h4>
            <h4></h4>
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
    sectionCenter.addEventListener('click', clickHandler);
};

window.addEventListener("DOMContentLoaded", loadcontent, false);

*/
