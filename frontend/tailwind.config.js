/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors
        'primary': '#2f3e46',
        'secondary': '#354f52',
        'accent': '#84a98c',
        'background': '#f8f9fa',
        'white': '#ffffff',
        
        // Program colors
        'discover': '#3B82F6',
        'grow': '#10B981',
        'connect': '#8B5CF6',
        'lead': '#F59E0B',
        
        // Social & Status
        'whatsapp': '#25D366',
        'success': '#10B981',
        'error': '#EF4444',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0,0,0,0.08)',
        'medium': '0 4px 12px rgba(0,0,0,0.12)',
        'hover': '0 8px 24px rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
}