<template>
  <div @toggle-sidebar="toggleSidebar"
    class="relative flex flex-col bg-white dark:bg-zinc-800 dark:text-white h-full max-h-full overflow-hidden">
    <CoreHeader @toggle-sidebar="toggleSidebar" />
    <div class="flex w-full h-full max-h-full overflow-hidden">
      <CoreSidebar :sidebar-collapsed="sidebarCollapsed" />
      <div class="flex w-full max-h-full overflow-y-scroll">
        <div class="flex w-full h-full">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const sidebarCollapsed = ref(false);

onMounted(() => {
  if (localStorage !== undefined) {
    sidebarCollapsed.value = localStorage.getItem('sidebarCollapsed') !== null;
  }
});

const toggleSidebar = () => {
  sidebarCollapsed.value = !sidebarCollapsed.value;

  if (localStorage !== undefined) {
    if (sidebarCollapsed.value) {
      localStorage.setItem('sidebarCollapsed', '');
    } else {
      localStorage.removeItem('sidebarCollapsed');
    }
  }
}
</script>
