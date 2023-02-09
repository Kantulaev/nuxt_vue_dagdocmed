export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'DagDocMed - ДагДокМед', meta: [{ name: 'description', content: 'Доказательная медицина в Дагестане' }
      ],
    }
  }
})
