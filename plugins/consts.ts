const globals: Globals = { API_BASE_URL: 'http://127.0.0.1:8080', API_PROXY_URL: '' };

interface Globals {
  API_BASE_URL: string,
  API_PROXY_URL: string,
}

export default defineNuxtPlugin(() => {
  return {
    provide: {
      consts: (): Globals => { return globals },
      api: async (route: string, method: string = "GET", headers?: Record<any, any>, body?: any) => {
        return await useFetch(globals.API_BASE_URL + route, { body, method, headers });
      },
      api_proxy: async (route: string, method: string = "GET", headers?: Record<any, any>, body?: any) => {
        return await useFetch(globals.API_PROXY_URL + route, { body, method, headers });
      },
    }
  }
});
