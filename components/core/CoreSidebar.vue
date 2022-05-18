<template>
  <div class="flex flex-col p-4 border-r-2 dark:border-zinc-700 transition-all" :class="`${collapsed ? 'w-24' : 'w-96'}`">
    <div>a</div>
    <div>b</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  sidebarCollapsed: boolean
}>()

const collapsed = computed(() => props.sidebarCollapsed)
</script>
