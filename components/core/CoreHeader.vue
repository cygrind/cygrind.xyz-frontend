<template>

  <div class="border-b-2 dark:border-zinc-700 p-4 flex flex-row items-center">
    <div class="flex items-center flex-grow gap-4">
      <a href="/" class="flex flex-row items-center justify-evenly">
        <img class="max-h-12 mr-[5%]" src="/cygrind_logo_v2_128x128.png" alt="logo">
        <h1 class="text-xl">cygrind.xyz</h1>
      </a>
      <br class="p-3" />
      <div class="inline-flex" role="group">
        <button class="mode-toggle rounded-l-md border p-2" ref="mode-toggle" @click="toggleDarkMode">
          <div v-if="$colorMode.value === 'dark'">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 dark:fill-white" viewBox="0 0 384 512"><path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/></svg>
          </div>
          <div v-else-if="$colorMode.value === 'light'">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 512 512"><path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"/></svg>
          </div>
          <div v-else>
          </div>
        </button>

        <button class="mode-toggle rounded-r-md border-l-0 border p-2" ref="mode-toggle" @click="toggleSidebar">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 dark:fill-white" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
        </button>
      </div>

      <ClientOnly>
        <div v-if="loggedIn()">
\          <div class="flex flex-row items-center">
            <p >Logged in as {{ getName() }}</p>
            <button class="px-1 py-1 ml-4 text-white bg-red-500 hover:bg-red-400 shadow-md focus:ring-2 rounded-md" @click="logOut">
              Log out
            </button>
          </div>
        </div>
        <div v-else>
          <Menu>
            <span>
              <MenuButton>
                <button
                  class="px-2 py-2 ml-4 text-white bg-blue-500 hover:bg-blue-400 shadow-md focus:ring-2 rounded-md">
                  Login
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 inline fill-white" viewBox="0 0 448 512">
                    <path
                      d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
                  </svg>
                </button>
              </MenuButton>
              <MenuItems class="relative z-10">
                <span
                  class="absolute left-1/2 -translate-x-1/2 flex flex-col m-2 p-2 gap-2 rounded-md shadow border bg-white dark:border-zinc-500 dark:bg-zinc-900">
                  <MenuItem>
                  <button
                    class="p-2 rounded border dark:border-zinc-500 dark:hover:bg-zinc-800 shadow hover:shadow-inner whitespace-nowrap"
                    @click="toggleLogin">
                    Log in
                  </button>
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
        </div>
      </ClientOnly>

      <!-- <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 inline fill-[#FF5E5B]" viewBox="0 0 512 512">! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.<path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"/></svg> -->
      <!-- Support me on Ko-fi -->
      <a href='https://ko-fi.com/L4L8BIHW8' class="ml-auto" target='_blank'><img height='36'
          style='border:0px; height:36px;' src='https://cdn.ko-fi.com/cdn/kofi3.png?v=3' border='0'
          alt='Buy Me a Coffee at ko-fi.com' /></a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

const emit = defineEmits<{ (event: 'toggle-sidebar'): void, (event: 'toggle-login-modal'): void }>()

const toggleDarkMode = () => {
  let colorMode = useColorMode()
  
  console.log(colorMode.value)
  console.log(colorMode.value === 'light')
  colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light'
  console.log(colorMode.value)
  console.log(colorMode.value === 'light')
}

const toggleSidebar = () => {
  emit('toggle-sidebar')
}

const toggleLogin = () => {
  emit('toggle-login-modal')
}

const loggedIn = (): boolean => {
  return !!localStorage.getItem('userToken')
}

const getName = (): string | null => {
  return localStorage.getItem('username')
}

const logOut = (): void => {
  localStorage.removeItem('userToken')
  localStorage.removeItem('userId')
  localStorage.removeItem('username')
  localStorage.removeItem('displayname')
  window.location.reload()
}
</script>
