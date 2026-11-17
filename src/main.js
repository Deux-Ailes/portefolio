import '@fontsource-variable/geist'
import '@fontsource-variable/geist-mono'
import './style.css'
import { createApp } from './app.js'

// Hydrates the HTML generated at build time (see scripts/prerender.js).
createApp(document.documentElement.lang).mount('#app')
