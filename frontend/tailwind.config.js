/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // NEW COLOR NAMES
        'primary': '#2f3e46',
        'secondary': '#354f52',
        'accent': '#84a98c',
        'background': '#f8f9fa',
        'white': '#ffffff',
        
        // OLD COLOR NAMES (for compatibility)
        'deep-brown': '#2f3e46',
        'brown': '#354f52',
        'cream': '#f8f9fa',
        'gold': '#84a98c',
        'deep-teal': '#2f3e46',
        'dark-teal': '#354f52',
        'muted-teal': '#52796f',
        'sage': '#84a98c',
        'light-sage': '#cad2c5',
        
        // Program colors
        'discover': '#3B82F6',
        'grow': '#10B981',
        'connect': '#8B5CF6',
        'lead': '#F59E0B',
        
        // Button colors
        'btn-primary': '#84a98c',
        'btn-primary-hover': '#52796f',
        
        // Social colors
        'whatsapp': '#25D366',
        
        // Status colors
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