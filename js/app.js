



function toggleMenu() {
    const aside = document.querySelector("#asideBar");
    const menu = document.querySelector(".menu-toggle");
    
    if (aside.classList.contains("active")) {

        aside.classList.remove("active");
    } else {

        aside.classList.toggle("active")
        // aside.style.display="block"
    }
    console.log(aside)
    // console.log(menu)

}

// handle the aside bar click 

document.addEventListener("click",function (e){
    const aside = document.getElementById("asideBar"); 
    const header = document.querySelector("header"); 
    // console.log(header ,"---" , aside); 
    // console.log("second : ",e.target); 
    // console.log("third  : ",aside.contains(e.target)); 
    // console.log("fourth  : ",header.contains(e.target)); 

    if (aside.classList.contains("active")) {
        if ( !aside.contains(e.target) && !header.contains(e.target)) {
            aside.classList.remove("active");
        }
        
    }

});

