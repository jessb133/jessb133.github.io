// Variables
const locationHref = location.href;
const jbSections = document.querySelectorAll('section'); 
const navLinks = document.querySelectorAll('.nav-link');
let jbSectionsComp = [];
let navLinksComp = [];

// Nodelist to Array
function nodelistToArray(nodes) {
    let arrCollection = [];

    for(var i = 0; i < nodes.length; i++) {
        arrCollection.push(nodes[i]);
    }

    return arrCollection;
}

[jbSectionsComp, navLinksComp] = [nodelistToArray(jbSections), nodelistToArray(navLinks)];

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

navLinksComp.forEach(function(v) {
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

// Hamburger menu
document.querySelector('.hmbgr-menu').addEventListener('click', function() {
    this.parentElement.classList.toggle('menu-active');
});