const banner = document.getElementById("banner");
const title = document.getElementById("title");
const intro = document.getElementById("intro");
const targets = document.getElementById("targets");
const footer = document.getElementById("footer");

const bannerContent = `
  <a href="index.html"><img src="../images/logo.png" alt="Website logo" /></a>

  <div id="navBar">
    <a href="../HTML/index.html">Home</a>
    <a href="../HTML/goal1.html" class="active">Goal 1</a>
    <a href="../HTML/goal2.html">Goal 2</a>
    <a href="../HTML/goal3.html">Goal 3</a>
    <a href="../HTML/team.html">Team</a>
    <a href="../HTML/signup.html">Sign Up</a>    
  </div>
`;

const titleContent = `
    <h1>
        Goal 1: Climate Action
    </h1>
`;

const introContent = `
  Climate change is a real issue that is only recently becoming as serious
  as it always should have been. The effects are visible and will only get
  worse easily leading to catastrophic events like natural disasters, famine,
  drought and flooding, and complete eradication of a significant portion of species.
  <br><br>
  Through education, innovation and adherence to climate commitments we can protect
  our planet. These changes can allow for advances to infrastructure in cities across
  the globe and provide millions of new jobs and unprecedented global cooperation.
`;

const targetsContent = `
  There are 5 targets that we are aiming to meet to meet the aims of Goal 1. These are:<br>
  <ul>
  <li>Strengthen resilience and the capacity to adapt to climate related disasters in all countries affected.</li><br />
  <li>Integrate climate change measures into local, national and global policies and planning.</li><br />
  <li>Educate and build knowledge around climate change.</li><br />
  <li>Implement a un framework convention of climate change which aims to mobilise $100 billion to address
  the needs of developing countries.</li><br />
  <li>Promote measures to raise the capacity for planning and management.</li></ul>

  <div>
    <img id="blogImages" src="../images/blogimages.jpg" alt="Climate Action" />
    <img id="iceberg" src="../images/iceberg.jpeg" alt="Climate Action">
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
targets.innerHTML = targetsContent;
footer.innerHTML = footerContent;
