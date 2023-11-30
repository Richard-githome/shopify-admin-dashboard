// Gloabl DOM for manipulation.....
// const setupMenuTrigger = document.querySelector(".setup-header-container");
const dashboardWatchMan = document.querySelector("#dashboard-status")
const navDOM = document.querySelector(".nav-props-container")
const alertDom = navDOM.querySelector(".nav-notifyProp-container")
const navigationDom = navDOM.querySelector(".nav-profileTab-container")
const navigationMenu = document.querySelector(".nav-drop-down")
const navigationMenuButtonList = navigationMenu.querySelectorAll("button")
const alertMenu = document.querySelector(".nav-notification")
const setupMenuTrigger = document.querySelector("#setup-header-container");
const setupMenu = document.querySelector(".setup-all-content-container");
const menuArray = document.querySelectorAll(".setup-body-container");
const menuBody = document.querySelectorAll(".setup-body-content-container");
const menuImg = document.querySelectorAll(".setup-image-card");
// const svgDivId = ["#not-checked", "#spinner", "#checked"]
const setupBTNTrigger = setupMenuTrigger.querySelector(".setup-svg-container")
const setupExpandTrigger = setupBTNTrigger.querySelector("#setup-svg-expand")
const setupCollapseTrigger = setupBTNTrigger.querySelector("#setup-svg-collapse")


// Functionality for setting initial states on the application...
// Setting the Setup Menu | Accordion 
function resetMenuList(){
    menuArray.forEach((menu)=>{
        menu.classList.remove("setup-body-container-active")
    })
    menuBody.forEach(menu => {
        menu.classList.add("setup-body-content-container-hide")
    });
    menuImg.forEach((img)=>{
        img.classList.remove("setup-image-card-show")
    })
}
resetMenuList()




// Functionality to Collapse Alert Notification Menu
function HideAlert(){
    alertMenu.classList.remove("nav-all-drop-down-show")
    alertDom.setAttribute("aria-expanded", false)
    alertDom.focus()
}

// Functionality to Popup Alert Notification Menu
function PopAlert(){
    navigationMenu.classList.remove("nav-all-drop-down-show")
    navigationDom.setAttribute("aria-expanded", false)
    alertMenu.classList.add("nav-all-drop-down-show")
    alertDom.setAttribute("aria-expanded", true)
    alertMenu.querySelectorAll("button").item(1).focus()

    alertMenu.addEventListener("keyup", function(e){
        if(e.key === "Escape"){
            HideAlert()
    }
    })
}

// Functionality to either Popup/Collapse Alert Notification
alertDom.addEventListener("click", (e)=>{
    e.preventDefault();
    const isExpanded = alertDom.attributes["aria-expanded"].value === "true";

    if(!isExpanded){
        PopAlert()
    } else {
        HideAlert()
    }
})




// Functionality to collapse Navigation Menu List
function HideNavigation(){
    navigationMenu.classList.remove("nav-all-drop-down-show")    
    navigationDom.setAttribute("aria-expanded", false)
    navigationDom.focus()
}

// Functionality to handle Arrow Keypress navigation
function handleMenuItemKeyPress(event, menuItemndex){
    const numOfNavMenuItems = navigationMenuButtonList.length - 1
    const isFirstMenuItem = menuItemndex === 0;
    const isLastMenuItem = menuItemndex === numOfNavMenuItems
    const prevMenuItem = navigationMenuButtonList.item(menuItemndex - 1)
    const nextMenuItem = navigationMenuButtonList.item(menuItemndex + 1)

    if(event.key === "ArrowRight" || event.key === "ArrowDown"){
        // isFirstMenuItem && navigationMenuButtonList.item(numOfNavMenuItems).focus();
        if(isLastMenuItem){
            navigationMenuButtonList.item(0).focus()
            return
        }
        nextMenuItem.focus()
    }
    if(event.key === "ArrowLeft" || event.key === "ArrowUp"){
        // isFirstMenuItem && navigationMenuButtonList.item(numOfNavMenuItems).focus();
        if(isFirstMenuItem){
            navigationMenuButtonList.item(numOfNavMenuItems).focus()
            return
        }
        prevMenuItem.focus()
    }


}

// Functionality to Expand Navigation Menu List
function PopNavigation(){
    alertMenu.classList.remove("nav-all-drop-down-show")
    alertDom.setAttribute("aria-expanded", false)
    navigationMenu.classList.add("nav-all-drop-down-show")    
    navigationDom.setAttribute("aria-expanded", true)
    navigationMenuButtonList.item(0).focus();

    // Handling Escape from Navigation Menu List
    navigationMenu.addEventListener("keyup", function(e){
        e.key === "Escape" && HideNavigation()
    })

    // Handling Arrow keypress navigation
    navigationMenuButtonList.forEach((navigationMenuItem, menuItemndex) => {
        navigationMenuItem.addEventListener("keyup", function(event){
            handleMenuItemKeyPress(event, menuItemndex)
        })
    });
}

// Functionality to Popup/Collapse Navigation Menu | MenuList
navigationDom.addEventListener("click", (e)=>{
    e.preventDefault();
    const isExpanded = navigationDom.attributes["aria-expanded"].value === "true";
    isExpanded ? HideNavigation() : PopNavigation()

})


// Functionality for removing/closing the plan notice
const planDismiss = document.querySelector(".select-plan-close-svg")
planDismiss.addEventListener("click", (e)=>{
    e.preventDefault()
    document.querySelector(".select-plan-wrapper").classList.replace("select-plan-wrapper", "select-plan-wrapper-close")
});


// Functionality to handle setup accordion list expansion...
function HandleSetupExpand(){
    setupMenu.classList.add("setup-all-content-container-toggle")
    setupExpandTrigger.classList.replace("setup-active", "setup-inactive")
    setupCollapseTrigger.classList.replace("setup-inactive", "setup-active")
    setupMenuTrigger.setAttribute("aria-expanded", true);
    setupBTNTrigger.setAttribute("aria-expanded", true);


}
// Functionality to handle setup accordion list collapse...
function HandleSetupCollapse(){
    setupMenu.classList.remove("setup-all-content-container-toggle")
    setupExpandTrigger.classList.replace("setup-inactive", "setup-active")
    setupCollapseTrigger.classList.replace("setup-active", "setup-inactive")
    setupMenuTrigger.setAttribute("aria-expanded", false);
    setupBTNTrigger.setAttribute("aria-expanded", false)

}


// Functionality to Expand/Collapse the Setup | accordion List Section with Setup Arrow Up & Down Buttons
setupBTNTrigger.addEventListener("click", function(){
    const isExpanded = setupMenu.classList.contains("setup-all-content-container-toggle")
        if(isExpanded){
        HandleSetupExpand()
    } else {
        HandleSetupCollapse()
    }
})



// Functioality to Expand/Collapse The Setup List Section By Clicking the Section...
setupMenuTrigger.addEventListener("click", (e)=>{
    e.preventDefault();
    const isExpanded = setupMenu.classList.contains("setup-all-content-container-toggle")
    if(!isExpanded){
        HandleSetupExpand()
    } else {
        HandleSetupCollapse()
    }
})





// Functionality to show each of the accordion | menu list selected : Expands/Collapse or focus. 
const Attri = ["tab-1", "tab-2", "tab-3", "tab-4", "tab-5"]


for (let i = 0; i < Attri.length; i++) {
    const list = document.getElementById(Attri[i])
    list.addEventListener("click", (e)=>{
        e.preventDefault()
        resetMenuList()
        const boxAttriId = list.getAttribute("id")
        if(boxAttriId === Attri[i]){
            list.classList.add("setup-body-container-active")
           menuBody[i].classList.remove("setup-body-content-container-hide")
           menuImg[i].classList.add("setup-image-card-show")
        }
    })
}


// Functionality to Calculate the Array items to keep track on the progress bar and numeric states.
// It was used | called in the main functionality to handle either to check or uncheck...
function sumFXN(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum
}

// Array to keep track of both the progress bar and numeric update of check and uncheck states.
const progressBar = []
const progressNum = []


// Functionality to handle check
function HandleCheck(element, index){
    const totalAccordion = menuArray.length -1;
    // const isFirst = index === 0;
    const isLast = index === totalAccordion;
    // const isFirstAccordion = menuArray.item(0);
    // const isLastAccordion = menuArray.item(totalAccordion);
    const currentAccordion = menuArray.item(index)
    const nextAccordion = menuArray.item(index + 1)
    // const prevAccordion = menuArray.item(index - 1)

    progressBar.push(20)
    progressNum.push(1)
    element.classList.add("check-done")
    element.querySelector("#not-checked").classList.replace("setup-active", "setup-inactive")
    element.querySelector("#spinner").classList.replace("setup-inactive", "setup-active")
    setTimeout(() => {
        element.querySelector("#spinner").classList.replace("setup-active", "setup-inactive")
        element.querySelector("#checked").classList.replace("setup-inactive", "setup-active")
        const progressBarValue = sumFXN(progressBar)
        const progressNumValue = sumFXN(progressNum)
        element.ariaLabel = element.ariaLabel.replace("as done", "as not done")
        dashboardWatchMan.ariaLabel = "You have successfully marked item as done"
        setupMenuTrigger.querySelector("#setup-progress-bar").style["width"] = `${progressBarValue}%`
        setupMenuTrigger.querySelector("#setup-progres-num").innerText = `${progressNumValue} / 5 completed`;
        setTimeout(() => {
            currentAccordion.classList.remove("setup-body-container-active")
           menuBody[index].classList.add("setup-body-content-container-hide")
           menuImg[index].classList.remove("setup-image-card-show")
            resetMenuList();
            if(isLast){
                return
            }
            nextAccordion.classList.add("setup-body-container-active")
           menuBody[index + 1].classList.remove("setup-body-content-container-hide")
           menuImg[index + 1].classList.add("setup-image-card-show")
        }, 300);
    }, 3000);

}


// Functionality to handle uncheck..
function HandleUncheck(element){
    progressBar.pop(20)
    progressNum.pop(1)
    element.classList.remove("check-done")
    element.querySelector("#checked").classList.replace("setup-active", "setup-inactive")
    element.querySelector("#spinner").classList.replace("setup-inactive", "setup-active")
    dashboardWatchMan.ariaLabel = "Loading. Please wait..."
    setTimeout(() => {
        element.querySelector("#spinner").classList.replace("setup-active", "setup-inactive")
        element.querySelector("#not-checked").classList.replace("setup-inactive", "setup-active")
        const progressBarValue = sumFXN(progressBar)
        const progressNumValue = sumFXN(progressNum)
        element.ariaLabel = element.ariaLabel.replace("as not done", "as done")
        dashboardWatchMan.ariaLabel = "You have successfully marked item as not done"
        setupMenuTrigger.querySelector("#setup-progress-bar").style["width"] = `${progressBarValue}%`
        setupMenuTrigger.querySelector("#setup-progres-num").innerText = `${progressNumValue} / 5 completed`
    
    }, 2000);
}


// Main Functionality to handle either to check or uncheck...
menuArray.forEach((element, index )=> {
        const svgItem = element.querySelector(".setup-tag-icon-container")
        svgItem.addEventListener("click", (e)=>{
            e.preventDefault()
            const elementId = svgItem.classList.contains("check-done")
            if(!elementId){
                HandleCheck(svgItem, index)
            } else {
                HandleUncheck(svgItem)
        }
        })
    });

