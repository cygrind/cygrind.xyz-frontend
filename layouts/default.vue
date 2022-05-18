<template>
  <div @toggle-sidebar="toggleSidebar" class="bg-white dark:bg-zinc-800 dark:text-white min-h-full overflow-hidden h-screen">
    <Header :sidebar-collapsed="sidebarCollapsed" />
    <Sidebar :sidebar-collapsed="sidebarCollapsed" />
    <slot :sidebar-collapsed="sidebarCollapsed" />
  </div>
</template>

<script setup lang="ts">
const sidebarCollapsed = ref(false);

defineProps<{
  sidebarCollapsed: boolean
}>();

const toggleSidebar = () => {
  sidebarCollapsed.value = !sidebarCollapsed.value;
}
</script>
