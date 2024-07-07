function checkR() {
    const List = document.getElementById("UL")
    const LB1 = document.getElementById("LB1")
    const LB2 = document.getElementById("LB2")
    const RB2 = document.getElementById("RB2")
    const RB1 = document.getElementById("RB1")
     List.style.transform = "translateX(-450px)"
     RB1.style.display = "none"
     RB2.style.display = "flex"
     LB1.style.display = "flex"
       RB2.style.visibility = "visible"
  
         
}
function checkL() {
    const List = document.getElementById("UL")
    const LB1 = document.getElementById("LB1")
    const LB2 = document.getElementById("LB2")
    const RB2 = document.getElementById("RB2")
    const RB1 = document.getElementById("RB1")
     List.style.transform = "translateX(0px)"
     RB1.style.display = "flex"
     RB2.style.display = "none"
     LB1.style.display = "none"
      RB2.style.visibility = "hidden"
  
         
}
function checkR2() {
    const List = document.getElementById("UL")
    const LB1 = document.getElementById("LB1")
    const LB2 = document.getElementById("LB2")
    const RB2 = document.getElementById("RB2")
    const RB1 = document.getElementById("RB1")
     List.style.transform = "translateX(-900px)"
     RB1.style.display = "none"
     RB2.style.display = "flex"
     RB2.style.visibility = "hidden"
     LB1.style.display = "none"
     LB2.style.display = "flex"
  
         
}
function checkL2() {
    const List = document.getElementById("UL")
    const LB1 = document.getElementById("LB1")
    const LB2 = document.getElementById("LB2")
    const RB2 = document.getElementById("RB2")
    const RB1 = document.getElementById("RB1")
     List.style.transform = "translateX(-450px)"
     RB1.style.display = "none"
     RB2.style.display = "flex"
      RB2.style.visibility = "visible"
     LB1.style.display = "flex"
     LB2.style.display = "none"
  
         
}






function ShowMore() {
    const subscribtionFeed = document.getElementById("hideList")
    const showMoreBtn = document.getElementById("showMoreBtn")

          subscribtionFeed.style.display ="block"
          showMoreBtn.style.display ="none"
  
}
function ShowLess() {
    const subscribtionFeed = document.getElementById("hideList")
    const showMoreBtn = document.getElementById("showMoreBtn")

          subscribtionFeed.style.display ="none"
          showMoreBtn.style.display ="flex"
   
}




function checkMenu() {
    const Aside = document.getElementById("aside")
    const AsideMiddle = document.getElementById("asideMiddle")
    const AsideRight = document.getElementById("asideRight")
    const MenuOne = document.getElementById("menuOne")
    const MenuTwo = document.getElementById("menuTwo")
    const SlideBar = document.getElementById("SlideBar")
           SlideBar.style.width = "92%"
          MenuOne.style.display = "none"
          MenuTwo.style.display = "block"
          Aside.style.display = "none"
          AsideMiddle.style.display = "flex"
          AsideRight.style.width = "96%"
          AsideRight.style.transition ="0s"
 
}
function checkMenuClose() {
    const Aside = document.getElementById("aside")
    const AsideMiddle = document.getElementById("asideMiddle")
    const AsideRight = document.getElementById("asideRight")
    const MenuOne = document.getElementById("menuOne")
    const MenuTwo = document.getElementById("menuTwo")
    const SlideBar = document.getElementById("SlideBar")
          SlideBar.style.width = "84%"
          MenuOne.style.display = "block"
          MenuTwo.style.display = "none"
          Aside.style.display = "flex"
          AsideMiddle.style.display = "none"
           AsideRight.style.width = "88%"
  
}

function checkBtn() {
    const AllBtn = document.getElementById("all-btn")
         AllBtn.removeAttribute('id')

}

function checkMoreShortsVideo() {
    const HideShorts = document.getElementById("ShortsVideoHider")
    const ShowMButton = document.getElementById("ShowMButton")
    const ShowLButton = document.getElementById("ShowLButton")
           HideShorts.style.display = "flex"
           ShowMButton.style.display = "none"
           ShowLButton.style.display = "flex"
    
}
function checkLessShortsVideo() {
    const HideShorts = document.getElementById("ShortsVideoHider")
    const ShowMButton = document.getElementById("ShowMButton")
    const ShowLButton = document.getElementById("ShowLButton")
           HideShorts.style.display = "none"
           ShowMButton.style.display = "flex"
           ShowLButton.style.display = "none"
    
}
