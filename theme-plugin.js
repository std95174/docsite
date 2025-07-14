const plugin = require('tailwindcss/plugin')

module.exports = plugin(
    ({ addComponents, addUtilities }) => {
        addUtilities({
            '.w-safe-xl': {
                width: '1312px',
            },
            '.w-safe-lg': {
                width: '1248px',
            },
            '.w-safe-md': {
                width: 'calc(100vw - 32px)',
            },
            '.w-safe-sm': {
                width: '100vw',
            },
        })
        addComponents({
            '.h1': {
                fontWeight: 800,
                fontSize: '64px',
                lineHeight: '76px',
                fontStretch: '125%',
            },
            '.h2': {
                fontWeight: 800,
                fontSize: '48px',
                lineHeight: '60px',
                fontStretch: '125%',
            },
            '.h3': {
                fontWeight: 800,
                fontSize: '32px',
                lineHeight: '44px',
                fontStretch: '125%',
            },
            '.h4': {
                fontWeight: 700,
                fontSize: '28px',
                lineHeight: '40px',
            },
            '.h5': {
                fontWeight: 700,
                fontSize: '24px',
                lineHeight: '32px',
            },
            '.h6': {
                fontWeight: 700,
                fontSize: '20px',
                lineHeight: '28px',
            },
            '.t-sb': {
                fontWeight: 700,
                fontSize: '14px',
                lineHeight: '20px'
            },
            '.t-bold': {
                fontWeight: 700,
                fontSize: '16px',
                lineHeight: '24px',
            },
            '.gradient-row': {
                background: 'linear-gradient(90deg, #2854F1 0%, #00BAE2 100%)',
            },
            '.gradient-col': {
                background: 'linear-gradient(180deg, #2854F1 0%, #00BAE2 100%)',
            },
            '.card': {},
        })
    },
    {
        theme: {
            extend: {
                textColor: {
                    primary: '#000000',
                    secondary: '#5A5F70',
                    tertiary: '#C4C6CE',
                    'primary-reverse': '#FFFFFF',
                    highlight: '#335CFF',
                },
                backgroundColor: {
                    'panel-white': '#FFFFFF',
                    'panel-white-opacity-10': 'rgba(255, 255, 255, 0.1)',
                    'panel-gray-100': '#F9FAFB',
                    'panel-gray-200': '#EEEFF1',
                    'btn-primary': '#000000',
                    'btn-secondary': '#365FEF',
                    'btn-tertiary': '#00BAE2',
                    'btn-primary-hover': '#202020',
                    'btn-secondary-hover': '#4F73F2',
                    'btn-tertiary-hover': '#4EC8E2',
                },
                borderColor: {
                    gray100: '#EEEFF1',
                },
                boxShadow: {
                    'card-100':
                        '0px 64px 248px rgba(33, 51, 101, 0.05), 0px 19.2941px 74.7647px rgba(33, 51, 101, 0.0325794), 0px 8.01379px 31.0534px rgba(33, 51, 101, 0.025), 0px 2.89843px 11.2314px rgba(33, 51, 101, 0.0174206)',
                },
            },
        },
    }
)
