import en from '@/i18n/langs/en.js'
import hant from '@/i18n/langs/zh_Hant.js'
import ElementLocale from 'element-ui/lib/locale'
import enLocale from 'element-ui/lib/locale/lang/en'
import twLocale from 'element-ui/lib/locale/lang/zh-TW'
import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

//将数据配置好
const messages = {
  en: {
    ...en,
    ...enLocale,
  },
  zh_hant: {
    ...hant,
    ...twLocale,
  },
}
const i18n = new VueI18n({
  locale: 'en',
  messages,
  silentTranslationWarn: true
})
ElementLocale.i18n((key, value) => i18n.t(key, value)) //为了实现element插件的多语言切换

export default i18n
