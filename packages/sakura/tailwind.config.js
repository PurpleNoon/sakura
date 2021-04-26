module.exports = {
  purge: [
    './index.html',
    './packages/**/*.{vue,js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  prefix: 'sr-',
  theme: {
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#409EFF',
          100: '#53a8ff',
          200: '#66b1ff',
          300: '#79bbff',
          400: '#8cc5ff',
          500: '#a0cfff',
          600: '#b3d8ff',
          700: '#c6e2ff',
          800: '#d9ecff',
          900: '#ecf5ff',
        },
        success: {
          DEFAULT: '#67C23A',
          800: '#e1f3d8',
          900: '#f0f9eb',
        },
        warning: {
          DEFAULT: '#E6A23C',
          800: '#faecd8',
          900: '#fdf6ec',
        },
        danger: {
          DEFAULT: '#F56C6C',
          800: '#fde2e2',
          900: '#fef0f0',
        },
        info: {
          DEFAULT: '#909399',
          800: '#e9e9eb',
          900: '#f4f4f5',
        },
        'text': {
          DEFAULT: '#303133',
          regular: '#606266',
          secondary: '#909399',
          placeholder: '#C0C4CC',
        },
        'border': {
          DEFAULT: '#DCDFE6',
          800: '#E4E7ED',
          900: '#EBEEF5',
          950: '#F2F6FC',
        },
        bg: {
          DEFAULT: '#F5F7FA',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false
  }
}
