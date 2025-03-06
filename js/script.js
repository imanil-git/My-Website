/* ==============================  typing animation  ============================== */

const textArray = [
  "Web Designer",
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "Youtuber",
];
let textIndex = 0; //keeps track of textArray string being typed
let charIndex = 0; //keeps track of how many characters have been typed or deleted
let isDeleting = false;
const typingElement = document.querySelector(".typing");

function typeEffect() {
  let currentText = textArray[textIndex]; // Retrieves the current text from textArray based on textIndex.
  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  typingElement.textContent = currentText.substring(0, charIndex);

  let typingSpeed = isDeleting ? 60 : 100; // Setting typing and deleting speed

  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true; //deleting
    setTimeout(typeEffect, 1000); //Pause before deleting
    return;
  } else if (isDeleting && charIndex === 0) {
    //if deleting is finished and charIndex is 0
    isDeleting = false; //it starts typing
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(typeEffect, 500); //pasuing before typing next word
    return;
  }

  setTimeout(typeEffect, typingSpeed);
}

typeEffect(); // This starts the typing effect when the page loads

// SHORT CODE OF ABOVE
// var typed = new Typed(".typing",{
//     strings:["","Web Designer","Graphic Designer","Youtuber"],
//     typeSpeed:100,
//     BackSpeed:60,
//     loop:true
//}
