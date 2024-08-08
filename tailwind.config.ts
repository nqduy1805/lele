import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        blue: {
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB',
        },
        'light-beige': '#fff9f2',
        'mango-yellow':'#f1ae60',
        'onyx-gray' : '#414040',
        'light-onyx-gray':'rgba(65,64,64,.9)',
        'beige': '#e1dcc4cc',
      },
      lineHeight: {
        '150': '1.5',
      },
      padding: {
        '3vw': '3vw',
      },
      zIndex: {
        '5': '5',
      },
      fontWeight: {
        '300': '300',
        '200': '200',
      },
      
      
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
