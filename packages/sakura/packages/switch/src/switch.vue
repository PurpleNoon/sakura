<template>
  <div
    :class="[
      'sr-switch',
      {
        'is-disabled': disabled,
        'is-checked': checked,
      },
    ]"
    @click.prevent="switchValue"
  >
    <input
      ref="checkbox"
      class="sr-switch__input"
      type="checkbox"
      :name="name"
      :checked="checked"
      :disabled="switchDisabled"
      @change="handleChange"
    />
    <span
      v-if="inactiveIconClass || inactiveText"
      :class="[
        'sr-switch__label',
        'sr-switch__label--left',
        !checked && 'is-active',
      ]"
    >
      <i v-if="inactiveIconClass" :class="[inactiveIconClass]"></i>
      <span v-if="!inactiveIconClass && inactiveText">
        {{ inactiveText }}
      </span>
    </span>
    <div
      ref="core"
      class="sr-switch__core"
      :style="[
        {
          width: (width || 40) + 'px',
        },
        (activeColor || inactiveColor) && {
          borderColor: currentColor,
          backgroundColor: currentColor,
        },
      ]"
    >
      <div
        class="sr-switch__action"
        :style="[
          (activeColor || inactiveColor) && {
            color: currentColor,
          },
        ]"
      >
        <i v-if="loading" class="sr-icon-loading"></i>
      </div>
    </div>
    <span
      v-if="activeIconClass || activeText"
      :class="[
        'sr-switch__label',
        'sr-switch__label--right',
        checked && 'is-active',
      ]"
    >
      <i v-if="activeIconClass" :class="[activeIconClass]"></i>
      <span v-if="!activeIconClass && activeText">
        {{ activeText }}
      </span>
    </span>
  </div>
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

/*
可以尝试添加的功能：
loading-icon
size (switch size)
插槽 (这个其实也可以另外封装一个组件来完成)

width 觉得可以不要

歪门邪道：补一个 custom-icon + width=20 再改改 activeColor 和 inactiveColor，就能成为奇怪的按钮 QwQ！
*/

export default defineComponent({
  name: 'SrSwitch',
  props: {
    modelValue: {
      type: [Boolean, String, Number],
      default: false,
    },
    disabled: Boolean,
    loading: Boolean,
    width: {
      type: Number,
      default: 40,
    },
    activeIconClass: String,
    inactiveIconClass: String,
    activeText: String,
    inactiveText: String,
    activeValue: {
      type: [Boolean, String, Number],
      default: true,
    },
    inactiveValue: {
      type: [Boolean, String, Number],
      default: false,
    },
    activeColor: {
      type: String,
      default: '',
    },
    inactiveColor: {
      type: String,
      default: '',
    },
    name: String,
    validateEvent: {
      type: Boolean,
      default: true,
    },
    beforeChange: Function,
  },
  emits: ['update:modelValue', 'change'],
  setup(props, ctx) {
    // TODO: prop: before-change 的实现
    const checkbox = ref(null)
    const core = ref(null)
    const checked = ref(props.modelValue === props.activeValue)
    const currentValue = computed(() =>
      checked.value ? props.activeValue : props.inactiveValue
    )
    const currentColor = computed(() =>
      checked.value ? props.activeColor : props.inactiveColor
    )
    const switchDisabled = computed(() => props.disabled || props.loading)

    console.log('initial: ', {
      ...props
    })

    // 当 modelValue 既不是 activeValue，也不是 inactiveValue 时，用 inactiveValue 代替
    if (![props.activeValue, props.inactiveValue].includes(props.modelValue)) {
      console.warn(
        '[sakura-ui warn]: modelValue is not equal activeValue or inactiveValue, use inactiveValue instead'
      )
      ctx.emit('update:modelValue', currentValue.value)
      ctx.emit('change', currentValue.value)
    }

    watch(checked, () => {
      if (props.validateEvent) {
        // TODO: elForm validate
      }
    })

    const handleChange = () => {
      console.log('before: ', currentValue.value)
      checked.value = !checked.value
      console.log('after: ', currentValue.value)
      ctx.emit('update:modelValue', currentValue.value)
      ctx.emit('change', currentValue.value)
    }

    const switchValue = () => {
      !switchDisabled.value && handleChange()
    }

    return {
      switchValue,
      handleChange,
      checkbox,
      core,
      checked,
      currentColor,
      switchDisabled,
    }
  },
})
</script>

<style lang="scss">
</style>
