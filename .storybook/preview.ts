import type { Preview } from '@storybook/vue3'
import { setup } from '@storybook/vue3'
import { defineComponent, h } from 'vue'
import '../assets/css/main.css'

// Nuxt 전용 컴포넌트 stub
setup((app) => {
  // NuxtLink → a 태그로 대체
  app.component('NuxtLink', defineComponent({
    props: { to: { type: [String, Object], default: '#' } },
    setup(props, { slots }) {
      return () => h('a', { href: typeof props.to === 'string' ? props.to : '#' }, slots.default?.())
    },
  }))

  // LIcon (nuxt-icon) stub → span으로 대체
  app.component('LIcon', defineComponent({
    props: {
      name: { type: String, default: '' },
      class: { type: String, default: '' },
    },
    setup(props) {
      return () => h('span', {
        class: props.class,
        title: props.name,
        style: 'display:inline-block;width:1em;height:1em;background:#ccc;border-radius:2px;vertical-align:middle',
      })
    },
  }))
})

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#f9f9f9' },
        { name: 'dark', value: '#0a0a0a' },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /date$/i,
      },
    },
  },
}

export default preview
