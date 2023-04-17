<template>
  <div class="border rounded flex flex-col dark:border-zinc-500 shadow-lg bg-zinc-100 dark:bg-zinc-800 max-w-fit">
    <div class="relative">
      <i v-if="props.verified"
        class="absolute border-b border-r dark:border-zinc-500 -top-[1px] -left-[1px] fill-green-500 rounded-br dark:bg-zinc-900 bg-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 m-2 drop-shadow-lg" viewBox="0 0 448 512">
          <path
            d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
        </svg>
      </i>
      <div v-else></div>
      <i v-if="props.featured"
        class="absolute border-b border-r dark:border-zinc-500 -top-[1px] left-10 fill-yellow-500 rounded-br-lg dark:bg-zinc-900 bg-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 m-2 drop-shadow-lg" viewBox="0 0 512 512">
          <path
            d="M256 53.46L300.1 7.261C307 1.034 315.1-1.431 324.4 .8185C332.8 3.068 339.3 9.679 341.4 18.1L357.3 80.6L419.3 63.07C427.7 60.71 436.7 63.05 442.8 69.19C448.1 75.34 451.3 84.33 448.9 92.69L431.4 154.7L493.9 170.6C502.3 172.7 508.9 179.2 511.2 187.6C513.4 196 510.1 204.1 504.7 211L458.5 256L504.7 300.1C510.1 307 513.4 315.1 511.2 324.4C508.9 332.8 502.3 339.3 493.9 341.4L431.4 357.3L448.9 419.3C451.3 427.7 448.1 436.7 442.8 442.8C436.7 448.1 427.7 451.3 419.3 448.9L357.3 431.4L341.4 493.9C339.3 502.3 332.8 508.9 324.4 511.2C315.1 513.4 307 510.1 300.1 504.7L256 458.5L211 504.7C204.1 510.1 196 513.4 187.6 511.2C179.2 508.9 172.7 502.3 170.6 493.9L154.7 431.4L92.69 448.9C84.33 451.3 75.34 448.1 69.19 442.8C63.05 436.7 60.71 427.7 63.07 419.3L80.6 357.3L18.1 341.4C9.679 339.3 3.068 332.8 .8186 324.4C-1.431 315.1 1.034 307 7.261 300.1L53.46 256L7.261 211C1.034 204.1-1.431 196 .8186 187.6C3.068 179.2 9.679 172.7 18.1 170.6L80.6 154.7L63.07 92.69C60.71 84.33 63.05 75.34 69.19 69.19C75.34 63.05 84.33 60.71 92.69 63.07L154.7 80.6L170.6 18.1C172.7 9.679 179.2 3.068 187.6 .8185C196-1.431 204.1 1.034 211 7.261L256 53.46z" />
        </svg>
      </i>
      <div v-else></div>
      <img :src='props.imageSrc' :alt="props.imageAlt" class="aspect-square rounded-t block max-w-xs max-h-80">
    </div>
    <div class="flex flex-col items-center mb-2">
      <h1 class="text-xl mb-4">{{ props.title }}</h1>
      <p class="w-full text-justify px-2 mb-2">{{ props.description }}</p>
      <p class="text-zinc-500 w-full text-left px-2">Author: {{ props.author }}</p>
      <p class="text-zinc-500 w-full text-left px-2">Uploaded: {{ prettyDate(new Date(parseInt(props.uploaded))) }}</p>
      <p class="text-zinc-500 w-full text-left px-2">Downloads: {{ props.downloads }}</p>
    </div>
    <hr>
    <div class="p-1 flex min-w-max flex-col my-1">
      <div class="flex flex-row">
        <button @click="like"
          class="p-2 mx-1 inline-flex flex-grow items-center justify-center rounded text-white bg-green-500 hover:bg-green-400">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2 fill-white" viewBox="0 0 512 512">
            <path
              d="M128 447.1V223.1c0-17.67-14.33-31.1-32-31.1H32c-17.67 0-32 14.33-32 31.1v223.1c0 17.67 14.33 31.1 32 31.1h64C113.7 479.1 128 465.6 128 447.1zM512 224.1c0-26.5-21.48-47.98-48-47.98h-146.5c22.77-37.91 34.52-80.88 34.52-96.02C352 56.52 333.5 32 302.5 32c-63.13 0-26.36 76.15-108.2 141.6L178 186.6C166.2 196.1 160.2 210 160.1 224c-.0234 .0234 0 0 0 0L160 384c0 15.1 7.113 29.33 19.2 38.39l34.14 25.59C241 468.8 274.7 480 309.3 480H368c26.52 0 48-21.47 48-47.98c0-3.635-.4805-7.143-1.246-10.55C434 415.2 448 397.4 448 376c0-9.148-2.697-17.61-7.139-24.88C463.1 347 480 327.5 480 304.1c0-12.5-4.893-23.78-12.72-32.32C492.2 270.1 512 249.5 512 224.1z" />
          </svg>
          {{ likes }}
        </button>

        <button @click="dislike"
          class="p-2 mx-1 inline-flex flex-grow items-center justify-center rounded text-white bg-red-500 hover:bg-red-400">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2 fill-white" viewBox="0 0 512 512">
            <path
              d="M96 32.04H32c-17.67 0-32 14.32-32 31.1v223.1c0 17.67 14.33 31.1 32 31.1h64c17.67 0 32-14.33 32-31.1V64.03C128 46.36 113.7 32.04 96 32.04zM467.3 240.2C475.1 231.7 480 220.4 480 207.9c0-23.47-16.87-42.92-39.14-47.09C445.3 153.6 448 145.1 448 135.1c0-21.32-14-39.18-33.25-45.43C415.5 87.12 416 83.61 416 79.98C416 53.47 394.5 32 368 32h-58.69c-34.61 0-68.28 11.22-95.97 31.98L179.2 89.57C167.1 98.63 160 112.9 160 127.1l.1074 160c0 0-.0234-.0234 0 0c.0703 13.99 6.123 27.94 17.91 37.36l16.3 13.03C276.2 403.9 239.4 480 302.5 480c30.96 0 49.47-24.52 49.47-48.11c0-15.15-11.76-58.12-34.52-96.02H464c26.52 0 48-21.47 48-47.98C512 262.5 492.2 241.9 467.3 240.2z" />
          </svg>
          {{ dislikes }}
        </button>
      </div>
      <div class="flex flex-row mt-2 mx-1">
        <button
          class="p-2 inline-flex flex-grow items-center justify-center rounded text-white bg-blue-500 hover:bg-blue-400" @click="download">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-white" viewBox="0 0 512 512">
            <path
              d="M480 352h-133.5l-45.25 45.25C289.2 409.3 273.1 416 256 416s-33.16-6.656-45.25-18.75L165.5 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96C512 366.3 497.7 352 480 352zM432 456c-13.2 0-24-10.8-24-24c0-13.2 10.8-24 24-24s24 10.8 24 24C456 445.2 445.2 456 432 456zM233.4 374.6C239.6 380.9 247.8 384 256 384s16.38-3.125 22.62-9.375l128-128c12.49-12.5 12.49-32.75 0-45.25c-12.5-12.5-32.76-12.5-45.25 0L288 274.8V32c0-17.67-14.33-32-32-32C238.3 0 224 14.33 224 32v242.8L150.6 201.4c-12.49-12.5-32.75-12.5-45.25 0c-12.49 12.5-12.49 32.75 0 45.25L233.4 374.6z" />
          </svg>
        </button>
        <!-- <button
          class="p-2 ml-1 inline-flex flex-grow items-center justify-center rounded-l text-white bg-blue-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2 fill-white" viewBox="0 0 512 512">
            <path
              d="M480 352h-133.5l-45.25 45.25C289.2 409.3 273.1 416 256 416s-33.16-6.656-45.25-18.75L165.5 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96C512 366.3 497.7 352 480 352zM432 456c-13.2 0-24-10.8-24-24c0-13.2 10.8-24 24-24s24 10.8 24 24C456 445.2 445.2 456 432 456zM233.4 374.6C239.6 380.9 247.8 384 256 384s16.38-3.125 22.62-9.375l128-128c12.49-12.5 12.49-32.75 0-45.25c-12.5-12.5-32.76-12.5-45.25 0L288 274.8V32c0-17.67-14.33-32-32-32C238.3 0 224 14.33 224 32v242.8L150.6 201.4c-12.49-12.5-32.75-12.5-45.25 0c-12.49 12.5-12.49 32.75 0 45.25L233.4 374.6z" />
          </svg>
          {{ props.downloads }}
        </button>
        <button
          class="p-2 mr-1 inline-flex flex-grow items-center justify-center rounded-r text-white bg-blue-500 hover:bg-blue-400">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2 fill-white" viewBox="0 0 512 512">
            <path
              d="M480 352h-133.5l-45.25 45.25C289.2 409.3 273.1 416 256 416s-33.16-6.656-45.25-18.75L165.5 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96C512 366.3 497.7 352 480 352zM432 456c-13.2 0-24-10.8-24-24c0-13.2 10.8-24 24-24s24 10.8 24 24C456 445.2 445.2 456 432 456zM233.4 374.6C239.6 380.9 247.8 384 256 384s16.38-3.125 22.62-9.375l128-128c12.49-12.5 12.49-32.75 0-45.25c-12.5-12.5-32.76-12.5-45.25 0L288 274.8V32c0-17.67-14.33-32-32-32C238.3 0 224 14.33 224 32v242.8L150.6 201.4c-12.49-12.5-32.75-12.5-45.25 0c-12.49 12.5-12.49 32.75 0 45.25L233.4 374.6z" />
          </svg>
          {{ props.downloads }}
        </button> -->
      </div>
    </div>

    <hr>

    <div class="m-1">
      <div v-if="props.type === 'patterns'">
        <button @click="viewPattern"
          class="p-2 m-1 mr-0 rounded-r-none border-r-0 inline-flex items-center rounded border shadow-md hover:shadow-inner dark:border-zinc-500 dark:bg-zinc-900 hover:dark:bg-zinc-800">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 dark:fill-white" viewBox="0 0 576 512">
            <path
              d="M279.6 160.4C282.4 160.1 285.2 160 288 160C341 160 384 202.1 384 256C384 309 341 352 288 352C234.1 352 192 309 192 256C192 253.2 192.1 250.4 192.4 247.6C201.7 252.1 212.5 256 224 256C259.3 256 288 227.3 288 192C288 180.5 284.1 169.7 279.6 160.4zM480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6V112.6zM288 112C208.5 112 144 176.5 144 256C144 335.5 208.5 400 288 400C367.5 400 432 335.5 432 256C432 176.5 367.5 112 288 112z" />
          </svg>
        </button>

        <button
          class="p-2 m-1 ml-0 rounded-l-none inline-flex items-center rounded border shadow-md hover:shadow-inner dark:border-zinc-500 dark:bg-zinc-900 hover:dark:bg-zinc-800">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 dark:fill-white" viewBox="0 0 576 512">
            <path
              d="M172.1 40.16L268.1 3.76C280.9-1.089 295.1-1.089 307.9 3.76L403.9 40.16C425.6 48.41 440 69.25 440 92.52V204.7C441.3 205.1 442.6 205.5 443.9 205.1L539.9 242.4C561.6 250.6 576 271.5 576 294.7V413.9C576 436.1 562.9 456.2 542.5 465.1L446.5 507.3C432.2 513.7 415.8 513.7 401.5 507.3L288 457.5L174.5 507.3C160.2 513.7 143.8 513.7 129.5 507.3L33.46 465.1C13.13 456.2 0 436.1 0 413.9V294.7C0 271.5 14.39 250.6 36.15 242.4L132.1 205.1C133.4 205.5 134.7 205.1 136 204.7V92.52C136 69.25 150.4 48.41 172.1 40.16V40.16zM290.8 48.64C289 47.95 286.1 47.95 285.2 48.64L206.8 78.35L287.1 109.5L369.2 78.35L290.8 48.64zM392 210.6V121L309.6 152.6V241.8L392 210.6zM154.8 250.9C153 250.2 150.1 250.2 149.2 250.9L70.81 280.6L152 311.7L233.2 280.6L154.8 250.9zM173.6 455.3L256 419.1V323.2L173.6 354.8V455.3zM342.8 280.6L424 311.7L505.2 280.6L426.8 250.9C425 250.2 422.1 250.2 421.2 250.9L342.8 280.6zM528 413.9V323.2L445.6 354.8V455.3L523.2 421.2C526.1 419.9 528 417.1 528 413.9V413.9z" />
          </svg>
        </button>
      </div>
      <div v-else-if="props.type === 'mods'">
        <button @click="viewMod"
          class="p-2 m-1 inline-flex items-center rounded border shadow-md hover:shadow-inner dark:border-zinc-500 dark:bg-zinc-900 hover:dark:bg-zinc-800">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 dark:fill-white" viewBox="0 0 576 512">
            <path
              d="M279.6 160.4C282.4 160.1 285.2 160 288 160C341 160 384 202.1 384 256C384 309 341 352 288 352C234.1 352 192 309 192 256C192 253.2 192.1 250.4 192.4 247.6C201.7 252.1 212.5 256 224 256C259.3 256 288 227.3 288 192C288 180.5 284.1 169.7 279.6 160.4zM480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6V112.6zM288 112C208.5 112 144 176.5 144 256C144 335.5 208.5 400 288 400C367.5 400 432 335.5 432 256C432 176.5 367.5 112 288 112z" />
          </svg>
        </button>
      </div>
      <div v-else></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useToast } from 'vue-toastification';

const props = defineProps<{
  imageSrc: string,
  imageAlt: string,
  title: string,
  description: string,
  author: string,
  uploaded: string,
  likes: string,
  dislikes: string,
  downloads: string,
  type: string,
  id: string,
  verified?: boolean,
  featured?: boolean,
  latestVersion: string,
}>();

const { $api, $consts } = useNuxtApp();
let toast = useToast();

const likes = useState('likes', () => parseInt(props.likes))
const dislikes = ref(parseInt(props.dislikes))
const likedLocal = ref(false)
const dislikedLocal = ref(false)

const prettyDate = (date: Date): string => {
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} @ ${date.getHours().toString().length > 1 ? date.getHours() : '0' + date.getHours()}:${date.getUTCMinutes().toString().length > 1 ? date.getMinutes() : '0' + date.getMinutes()}`;
}

const viewMod = () => {
  window.location.href = `/mods/${props.id}`;
}

const viewPattern = () => {
  window.location.href = `/patterns/${props.id}`;
}

const errorVal = useState('error', () => null)

const like = async () => {
  let token = localStorage.getItem('userToken')

  if (token === null || !token.length) {
    toast.error('You need to be logged in to like.')
  }

  if (!likedLocal.value) {
    likes.value += 1
    likedLocal.value = true
  }

  if (dislikedLocal.value) {
    dislikes.value -= 1
    dislikedLocal.value = false
  }

  const { error } = await $api(`/${props.type}/${props.id}/like`, 'POST', { 'Authorization': `Bearer ${token}` })

  if (error.value) {
    if (!!error.value !== true) {
      errorVal.value = error.value
    }

    if (errorVal.value.response === undefined) {
      toast.error('The server failed to respond to this request.')
      return
    }

    toast.error(errorVal.value.response._data.message)
    likes.value -= 1

    return
  }
}

const dislike = async () => {
  let token = localStorage.getItem('userToken')

  if (token === null || !token.length) {
    toast.error('You need to be logged in to dislike.')
  }

  if (!dislikedLocal.value) {
    dislikes.value += 1
    dislikedLocal.value = true
  }

  if (likedLocal.value) {
    likes.value -= 1
    likedLocal.value = false
  }

  const { error } = await $api(`/${props.type}/${props.id}/dislike`, 'POST', { 'Authorization': `Bearer ${token}` })

  if (error.value) {
    if (error.value !== true) {
      errorVal.value = error.value
    }

    if (errorVal.value.response === undefined) {
      toast.error('The server failed to respond to this request.')
      return
    }

    toast.error(errorVal.value.response._data.message)
    likes.value -= 1

    return
  }
}

const download = async () => {
  console.log(props.latestVersion)
  window.location.href = `${$consts().API_BASE_URL}/${props.type}/${props.id}/versions/${props.latestVersion}/download`
}
</script>