const navigationList = document.querySelector('#navigationList');
const header = document.querySelector('#header');
const sidebar = document.querySelector('.sidebar');
const hideBar = document.querySelector('#hideBar');
const showTabs = document.querySelector('#tagsListMobile');
const tagsContainer = document.querySelector('.container-tags-list-mobile');
const mobileMenuButton = document.querySelector('#mobileMenuButton');
const mobileMenuImg = document.querySelector('#mobileMenuImg');
const mobileMenuListContainer = document.querySelector('.mobile-menu-list-container');
const mobileNavigationLis = document.querySelector('#mobileNavigationLis');
mobileMenuButton.addEventListener("click",()=>{
  if(mobileMenuImg.classList.contains('mobile-menu-active')){
    mobileMenuImg.classList.remove("mobile-menu-active");
    mobileMenuListContainer.classList.remove("mobile-menu-list-container-active")
  }else{
    mobileMenuImg.classList.add("mobile-menu-active");
    mobileMenuListContainer.classList.add("mobile-menu-list-container-active");
  }
})
showTabs.addEventListener("click",()=>{
  if(tagsContainer.classList.contains('active-tags')){
    tagsContainer.classList.remove("active-tags");
  }else{
    tagsContainer.classList.add("active-tags");
  }
})
hideBar.addEventListener("click",()=>{
  sidebar.classList.remove("sidebar-active");
  sidebar.classList.add("sidebar-unactive");
})
header.addEventListener("click",(ev)=>{
  if(ev.target.id==="sidebarInfo" || ev.target.id==="sidebarAbout"){
    sidebar.classList.remove("sidebar-unactive");
    sidebar.classList.add("sidebar-active");
  }
})
navigationList.addEventListener("click",(ev)=>{
  let arrayListItems = navigationList.childNodes
  if(!ev.target.classList.contains("navigation-list")){
    Array.from(arrayListItems).forEach((elem)=>{
      if(elem.nodeName!=="#text"){
        if(elem.classList.contains("active-listitem")){
          elem.classList.remove("active-listitem");
        }
      }
    })
    ev.target.classList.add("active-listitem");
  }
});
mobileNavigationLis.addEventListener("click",(ev)=>{
  let arrayListItems = mobileNavigationLis.childNodes
  if(!ev.target.classList.contains("mobile-menu-list")){
    Array.from(arrayListItems).forEach((elem)=>{
      if(elem.nodeName!=="#text"){
        if(elem.classList.contains("active-tab")){
          elem.classList.remove("active-tab");
        }
      }
    })
    ev.target.classList.add("active-tab");
    mobileMenuImg.classList.remove("mobile-menu-active");
    mobileMenuListContainer.classList.remove("mobile-menu-list-container-active")
  }
});
