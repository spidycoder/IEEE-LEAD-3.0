puns()

const checkbox = document.querySelector('.slider');

checkbox.addEventListener('click', ()=>{
    const theme = document.documentElement.getAttribute("data-theme");
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
    } else if (theme === "light") {
      document.documentElement.setAttribute("data-theme", "dark");
    }
})

document.querySelector("#hamburg").addEventListener("click", () => {
    const links = document.querySelector(".links").style;
    if(links.top === '' || links.top === '-1000%'){
        links.animation = "dropDown 0.5s 1";
        links.top = "100%";
        document.querySelector(".x").style.display = "flex";
        document.querySelector(".hamburg").style.display = 'none';
    }
    else if(links.top === '100%'){
        links.animation = "dropUp 0.7s 1";
        document.querySelector(".x").style.display = "none";
        document.querySelector(".hamburg").style.display = 'flex';
        links.top = "-1000%";
    }
});

function puns(){
  const req = fetch("https://icanhazdadjoke.com/",{
    method : 'GET',
    headers:{
      'Accept' : 'application/json'
    }
  })
  .then((res)=>res.json())
  .then((data)=>document.querySelector('.pun').innerHTML=data.joke)
  .catch((err)=>document.querySelector('.pun').innerHTML="Connect to internet!")
}
const words = ["Backend Developer .", "Competitive Coder .", "Frontend Developer .", "Teacher ."];
let i = 0;
let timer;

function typingEffect() {
	let word = words[i].split("");
	var loopTyping = function() {
		if (word.length > 0) {
			document.querySelector('.buffer').innerHTML += word.shift();
		} else {
			deletingEffect();
			return;
		};
		timer = setTimeout(loopTyping, 500);
	};
	loopTyping();
};

function deletingEffect() {
	let word = words[i].split("");
	var loopDeleting = function() {
		if (word.length > 0) {
			word.pop();
			document.querySelector('.buffer').innerHTML = word.join("");
		} else {
			if (words.length > (i + 1)) {
				i++;
			} else {
				i = 0;
			};
			typingEffect();
			return;
		};
		timer = setTimeout(loopDeleting, 200);
	};
	loopDeleting();
};

typingEffect();

function rating(){
  fetch("https://codeforces.com/api/user.info?handles=soumyadeepsarkar",{
   method : "GET" 
  })
  .then(res=>res.json())
  .then(data=>document.querySelector(".codeforcesData").innerHTML='<ul><li>Rank -'+ data.result[0].rank +' </li>'+'<li>Maximum Rank -'+ data.result[0].maxRank +' </li>'
  +'<li>Rating -'+ data.result[0].rating +' </li>'+'<li>Maximum Rating -'+ data.result[0].rating +' </li></ul>')
  .catch(err=>document.querySelector(".codeforcesData").innerHTML="Connect to internet")
}

rating();

document.querySelector(".about").addEventListener('click',(event)=>{
  document.querySelector("#About").scrollIntoView({behavior:'smooth'});

})

document.querySelector(".skills").addEventListener('click',(event)=>{
  document.querySelector("#Skills").scrollIntoView({behavior:'smooth'});

})
  // api key = NGk1W2pRs5NHuurRRGxi2YNwzGxFV87bcDjGa9zK
document.querySelector(".projects").addEventListener('click',(event)=>{
  document.querySelector("#Projects").scrollIntoView({behavior:'smooth'});
});

window.addEventListener('scroll',smoothEntry);

function smoothEntry(){
  const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
  const finalPercentage = Math.round((scrollTop + clientHeight) / scrollHeight * 100);
  document.querySelector('.progress-bar').style.width = finalPercentage+"%";
  const divs = document.querySelectorAll(".Downdata");
  divs.forEach((key)=>{
    let heightOfWindow = window.innerHeight;
    let distanceFromTop = key.getBoundingClientRect().top;
    if(distanceFromTop < heightOfWindow){
      key.classList.add("act");
    }else{
      key.classList.remove("act");
    }
  })
}