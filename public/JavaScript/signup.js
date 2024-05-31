const banner = document.getElementById("banner");
const form = document.getElementById("formContainer");
const footer = document.getElementById("footer");

const bannerContent = `
<a href="index.html"><img src="../images/logo.png" alt="Website logo" /></a>

  <div id="navBar">
    <a href="../HTML/index.html">Home</a>
    <a href="../HTML/goal1.html">Goal 1</a>
    <a href="../HTML/goal2.html">Goal 2</a>
    <a href="../HTML/goal3.html">Goal 3</a>
    <a href="../HTML/team.html">Team</a>
    <a href="../HTML/signup.html" class="active">Sign Up</a>    
  </div>
`;

const formContent = `
  <form>
    <h1>Newsletter Sign Up</h1>
    <hr>
    <p>Please fill in this form to sign up for our newsletter.</p>

    <label>First Name</label>
    <input type="text" placeholder="Enter first name" required>

    <label>Last Name</label>
    <input type="text" placeholder="Enter last name" required>

    <label>Email Address</label>
    <input type="text" placeholder="Enter email address" required>

    <label>Comments</label>
    <textarea rows="4" cols="80"></textarea>
    <hr>
  </form>

  <button id="signupBtn" type="submit">Sign Up</button>
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
form.innerHTML = formContent;
footer.innerHTML = footerContent;
