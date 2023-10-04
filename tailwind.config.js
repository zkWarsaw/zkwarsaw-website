/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./public/**/*.{html,js}'],
    purge: ['./src/**/*.html', './src/**/*.js'],
    theme: {
        extend: {
            colors: {
                brand: {
                    green: '#1BFF68',
                    blue: '#0029D8',
                    'sky-blue': '#06ABF2',
                    gray: '#D9D9D9',
                },
            },
            fontFamily: {
                oxanium: ['Oxanium', 'cursive'],
            },
            backgroundImage: {
                'hero-bg': "url('../img/hero.png')",
                'waves-bg': "url('../img/layered-waves-haikei.svg')",
                'waves-bg-upsd': "url('../img/layered-waves-haikei-upsd.svg')",
            },
            grayscale: {
                80: '80%',
                40: '40%',
                20: '20%',
            },
        },
    },
    plugins: [],
}
