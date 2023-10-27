const navBtn = document.querySelector(".navbg .navBtn");
const navbg = document.querySelector(".navbg");
const nav = document.querySelector(".nav");
const arrow = document.querySelector(".arrow");
const namecard = document.querySelector(".namecard");
const profile = document.querySelector(".profile");
const namecardpage = document.querySelector(".namecardpage");
const profilepage = document.querySelector(".profilepage");
const page1 = document.querySelector(".page1");
const page1btn = document.querySelector(".page1btn");
const page2btn = document.querySelector(".page2btn");
const page3btn = document.querySelector(".page3btn");
const page2 = document.querySelector(".page2");
const page3 = document.querySelector(".page3");
console.log(navBtn);

let navBtni = true;
navBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("LeftBtnClick");
  if (navBtni == true) {
    nav.style.left = "-200px";
    navbg.style.left = "-125px";
    arrow.style.transform = "rotate(0deg)";
    navBtni = false;
  } else {
    nav.stlye.left = "-30px";
    navbg.stlye.left = "50px";
    arrow.style.transform = "rotate(180deg)";
    navBtni = true;
  }
});

let namecardi = true;
namecard.addEventListener("click", () => {
  console.log("namecardepage");
  namecardpage.style.display = "flex";
  profilepage.style.display = "none";
  page1.style.display = "none";
  page2.style.display = "none";
  page3.style.display = "none";
  /* page2.style.display='none'
    page3.style.display = 'nane' */
  /* if(namecardi == true){
        namecardpage.style.opacity='1'
        profilepage.style.display='none'
        page1.style.opacity = '0'
        namecardi=false
    }
    else{
        namecardpagel.style.opacity = '1'
        profilepage.style.display = 'none'
        pagel.style.opacity ='0'
        namecardi = true
    } */
});
profile.addEventListener("click", () => {
  console.log("profileBtn");
  namecardpage.style.display = "none";
  profilepage.style.display = "block";
  page1.style.display = "none";
  page2.style.display = "none";
  page3.style.display = "none";
});

pahe1btn.addEventListener("click", () => {
  console.log("port1");
  namecardpage.style.display = "none";
  profilepage.style.display = "none";
  page1.style.display = "flex";
  page2.style.display = "none";
  page3.style.display = "none";
});
pahe2btn.addEventListener("click", () => {
  console.log("port1");
  namecardpage.style.display = "none";
  profilepage.style.display = "none";
  page1.style.display = "none";
  page2.style.display = "flex";
  page3.style.display = "none";
});
pahe3btn.addEventListener("click", () => {
  console.log("port1");
  namecardpage.style.display = "none";
  profilepage.style.display = "none";
  page1.style.display = "none";
  page2.style.display = "none";
  page3.style.display = "flex";
});
