/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const navBar = document.querySelector(".navbar__menu");
const navMenu = document.querySelector("#navbar__list");
const main = document.querySelector("main");
const sections = document.querySelectorAll("section");
const sectionDiv = document.querySelectorAll(".landing__container");
const btn = document.querySelector(".btn")



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function scrollForward(num) {
    for (let i = 0; i <= sections.length; i++) {
        if (i == num) {

            let elm = document.getElementById(`section${i + 1}`);
            return elm.scrollIntoView({ behavior: "smooth" });
        }
    }
};

function activeSection(sec) {
    for (let i = 0; i <= sections.length; i++) {
        if (i == sec) {

            let elm = document.getElementById(`section${i + 1}`);

            return elm.getBoundingClientRect().top;
        }
    }

}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav

for (let i = 0; i <= sections.length - 1; i++) {

    const navElm = document.createElement("li");
    navMenu.appendChild(navElm);


    // Scroll to anchor ID using scrollTO event
    //I used a helper function that uses scrollIntoView()

    navElm.innerHTML = `<a class='point' onclick =scrollForward(${i}) >section${(i + 1)}</a>`;

};
//console.log(navMenu);

// **Add class 'active' to Anchor on click**//
const links = document.querySelectorAll('.point');
links.forEach(link => {
    link.classList.add('menu__link');
    link.addEventListener('click', function () {
        links.forEach(lin => lin.classList.remove('active'));
        this.classList.add('active');
    })
});
//console.log(links);





// **Add class 'active' to section when near top of viewport**

window.addEventListener('scroll' , ()=> {
    sections.forEach((sec , index)=>{
        let pos = sec.getBoundingClientRect();
       // const secNav  = sec.getAttribute('data-nav');
        if (pos.top > 0 && pos.top < 300) {
            sections.forEach(actveSec => {
                actveSec.classList.remove('your-active-class');
                //actveSec.style.background="white";
            })
            sec.classList.add('your-active-class');
            //actveSec.style.background="white";
        }
    })
});








//first 


// for (let i = 0; i < sections.length; i++) {

//     let p = activeSection(i);
//     console.log(p);
//     if (p > 0 && p < 600) {
//         // for (let i = 0; i < sections.length; i++) {
//         //     sections[i].addEventListener('scroll', function () {
//         //         sections.forEach(lin => lin.classList.remove('your-active-class'));
//         //         this.classList.add('active');
//                 let current = document.getElementsByClassName('your-active-class');
//                 current[0].className = current[0].className.replace("your-active-class", " ");
//                 this.className += 'active';
//                 //console.log(sec);
//             //})
//        // }
//     }
// }





//second
// sections.forEach(sec => {
//     sec.addEventListener('scroll', function () {

//         if (activeSection(sec) < 0 && activeSection(sec) < 300) {

//             sections.forEach(lin => lin.classList.remove('active'));
//             this.classList.add('active');

//         }
//         else {
//             console.log('failed');
//         }
//     })
// });





/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Scroll to top button 
btn.addEventListener('click', function () {
    scrollTo(0, 0);
});
