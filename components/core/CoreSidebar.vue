<template>
  <div class="flex flex-col p-2 border-r-2 dark:border-zinc-700 transition-[width]"
    :class="`${collapsed ? 'w-32' : 'w-96'}`">
    <h1 class="text-lg text-center">About</h1>
    <hr />
    <div class="text-sm">
      <p class="text-justify" v-if="!collapsed">
        cygrind.xyz - a mod and pattern listing site for ULTRAKILL
      </p>
      <p class="text-center" v-else>
        cygrind.xyz
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  sidebarCollapsed: boolean
}>()

const collapsed = computed(() => props.sidebarCollapsed)
</script>
