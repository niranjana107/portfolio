// ==============================
// Typing Effect
// ==============================

const roles = [
    "Web Developer",
    "Computer Science Student",
    "Frontend Designer",
    "C++ Programmer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const heading = document.querySelector(".hero-text h2");

function typeEffect() {

    if (!heading) return;

    const currentRole = roles[roleIndex];

    if (!deleting) {
        heading.textContent = currentRole.substring(0, charIndex++);
    } else {
        heading.textContent = currentRole.substring(0, charIndex--);
    }

    let speed = 120;

    if (!deleting && charIndex === currentRole.length + 1) {
        deleting = true;
        speed = 1500;
    }

    if (deleting && charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// ==============================
// Download Resume Button
// ==============================

const resumeBtn = document.querySelector("button");

resumeBtn.addEventListener("click", () => {

    window.open("resume.pdf", "_blank");

});


// ==============================
// Reveal Sections on Scroll
// ==============================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";
        }

    });

},{
    threshold:0.2
});

sections.forEach(section=>{

    section.style.opacity="0";
    section.style.transform="translateY(80px)";
    section.style.transition="1s";

    observer.observe(section);

});


// ==============================
// Active Navigation
// ==============================

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 150;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});


// ==============================
// Scroll To Top Button
// ==============================

const topBtn = document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.style.position="fixed";
topBtn.style.bottom="30px";
topBtn.style.right="30px";
topBtn.style.width="55px";
topBtn.style.height="55px";
topBtn.style.borderRadius="50%";
topBtn.style.display="none";
topBtn.style.fontSize="20px";
topBtn.style.cursor="pointer";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

};


// ==============================
// Skill Animation
// ==============================

const skills=document.querySelectorAll(".skill");

skills.forEach((skill,index)=>{

    skill.style.opacity="0";
    skill.style.transform="translateY(30px)";

    setTimeout(()=>{

        skill.style.transition="0.8s";
        skill.style.opacity="1";
        skill.style.transform="translateY(0)";

    },300*index);

});


// ==============================
// Project Hover Animation
// ==============================

const cards=document.querySelectorAll(".project-card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="scale(1.05)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="scale(1)";

    });

});