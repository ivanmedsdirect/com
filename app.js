const header = document.querySelector(".header");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function(){
    const scrollHeight = window.pageYOffset;
    const headerHeight = header.getBoundingClientRect().height;
    if (scrollHeight > headerHeight) {
        header.classList.add("fixed-nav");
        console.log(headerHeight)
    } else{
        header.classList.remove("fixed-nav");
    }
    if (scrollHeight > 500) {
        topLink.classList.add("scroll-link");
    } else {
        topLink.classList.remove("scroll-link");
    }
})

const navs = document.querySelectorAll (".nav")

    navs.forEach( function (nav){
        const subNav = nav.querySelector(".sub-nav")

        

        nav.addEventListener("click", function(){
          /*  console.log("hello");*/

            navs.forEach(function(navo){
                const subNavo = navo.querySelector(".sub-nav");

                if(navo !== nav) {
             /*       console.log("not"); */
                    subNavo.classList.remove("show-sub-nav");
                }
            })

            subNav.classList.toggle("show-sub-nav");
        })

} )

/*
window.addEventListener("DOMContentLoaded", function(){
    const equipmentPicturesContainers = querySelectorAll(".equipment-pictures-container")   
    equipmentPicturesContainers.forEach( function(equipmentPicturesContainer){
        const equipmentParag = equipmentPicturesContainer.querySelector(".equipment-pictures-p");
        const equipmentPics = equipmentPicturesContainer.querySelector(".equipment-img");
        const equipmentPicsAlt = equipmentPics.getAttribute("alt"); 
        })
   
    equipmentParag.innerHTML=    equipmentPicsAlt;
})
*/
const servicesSublists = document.querySelectorAll(".services-sublist");

servicesSublists.forEach(function(servicesSublist){
   const fontAwesome = servicesSublist.querySelector(".font-awesome");
   const brownP = servicesSublist.querySelector(".brown-p");

   fontAwesome.addEventListener("click", function(){

   servicesSublists.forEach(function(servicesSublisto){
    const brownPo = servicesSublisto.querySelector(".brown-p");
    const fontAwesomeo = servicesSublisto.querySelector(".font-awesome");

        if(fontAwesomeo !== fontAwesome){
            brownPo.classList.remove("show-brown-p")
            fontAwesomeo.classList.remove("font-awesome-rotate")
            
        }
   })

    brownP.classList.toggle("show-brown-p")
    fontAwesome.classList.toggle("font-awesome-rotate")
   })
  
})

const linksContainer = document.querySelector(".links-container");
const navToggle = document.querySelector(".nav-toggle");

navToggle.addEventListener("click", function() {
    linksContainer.classList.toggle("show-nav");
})

function sendEmail() {
    var params = {
        name : document.getElementById("name").value,
        email : document.getElementById("mail").value,
    }

   

    const serviceID = "service_6hoj3c4";
    const templateID = "template_ohci5ic";

    emailjs.send(serviceID, templateID, params)
    .then(
        res =>{
            document.getElementById("name").value= "";
            document.getElementById("mail").value= "";
            console.log(res);
            document.getElementById("signupmessage").innerHTML = "Hi, You are welcome, Henceforth you will receive email updates from the team!!!"  ;
        }  
    )
    .catch(err => console.log(err));  
}