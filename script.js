// DARK MODE
function toggleMode(){
  document.body.classList.toggle("light");
}

// CURSOR
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";
});

// TYPING EFFECT
const text = ["Developer","Designer","Freelancer"];
let i=0,j=0,del=false;

function type(){
  let t = text[i];
  document.querySelector(".typing").innerHTML = t.substring(0,del?j--:j++);

  if(!del && j==t.length){ del=true; setTimeout(type,1000); return;}
  if(del && j==0){ del=false; i=(i+1)%text.length; }

  setTimeout(type,100);
}
type();

// AOS
AOS.init({
  duration:1000
});

// PROJECT LOAD (localStorage)
function loadProjects(){
  let list = document.getElementById("projects-list");
  let projects = JSON.parse(localStorage.getItem("projects")) || ["Website","AI Assistant","Mobile App"];

  list.innerHTML = "";

  projects.forEach(p => {

    let div = document.createElement("calcu.html");
    div.className = "project-card";

    // CLICK EVENT ADD
     div.innerHTML = `
  <h3>${p}</h3>
  <a href="project.html?name=${encodeURIComponent(p)}">View Project</a>
`;
    `;

    list.appendChild(div);
  });
}

loadProjects();
