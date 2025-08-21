// let lightmode = localStorage.getItem('lightmode')
// const themeSwitch = document.getElementById('theme-switch')

// const enableLightmode = () => {
//     document.body.classList.add('lightmode')
//     localStorage.setItem('lightmode', 'active')
// }

// const disableLightmode = () => {
//     document.body.classList.remove('lightmode')
//     localStorage.setItem('lightmode', 'null')
// }

// // Initialize theme on page load
// if (lightmode === "active") {
//     document.body.classList.add('lightmode')
// }

// themeSwitch.addEventListener("click", () => {
//     lightmode = localStorage.getItem('lightmode') // ← ADD THIS LINE
//     lightmode !== "active" ? enableLightmode() : disableLightmode()
// })


// document.addEventListener('DOMContentLoaded', function() {
//     const themeSwitch = document.getElementById('theme-switch')
    
//     if (!themeSwitch) {
//         console.error('Theme switch element not found!')
//         return
//     }

//     const enableLightmode = () => {
//         console.log('Enabling light mode')
//         document.body.classList.add('lightmode')
//         localStorage.setItem('lightmode', 'active')
//     }

//     const disableLightmode = () => {
//         console.log('Disabling light mode')
//         document.body.classList.remove('lightmode')
//         localStorage.setItem('lightmode', null)
//     }

//     // Initialize theme on page load
//     const savedTheme = localStorage.getItem('lightmode')
//     if (savedTheme === 'active') {
//         enableLightmode()
//     }

//     // Add event listener with event capturing
//     themeSwitch.addEventListener('click', (event) => {
//         // Prevent any issues with clicking on SVG elements
//         event.preventDefault()
//         event.stopPropagation()
        
//         const currentTheme = localStorage.getItem('lightmode')
//         console.log('Button clicked! Current theme:', currentTheme)
        
//         if (currentTheme === 'active') {
//             disableLightmode()
//         } else {
//             enableLightmode()
//         }
//     }, true) // The 'true' parameter enables event capturing
// })

document.addEventListener('DOMContentLoaded', function () {
    const themeSwitch = document.getElementById('theme-switch');

    if (!themeSwitch) {
        console.error('Theme switch element not found!');
        return;
    }

    const enableLightmode = () => {
        console.log('Enabling light mode');
        document.documentElement.classList.add('lightmode');
        localStorage.removeItem('darkmode');
    };

    const enableDarkmode = () => {
        console.log('Enabling dark mode');
        document.documentElement.classList.remove('lightmode');
        localStorage.setItem('darkmode', 'active');
    };

    const darkModeActive = localStorage.getItem('darkmode');
    if (darkModeActive === 'active') {
        enableDarkmode();
    } else {
        enableLightmode();
    }

    themeSwitch.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();

        const darkModeActive = localStorage.getItem('darkmode');
        if (darkModeActive === 'active') {
            enableLightmode();
        } else {
            enableDarkmode();
        }
    }, true);
});
