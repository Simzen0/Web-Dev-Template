const banner = document.getElementById("banner");
const teamOverview = document.getElementById("teamOverview");
const teamMember1 = document.getElementById("teamMember1");
const teamMember2 = document.getElementById("teamMember2");
const teamMember3 = document.getElementById("teamMember3");
const footer = document.getElementById("footer");

const bannerContent = `
  <a href="index.html"><img src="../images/logo.png" alt="Website logo" /></a>

  <div id="navBar">
    <a href="../HTML/index.html" >Home</a>
    <a href="../HTML/goal1.html">Goal 1</a>
    <a href="../HTML/goal2.html">Goal 2</a>
    <a href="../HTML/goal3.html">Goal 3</a>
    <a href="../HTML/team.html" class="active">Team</a>
    <a href="../HTML/signup.html">Sign Up</a>    
  </div>
`;

const teamOverviewContent = `
  <h1 id="title">
      Team M7: Members
  </h1>
`;

const teamMember1Content = `
  <img src="../images/profile_silhouette-1.png" alt="Picture of Team Member 1 - Simas" />
  <p> Simas was responsible for creating the pages of the second SDG along with the Sign Up form that is 
  used to allow people to join the newsletter for the SDG in order to get up to date information.
  He also was responsible for coordinating the CSS style we ended up on.
  </p>
`;

const teamMember2Content = `
  <img src="../images/profile_silhouette-1.png" alt="Picture of Team Member 2 - Simon" />  
  <p> Simon was responsible for the creation of the home page along with the 3rd goal page.
  He was essential in creating the easy to navigate layout of the home page which is 
  helpful in accomplishing our needs for the website as a team.
  </p>
`;

const teamMember3Content = `
  <img src="../images/profile_silhouette-1.png" alt="Picture of Team Member 3 - Dylan" />
  <p> Dylan was responsible for creating the page you are currently on along with the 2nd goal page
  which was about Climate Action. He was needed to create the team page along with helping in the 
  planning stage of the website before the coding started.
  </p>
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
teamOverview.innerHTML = teamOverviewContent;
teamMember1.innerHTML = teamMember1Content;
teamMember2.innerHTML = teamMember2Content;
teamMember3.innerHTML = teamMember3Content;
footer.innerHTML = footerContent;
