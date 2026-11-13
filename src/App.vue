<script setup>
import { PhArrowUpRight, PhDownloadSimple } from '@phosphor-icons/vue'
import { content, links } from './content.js'
import portrait from './assets/portrait.webp'

// Each language is its own page: index.html (fr) and en/index.html (en).
const locale = document.documentElement.lang === 'en' ? 'en' : 'fr'
const t = content[locale]

// Path back to the site root, so links work on any domain or sub-path.
const root = locale === 'en' ? '../' : './'
const pages = [
  { code: 'fr', href: root },
  { code: 'en', href: `${root}en/` },
]

const year = new Date().getFullYear()
</script>

<template>
  <header class="sticky top-0 z-40 bg-ink/90 backdrop-blur-md">
    <div class="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
      <a href="#top" class="font-medium tracking-tight text-text">Elliot Clerice</a>

      <div class="flex items-center gap-6 text-sm sm:gap-8">
        <nav class="hidden items-center gap-8 text-mute md:flex" aria-label="Sections">
          <a href="#expertise" class="transition-colors hover:text-text">{{ t.nav.expertise }}</a>
          <a href="#experience" class="transition-colors hover:text-text">{{ t.nav.experience }}</a>
          <a href="#education" class="transition-colors hover:text-text">{{ t.nav.education }}</a>
          <a href="#contact" class="transition-colors hover:text-text">{{ t.nav.contact }}</a>
        </nav>

        <div class="flex items-center gap-1" role="group" :aria-label="t.nav.langLabel">
          <template v-for="(page, i) in pages" :key="page.code">
            <span v-if="i > 0" class="text-line" aria-hidden="true">/</span>
            <a
              :href="page.href"
              :hreflang="page.code"
              :lang="page.code"
              class="px-1 py-2 uppercase transition-colors"
              :class="locale === page.code ? 'text-text' : 'text-mute hover:text-text'"
              :aria-current="locale === page.code ? 'page' : undefined"
            >
              {{ page.code }}
            </a>
          </template>
        </div>
      </div>
    </div>
  </header>

  <main id="top">
    <!-- Hero: copy left, portrait right -->
    <section class="mx-auto max-w-6xl px-5 sm:px-8">
      <div
        class="grid items-center gap-10 pt-10 pb-16 md:min-h-[calc(100dvh-4rem)] md:grid-cols-[1.5fr_1fr] md:gap-16 md:pt-16 md:pb-20"
      >
        <div>
          <h1
            class="rise text-5xl leading-[1.02] font-semibold tracking-tighter text-balance sm:text-6xl lg:text-7xl"
            style="--i: 0"
          >
            {{ t.hero.title }}
          </h1>
          <p class="rise mt-7 max-w-[46ch] text-lg leading-relaxed text-mute sm:text-xl" style="--i: 1">
            {{ t.hero.text }}
          </p>
          <div class="rise mt-10 flex flex-wrap items-center gap-x-7 gap-y-4" style="--i: 2">
            <a
              href="#contact"
              class="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 font-medium whitespace-nowrap text-ink transition-transform hover:-translate-y-px active:translate-y-0"
            >
              {{ t.nav.contact }}
              <PhArrowUpRight :size="18" weight="bold" aria-hidden="true" />
            </a>
            <a
              :href="root + links.cv"
              download
              class="inline-flex items-center gap-2 py-3 font-medium whitespace-nowrap text-text underline decoration-line underline-offset-8 transition-colors hover:decoration-text"
            >
              <PhDownloadSimple :size="18" weight="bold" aria-hidden="true" />
              {{ t.hero.cv }}
            </a>
          </div>
        </div>

        <img
          :src="portrait"
          :alt="t.hero.photoAlt"
          width="1100"
          height="1320"
          fetchpriority="high"
          class="rise mx-auto aspect-[5/6] w-full max-w-sm rounded-md object-cover md:max-w-none"
          style="--i: 1"
        />
      </div>
    </section>

    <!-- Proof: one sentence carrying the three figures from the CV -->
    <section class="mx-auto max-w-6xl px-5 pb-20 sm:px-8 md:pb-28">
      <p
        v-reveal
        class="max-w-[30ch] text-3xl leading-[1.2] font-medium tracking-tight text-mute sm:text-4xl lg:text-5xl"
      >
        <template v-for="(part, i) in t.proof" :key="i">
          <span v-if="part.strong" class="text-text">{{ part.text }}</span>
          <template v-else>{{ part.text }}</template>
        </template>
      </p>
    </section>

    <!-- Expertise: three plain rows, no cards -->
    <section id="expertise" class="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
      <h2 v-reveal class="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        {{ t.expertise.title }}
      </h2>

      <div class="mt-12 divide-y divide-line border-t border-line">
        <article
          v-for="(item, i) in t.expertise.items"
          :key="i"
          v-reveal
          class="grid gap-3 py-8 md:grid-cols-[1fr_2fr] md:gap-12 md:py-10"
        >
          <h3 class="text-2xl font-medium tracking-tight">{{ item.title }}</h3>
          <div>
            <p class="max-w-[58ch] text-lg leading-relaxed">{{ item.text }}</p>
            <p class="mt-3 font-mono text-sm leading-relaxed text-mute">{{ item.stack }}</p>
          </div>
        </article>
      </div>
    </section>

    <!-- Experience: company column stays in view while reading the detail -->
    <section id="experience" class="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
      <h2 v-reveal class="text-3xl font-semibold tracking-tight sm:text-4xl">
        {{ t.experience.title }}
      </h2>

      <div class="mt-12 space-y-16">
        <article
          v-for="(job, i) in t.experience.jobs"
          :key="i"
          v-reveal
          class="grid gap-5 md:grid-cols-[1fr_2fr] md:gap-12"
        >
          <div class="md:sticky md:top-24 md:self-start">
            <p class="text-2xl font-medium tracking-tight">{{ job.company }}</p>
            <p class="mt-1.5 font-mono text-sm text-mute">{{ job.period }}</p>
          </div>
          <div>
            <h3 class="text-xl font-medium text-balance">{{ job.role }}</h3>
            <ul class="mt-5 max-w-[62ch] space-y-4 leading-relaxed text-mute">
              <li v-for="(point, j) in job.points" :key="j">{{ point }}</li>
            </ul>
          </div>
        </article>

        <article v-reveal class="grid gap-5 md:grid-cols-[1fr_2fr] md:gap-12">
          <p class="text-2xl font-medium tracking-tight">{{ t.highlights.title }}</p>
          <ul class="max-w-[62ch] space-y-4 leading-relaxed text-mute">
            <li v-for="(item, i) in t.highlights.items" :key="i">{{ item }}</li>
          </ul>
        </article>
      </div>
    </section>

    <!-- Education, certifications and languages -->
    <section id="education" class="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
      <div class="grid gap-14 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <div v-reveal>
          <h2 class="text-3xl font-semibold tracking-tight sm:text-4xl">{{ t.education.title }}</h2>
          <ul class="mt-8 space-y-8">
            <li v-for="(item, i) in t.education.items" :key="i">
              <p class="text-xl font-medium text-balance">{{ item.title }}</p>
              <p class="mt-1 text-mute">
                {{ item.place }} <span class="font-mono text-sm">{{ item.period }}</span>
              </p>
            </li>
          </ul>
        </div>

        <div v-reveal="1" class="space-y-10 md:pt-1">
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
                <span class="text-sm text-mute">{{ lang.level }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="border-t border-line">
      <div v-reveal class="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
        <h2 class="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          {{ t.contact.title }}
        </h2>
        <a
          :href="`mailto:${links.email}`"
          class="mt-6 inline-block text-2xl font-medium tracking-tight break-all text-accent underline decoration-accent/40 underline-offset-8 transition-colors hover:decoration-accent sm:text-4xl lg:text-5xl"
        >
          {{ links.email }}
        </a>
        <div class="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-lg">
          <a
            v-for="[label, href] in [
              ['LinkedIn', links.linkedin],
              ['GitHub', links.github],
            ]"
            :key="label"
            :href="href"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-1.5 text-text underline decoration-line underline-offset-8 transition-colors hover:decoration-text"
          >
            {{ label }}
            <PhArrowUpRight :size="16" weight="bold" class="text-mute" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  </main>

  <footer class="mx-auto flex max-w-6xl flex-wrap justify-between gap-2 px-5 pb-8 text-sm text-mute sm:px-8">
    <p>© {{ year }} Elliot Clerice</p>
    <p>{{ t.footer }}</p>
  </footer>
</template>
