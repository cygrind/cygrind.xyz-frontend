<template>
  <div @toggleSidebar="toggleSidebar" class="w-96 min-h-full flex flex-col flex-grow absolute border-r-2 dark:border-zinc-700" :class="{ '-left-96': isClosed }">
    <div>a</div>
    <div>b</div>
  </div>
</template>

<script setup>
const isClosed = ref(false);

const toggleSidebar = () => {
  isClosed.value = !isClosed.value;
}
</script>