const globals: Globals = { API_BASE_URL: 'https://api.cygrind.xyz' };

interface Globals {
  API_BASE_URL: string
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
