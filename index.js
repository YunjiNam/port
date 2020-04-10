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

// const major_click = document.querySelector(".major");
// const img_area = document.querySelector(".img_box");
// const show_major = "insert_img1";

// function major_img() {
//     const has_img = img_area.classList.contains(show_major);
//     if (!has_img) {
//         img_area.classList.add(show_major);
//     }
// }
// function click_major() {
//     major_click.addEventListener("click", major_img);
// }
// click_major();


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
