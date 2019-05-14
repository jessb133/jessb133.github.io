const app = new Vue({
    el: "#root",
    data: {
        emailActive: true,
        sections: [
            { name: "top" },
            { name: "about" },
            { name: "services" },
            { name: "contact" },
        ],
        scrollFadeDebounce: null
    },
    methods: {
        emailHoneypot() {
            this.emailActive = !this.emailActive;
        },

        scrollToSection(event) {
            const navLinkTo = event.target.getAttribute('href');
            window.scrollTo({
                'behavior': 'smooth',
                'top': document.getElementById(navLinkTo.substring(1)).offsetTop
            });
            setTimeout(() => {
                document.querySelector('.hmbgr-menu').parentElement.classList.remove('menu-active');
            }, 500);
        },

        scrollFadeSection() {
            for (let section in this.$refs) {
                if (window.pageYOffset > this.$refs[section].offsetTop - (window.innerHeight / 2) + 100) {
                    this.$refs[section].classList.add('active');
                    if (section === "jbContact") {
                        window.removeEventListener('scroll', this.scrollFadeDebounce);
                    }
                }
            }
        },

        toggleHamburgerMenu(event) {
            event.target.parentElement.classList.toggle('menu-active');
        },

        debounce(fn, time) {
            let timeoutFunction;
            return function () {
                clearTimeout(timeoutFunction);
                timeoutFunction = setTimeout(fn, time);
            }
        }
    },
    computed: {
        theYear() {
            return new Date().getFullYear();
        },
    },
    mounted() {
        this.scrollFadeDebounce = this.debounce(this.scrollFadeSection, 100);

        window.addEventListener('scroll', this.scrollFadeDebounce);

        setTimeout(() => {
            this.$refs.jbTop.classList.add('active');
        }, 500);
    }
});