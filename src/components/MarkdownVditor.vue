<template>
  <div :id="id" />
</template>

<script>
import Vditor from 'vditor'

export default {
  name: 'MarkdowVditor',

  data() {
    return {
      contentEditor: undefined,
      isLoading: true,
    }
  },

  props: {
    id: {
      type: String,
      required: true,
    },
    pdata: {
      type: String,
      required: true,
      default: '',
    },
  },
  mounted() {
    this.initVditor()
  },
  methods: {
    initVditor() {
      this.contentEditor = new Vditor(this.id, {
        height: 360,
        toolbarConfig: {
          pin: true,
        },
        cache: {
          enable: false,
        },
        after: () => {
          this.contentEditor.setValue(this.pdata)
        },
      })
      this.$nextTick(() => {
        this.isLoading = false
      })
    },
    getValue() {
      return this.contentEditor.getValue()
    },
  },
}
</script>

<style lang="less">
@import '~vditor/src/assets/less/index';
</style>
