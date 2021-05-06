<template>
  <button
    ref="button"
    :type="nativeType"
    :class="btnClasses"
	  :disabled="loading || disabled"
  >
    <i v-if="loading" class="el-icon-loading"></i>
    <i v-if="icon" :class="icon"></i>
    <span><slot></slot></span>
  </button>
</template>

<script lang="ts">
import {
  defineComponent,
  toRefs,
  ref,
  reactive,
  computed,
  watch,
  onMounted,
} from 'vue'

export default defineComponent({
  name: 'SrButton',
  props: {
    type: {
      type: String,
      // validator(value: string) {
      //   return [
      //     '',
      //     'primary',
      //     'success',
      //     'info',
      //     'warning',
      //     'danger',
      //     'text',
      //   ].includes(value)
      // },
    },
    size: {
      type: String,
      // validator(value: string) {
      //   return [
      //     '',
      //     'medium',
      //     'small',
      //     'mini',
      //   ].includes(value)
      // },
    },
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
    loading: Boolean,
    disabled: Boolean,
    icon: String,
    autofocus: Boolean,
    nativeType: {
      type: String,
      default: 'button',
      // validator(value: string) {
      //   return [
      //     'button',
      //     'submit',
      //     'reset',
      //   ].includes(value)
      // },
    },
  },
  setup(props) {
    const { disabled, loading, nativeType, icon } = toRefs(props)

    const btnClasses = computed(() => {
      return [
        'sr-button',
      ]
    })

    const button = ref(null)

    onMounted(() => {
      if (props.autofocus) {
        button.value.focus()
      }
    })


    return {
      btnClasses,
      disabled,
      loading,
      button,
      nativeType,
      icon
    }
  }
})
</script>

<style>
</style>
