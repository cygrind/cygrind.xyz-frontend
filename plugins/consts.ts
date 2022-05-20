const globals = { API_BASE_URL: '127.0.0.1:8000' };

interface Globals {
  API_BASE_URL: string
}

export default defineNuxtPlugin(() => {
  return {
    provide: {
      consts: (): Globals => { return globals },
      api: async (route: string, method: string = "GET", headers?: {}, body?: any) => {
        return await useFetch(globals.API_BASE_URL + route, { body, method, headers });
      }
    }
  }
});
