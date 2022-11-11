const globals = { API_BASE_URL: 'http://127.0.0.1:8080', API_PROXY_URL: '' };

export default async (route, method = "GET", headers, body) => {
  return await useFetch(globals.API_BASE_URL + route, { body, method, headers });
}