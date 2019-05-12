// Variables
var locationHref = location.href;
var jbSections = document.querySelectorAll('section'), jbSectionsComp = [];

// IE Compatability
for(var i = 0; i < jbSections.length; i++)
    jbSectionsComp.push(jbSections[i]);

// Function Declarations

function scrollWindow(offsetTop) {
    window.scrollTo({
        'behavior' : 'smooth',
        'top': offsetTop
    });
    setTimeout(function() {
        document.querySelector('.hmbgr-menu').parentElement.classList.remove('menu-active');
    }, 500);
}

function windowScrollSections(i) {
        if(this.pageYOffset > jbSectionsComp[i].offsetTop - (this.innerHeight / 2) + 100) 
            jbSectionsComp[i].classList.add('active');
}

// Function Calls

var navLinks = document.querySelectorAll('.nav-link'), navLinksComp = [];
for( var i = 0; i < navLinks.length; i++ )
    navLinksComp.push(navLinks[i]);

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

window.addEventListener('scroll', function() {
    jbSectionsComp.forEach(function(v, i) {
        windowScrollSections(i);
    });
});

// mobile scripts 
document.querySelector('.hmbgr-menu').addEventListener('click', function() {
    this.parentElement.classList.toggle('menu-active');
});