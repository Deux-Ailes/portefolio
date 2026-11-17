<script setup>
import { PhArrowDown, PhArrowRight, PhArrowsClockwise, PhSealCheck } from '@phosphor-icons/vue'

defineProps({
  diagram: { type: Object, required: true },
  label: { type: String, required: true },
  legend: { type: String, required: true },
})

const noteIcons = { loop: PhArrowsClockwise, tests: PhSealCheck }
</script>

<template>
  <figure class="mt-10" :aria-label="label">
    <!-- Steps read left to right on desktop, top to bottom on mobile -->
    <ol class="flex flex-col gap-2 md:flex-row md:items-stretch md:gap-0">
      <template v-for="(step, i) in diagram.steps" :key="i">
        <li
          v-if="i > 0"
          class="flex shrink-0 justify-center text-mute md:items-center md:px-2"
          aria-hidden="true"
        >
          <PhArrowDown :size="18" class="md:hidden" />
          <PhArrowRight :size="18" class="hidden md:block" />
        </li>
        <li
          class="flex-1 rounded-md border bg-ink p-4"
          :class="step.mine ? 'border-accent/70' : 'border-line'"
        >
          <p class="font-medium leading-snug" :class="step.mine ? 'text-accent' : ''">{{ step.title }}</p>
          <ul class="mt-2 space-y-1 text-sm leading-snug text-mute">
            <li v-for="(item, j) in step.items" :key="j">{{ item }}</li>
          </ul>
        </li>
      </template>
    </ol>

    <figcaption class="mt-4 flex flex-col gap-2 text-sm text-mute sm:flex-row sm:items-start sm:justify-between sm:gap-8">
      <p v-if="diagram.note" class="flex max-w-[70ch] gap-2">
        <component :is="noteIcons[diagram.note.icon]" :size="18" class="mt-px shrink-0 text-accent" aria-hidden="true" />
        {{ diagram.note.text }}
      </p>
      <p class="shrink-0 sm:ml-auto">{{ legend }}</p>
    </figcaption>
  </figure>
</template>
