import api from '@/server/api'
export default defineEventHandler(async (event) => {
  const nya = useNitroApp()
  console.log(nya)
  const id = event.context.params.id
  const { CYGRIND_API_SECRET } = useRuntimeConfig()

  const authorization = event.req.headers.authorization
  let res = await api(`/patterns/${id}/like`, 'POST', { 'API-Authorization': CYGRIND_API_SECRET, 'Authorization': authorization })

  if (res.error) {
    console.log(res.error)
  } else if (res.data) {
    console.log(res.data)
  }

  event.res.end()
})