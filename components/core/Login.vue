<template>
  <TransitionRoot appear :show="isOpen" @close="closeLoginModal" as="template">
    <Dialog as="div" :open="isOpen" class="z-10">
      <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
        leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>
      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95">
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded bg-white dark:bg-zinc-800 dark:text-white p-6 text-center align-middle shadow-xl transition-all">
              <DialogTitle as="h3" class="text-xl">Login</DialogTitle>
              <DialogDescription as="p">
                Log in to an existing account
              </DialogDescription>
              <hr>

              <form @submit.prevent="login($event)" class="m-2 flex flex-col">
                <input type="text" placeholder="username..." class="p-2 m-2 rounded bg-zinc-200 focus:bg-zinc-100 focus:dark:bg-zinc-800 dark:bg-zinc-900 ring-0 shadow-lg focus:shadow-inner border dark:border-zinc-500">
                <input type="password" placeholder="password..." class="p-2 m-2 rounded bg-zinc-200 focus:bg-zinc-100 focus:dark:bg-zinc-800 dark:bg-zinc-900 ring-0 shadow-lg focus:shadow-inner border dark:border-zinc-500">
                <button type="submit" class="shadow-lg rounded hover:shadow-inner bg-blue-500 hover:bg-blue-400 p-2 m-2 mx-[25%] inline-flex flex-row items-center">
                  <div class="text-center w-full">
                    <h3 class="text-lg text-white">Submit</h3>
                  </div>
                </button>
              </form>
              
              <hr>
              <div class="flex flex-col mt-6 items-center justify-center">
                <h1 class="text-xl mb-2">Sign in with</h1>
                <div class="flex flex-row">
                  <button tabindex="-1" class="flow google-gradient">
                  <svg xmlns="http://www.w3.org/2000/svg" class="flow-icon" viewBox="0 0 488 512">
                    <path
                      d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                  </svg>
                  <h3 class="text-lg">Google</h3>
                </button>
                <button tabindex="-1" class="flow bg-[#333] hover:bg-[#4d4d4d]">
                  <svg xmlns="http://www.w3.org/2000/svg" class="flow-icon" viewBox="0 0 496 512">
                    <path
                      d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                  </svg>
                  <h3 class="text-lg">Github</h3>
                </button>
                <button tabindex="-1" class="flow bg-[#171a21] hover:bg-[#292e3b]">
                  <svg xmlns="http://www.w3.org/2000/svg" class="flow-icon" viewBox="0 0 496 512">
                    <path
                      d="M496 256c0 137-111.2 248-248.4 248-113.8 0-209.6-76.3-239-180.4l95.2 39.3c6.4 32.1 34.9 56.4 68.9 56.4 39.2 0 71.9-32.4 70.2-73.5l84.5-60.2c52.1 1.3 95.8-40.9 95.8-93.5 0-51.6-42-93.5-93.7-93.5s-93.7 42-93.7 93.5v1.2L176.6 279c-15.5-.9-30.7 3.4-43.5 12.1L0 236.1C10.2 108.4 117.1 8 247.6 8 384.8 8 496 119 496 256zM155.7 384.3l-30.5-12.6a52.79 52.79 0 0 0 27.2 25.8c26.9 11.2 57.8-1.6 69-28.4 5.4-13 5.5-27.3.1-40.3-5.4-13-15.5-23.2-28.5-28.6-12.9-5.4-26.7-5.2-38.9-.6l31.5 13c19.8 8.2 29.2 30.9 20.9 50.7-8.3 19.9-31 29.2-50.8 21zm173.8-129.9c-34.4 0-62.4-28-62.4-62.3s28-62.3 62.4-62.3 62.4 28 62.4 62.3-27.9 62.3-62.4 62.3zm.1-15.6c25.9 0 46.9-21 46.9-46.8 0-25.9-21-46.8-46.9-46.8s-46.9 21-46.9 46.8c.1 25.8 21.1 46.8 46.9 46.8z" />
                  </svg>
                  <h3 class="text-lg">Steam </h3>
                </button>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogDescription,
  TransitionRoot,
  TransitionChild,
} from '@headlessui/vue'
import { useToast } from 'vue-toastification';

const { $api } = useNuxtApp();
const toast = useToast();

const props = defineProps<{ isOpen: boolean }>()
const emit = defineEmits<{ (event: 'toggle-login-modal'): void }>();

const errorVal: globalThis.Ref = useState('errorVal', () => null)
console.log(errorVal)

const closeLoginModal = () => {
  emit('toggle-login-modal')
}

const login = async (event: Event) => {
  // @ts-ignore
  const username: string = event.target.elements[0].value;
  // @ts-ignore
  const password: string = event.target.elements[1].value;

  console.log(username, password)

  const { data, error } = await $api(`/login/standard`, 'POST', {}, { username: username, password: password })

  if (error.value) {
    if (!!error.value !== true) {
      errorVal.value = error.value
    }

    if (errorVal.value?.response === undefined) {
      toast.error('The server failed to respond to this request.')
      return
    }

    toast.error(errorVal.value.response._data.message)
    
    return
  }

  toast.success(`Logged in as ${data.value.username} ${data.value.displayname ? `(${data.value.displayname})` : ''}`)

  errorVal.value = null

  localStorage.setItem('userToken', data.value.token)
  localStorage.setItem('userId', data.value.user_id)
  localStorage.setItem('username', data.value.username)
  localStorage.setItem('displayname', data.value.displayname)

  closeLoginModal()

  window.location.reload()
}
</script>