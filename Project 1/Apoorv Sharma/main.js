setInterval(gettime, 1000);

function gettime(){
    var time = new Date();
    var hr = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    var ses = 'AM';

    if(hr > 11){
        ses = 'PM';
    }

    if(hr > 12){
        hr -= 12;
    }

    if(hr < 10){
        hr = '0' + hr
    }

    if(min < 10){
        min = '0' + min
    }   

    if(sec < 10){
        sec = '0' + sec
    }

    document.getElementById('hrs').innerHTML = hr + ':';
    document.getElementById('min').innerHTML = min + ':';
    document.getElementById('sec').innerHTML = sec;
    document.getElementById('ses').innerHTML = ses;
}

var flag = 0;

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    flag = 1;
}

document.getElementById('mode_button').addEventListener('click', () =>{
    if(flag == 0){
        dark_mode();
    }
    else{
        light_mode();
    }
});

function dark_mode(){
    document.getElementById('body').style.backgroundColor = "#1f1f1f"
    document.getElementById('body').style.color = "rgb(218, 218, 218)"
    document.getElementById('time').style.backgroundColor = "#1f1f1f"
    document.getElementById('litsoclogo').style.backgroundColor = "white"
    flag = 1;
}

function light_mode(){
    document.getElementById('body').style.backgroundColor = "white"
    document.getElementById('body').style.color = "#4b4b4b"
    document.getElementById('time').style.backgroundColor = "#f6f2f2"
    flag = 0;
}

function getinfo(){
    var handle = document.getElementById('cfhandle').value;
    var link = 'https://codeforces.com/api/user.rating?handle=' + handle;

    var check = 1;
    var rating;
    fetch(link)
    .then(res => {
        if(res.ok == false){
            check = false;
            alert("Invalid CodeForces Handle!");
            return;
        }
    }).then(function(){
        if(check == true){
            fetch(link)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.status == false){
                    alert("Invalid Handle!");
                }
                else{
                    document.getElementById('handle').innerHTML = handle;
                    const l = data.result.length;
                    if(l == 0){
                        document.getElementById('rating').innerHTML = '---';
                        document.getElementById('title').innerHTML = 'None. Give a contest first!';
                        document.getElementById('title').style.color = '#4b4b4b';
                    }
                    else{
                        const rating = data.result[l-1].newRating;
                        document.getElementById('rating').innerHTML = rating;
                        if(rating <= 1199){
                            document.getElementById('title').innerHTML = 'Newbie';
                            document.getElementById('title').style.color = 'rgb(128,128,128)';
                        }
                        if(rating >= 1200 && rating <= 1399){
                            document.getElementById('title').innerHTML = 'Pupil';
                            document.getElementById('title').style.color = 'rgb(1,129,0)';
                        }
                        if(rating >= 1400 && rating <= 1699){
                            document.getElementById('title').innerHTML = 'Specialist';
                            document.getElementById('title').style.color = 'rgb(2,168,159)';
                        }
                        if(rating >= 1600 && rating <= 1899){
                            document.getElementById('title').innerHTML = 'Expert';
                            document.getElementById('title').style.color = 'rgb(1,1,255)';
                        }
                        if(rating >= 1900 && rating <= 2099){
                            document.getElementById('title').innerHTML = 'Candidate Master';
                            document.getElementById('title').style.color = 'rgb(129,1,128)';
                        }
                        if(rating >= 2100 && rating <= 2299){
                            document.getElementById('title').innerHTML = 'Master';
                            document.getElementById('title').style.color = 'rgb(254,164,1)';
                        }
                        if(rating >= 2300 && rating <= 2399){
                            document.getElementById('title').innerHTML = 'International Master';
                            document.getElementById('title').style.color = 'rgb(254,165,1)';
                        }
                        if(rating >= 2400 && rating <= 2599){
                            document.getElementById('title').innerHTML = 'Grandmaster';
                            document.getElementById('title').style.color = 'rgb(254,0,1)';
                        }
                        if(rating >= 2600 && rating <= 2999){
                            document.getElementById('title').innerHTML = 'International Grandmaster';
                            document.getElementById('title').style.color = 'rgb(254,0,1)';
                        }
                        if(rating >= 3000){
                            document.getElementById('title').innerHTML = 'Legendary Grandmaster';
                            document.getElementById('title').style.color = 'rgb(254,0,1)';
                        }
                    }
                }
            })
            .catch(err => console.log(err));
        }
    })
}

const buttons = document.querySelectorAll("[data-button]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.dataset.button;
        var offset;
        if(value === "next"){
            offset = 1;
        }
        else{
            offset = -1;
        }
        const slides = button
            .closest("[data-slideshow]")
            .querySelector("[data-slides]");

        const activeSlide = slides.querySelector("[data-active]")

        var newindex = [...slides.children].indexOf(activeSlide) + offset;

        if (newindex < 0) newindex = slides.children.length - 1
        if (newindex >= slides.children.length) newindex = 0
        
        slides.children[newindex].dataset.active = true
        delete activeSlide.dataset.active
    })

})

setInterval(autoscroll, 1500);
function autoscroll(){
    const slides = document.querySelector("[data-slides]")
    const activeSlide = slides.querySelector("[data-active]")
    
    newindex = [...slides.children].indexOf(activeSlide) + 1;

    if (newindex < 0) newindex = slides.children.length - 1
    if (newindex >= slides.children.length) newindex = 0

    slides.children[newindex].dataset.active = true
    delete activeSlide.dataset.active
}