/** @type {import('tailwindcss').Config} */


module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'bg-home': "url('./assets/bg-home.png')",
                'sakura3': "url('./assets/sakura3.png')",
                'sakura4': "url('./assets/sakura-2.png')",
                'sakuraroadmap': "url(./assets/roadmapsakura.png)",
                'sakurafooter': "url(./assets/Footer/footer-sakura-2.png)"
            },
            fontFamily: {
                'inter': ['Inter', 'sans-serif'],
                'robotom': ['Roboto Mono', 'sans-serif']
            },
            colors: {
                'countdowbox': '#FFA6CD',
                'countdownborder': '#F486B6',
                'navcolors': '#FFF0F7',
                'Subject': '#EF2D82',
                'monoo': '#000000',
                'Grad': '#FFD9EA',
                'Pinkss': '#FFDEEB'
            }

        }
    },
    plugins: [],
}