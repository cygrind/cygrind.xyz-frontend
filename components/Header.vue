<template>
  <div>
    <button class="rounded dark:bg-white dark:text-black hover:bg-slate-500 hover:dark:bg-slate-100"
      @click="printStuff">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    </button>
  </div>
</template>

<script setup>
const printStuff = () => {
  console.log("a")
}
</script>