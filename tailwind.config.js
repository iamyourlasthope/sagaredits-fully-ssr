module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a1a1a',
          dark: '#0a0a0a',
        },
        accent: {
          light: '#3b82f6',
          dark: '#1d4ed8',
        },
        text: {
          DEFAULT: '#ffffff',
          muted: '#a1a1aa',
        },
        success: '#10b981',
        warning: '#f59e0b',
      },
      fontFamily: {
        heading: ['Poppins', 'Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'blue-gradient': 'linear-gradient(90deg, #3b82f6 0%, #1d4ed8 100%)',
      },
    },
  },
  plugins: [],
}; 