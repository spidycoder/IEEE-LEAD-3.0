let darkmodebutton = false
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
if (isDarkMode) {
  darkmodebutton = true
  toggleBtn();
}
function toggleBtn(){
  let btn = document.getElementById("btn")
  let btn1 = document.getElementById("btn1")
  btn1.classList.toggle("active")
  let homebg = document.getElementById("homepg")
  homebg.classList.toggle("darkhomebg")
  let aboutbg = document.getElementById("aboutpg")
  aboutbg.classList.toggle("darkaboutbg")
  let skillsbg = document.getElementById("skillspg")
  skillsbg.classList.toggle("darkskillsbg")
  btn.classList.toggle("active")
  let projectbg = document.getElementById("projectpg")
  projectbg.classList.toggle("darkprojectbg")
  let codeforcesbgw = document.getElementById("codeforcespg")
  codeforcesbgw.classList.toggle("darkhomebg")
  let contactbg = document.getElementById("contactpg")
  contactbg.classList.toggle("darkcontactbg")
  if (darkmodebutton == true) {
    darkintro()
    darkmodebutton = false
  }
  else {
    lightintro()
    darkmodebutton = true
  }
}

function lightintro() {
  let intropg = document.getElementById("homepg")
  intropg.innerHTML = `<div class="twoColumns">
  <div class="left">
      <img src="resources/software_development.svg" class="responsive">
  </div>
  <div class="right" class="responsive">
      <p style="padding-top: 70px;">Hi, this is</p>
  <h1 >
      Ayush Kumar
  </h1>
  <p>Welcome to my portfolio</p>
  </div>
</div>`
}
function darkintro() {
  let intropg = document.getElementById("homepg")
  intropg.innerHTML = `<div class="homecontainer">
  <p style="padding-top: 190px;">Hi, this is</p>
  <h1 >
      Ayush Kumar
  </h1>
  <p style="padding-bottom: 180px">Welcome to my portfolio</p>
</div>`
}
// --------------------------------------- SKILLS SLIDER STARTS ---------------------------------------
let i = 0
let skills = document.getElementById("skillspg")

document.addEventListener('scroll', function(){
  let meramarquee= document.getElementById('meramarquee')
  let meramarqueeScrollWidth = meramarquee.scrollWidth
  let scrolling;
  skills.addEventListener('click', function() {
    clearInterval(scrolling)
  })
  if (Math.round(window.scrollY / 100) == 12 && i==0) {
    i+=1
    scrolling = self.setInterval(() => {
      if (meramarquee.scrollLeft !== meramarqueeScrollWidth) {
        meramarquee.scrollTo(meramarquee.scrollLeft + 1, 0)
      }
    }, 2)
  }
})


// --------------------------------------- SKILLS SLIDER ENDS ---------------------------------------

// --------------------------------------- PROGRESS BAR STARTS ---------------------------------------
document.addEventListener("DOMContentLoaded", function(){
  const progressbarinner = document.querySelector('.progress-bar-inner')

  window.addEventListener("scroll", function(){
    let h = document.documentElement
    let st = h.scrollTop || document.body.scrollTop
    let sh = h.scrollHeight || document.body.scrollHeight

    let percent = st / (sh - h.clientHeight) * 100
    progressbarinner.style.width = percent + "%"
  });
});
// --------------------------------------- PROGRESS BAR ENDS ---------------------------------------
let lastscrolldown = window.scrollY
window.addEventListener('scroll', function(){
  if(lastscrolldown < window.scrollY){
    navbar.classList.add("navbarhide")
    progressbar.classList.add("progressbarhide");
  }
  else{
    navbar.classList.remove("navbarhide")
    progressbar.classList.remove("progressbarhide");
  }
  lastscrolldown = window.scrollY
})


let sidebaropen = false
function sidebaron() {
  if (sidebaropen == false){
    document.getElementById("mysidebar").style.width = "250px";
    sidebaropen = true
    console.log("open")
  }
  else{
    document.getElementById("mysidebar").style.width = "0";
    sidebaropen = false
    console.log("close")
  }
}

function sidebaroff() {
  document.getElementById("mysidebar").style.width = "0";
  sidebaropen = false
}
// ---------------------------------------------------------------------------------------------------
let myrating;
async function fetchdata(){
  const response = await fetch("https://codeforces.com/api/user.info?handles=ayushkumarone");
  const Data = await response.json();
  myrating = Data.result[0].rating;
  template = `
  <h1 style="padding: 50px 70px;" class= "codeforcestext">Hi, My codeforces id is 
  <a href = "https://codeforces.com/profile/ayushkumarone" target="_blank" style="text-decoration: none;color: none; font-style: italic; font-weight: bold;">
  ayushkumarone</a> and my rank is ${Data.result[0].rank},<br> My current rating is ${Data.result[0].rating} 
  and maximum rating till now is ${Data.result[0].maxRating}.
  `
  let rating = document.getElementById("myrating");
  rating.innerHTML=template;
}
async function comparerating(){
  let yourid = prompt("Enter your id");
  const response = await fetch("https://codeforces.com/api/user.info?handles="+yourid);
  const Data = await response.json();

  if (Data.status == "OK"){
    template = `
    <h1 style="padding: 10px 70px;" class= "codeforcestext">Hi, <a href = "https://codeforces.com/profile/${yourid}" target="_blank" style="text-decoration: none; color: none;  font-style: italic; font-weight: bold;">
    ${yourid}</a>, your rank is ${Data.result[0].rank},<br> Current rating is ${Data.result[0].rating} 
    and maximum rating till now is ${Data.result[0].maxRating}.
    `
    if (Data.result[0].rating > myrating) {
      template += `<h1 style="padding: 30px 70px;" class= "codeforcestext"> Gonna work upto you   <i class="fa-solid fa-face-laugh-wink"></i>
      `
    }
    let rating = document.getElementById("userrating");
    rating.innerHTML=template;
    let buttonchange = document.getElementById("comparebtn");
    buttonchange.innerHTML = `Other rating`;
  }

  else{
    alert("Enter valid ID")
  }
}

fetchdata()


