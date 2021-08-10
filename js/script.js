document.addEventListener("DOMContentLoaded", function(){

    const displayAbout = document.getElementById("display-about");
    const displayHome = document.getElementById("display-home");
    const displayWork = document.getElementById("display-work");
    const displayResume = document.getElementById("display-resume");
    const displayContact = document.getElementById("display-contact");
    const sectionAbout = document.getElementById("aboutContent");
    const sectionHome = document.getElementById("homeContent");
    const sectionWork = document.getElementById("workContent");
    const sectionResume = document.getElementById("resumeContent");
    const sectionContact = document.getElementById("contactContent");

    function displayAboutContent() {

        sectionAbout.classList.remove("hide");
        
        sectionHome.classList.add("hide");
        sectionWork.classList.add("hide");
        sectionResume.classList.add("hide");
        sectionContact.classList.add("hide");


    }

    function displayHomeContent() {

        sectionHome.classList.remove("hide");

        sectionAbout.classList.add("hide");
        sectionWork.classList.add("hide");
        sectionResume.classList.add("hide");
        sectionContact.classList.add("hide");


    }
    function displayWorkContent() {

        sectionWork.classList.remove("hide");

        sectionAbout.classList.add("hide");
        sectionHome.classList.add("hide");
        sectionResume.classList.add("hide");
        sectionContact.classList.add("hide");


    }
    function displayResumeContent() {

        sectionResume.classList.remove("hide");

        sectionAbout.classList.add("hide");
        sectionWork.classList.add("hide");
        sectionHome.classList.add("hide");
        sectionContact.classList.add("hide");


    }
    function displayContactContent() {

        sectionContact.classList.remove("hide");

        sectionAbout.classList.add("hide");
        sectionWork.classList.add("hide");
        sectionHome.classList.add("hide");
        sectionResume.classList.add("hide");


    }

    displayAbout.addEventListener("click", displayAboutContent)
    displayHome.addEventListener("click", displayHomeContent)
    displayWork.addEventListener("click", displayWorkContent)
    displayResume.addEventListener("click", displayResumeContent)
    displayContact.addEventListener("click", displayContactContent)
})

