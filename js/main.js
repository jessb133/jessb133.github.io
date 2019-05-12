// Variables
const jbSections = document.querySelectorAll('section'); 
const jbNavLinks = document.querySelectorAll('.nav-link');
const jbDate = document.querySelector('.jb-date');
let jbSectionsComp = [];
let jbNavLinksComp = [];

[jbSectionsComp, jbNavLinksComp] = [Array.from(jbSections), Array.from(jbNavLinks)];

function scrollWindow(offsetTop) {
    window.scrollTo({
        'behavior': 'smooth',
        'top': offsetTop
    });
    setTimeout(() => {
        document.querySelector('.hmbgr-menu').parentElement.classList.remove('menu-active');
    }, 500);
}

function windowScrollSections(i) {
        if(this.pageYOffset > jbSectionsComp[i].offsetTop - (this.innerHeight / 2) + 100) 
            jbSectionsComp[i].classList.add('active');
}

jbNavLinksComp.forEach(function(v) {
    v.addEventListener('click', function(ev) {
        ev.preventDefault();
        var navLinkTo = v.getAttribute('href');
        scrollWindow(document.getElementById(navLinkTo.substring(1)).offsetTop);
    });
});

setTimeout(function() {
    jbSectionsComp[0].classList.add('active');
}, 500);

window.addEventListener('scroll', () => {
    jbSectionsComp.forEach(function(v, i) {
        windowScrollSections(i);
    });
});

jbDate.textContent = (new Date()).getFullYear();

// Hamburger menu
document.querySelector('.hmbgr-menu').addEventListener('click', function() {
    this.parentElement.classList.toggle('menu-active');
});