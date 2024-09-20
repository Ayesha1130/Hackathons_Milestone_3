"use strict";
const resumeGenerated = document.getElementById('container');
const resumeDisplayed = document.getElementById('Resume-generate');
// Function to generate resume
resumeGenerated.addEventListener('submit', (event) => {
    event.preventDefault();
    // resumeDisplayed.
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('tel').value;
    const dob = document.getElementById('dob').value;
    const education = document.getElementById('education').value;
    const work = document.getElementById('work').value;
    const skills = document.getElementById('skills').value;
    // Generate Resume Dynamically
    const resumeHTML = `


    <form>
    <fieldset>
    <legend><h3>Dynamic Resume</h3></legend>
    <label>Name</label>
    <input type="text" id="name" name="name" required>
    <label>Email</label>
    <input type="email" id="email" name="email" required>
    <label>Phone Number</label>
    <input type="tel" id="tel" name="tel" required>
    <label>Date of Birth</label>
    <input type="date" id="dob" name="dob" required>
    <label>Education</label>
    <textarea id="education" name="education" cols="30" rows="10" required>${education}</textarea>
    <label>Work Experience</label>
    <textarea id="work" name="work" cols="30" rows="10" required>${work}</textarea>
    <label>Skills</label>
    <textarea id="skills" name="skills" cols="30" rows="10" required>${skills}</textarea>
    </fieldset>
    </form>
    
   `;
    if (resumeDisplayed) {
        resumeDisplayed.innerHTML = resumeHTML;
    }
    else {
        console.error("Cotent Is Missing");
    }
});
