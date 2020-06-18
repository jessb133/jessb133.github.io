const app = new Vue({
    el: "#root",
    data: {
        emailActive: true,
        terminalInput: "",
        terminalOpen: false,
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
        },

        terminalClose() {
            this.terminalOpen = false;
        },

        terminalInputEvaluate(input) {
            if (typeof input === 'string') {
                // add nested ifs or switches for more options
                if (input.toLowerCase() === 'snake') {
                    window.open('https://codesandbox.io/s/github/JessLovesCSS/React-Snake');
                }
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

        document.addEventListener('keydown', event => {
            if (event.which === 84) {
                this.terminalOpen = true;
            }

            if (this.terminalOpen && event.which === 13) {
                this.terminalInputEvaluate(this.terminalInput);
            }
        });
    }
});