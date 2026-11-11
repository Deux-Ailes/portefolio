<script setup>
import { computed, ref, watchEffect } from 'vue'
import {
  PhArrowUpRight,
  PhCode,
  PhDownloadSimple,
  PhGithubLogo,
  PhKanban,
  PhLinkedinLogo,
  PhShieldCheck,
} from '@phosphor-icons/vue'
import { content, links } from './content.js'
import portrait from './assets/portrait.webp'

const LOCALES = ['fr', 'en']

function initialLocale() {
  try {
    const saved = localStorage.getItem('locale')
    if (LOCALES.includes(saved)) return saved
  } catch {
    // Storage unavailable: fall back to the browser language.
  }
  return navigator.language?.toLowerCase().startsWith('fr') ? 'fr' : 'en'
}

const locale = ref(initialLocale())
const t = computed(() => content[locale.value])

function setLocale(value) {
  locale.value = value
  try {
    localStorage.setItem('locale', value)
  } catch {
    // Preference simply will not persist.
  }
}

watchEffect(() => {
  document.documentElement.lang = locale.value
  document.title = t.value.meta.title
})

const expertiseIcons = [PhShieldCheck, PhCode, PhKanban]
const year = new Date().getFullYear()
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-line/70 bg-ink/85 backdrop-blur-md">
    <div class="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
      <a href="#top" class="font-mono text-sm font-medium tracking-tight text-text">
        elliot<span class="text-accent">.</span>clerice
      </a>

      <nav class="hidden items-center gap-8 text-sm text-mute md:flex" aria-label="Sections">
        <a href="#expertise" class="transition-colors hover:text-text">{{ t.nav.expertise }}</a>
        <a href="#experience" class="transition-colors hover:text-text">{{ t.nav.experience }}</a>
        <a href="#education" class="transition-colors hover:text-text">{{ t.nav.education }}</a>
      </nav>

      <div class="flex items-center gap-3">
        <div
          class="flex rounded-md border border-line p-0.5 font-mono text-xs"
          role="group"
          :aria-label="t.nav.langLabel"
        >
          <button
            v-for="code in LOCALES"
            :key="code"
            type="button"
            class="rounded-[4px] px-2 py-1 uppercase transition-colors"
            :class="locale === code ? 'bg-text text-ink' : 'text-mute hover:text-text'"
            :aria-pressed="locale === code"
            @click="setLocale(code)"
          >
            {{ code }}
          </button>
        </div>
        <a
          href="#contact"
          class="hidden rounded-md bg-accent px-3.5 py-2 text-sm font-medium whitespace-nowrap text-ink transition-transform hover:-translate-y-px active:translate-y-0 sm:inline-block"
        >
          {{ t.nav.contact }}
        </a>
      </div>
    </div>
  </header>

  <main id="top">
    <!-- Hero: asymmetric split, copy left and portrait right -->
    <section class="mx-auto max-w-6xl px-5 sm:px-8">
      <div
        class="grid items-center gap-10 py-12 md:min-h-[calc(100dvh-4rem)] md:grid-cols-[1.25fr_1fr] md:gap-14 md:py-16"
      >
        <div>
          <p class="rise font-mono text-sm text-accent" style="--i: 0">{{ t.hero.role }}</p>
          <h1
            class="rise mt-5 text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl"
            style="--i: 1"
          >
            {{ t.hero.title }}
          </h1>
          <p class="rise mt-6 max-w-[52ch] text-lg leading-relaxed text-mute" style="--i: 2">
            {{ t.hero.text }}
          </p>
          <div class="rise mt-9 flex flex-wrap gap-3" style="--i: 3">
            <a
              href="#contact"
              class="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 font-medium whitespace-nowrap text-ink transition-transform hover:-translate-y-px active:translate-y-0"
            >
              {{ t.nav.contact }}
              <PhArrowUpRight :size="18" weight="bold" aria-hidden="true" />
            </a>
            <a
              :href="links.cv"
              download
              class="inline-flex items-center gap-2 rounded-md border border-line px-5 py-3 font-medium whitespace-nowrap text-text transition-colors hover:border-mute active:translate-y-px"
            >
              <PhDownloadSimple :size="18" weight="bold" aria-hidden="true" />
              {{ t.hero.cv }}
            </a>
          </div>
        </div>

        <div class="rise mx-auto w-full max-w-sm md:max-w-none" style="--i: 2">
          <img
            :src="portrait"
            :alt="t.hero.photoAlt"
            width="1100"
            height="1320"
            fetchpriority="high"
            class="aspect-[5/6] w-full rounded-md border border-line object-cover"
          />
        </div>
      </div>
    </section>

    <!-- Key figures: plain row, no cards -->
    <section class="border-y border-line bg-panel">
      <dl class="mx-auto grid max-w-6xl grid-cols-2 gap-x-8 gap-y-10 px-5 py-12 sm:px-8 lg:grid-cols-4">
        <div v-for="(stat, i) in t.stats" :key="i" v-reveal="i">
          <dt class="font-mono text-3xl font-medium tracking-tight text-accent sm:text-4xl">
            {{ stat.value }}
          </dt>
          <dd class="mt-2 max-w-[24ch] text-sm leading-relaxed text-mute">{{ stat.label }}</dd>
        </div>
      </dl>
    </section>

    <!-- Expertise: 3-cell bento, one wide cell and two stacked -->
    <section id="expertise" class="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
      <div v-reveal>
        <h2 class="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          {{ t.expertise.title }}
        </h2>
        <p class="mt-4 max-w-[60ch] text-lg leading-relaxed text-mute">{{ t.expertise.text }}</p>
      </div>

      <div class="mt-12 grid gap-4 md:grid-cols-[1.2fr_1fr] md:grid-rows-2">
        <article
          v-for="(item, i) in t.expertise.items"
          :key="i"
          v-reveal="i"
          class="flex flex-col rounded-md border border-line p-7 sm:p-8"
          :class="
            i === 0
              ? 'bg-[radial-gradient(120%_90%_at_0%_0%,rgba(242,178,92,0.14),transparent_60%)] md:row-span-2'
              : 'bg-panel'
          "
        >
          <component
            :is="expertiseIcons[i]"
            :size="i === 0 ? 36 : 28"
            class="text-accent"
            aria-hidden="true"
          />
          <h3
            class="mt-5 font-semibold tracking-tight"
            :class="i === 0 ? 'text-2xl sm:text-3xl' : 'text-xl'"
          >
            {{ item.title }}
          </h3>
          <p class="mt-3 max-w-[52ch] leading-relaxed text-mute" :class="i === 0 ? 'text-lg' : ''">
            {{ item.text }}
          </p>
          <ul class="mt-auto flex flex-wrap gap-2 pt-7 font-mono text-xs text-text">
            <li v-for="tag in item.tags" :key="tag" class="rounded-md border border-line px-2.5 py-1">
              {{ tag }}
            </li>
          </ul>
        </article>
      </div>
    </section>

    <!-- Experience: sticky meta column with bullet detail -->
    <section id="experience" class="border-t border-line">
      <div class="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <h2 v-reveal class="text-3xl font-semibold tracking-tight sm:text-4xl">
          {{ t.experience.title }}
        </h2>

        <div class="mt-12 space-y-14">
          <article
            v-for="(job, i) in t.experience.jobs"
            :key="i"
            v-reveal
            class="grid gap-5 md:grid-cols-[1fr_2fr] md:gap-12"
            :class="i > 0 ? 'border-t border-line pt-14' : ''"
          >
            <div class="md:sticky md:top-24 md:self-start">
              <p class="font-mono text-sm text-accent">{{ job.period }}</p>
              <p class="mt-2 text-2xl font-semibold tracking-tight">{{ job.company }}</p>
            </div>
            <div>
              <h3 class="text-xl font-medium text-balance">{{ job.role }}</h3>
              <ul class="mt-5 space-y-4 leading-relaxed text-mute">
                <li v-for="(point, j) in job.points" :key="j" class="flex gap-4">
                  <span class="mt-[0.7em] h-px w-4 shrink-0 bg-accent" aria-hidden="true"></span>
                  <span class="max-w-[65ch]">{{ point }}</span>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Key achievements: large statements -->
    <section class="border-t border-line bg-panel">
      <div class="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
        <h2 v-reveal class="font-mono text-sm text-accent">{{ t.highlights.title }}</h2>
        <ol class="mt-8 space-y-8">
          <li
            v-for="(item, i) in t.highlights.items"
            :key="i"
            v-reveal="i"
            class="max-w-[32ch] text-2xl leading-snug font-medium tracking-tight text-balance sm:max-w-[40ch] sm:text-3xl"
            :class="i === 1 ? 'md:ml-[18%]' : i === 2 ? 'md:ml-[36%]' : ''"
          >
            {{ item }}
          </li>
        </ol>
      </div>
    </section>

    <!-- Education, certifications and languages -->
    <section id="education" class="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
      <div class="grid gap-14 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <div v-reveal>
          <h2 class="text-3xl font-semibold tracking-tight sm:text-4xl">{{ t.education.title }}</h2>
          <ul class="mt-8 space-y-8">
            <li v-for="(item, i) in t.education.items" :key="i">
              <p class="font-mono text-sm text-accent">{{ item.period }}</p>
              <p class="mt-1.5 text-xl font-medium text-balance">{{ item.title }}</p>
              <p class="mt-1 text-mute">{{ item.place }}</p>
            </li>
          </ul>
        </div>

        <div v-reveal="1" class="space-y-10">
          <div>
            <h3 class="text-xl font-semibold tracking-tight">{{ t.education.certsTitle }}</h3>
            <ul class="mt-4 space-y-3">
              <li
                v-for="cert in t.education.certs"
                :key="cert.title"
                class="flex items-baseline justify-between gap-4"
              >
                <span>{{ cert.title }}</span>
                <span class="font-mono text-sm text-mute">{{ cert.period }}</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl font-semibold tracking-tight">{{ t.education.langsTitle }}</h3>
            <ul class="mt-4 space-y-3">
              <li
                v-for="lang in t.education.langs"
                :key="lang.title"
                class="flex items-baseline justify-between gap-4"
              >
                <span>{{ lang.title }}</span>
                <span class="font-mono text-sm text-mute">{{ lang.level }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="border-t border-line">
      <div v-reveal class="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
        <h2 class="max-w-[18ch] text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl">
          {{ t.contact.title }}
        </h2>
        <p class="mt-5 text-lg text-mute">{{ t.contact.text }}</p>
        <a
          :href="`mailto:${links.email}`"
          class="mt-8 inline-block font-mono text-lg break-all text-accent underline decoration-accent/40 underline-offset-8 transition-colors hover:decoration-accent sm:text-2xl"
        >
          {{ links.email }}
        </a>
        <div class="mt-10 flex flex-wrap gap-3">
          <a
            :href="links.linkedin"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2.5 transition-colors hover:border-mute"
          >
            <PhLinkedinLogo :size="20" aria-hidden="true" />
            LinkedIn
          </a>
          <a
            :href="links.github"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2.5 transition-colors hover:border-mute"
          >
            <PhGithubLogo :size="20" aria-hidden="true" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  </main>

  <footer class="border-t border-line">
    <div
      class="mx-auto flex max-w-6xl flex-wrap justify-between gap-2 px-5 py-6 text-sm text-mute sm:px-8"
    >
      <p>© {{ year }} Elliot Clerice</p>
      <p>{{ t.footer }}</p>
    </div>
  </footer>
</template>
