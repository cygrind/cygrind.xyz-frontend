const globals: Globals = { API_BASE_URL: 'http://127.0.0.1:8080' };

interface Globals {
  API_BASE_URL: string
}

interface CoreCard {
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
}

export default defineNuxtPlugin(() => {
  return {
    provide: {
      consts: (): Globals => { return globals },
      api: async (route: string, method: string = "GET", headers?: Record<any, any>, body?: any) => {
        return await useFetch(globals.API_BASE_URL + route, { body, method, headers });
      }
    }
  }
});
