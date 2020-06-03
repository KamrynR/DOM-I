const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navClass = document.getElementsByTagName('a');
navClass[0].textContent = siteContent["nav"]["nav-item-1"];
navClass[1].textContent = siteContent["nav"]["nav-item-2"];
navClass[2].textContent = siteContent["nav"]["nav-item-3"];
navClass[3].textContent = siteContent["nav"]["nav-item-4"];
navClass[4].textContent = siteContent["nav"]["nav-item-5"];
navClass[5].textContent = siteContent["nav"]["nav-item-6"];

let navColor = document.getElementsByTagName('a');
navColor[0].style.color = 'green';
navColor[1].style.color = 'green';
navColor[2].style.color = 'green';
navColor[3].style.color = 'green';
navColor[4].style.color = 'green';
navColor[5].style.color = 'green';

let domIA = document.getElementsByTagName('h1');
domIA[0].textContent = siteContent["cta"]["h1"];

let button1 = document.getElementsByTagName('button');
button1[0].textContent = siteContent["cta"]["button"];

let codeImage = document.getElementById("cta-img");
codeImage.src = siteContent["cta"]["img-src"];

let middleText = document.getElementsByTagName('h4');
middleText[0].textContent = siteContent["main-content"]["features-h4"];
middleText[1].textContent = siteContent["main-content"]["about-h4"];
middleText[2].textContent = siteContent["main-content"]["services-h4"];
middleText[3].textContent = siteContent["main-content"]["product-h4"];
middleText[4].textContent = siteContent["main-content"]["vision-h4"];

let middleTextDis = document.getElementsByTagName('p');
middleTextDis[0].textContent = siteContent["main-content"]["features-content"];
middleTextDis[1].textContent = siteContent["main-content"]["about-content"];
middleTextDis[2].textContent = siteContent["main-content"]["services-content"];
middleTextDis[3].textContent = siteContent["main-content"]["product-content"];
middleTextDis[4].textContent = siteContent["main-content"]["vision-content"];


let middleImage = document.getElementById("middle-img");
middleImage.src = siteContent["main-content"]["middle-img-src"];

let contact1 = document.getElementsByTagName('h4');
contact1[5].textContent = siteContent["contact"]["contact-h4"];

let contact2 = document.getElementsByTagName('p');
contact2[5].textContent = siteContent["contact"]["address"];
contact2[6].textContent = siteContent["contact"]["phone"];
contact2[7].textContent = siteContent["contact"]["email"];

let footer1 = document.getElementsByTagName('p');
footer1[8].textContent = siteContent["footer"]["copyright"]

let moreNavText = document.createElement('p')
moreNavText.textContent = "Sign Up";
moreNavText.style.color = 'green';

let moreNavText2 = document.createElement('p')
moreNavText2.textContent = "Search";
moreNavText2.style.color = 'green';

let moreNav = document.querySelector('nav');
moreNav.appendChild(moreNavText);
moreNav.prepend(moreNavText2);
