let elHeader = document.createElement("header")
let elheaderContainer = document.createElement("div")
let elLogoImg = document.createElement("img")

let elNavlist = document.createElement("nav")
let navList = ["Bosh sahifa", "Xizmatlar", "Portfolio", "Jamoa", "Blog", "Kontaktlar"]

let elnavAndButtonWrapper = document.createElement("div")
elnavAndButtonWrapper.className = "flex items-center gap-2"

let elButton = document.createElement("a")
elButton.textContent = "+998 90 921 37 11"
elButton.href = "tel:+998909213711"
elButton.className= "w-[159px] py-2 bg-[#00BAFC] text-white font-semibold text-[16px] rounded-[5px] flex justify-center"

document.body.appendChild(elHeader)
elHeader.appendChild(elheaderContainer)
elheaderContainer.appendChild(elLogoImg)
elheaderContainer.appendChild(elnavAndButtonWrapper)

elnavAndButtonWrapper.appendChild(elNavlist)
elnavAndButtonWrapper.appendChild(elButton)

elHeader.className = "shadow-md shadow-gray py-2"
elheaderContainer.className = "w-[1200px] mx-auto px-5 flex items-center justify-between"
elLogoImg.src = "./images/logo.svg"
elLogoImg.alt = "Logo img"
elLogoImg.width = "58"
elLogoImg.height = "20"

navList.forEach(item => {
    let elLink = document.createElement("a")
    
    elLink.textContent = item 
    elLink.className = "p-4"

    elNavlist.appendChild(elLink)
});

let elMain = document.createElement("main")
let elHeroSection = document.createElement("section")
let elHeroSectionContainerWrapper = document.createElement("div")
let elHeroSectionContainer = document.createElement("div")
let Heroh2 = document.createElement("h2")
let Herop = document.createElement("p")
let HeroBtn = document.createElement("button")
let HeroImg = document.createElement("img")

HeroImg.src = "./images/heroimg.png"
HeroImg.alt = "Hero img"
HeroImg.width = "458"
HeroImg.height = "258"

HeroBtn.textContent = ("Xizmatlar bilan tanishish")
Heroh2.textContent = ("Biznesingizni keyingi bosqichga olib chiqing")
Herop.textContent = ("Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar")

document.body.appendChild(elMain)
elMain.appendChild(elHeroSection) 
elHeroSection.appendChild(elHeroSectionContainerWrapper) 
elHeroSectionContainerWrapper.appendChild(elHeroSectionContainer)
elHeroSectionContainer.appendChild(Heroh2)
elHeroSectionContainer.appendChild(Herop)
elHeroSectionContainer.appendChild(HeroBtn)
elHeroSectionContainerWrapper.appendChild(HeroImg)


elHeroSectionContainerWrapper.className = "w-[1200px] mx-auto flex pt-[80px] justify-between"
elHeroSectionContainer.className = "pt-[17px]"
Heroh2.className = "w-[450px] font-bold text-[30px] leading-[39px] mb-4"
Herop.className = "w-[438px] font-normal text-4 leading-[24px] mb-4"
HeroBtn.className = "w-[232px] h-[40px] bg-[#00BAFC] text-white rounded-[5px]"
