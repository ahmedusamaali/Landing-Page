/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
// get the navigation bar by id
const nav = document.getElementById('navbar__list');
// get tsection by name tag
const sec = document.body.getElementsByTagName('section');


// build the nav
function  navSections() 
{ 
    
    //add anchor link for each section on page 
    for (let i = 0; i < sec.length; i++) 
    {
        //creat a list element to put anchor link on it 
        const list = document.createElement('li');
        //creat an anchor link element
        var aTag = document.createElement('a');
        //set anchor link settings & style
        aTag.setAttribute("href","#" + sec[i].id);
        aTag.innerText = sec[i].getAttribute('data-nav');
        aTag.className='menu__link';
        aTag.style.padding = "1em";
        //add each anchor link to list element
        list.appendChild(aTag);
        //fainally add each list to navigation bar
        nav.appendChild(list);
    }

   
}
//call function
 navSections();

 function setActiveClass ()  
 {
    var anchorLinks = document.querySelectorAll('.navbar__menu a');
    for (let i = 0; i < sec.length; i++) 
    {
        
        //get top bundry of an selected sector
        var offset = Math.floor(sec[i].getBoundingClientRect().top);
        //get bottom bundry of an selected sector
        if(offset < 100 && offset >= -100)
        {
            sec[i].classList.add('your-active-class');
            
        }
        else
            sec[i].classList.remove('your-active-class');
    }
}

//add scroll listener 
window.addEventListener('scroll' ,setActiveClass);

//function scroll when clike on section link
function scrollSections ()
{
    //get anchor links from navgation bar
    var anchorLinks = document.querySelectorAll('.navbar__menu a');
    for (let i = 0; i < anchorLinks.length; i++) 
    {
        // add click event listener 
        anchorLinks[i].addEventListener('click', function selectedLinks() 
        {
            for(i = 0 ; i<sec ; i++){
                sec[i].addEventListener("click",sectionScroll( anchorLinks[i]));
            }
                
        });
    }

};

scrollSections();



