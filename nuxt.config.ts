// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            meta: [
                { name: 'theme-color', content: '#333646' }
            ],
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://cdnjs.cloudflare.com/ajax/libs/modern-normalize/2.0.0/modern-normalize.min.css'
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap'
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap'
                },
            ]
        }
    },
    devtools: {enabled: true},
    css: [
        'assets/aguia-zip/assets/css/aguia.min.css',
        'assets/css/index.css'
    ]
})
