<template>
  <div class="flex flex-col p-4 border-r-2 dark:border-zinc-700 transition-[width]" :class="`${collapsed ? 'w-24' : 'w-96'}`">

  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  sidebarCollapsed: boolean
}>()

const collapsed = computed(() => props.sidebarCollapsed)
</script>
