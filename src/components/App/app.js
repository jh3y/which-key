import Key from '@/components/Key/index.vue'
import KeyFilter from '@/components/KeyFilter/index.vue'

export default {
  data: function() {
    return {
      keyed: [],
      showLog: true,
      typeFilters: {
        keypress: true,
        keyup: false,
        keydown: false,
      },
      valueFilters: {
        numeric: true,
        letters: true,
        'everything else': true,
      },
    }
  },
  methods: {
    bind: function() {
      const { log, typeFilters } = this
      for (const filter of Object.keys(typeFilters)) {
        if (typeFilters[filter]) window.addEventListener(filter, log)
      }
    },
    clear: function() {
      this.keyed.splice(0)
    },
    /**
     * Cool little feature so that when you tab off, the last key pressed
     * info will be displayed in the tab 👍
     */ handleDocumentHide: function() {
      const { keyed } = this
      const tabMsg = keyed.length
        ? `${keyed[0].key.trim()} = ${keyed[0].which} 🤓`
        : 'Which Key? 🤔'
      document.title = document.hidden ? tabMsg : 'Which Key? 🤔'
    },
    log: function(e) {
      const { keyed } = this
      const { which } = e
      const isALetter =
        (which > 96 && which < 123) || (which > 64 && which < 91)
      const isANumber = which > 47 && which < 58
      if (this.valueFilters.letters && isALetter) keyed.unshift(e)
      if (this.valueFilters.numeric && isANumber) keyed.unshift(e)
      if (this.valueFilters['everything else'] && (!isALetter && !isANumber))
        keyed.unshift(e)
      if (keyed.length >= 7) keyed.pop()
    },
    toggleFilter: function(e) {
      const { log, typeFilters } = this
      const { checked, id, dataset } = e.target
      this[`${dataset.type}Filters`][id] = checked
      if (dataset.type === 'type')
        window[typeFilters[id] ? 'addEventListener' : 'removeEventListener'](
          id,
          log
        )
    },
    toggleLog: function(e) {
      this.showLog = e.target.checked
    },
  },
  created: function() {
    document.addEventListener('visibilitychange', this.handleDocumentHide)
    this.bind()
  },
  name: 'app',
  components: {
    Key,
    KeyFilter,
  },
}
