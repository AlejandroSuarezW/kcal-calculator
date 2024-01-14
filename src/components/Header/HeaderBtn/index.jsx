import PropTypes from 'prop-types';
import { useState, useEffect} from 'react';

HeaderBtn.propTypes = {
    anchor: PropTypes.bool,
    link: PropTypes.string,
};

export default function HeaderBtn({ link, anchor }) {
    const moon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M236.37 139.4a12 12 0 0 0-12-3A84.07 84.07 0 0 1 119.6 31.59a12 12 0 0 0-15-15a108.86 108.86 0 0 0-54.91 38.48A108 108 0 0 0 136 228a107.09 107.09 0 0 0 64.93-21.69a108.86 108.86 0 0 0 38.44-54.94a12 12 0 0 0-3-11.97m-49.88 47.74A84 84 0 0 1 68.86 69.51a84.93 84.93 0 0 1 23.41-21.22Q92 52.13 92 56a108.12 108.12 0 0 0 108 108q3.87 0 7.71-.27a84.79 84.79 0 0 1-21.22 23.41" /></svg>`
    const sun = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M116 36v-4a12 12 0 0 1 24 0v4a12 12 0 0 1-24 0m80 92a68 68 0 1 1-68-68a68.07 68.07 0 0 1 68 68m-24 0a44 44 0 1 0-44 44a44.05 44.05 0 0 0 44-44M51.51 68.49a12 12 0 1 0 17-17l-4-4a12 12 0 0 0-17 17Zm0 119l-4 4a12 12 0 0 0 17 17l4-4a12 12 0 1 0-17-17M196 72a12 12 0 0 0 8.49-3.51l4-4a12 12 0 0 0-17-17l-4 4A12 12 0 0 0 196 72m8.49 115.51a12 12 0 0 0-17 17l4 4a12 12 0 0 0 17-17ZM48 128a12 12 0 0 0-12-12h-4a12 12 0 0 0 0 24h4a12 12 0 0 0 12-12m80 80a12 12 0 0 0-12 12v4a12 12 0 0 0 24 0v-4a12 12 0 0 0-12-12m96-92h-4a12 12 0 0 0 0 24h4a12 12 0 0 0 0-24"/></svg>`
    const [btnIcon, setBtnIcon] = useState(moon)

    let darkMode = localStorage.getItem("darkMode")

    useEffect(() => {
        const darkMode = localStorage.getItem("darkMode");
        if (darkMode === "enabled") {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function enableDarkMode() { 
        document.body.classList.add("dark")
        localStorage.setItem("darkMode", "enabled")
        setBtnIcon(sun)
    }
    function disableDarkMode() { 
        document.body.classList.remove("dark")
        localStorage.setItem("darkMode", null)
        setBtnIcon(moon)
    }
    function toggleDarkMode() {
        darkMode = localStorage.getItem("darkMode")
        if (darkMode !== "enabled") {
            enableDarkMode()
        } else { 
            disableDarkMode()
        }
    }

    if (anchor === true) {
        const logo = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1254.72 1068.14">
                    <path d="m533.65,147.8l137.38,833.27h.03l-137.41-833.27Z" />
                    <polygon points="428.73 749.21 341.67 748.56 344.9 318.92 431.96 319.58 428.73 749.21" />
                    <path d="m1078.53,0H176.1L0,1068.14h1254.72L1078.53,0ZM102.59,981.06L249.98,87.08h273.66l10.01,60.72,137.41,833.27H102.59Zm656.68,0l-53.8-326.3,235.37,201.91,56.69-66.07-314.08-269.46-71.57-434.07h392.77l54.03,327.51-232.3-199.28-56.69,66.07,311.05,266.86,71.39,432.83h-392.86Z" />
                </svg>`;
        return (
            <a className="header-btn" href={ link } dangerouslySetInnerHTML={{ __html: logo }} >
            </a>
        )
    } else {
        return (
            <button className="header-btn" onClick={toggleDarkMode} dangerouslySetInnerHTML={{__html: btnIcon}}>
                
            </button>
        )
    }

}