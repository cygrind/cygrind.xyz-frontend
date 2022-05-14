<template>
  <div class="bg-white dark:bg-zinc-800 dark:text-white min-h-full" toggleSidebar="">
    <Header />
    <Sidebar />
    <slot />
  </div>
</template>

<script setup>
const props = defineProps(['toggleSidebar']);

const printStuff = () => {
  console.log("toggle");
};
</script>