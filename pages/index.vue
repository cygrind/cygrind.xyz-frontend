<template>
  <div class="flex w-full max-w-full">
    <div class="flex flex-col flex-grow p-4 max-w-full">
      <h1 class="text-5xl text-center p-2">ULTRAKILL mods and cyber grind patterns</h1>
      <hr>
      <form @submit.prevent="search($event);" class="my-4 flex focus:ring-0">
        <!-- <input type="text" placeholder="Search for patterns and mods..."
          class="p-4 flex-grow shadow-lg focus:shadow-inner focus:dark:bg-zinc-800 dark:bg-zinc-900 dark:border-zinc-500 rounded-l-md border-l border-y placeholder:text-2xl text-2xl"> -->
        <input type="text" placeholder="Search for patterns..."
          class="p-4 flex-grow shadow-lg focus:shadow-inner focus:dark:bg-zinc-800 dark:bg-zinc-900 dark:border-zinc-500 rounded-l-md border-l border-y placeholder:text-2xl text-2xl">

          <button type="submit"
          class="p-2 px-8 shadow-lg rounded-r-md border-r border-y dark:border-zinc-500 bg-green-500 hover:bg-green-400 hover:shadow-inner">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-white" viewBox="0 0 512 512">
            <path
              d="M416 208C416 253.9 401.1 296.3 375.1 330.7L502.6 457.4C515.1 469.9 515.1 490.1 502.6 502.6C490.1 515.1 469.9 515.1 457.4 502.6L330.7 375.1C296.3 401.1 253.9 416 208 416C93.12 416 0 322.9 0 208C0 93.12 93.12 0 208 0C322.9 0 416 93.12 416 208zM240.1 119C231.6 109.7 216.4 109.7 207 119C197.7 128.4 197.7 143.6 207 152.1L238.1 184H120C106.7 184 96 194.7 96 208C96 221.3 106.7 232 120 232H238.1L207 263C197.7 272.4 197.7 287.6 207 296.1C216.4 306.3 231.6 306.3 240.1 296.1L312.1 224.1C322.3 215.6 322.3 200.4 312.1 191L240.1 119z" />
          </svg>
        </button>
      </form>

      <TabGroup>
        <span class="p-2 w-1/2 rounded border dark:border-zinc-500 dark:bg-zinc-900 shadow-lg">
          <TabList class="flex justify-evenly">
            <Tab v-slot="{ selected }" as="template"><button class="tab"
                :class="[selected ? 'tab-selected' : '']">Patterns</button>
            </Tab>
            <Tab v-slot="{ selected }" as="template"><button class="tab"
                :class="[selected ? 'tab-selected' : '']">Mods</button>
            </Tab>
          </TabList>
        </span>

        <TabPanels>
          <div>
            <TabPanel>
              <div
                class="flex flex-col my-4 p-2 dark:bg-zinc-900 dark:border-zinc-500 border rounded shadow-lg max-w-full">
                <h1
                  class="mb-2 p-2 dark:bg-zinc-900 dark:border-zinc-500 border rounded shadow-lg text-3xl text-center">
                  Featured patterns
                </h1>
                <div class="card-grid">
                  <CoreCard v-for="pattern in featuredPatterns" :image-src="pattern.imageSrc"
                    :image-alt="pattern.imageAlt" :title="pattern.title" :description="pattern.description"
                    :uploaded="pattern.uploaded" :author="pattern.author" :likes="pattern.likes"
                    :dislikes="pattern.dislikes" :downloads="pattern.downloads" :id="pattern.id"
                    :verified="pattern.verified" :featured="pattern.featured" :latest-version="pattern.latestVersion"
                    type="patterns" />
                  <!-- <CoreCard
                    image-src="http://www.keystonetrust.org.uk/wp-content/uploads/2020/06/placeholder-image-1.png"
                    image-alt="Image goes here" title="Uwu!"
                    description="This is an epic description of a pattern that someone uploaded to cygrind.xyz through the cygrind api at api.cygrind.xyz"
                    uploaded="1653051266590" author="Kwista" likes="69" dislikes="0" downloads="420" type="patterns"
                    id="" verified featured />
                  <CoreCard
                    image-src="http://www.keystonetrust.org.uk/wp-content/uploads/2020/06/placeholder-image-1.png"
                    image-alt="Image goes here" title="Uwu!"
                    description="This is an epic description of a pattern that someone uploaded to cygrind.xyz through the cygrind api at api.cygrind.xyz"
                    uploaded="1653051266590" author="Kwista" likes="69" dislikes="0" downloads="420" type="patterns"
                    id="" verified featured />
                  <CoreCard
                    image-src="http://www.keystonetrust.org.uk/wp-content/uploads/2020/06/placeholder-image-1.png"
                    image-alt="Image goes here" title="Uwu!"
                    description="This is an epic description of a pattern that someone uploaded to cygrind.xyz through the cygrind api at api.cygrind.xyz"
                    uploaded="1653051266590" author="Kwista" likes="69" dislikes="0" downloads="420" type="patterns"
                    id="" verified featured />
                  <CoreCard
                    image-src="http://www.keystonetrust.org.uk/wp-content/uploads/2020/06/placeholder-image-1.png"
                    image-alt="Image goes here" title="Uwu!"
                    description="This is an epic description of a pattern that someone uploaded to cygrind.xyz through the cygrind api at api.cygrind.xyz"
                    uploaded="1653051266590" author="Kwista" likes="69" dislikes="0" downloads="420" type="patterns"
                    id="" verified featured />
                  <CoreCard
                    image-src="http://www.keystonetrust.org.uk/wp-content/uploads/2020/06/placeholder-image-1.png"
                    image-alt="Image goes here" title="Uwu!"
                    description="This is an epic description of a pattern that someone uploaded to cygrind.xyz through the cygrind api at api.cygrind.xyz"
                    uploaded="1653051266590" author="Kwista" likes="69" dislikes="0" downloads="420" type="patterns"
                    id="" verified featured /> -->
                </div>
                <hr class="mt-4 mb-2">
                <Disclosure v-slot="{ open }">
                  <DisclosureButton class="my-2 disclosure" :class="open ? 'disclosure-open' : ''">Popular patterns
                  </DisclosureButton>
                  <DisclosurePanel class="mb-2 card-grid">
                    <CoreCard
                      image-src="http://www.keystonetrust.org.uk/wp-content/uploads/2020/06/placeholder-image-1.png"
                      image-alt="Image goes here" title="Uwu!" description="uwuwuwuwu" uploaded="1653051266590"
                      author="Kwista" likes="0" dislikes="0" downloads="0" type="pattern" id="" latest-version="" />
                  </DisclosurePanel>
                </Disclosure>

                <Disclosure v-slot="{ open }">
                  <DisclosureButton class="disclosure" :class="open ? 'disclosure-open mb-2' : ''">Recent patterns
                  </DisclosureButton>
                  <DisclosurePanel class="card-grid">
                    <CoreCard
                      image-src="http://www.keystonetrust.org.uk/wp-content/uploads/2020/06/placeholder-image-1.png"
                      image-alt="Image goes here" title="Uwu!" description="uwuwuwuwu" uploaded="1653051266590"
                      author="Kwista" likes="0" dislikes="0" downloads="0" type="pattern" id="" latest-version="" />
                  </DisclosurePanel>
                </Disclosure>
              </div>
            </TabPanel>
            <TabPanel>Mods content</TabPanel>

          </div>
        </TabPanels>
      </TabGroup>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TabGroup, TabList, Tab, TabPanels, TabPanel, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { CoreCard } from '#components';
import { useToast } from 'vue-toastification';

let toast = useToast();
const { $api, $consts } = useNuxtApp();

const search = async (event: Event) => {
  // @ts-ignore
  const query: string = event.target.elements[0].value;
  if (!query.length) {
    toast.warning('Please input a query string.')
    return;
  }
  const { data } = await $api('/search?q=' + query);

  console.log(data);
}

let featuredPatterns: ICoreCard[] = [];
let { data } = await $api('/patterns/search?featured=true')
const { API_BASE_URL } = $consts()

const searchRes: IGenericSearchResponse<IPattern> = data._rawValue

if (searchRes) {
  for (const pattern of searchRes?.hits) {
    let cardProps: ICoreCard = {
      author: pattern.owner.username,
      description: pattern.description.length ? pattern.description : `${pattern.name}@${pattern.latest_version}`,
      dislikes: pattern.dislikes.toString(),
      likes: pattern.likes.toString(),
      downloads: pattern.downloads.toString(),
      id: pattern.pattern_id,
      imageAlt: pattern.pattern_id + '.png',
      imageSrc: API_BASE_URL + `/patterns/${pattern.pattern_id}/versions/${pattern.latest_version}/image`,
      title: pattern.name,
      type: 'pattern',
      uploaded: (new Date(pattern.created_at)).getTime().toString(),
      featured: pattern.featured,
      verified: pattern.verified,
      latestVersion: pattern.latest_version
    }

    featuredPatterns.push(cardProps);
  }
} else {
  toast.error(`Unable to load featured patterns from the API.`)
}
</script>
