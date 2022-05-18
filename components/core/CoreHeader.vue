<template>
  <div class="border-b-2 dark:border-zinc-700 p-4 flex flex-row items-center">

    <div class="flex items-center flex-grow gap-4">
      <img class="max-h-12" src="/cygrind_logo_v2_128x128.png" alt="logo">
      <h1 class="text-xl">cygrind.xyz</h1>
      <br class="p-3" />
      <div class="inline-flex" role="group">
        <button class="mode-toggle rounded-l-md border p-2" ref="mode-toggle" @click="toggleDarkMode">
          <div v-if="$colorMode.value === 'dark'">
            <solid-moon-icon class="w-6 h-6" />
          </div>
          <div v-else-if="$colorMode.value === 'light'">
            <solid-sun-icon class="w-6 h-6" />
          </div>
          <div v-else>
          </div>
        </button>

        <button class="mode-toggle rounded-r-md border-l-0 border p-2" ref="mode-toggle" @click="toggleSidebar">
          <solid-menu-icon class="w-6 h-6" />
        </button>
      </div>

      <Menu>
        <span class="z-10">
          <MenuButton>
            <button
              class="px-2 py-2 ml-4 bg-blue-500 hover:bg-blue-400 drop-shadow-md focus:z-10 focus:ring-2 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 inline dark:fill-white" viewBox="0 0 448 512">
                <path
                  d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
              </svg>
              Login
            </button>
          </MenuButton>
          <MenuItems class="relative">
            <span
              class="absolute left-1/2 -translate-x-1/2 flex flex-col m-2 p-2 gap-2 rounded-md shadow border bg-white dark:border-zinc-500 dark:bg-zinc-900">
              <MenuItem>
              <a class="p-2 rounded border dark:border-zinc-500 dark:hover:bg-zinc-800 shadow hover:shadow-inner whitespace-nowrap"
                href="#">
                <!-- point to modal -->
                Log in
              </a>
              </MenuItem>
              <MenuItem>
              <a class="p-2 rounded border dark:border-zinc-500 dark:hover:bg-zinc-800 shadow hover:shadow-inner whitespace-nowrap"
                href="#">
                <!-- point to modal -->
                Sign up
              </a>
              </MenuItem>
            </span>
          </MenuItems>
        </span>
      </Menu>

      <!-- <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 inline fill-[#FF5E5B]" viewBox="0 0 512 512">! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.<path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"/></svg> -->
      <!-- Support me on Ko-fi -->
      <a href='https://ko-fi.com/L4L8BIHW8' class="ml-auto" target='_blank'><img height='36'
          style='border:0px;height:36px;' src='https://cdn.ko-fi.com/cdn/kofi3.png?v=3' border='0'
          alt='Buy Me a Coffee at ko-fi.com' /></a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';

const emit = defineEmits<{ (event: 'toggle-sidebar'): void }>();

const toggleDarkMode = () => {
  const colorMode = useColorMode();
  colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light';
}

const toggleSidebar = () => {
  emit('toggle-sidebar');
}
</script>
