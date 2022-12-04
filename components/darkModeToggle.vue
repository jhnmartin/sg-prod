<script lang="ts" setup>
import { SunIcon, MoonIcon } from '@heroicons/vue/24/solid';

type Theme = 'light' | 'dark';
const setColorTheme = (newTheme: Theme) => {
  useColorMode().preference = newTheme;
};

const enabled = ref(false);
</script>

<template>
  <div>
    <button
      class="ml-5"
      @click="setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')"
    >
      <SunIcon
        v-if="$colorMode.value == 'dark'"
        class="h-12 w-12 text-zinc-50"
      />
      <MoonIcon
        v-else
        class="h-12 w-12 text-zinc-900"
      />
    </button>
  </div>
</template>

<style scoped></style>
