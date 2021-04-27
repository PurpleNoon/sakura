<template>
  <button
    :class="btnClasses"
  >
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
    props = reactive(props)

    const btnClasses = computed(() => {
      return [
        'sr-box-border',
        'sr-inline-block',
        'sr-m-0',
        'sr-py-3',
        'sr-px-5',

        'sr-text-sm',
        'sr-leading-none',
        'sr-font-medium',
        'sr-text-center',
        'sr-whitespace-nowrap',

        'sr-border',
        'sr-border-solid',
        'sr-rounded',
        'sr-outline-none',

        'sr-appearance-none',
        'sr-select-none',
        'sr-cursor-pointer',
        'sr-duration-100',
        !props.type && [
          'sr-text-text-regular',
          'sr-bg-white',
          'sr-border-border',
        ],
        props.type === 'primary' && [
          'sr-text-white',
          'sr-bg-primary',
          'sr-border-primary',
        ],
        props.type === 'success' && [
          'sr-text-white',
          'sr-bg-success',
          'sr-border-success',
        ],
        props.type === 'info' && [
          'sr-text-white',
          'sr-bg-info',
          'sr-border-info',
        ],
        props.type === 'warning' && [
          'sr-text-white',
          'sr-bg-warning',
          'sr-border-warning',
        ],
        props.type === 'danger' && [
          'sr-text-white',
          'sr-bg-danger',
          'sr-border-danger',
        ],
      ]
    })
    return {
      btnClasses
    }
  }
})
</script>

<style>

</style>
