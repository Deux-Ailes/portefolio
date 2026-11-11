import { createApp } from 'vue'
import '@fontsource-variable/geist'
import '@fontsource-variable/geist-mono'
import './style.css'
import App from './App.vue'

// Reveals an element once when it scrolls into view.
const observer =
  'IntersectionObserver' in window
    ? new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible')
              observer.unobserve(entry.target)
            }
          }
        },
        { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
      )
    : null

createApp(App)
  .directive('reveal', {
    mounted(el, binding) {
      el.classList.add('reveal')
      if (binding.value) el.style.transitionDelay = `${binding.value * 70}ms`
      if (observer) observer.observe(el)
      else el.classList.add('is-visible')
    },
    unmounted(el) {
      observer?.unobserve(el)
    },
  })
  .mount('#app')
