const messagesRef = firebase.firestore();


document.addEventListener("DOMContentLoaded", function () {

    const displayAbout = document.getElementById("display-about");
    const displayHome = document.getElementById("display-home");
    const displayWork = document.getElementById("display-work");
    const displayResume = document.getElementById("display-resume");
    const displayContact = document.getElementById("display-contact");
    const learnMore = document.getElementById("learnMore");
    const contactMe = document.getElementById("contactMe");
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

        displayAbout.setAttribute("style", "color: orange;");

        displayHome.setAttribute("style", "color: white;");
        displayWork.setAttribute("style", "color: white;");
        displayResume.setAttribute("style", "color: white;");
    }

    function learnMoreAbout() {
        displayAboutContent();
    }
    function contactMeContact() {
        displayContactContent();
    }
    function displayHomeContent() {

        sectionHome.classList.remove("hide");

        sectionAbout.classList.add("hide");
        sectionWork.classList.add("hide");
        sectionResume.classList.add("hide");
        sectionContact.classList.add("hide");

        displayHome.setAttribute("style", "color: orange;");

        displayAbout.setAttribute("style", "color: white;");
        displayWork.setAttribute("style", "color: white;");
        displayResume.setAttribute("style", "color: white;");

    }
    function displayWorkContent() {

        sectionWork.classList.remove("hide");

        sectionAbout.classList.add("hide");
        sectionHome.classList.add("hide");
        sectionResume.classList.add("hide");
        sectionContact.classList.add("hide");

        displayWork.setAttribute("style", "color: orange;");

        displayAbout.setAttribute("style", "color: white;");
        displayHome.setAttribute("style", "color: white;");
        displayResume.setAttribute("style", "color: white;");


    }
    function displayResumeContent() {

        sectionResume.classList.remove("hide");

        sectionAbout.classList.add("hide");
        sectionWork.classList.add("hide");
        sectionHome.classList.add("hide");
        sectionContact.classList.add("hide");

        displayResume.setAttribute("style", "color: orange;");

        displayAbout.setAttribute("style", "color: white;");
        displayWork.setAttribute("style", "color: white;");
        displayHome.setAttribute("style", "color: white;");


    }
    function displayContactContent() {

        sectionContact.classList.remove("hide");

        sectionAbout.classList.add("hide");
        sectionWork.classList.add("hide");
        sectionHome.classList.add("hide");
        sectionResume.classList.add("hide");

        displayResume.setAttribute("style", "color: white;");
        displayAbout.setAttribute("style", "color: white;");
        displayWork.setAttribute("style", "color: white;");
        displayHome.setAttribute("style", "color: white;");


    }

    document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
    e.preventDefault();
    
    const name = getInputVal('name');
    const email = getInputVal('email');
    const message = getInputVal('message');

    //save message
    saveMessage(name, email, message);

    //show alert
    document.querySelector('.alert').style.display = 'block';

    //Hide alert after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);

  document.getElementById('contactForm').reset();  
}

// function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, message){
    messagesRef.collection("messages").add({
        name: name,
        email: email,
        message: message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    }).then(function (docRef){
        console.log("Your message has been sent and will be replied soon!ID:",docRef.id);
    }).catch(function (error){
        console.error("Error sending your message",error);
    });


   
}

    displayAbout.addEventListener("click", displayAboutContent)
    displayHome.addEventListener("click", displayHomeContent)
    displayWork.addEventListener("click", displayWorkContent)
    displayResume.addEventListener("click", displayResumeContent)
    displayContact.addEventListener("click", displayContactContent)
    learnMore.addEventListener("click", learnMoreAbout)
    contactMe.addEventListener("click", contactMeContact)
})

