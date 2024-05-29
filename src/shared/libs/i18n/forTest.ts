import i18n from 'i18next'

jest.mock('react-i18next', () => ({
    // this mock makes sure any components using the translate hook can use it without a warning being shown
    useTranslation: () => {
        return {
            t: (str: string) => str,
            i18n: {
                changeLanguage: () => new Promise(() => {})
            }
        }
    },
    initReactI18next: {
        type: '3rdParty',
        init: () => {}
    }
}))

// eslint-disable-next-line import/no-named-as-default-member
i18n.init({
    lng: 'ru',
    fallbackLng: 'ru',
    debug: false,

    resources: { ru: { translations: {} } }
})

export default i18n
