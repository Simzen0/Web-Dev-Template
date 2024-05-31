const banner = document.getElementById("banner");
const title = document.getElementById("title");
const intro = document.getElementById("intro");
const accordion = document.getElementById("accordion");
const targets = document.getElementById("targets");
const infographics = document.getElementById("infographics");
const footer = document.getElementById("footer");

const bannerContent = `
  <a href="index.html"><img src="../images/logo.png" alt="Website logo" /></a>

  <div id="navBar">
    <a href="../HTML/index.html" >Home</a>
    <a href="../HTML/goal1.html">Goal 1</a>
    <a href="../HTML/goal2.html">Goal 2</a>
    <a href="../HTML/goal3.html" class="active">Goal 3</a>
    <a href="../HTML/team.html">Team</a>
    <a href="../HTML/signup.html">Sign Up</a>    
  </div>
`;

const titleContent = `
    <h1>
        Goal 3: Build resilient infrastructure, promote sustainable
        industrialization and foster innovation
    </h1>
`;

const introContent = `
    Goal 3 seeks to build resilient infrastructure, promote sustainable
    industrialization and foster innovation. <br /><br />Economic
    growth, social development and climate action are heavily dependent
    on investments in infrastructure, sustainable industrial development
    and technological progress. In the face of a rapidly changing global
    economic landscape and increasing inequalities, sustained growth
    must include industrialization that first of all, makes
    opportunities accessible to all people, and second, is supported by
    innovation and resilient infrastructure. <br /><br />Even before the
    outbreak of the COVID-19 pandemic, global manufacturing - considered
    an engine of overall economic growth - has been steadily declining
    due to tariffs and trade tensions. The manufacturing decline caused
    by the pandemic has further caused serious impacts on the global
    economy. <br /><br />This is primarily due to high inflation, energy
    price shocks, persistent disruptions in the supply of raw materials
    and intermediate goods, and global economic deceleration.
    <br /><br />While LDCs in Asia have made considerable progress,
    African LDCs would need to change the current trajectory and
    accelerate progress significantly to attain the target by 2030.
    However, medium-high and high-technology industries demonstrated
    robust growth rates.   
`;

const accordionContent = `
    <button class="accordionBtn">How much progress have we made?</button>
    
    <div class="panel">
        <p>As of 2022, 95 per cent of the world's population was within reach of a
        mobile broadband network, but some areas remain underserved.

        Investment in research and development globally - as well as financing for
        economic infrastructure in developing countries - has increased, and
        impressive progress has been made in mobile connectivity with almost
        entire world population (97 per cent) living within reach of a mobile cellular signal.</p>
    </div>

    <button class="accordionBtn">What needs to be done?</button>
    
    <div class="panel">
        <p>Investments in infrastructure - transport, irrigation, energy and information and
        communication technology - are crucial to achieving sustainable development and empowering
        communities in many countries. To achieve Goal 9 by 2030, it is also essential to support
        LDCs, invest in advanced technologies, lower carbon emissions and increase mobile broadband access.
        </p>
    </div>

    <button class="accordionBtn">Why should I care?</button>

    <div class="panel">
        <p>Inclusive and sustainable industrialization, together with innovation and infrastructure,
        can unleash dynamic and competitive economic forces that generate employment and income.
        They play a key role in introducing and promoting new technologies, facilitating international
        trade and enabling the efficient use of resources.

        The growth of new industries means improvement in the standard of living for many of us.
        If industries pursue sustainability, this approach will have a positive effect on the environment.
        </p>
    </div>

    <button class="accordionBtn">What is the price of inaction?</button>

    <div class="panel">
        <p>The price is steep. Ending poverty would be more difficult, given the industry's role as a core
        driver of the global development agenda to eradicate poverty and advance sustainable development.
        Additionally, failing to improve infrastructure and promote technological innovation could translate
        into poor health care, inadequate sanitation and limited access to education.
        </p>
    </div>

    <button class="accordionBtn">How can we help?</button>

    <div class="panel">
        <p>Establish standards and promote regulations that ensure company projects and initiatives are
        sustainably managed.

        Collaborate with NGOs and the public sector to help promote sustainable growth within developing
        countries.
        
        Think about how industry impacts on your life and well-being and use social media to push for
        policymakers to prioritize the SDGs.
        </p>
    </div>
`;

const targetsContent = `
    <h2>Goal 3 Targets:</h2>
    <ul>
        <li>Develop quality, reliable, sustainable and resilient infrastructure, including regional and
        transborder infrastructure, to support economic development and human well-being, with a focus
        on affordable and equitable access for all <br /><br /></li>

        <li>Promote inclusive and sustainable industrialization and, by 2030, significantly raise industry's
        share of employment and gross domestic product, in line with national circumstances, and double its
        share in least developed countries <br /><br /></li>

        <li>Increase the access of small-scale industrial and other enterprises, in particular in developing
        countries, to financial services, including affordable credit, and their integration into value chains and markets <br /><br /></li>

        <li>By 2030, upgrade infrastructure and retrofit industries to make them sustainable, with increased
        resource-use efficiency and greater adoption of clean and environmentally sound technologies and industrial
        processes, with all countries taking action in accordance with their respective capabilities <br /><br /></li>

        <li>Enhance scientific research, upgrade the technological capabilities of industrial sectors in all
        countries, in particular developing countries, including, by 2030, encouraging innovation and substantially
        increasing the number of research and development workers per 1 million people and public and private
        research and development spending <br /><br /></li>

        <li>Facilitate sustainable and resilient infrastructure development in developing countries through
        enhanced financial, technological and technical support to African countries, least developed countries,
        landlocked developing countries and small island developing States 18 <br /><br /></li>

        <li>Support domestic technology development, research and innovation in developing countries, including by
        ensuring a conducive policy environment for, inter alia, industrial diversification and value addition to commodities <br /><br /></li>

        <li>Significantly increase access to information and communications technology and strive to provide universal
        and affordable access to the Internet in least developed countries by 2020</li>
    </ul>
`;

const infographicsContent = `
    <img id="infographic1" src="../images/infographic1.png" alt="Infographic" />

    <div id="infographics2">
        <img id="infographic2" src="../images/infographic2.png" alt="Infographic" />

        <div id="infographics3">
            <img id="infographic3" src="../images/infographic3.png" alt="Infographic" />
            <img id="infographic4" src="../images/infographic4.png" alt="Infographic" />
            <img id="infographic5" src="../images/infographic5.png" alt="Infographic" />
        </div>
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
title.innerHTML = titleContent;
intro.innerHTML = introContent;
accordion.innerHTML = accordionContent;
targets.innerHTML = targetsContent;
infographics.innerHTML = infographicsContent;
footer.innerHTML = footerContent;

let accBtns = document.getElementsByClassName("accordionBtn");
let i;

for (i = 0; i < accBtns.length; i++) {
    accBtns[i].addEventListener("click", function () {
        this.classList.toggle("activeBtn");

        let panel = this.nextElementSibling;

        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
