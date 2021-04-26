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

const propOptions = {
    type: {
      type: String,
      validator(value: string) {
        console.log('Prop type value: ', value)
        return value === void 0 || [
          'primary',
          'success',
        ].includes(value)
      }
    }
  }

export default defineComponent({
  name: 'SrButton',
  props: propOptions,
  setup(props) {

    const btnClasses = computed(() => {
      return [
        'text-red-500',
        props.type === 'primary' && [
          ''
        ]
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
