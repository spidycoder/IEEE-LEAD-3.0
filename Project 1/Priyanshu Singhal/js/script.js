/*--------- TYPING ANIMATION -----------*/

var typed = new Typed(".typing", {
    strings:["","Competitve Programmer","Web Developer","Sophomore at BIT MESRA"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

/*--------- Aside -----------*/

const nav = document.querySelector(".nav"),
    navList=nav.querySelectorAll("li"),
    totalNavList= navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection= allSection.length;
    for(let i =0;i<totalNavList;i++){
        const a=navList[i].querySelector('a');
        a.addEventListener("click" ,function(){
             removeBackSection();
            for(let j=0;j<totalNavList ;j++){
                if(navList[j].querySelector("a").classList.contains("active")){
                    addBackSection(j);
                   // allSection[j].classList.add("back-section");
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active");
            showSection(this);
            if(window.innerWidth < 1200){
                asideSectionTogglerBtn();
            }
        })

    }
    function removeBackSection(){
        for(let i =0;i<totalSection;i++){
            allSection[i].classList.remove("back-section")
        }
    }
    function addBackSection(num)
    {
        allSection[num].classList.add("back-section");
    }
    function showSection(element){
        for(let i =0;i<totalSection;i++){
            allSection[i].classList.remove("active")
        }
        const target=element.getAttribute("href").split("#")[1];
        document.querySelector('#' + target).classList.add("active")
    }
    function updateNav(element)
    {
        for(let i =0;i<totalNavList ;i++)
        {
            navList[i].querySelector("a").classList.remove("active");
            const target =element.getAttribute("href").split("#")[1];
            if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
            {
             navList[i].querySelector("a").classList.add("active");
            }
       }
    }
    document.querySelector(".hire-me").addEventListener("click" ,function()
    {
        const sectionIndex = this.getAttribute("data-section-index");  
        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex);
    })
    const navTogglerBtn = document.querySelector(".nav-toggler")
          aside= document.querySelector(".aside");
          navTogglerBtn.addEventListener("click" , ()=>{
            asideSectionTogglerBtn();
          })
          function asideSectionTogglerBtn(){
            aside.classList.toggle("open");
            navTogglerBtn.classList.toggle("open");
            for(let i =0;i<totalSection ;i++){
                allSection[i].classList.toggle("open");
            }
          }
 
/*--------- CP section -----------*/

let rankMap = new Map([
    ["newbie", "grey"],
    ["pupil", "green"],
    ["specialist", "darkcyan"],
    ["expert", "blue"],
    ["candidate master", "purple"],
    ["master", "orange"],
    ["international master", "orange"],
    ["grandmaster", "red"],
    ["international grandmaster", "red"],
    ["legendary grandmaster", "rgb(150,0,0)"],
]);

var rating = document.getElementById("rating");
var maxRating = document.getElementById("max-rating");
var rank = document.getElementById("rank");
var maxRank = document.getElementById("max-rank");
var profileLink = document.getElementById("profile-link");
var curClass = document.getElementsByClassName("cf-stats-cur");
var maxClass = document.getElementsByClassName("cf-stats-max");
var cpInputField = document.getElementById("cp-input-field");
var cpButton = document.getElementById("cp-btn");


function updateCPSection(handle_name) {
    function work(data) {
        console.log(data.result.length);
        if (data.result[0].rank == undefined) {
            var cfRankCur = data.result[0].rank;
            var cfRankMax = data.result[0].maxRank;
            var cfRatingCur = data.result[0].rating;
            var cfRatingMax = data.result[0].maxRating;
            var profileName = data.result[0].handle;

            rating.innerText = "Current Rating : Unrated";
            maxRating.innerText = "Max Rating : Unrated";
            rank.innerText = "Current Rank : - ";
            maxRank.innerText = "Max Rank : - ";
            profileLink.innerText = profileName;
            profileLink.href = "https://codeforces.com/profile/" + profileName;
            profileLink.style.backgroundColor = "black";

            for (var i = 0; i < curClass.length; i++) {
                curClass[i].style.color = "black";
            }

            for (var i = 0; i < maxClass.length; i++) {
                maxClass[i].style.color = "black";
            }
        } else {
            var cfRankCur = data.result[0].rank;
            var cfRankMax = data.result[0].maxRank;
            var cfRatingCur = data.result[0].rating;
            var cfRatingMax = data.result[0].maxRating;
            var profileName = data.result[0].handle;

            rating.innerText = "Current Rating : " + cfRatingCur;
            maxRating.innerText = "Max Rating : " + cfRatingMax;
            rank.innerText = "Current Rank : " + cfRankCur;
            maxRank.innerText = "Max Rank : " + cfRankMax;
            profileLink.innerText = profileName;
            profileLink.href = "https://codeforces.com/profile/" + profileName;
            profileLink.style.backgroundColor = rankMap.get(cfRankCur);

            for (var i = 0; i < curClass.length; i++) {
                curClass[i].style.color = rankMap.get(cfRankCur);
            }

            for (var i = 0; i < maxClass.length; i++) {
                maxClass[i].style.color = rankMap.get(cfRankMax);
            }
        }

         // console.log(data);
    }

    $.ajax({
        url: "https://codeforces.com/api/user.info?handles=" + handle_name,
        method: "GET",
        success: work,
        error:() => {
            alert("User Not Found!");
        }
    });
}


cpInputField.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        updateCPSection(cpInputField.value);
    }
});

cpButton.addEventListener("click", () => {
    updateCPSection(cpInputField.value);
});

updateCPSection("sarvjot");


