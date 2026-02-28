/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {
            colors: {
                // Los colores que hacen el 90% del trabajo pesado
                primary: {
                    DEFAULT: '#0077B6', // Azul Eléctrico (Tu CTA/Botón principal)
                    dark: '#005f92',  // Un poquito más oscuro para cuando le pasen el mouse (hover)
                    ligth: '#7DB5DB'
                },
                secondary: {
                    DEFAULT: '#1B263B', // Azul Navy Profundo (Títulos, Header)
                    light: '#415A77',   // Azul Real Vibrante (Subtítulos, Iconos)
                },

                // Colores de Fondo
                background: {
                    DEFAULT: '#eeede9', // Gris Platino (Fondo del Funnel)
                    card: '#FFFFFF',    // Blanco Nieve (El fondo blanco de tu formulario)
                },

                // Alertas y Mensajes del Sistema (Vitales para Onboarding)
                status: {
                    pending: '#415A77', // Gris Carbón (Pedido de Marketing para alertas suaves)
                    error: '#dc2626',   // Rojo oscuro para errores en campos (Tailwind red-600)
                    success: '#16a34a', // Verde corporativo para "Paso completado" (Tailwind green-600)
                }
            }
        },
    },
    plugins: [],
}
