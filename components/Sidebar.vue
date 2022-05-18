<template>
  <div class="w-96 min-h-full flex flex-col flex-grow absolute border-r-2 dark:border-zinc-700" :class="{ '-left-96': props.sidebarCollapsed }">
    <div>a</div>
    <div>b</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  sidebarCollapsed: boolean
}>();
</script>
