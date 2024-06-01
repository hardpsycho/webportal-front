import i18next from 'i18next'

i18next.init({
    lng: 'ru',
    fallbackLng: 'ru',
    debug: false,

    resources: { ru: { translations: {} } }
})

export default i18next
