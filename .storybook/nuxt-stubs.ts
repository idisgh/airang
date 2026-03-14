import { ref } from 'vue'

export const navigateTo = (_url: string | object) => {}
export const useRouter = () => ({
  push: (_url: string) => {},
  replace: (_url: string) => {},
  back: () => {},
})
export const useRoute = () => ({
  params: {},
  query: {},
  path: '/',
  name: 'index',
})
export const useFetch = (_url: string) => ({
  data: ref(null),
  pending: ref(false),
  error: ref(null),
  refresh: () => {},
})
export const useAsyncData = (_key: string, _fn: Function) => ({
  data: ref(null),
  pending: ref(false),
  error: ref(null),
})
export const definePageMeta = (_meta: object) => {}
export const useHead = (_meta: object) => {}
export const useSeoMeta = (_meta: object) => {}
export const useSupabaseClient = () => ({
  from: () => ({
    select: () => ({ data: null, error: null }),
    insert: () => ({ data: null, error: null }),
  }),
})
