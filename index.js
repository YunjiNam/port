
const clock_contaniner = document.querySelector('.js_clock');
const clock_text = clock_contaniner.querySelector('p');


function get_time() {
    const dates = new Date();
    const hours = dates.getHours();
    const minutes = dates.getMinutes();
    clock_text.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
}

function init() {
    get_time();
    setInterval(get_time, 1000);
}

init();

// 스크롤 탑 버튼

scrollTop('js-button', 200);
        function scrollTop(elem,duration) {
            let target = document.getElementById(elem);
    
            target.addEventListener('click', function() {
                let currentY = window.pageYOffset; 
                let step = duration/currentY > 1 ? 10 : 100;
                let timeStep = duration/currentY * step;
                let intervalID = setInterval(scrollUp, timeStep);
    
                function scrollUp(){
                    currentY = window.pageYOffset;
                    if(currentY === 0) {
                        clearInterval(intervalID);
                    } else {
                        scrollBy( 0, -step );
                    }
                }
            });
        }



// 클릭 이미지 체인지 
// function change_img(event, imagename) {
//     var i, tabcontent, tablinks;
    
//     tabcontent = document.querySelectorAll(".tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//     }

//     tablinks = document.querySelectorAll(".tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }

//     document.getElementById(imagename).style.display = "inline-block";
//     event.currentTarget.className += " active";
    
    
// }


// 마우스 오버 이미지 체인지
function change_img(event, imagename) {
    var i, tabcontent, tablinks;
    
    tabcontent = document.querySelectorAll(".tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.querySelectorAll(".tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(imagename).style.display = "inline-block";
    event.currentTarget.className += " active";
}
// 마우스 아웃 디폴트 이미지로
function default_img() {
    tabcontent = document.querySelectorAll(".tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.querySelectorAll(".tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
}

//project mouse in out color change
const project_box1 = document.querySelector('.proj_box1'),
    project_title1 = project_box1.querySelector('.proj_title1'),
    project_text1 = project_box1.querySelector('.proj_text1');

const project_box2 = document.querySelector('.proj_box2'),
    project_title2 = project_box2.querySelector('.proj_title2'),
    project_text2 = project_box2.querySelector('.proj_text2');

const project_box3 = document.querySelector('.proj_box3'),
    project_title3 = project_box3.querySelector('.proj_title3'),
    project_text3 = project_box3.querySelector('.proj_text3');

const change_box = "box_change";
const change_text = "text_change";

// function change_color() {
//     project_box.classList.toggle(change_box);
//     project_title.classList.toggle(change_text);
//     project_text.classList.toggle(change_text);
// }

// function over_change() {
//     project_box.addEventListener('mouseover', change_color);
// }

// over_change();


function change_white1() {
    project_box1.classList.add(change_box);
    project_title1.classList.add(change_text);
    project_text1.classList.add(change_text);
}

function change_black1() {
    project_box1.classList.remove(change_box);
    project_title1.classList.remove(change_text);
    project_text1.classList.remove(change_text);
}

function change_white2() {
    project_box2.classList.add(change_box);
    project_title2.classList.add(change_text);
    project_text2.classList.add(change_text);
}

function change_black2() {
    project_box2.classList.remove(change_box);
    project_title2.classList.remove(change_text);
    project_text2.classList.remove(change_text);
}

function change_white3() {
    project_box3.classList.add(change_box);
    project_title3.classList.add(change_text);
    project_text3.classList.add(change_text);
}

function change_black3() {
    project_box3.classList.remove(change_box);
    project_title3.classList.remove(change_text);
    project_text3.classList.remove(change_text);
}
