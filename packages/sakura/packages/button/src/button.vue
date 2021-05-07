<template>
  <button
    ref="button"
    :type="nativeType"
    :class="btnClasses"
	  :disabled="loading || disabled"
  >
    <i v-if="loading" class="el-icon-loading"></i>
    <i v-if="icon" :class="icon"></i>
    <span v-if="$slots.default" class="sr-button__inner"><slot></slot></span>
  </button>
</template>

<script lang="ts">
import {
  defineComponent,
  toRefs,
  ref,
  computed,
  onMounted,
  PropType,
} from 'vue'

type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text' | 'default'
type ComponentSize = 'large' | 'medium' | 'small' | 'mini'
type ButtonNativeType = 'button' | 'submit' | 'reset'

export const useAutofocus = (autofocusRef) => {
  const ele = ref(null)

  onMounted(() => {
    if (autofocusRef.value) {
      ele.value.focus()
    }
  })

  return ele
}

export default defineComponent({
  name: 'SrButton',
  props: {
    type: {
      type: String as PropType<ButtonType>,
      default: 'default',
      validator: (value: string) => {
        return [
          'default',
          'primary',
          'success',
          'info',
          'warning',
          'danger',
          'text',
        ].includes(value)
      },
    },
    size: {
      type: String as PropType<ComponentSize>,
      validator: (value: string) => {
        return [
          'large',
          'medium',
          'small',
          'mini',
        ].includes(value)
      },
    },
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
    loading: Boolean,
    disabled: Boolean,
    icon: String,
    autofocus: Boolean,
    nativeType: {
      type: String as PropType<ButtonNativeType>,
      default: 'button',
      validator: (value: string) => {
        return [
          'button',
          'submit',
          'reset',
        ].includes(value)
      },
    },
  },
  setup(props, ctx) {
    const { disabled, loading, nativeType, icon, autofocus } = toRefs(props)

    const btnClasses = computed(() => {
      return [
        'sr-button',
        `sr-button--${props.type}`,
        props.size && `sr-button--${props.size}`,
        {
          'is-plain': props.plain,
          'is-round': props.round,
          'is-circle': props.circle,
          'is-loading': props.loading,
          'is-disabled': props.disabled,
        },
        props.icon,
      ]
    })

    const button = useAutofocus(autofocus)

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
