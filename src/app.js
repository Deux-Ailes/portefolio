import { createSSRApp } from 'vue'
import App from './App.vue'

// Reveals an element once when it scrolls into view (browser only).
let observer
function getObserver() {
  if (observer !== undefined) return observer
  observer =
    typeof IntersectionObserver === 'undefined'
      ? null
      : new IntersectionObserver(
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
  return observer
}

const reveal = {
  // Rendered into the static HTML; CSS only hides it once JavaScript runs.
  getSSRProps: () => ({ class: 'reveal' }),
  mounted(el, binding) {
    el.classList.add('reveal')
    if (binding.value) el.style.transitionDelay = `${binding.value * 70}ms`
    const io = getObserver()
    if (io) io.observe(el)
    else el.classList.add('is-visible')
  },
  unmounted(el) {
    observer?.unobserve(el)
  },
}

// Shared by the browser (hydration) and the build-time prerender.
export function createApp(locale) {
  return createSSRApp(App, { locale }).directive('reveal', reveal)
}
