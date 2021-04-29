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

        'sr-box-border',
        'sr-inline-block',
        'sr-m-0',

        props.type === 'text' && [
          'sr-min-h-10',
          'sr-py-3',
          'sr-px-0',
          'sr-text-sm',
          'sr-rounded',
        ],
        props.circle && [
          'sr-min-h-10',
          'sr-p-3',
          'sr-text-sm',
          'sr-rounded',
        ],

        props.size === 'medium' && [
          'sr-min-h-9',
          'sr-px-2h',
          'sr-py-5',
          'sr-text-sm',
          'sr-rounded-sm',
        ],

        props.size === 'small' && [
          'sr-min-h-8',
          'sr-px-2q',
          'sr-py-3hq',
          'sr-text-xs',
          'sr-rounded-smh',
        ],

        props.size === 'mini' && [
          'sr-min-h-7',
          'sr-px-2q',
          'sr-py-3hq',
          'sr-text-xs',
          'sr-rounded-smh',
        ],

        !props.circle
        && props.type !== 'text'
        && !(['medium', 'small', 'mini'].includes(props.size))
        && [
          'sr-min-h-10',
          'sr-py-3',
          'sr-px-5',
          'sr-text-sm',
          'sr-rounded',
        ],

        'sr-leading-none',
        'sr-font-medium',
        'sr-text-center',
        'sr-whitespace-nowrap',

        'sr-border',
        'sr-border-solid',
        'sr-outline-none',

        'sr-appearance-none',
        'sr-select-none',
        'sr-cursor-pointer',
        'sr-duration-100',

        props.type === 'text' && [
          'sr-text-primary',
          'sr-border-transparent',
          'sr-bg-transparent',

          props.disabled && [
            'sr-text-placeholder',
          ],
        ],
        props.circle && [
          // 'is-circle',

          'rounded-full',
        ],

        !props.type && [
          !props.plain && [
            'sr-text-text-regular',
            'sr-border-border',
            'sr-bg-white',

            'hover:sr-text-primary',
            'hover:sr-border-primary-700',
            'hover:sr-bg-primary-900',

            'focus:sr-text-primary',
            'focus:sr-border-primary-700',
            'focus:sr-bg-primary-900',
          ],

          props.plain && [
            'sr-text-text-regular',
            'sr-border-border',
            'sr-bg-white',

            'hover:sr-text-primary',
            'hover:sr-border-primary',
            'hover:sr-bg-white',

            'focus:sr-text-primary',
            'focus:sr-border-primary',
            'focus:sr-bg-white',

            props.disabled && [
              'disabled:sr-text-white',
              'disabled:sr-border-primary-500',
              'disabled:sr-bg-primary-500',
            ]
          ],

          props.disabled && [
            'disabled:sr-text-text-placeholder',
            'disabled:sr-border-border-900',
            'disabled:sr-bg-white',
          ],

          'active:sr-text-primary-active',
          'active:sr-border-primary-active',
          'active:sr-outline-none',
        ],
        props.type === 'primary' && [
          // 'el-button--primary',

          !props.plain && [
            'sr-text-white',
            'sr-border-primary',
            'sr-bg-primary',

            'hover:sr-text-white',
            'hover:sr-border-primary-hover',
            'hover:sr-bg-primary-hover',

            'focus:sr-text-white',
            'focus:sr-border-primary-hover',
            'focus:sr-bg-primary-hover',

            props.disabled && [
              'disabled:sr-text-white',
              'disabled:sr-border-primary-500',
              'disabled:sr-bg-primary-500',
            ]
          ],

          props.plain && [
            'sr-text-primary',
            'sr-border-primary-600',
            'sr-bg-primary-900',

            'hover:sr-text-white',
            'hover:sr-border-primary',
            'hover:sr-bg-primary',

            'focus:sr-text-white',
            'focus:sr-border-primary',
            'focus:sr-bg-primary',

            props.disabled && [
              'disabled:sr-text-primary-400',
              'disabled:sr-border-primary-800',
              'disabled:sr-bg-primary-900',
            ]
          ],

          'active:sr-text-white',
          'active:sr-border-primary-active',
          'active:sr-bg-primary-active',
          'active:sr-outline-none',
        ],
        props.type === 'success' && [
          // 'el-button--success',

          !props.plain && [
            'sr-text-white',
            'sr-border-success',
            'sr-bg-success',

            'hover:sr-text-white',
            'hover:sr-border-success-hover',
            'hover:sr-bg-success-hover',

            'focus:sr-text-white',
            'focus:sr-border-success-hover',
            'focus:sr-bg-success-hover',

            props.disabled && [
              'disabled:sr-text-white',
              'disabled:sr-border-success-500',
              'disabled:sr-bg-success-500',
            ]
          ],

          props.plain && [
            'sr-text-success',
            'sr-border-success-600',
            'sr-bg-success-900',

            'hover:sr-text-white',
            'hover:sr-border-success',
            'hover:sr-bg-success',

            'focus:sr-text-white',
            'focus:sr-border-success',
            'focus:sr-bg-success',

            props.disabled && [
              'disabled:sr-text-success-400',
              'disabled:sr-border-success-800',
              'disabled:sr-bg-success-900',
            ]
          ],

          'active:sr-text-white',
          'active:sr-border-success-active',
          'active:sr-bg-success-active',
          'active:sr-outline-none',
        ],
        props.type === 'info' && [
          // 'el-button--info',

          !props.plain && [
            'sr-text-white',
            'sr-border-info',
            'sr-bg-info',

            'hover:sr-text-white',
            'hover:sr-border-info-hover',
            'hover:sr-bg-info-hover',

            'focus:sr-text-white',
            'focus:sr-border-info-hover',
            'focus:sr-bg-info-hover',

            props.disabled && [
              'disabled:sr-text-white',
              'disabled:sr-border-info-500',
              'disabled:sr-bg-info-500',
            ]
          ],

          props.plain && [
            'sr-text-info',
            'sr-border-info-600',
            'sr-bg-info-900',

            'hover:sr-text-white',
            'hover:sr-border-info',
            'hover:sr-bg-info',

            'focus:sr-text-white',
            'focus:sr-border-info',
            'focus:sr-bg-info',

            props.disabled && [
              'disabled:sr-text-info-400',
              'disabled:sr-border-info-800',
              'disabled:sr-bg-info-900',
            ]
          ],

          'active:sr-text-white',
          'active:sr-border-info-active',
          'active:sr-bg-info-active',
          'active:sr-outline-none',
        ],
        props.type === 'warning' && [
          // 'el-button--warning',

          !props.plain && [
            'sr-text-white',
            'sr-border-warning',
            'sr-bg-warning',

            'hover:sr-text-white',
            'hover:sr-border-warning-hover',
            'hover:sr-bg-warning-hover',

            'focus:sr-text-white',
            'focus:sr-border-warning-hover',
            'focus:sr-bg-warning-hover',

            props.disabled && [
              'disabled:sr-text-white',
              'disabled:sr-border-warning-500',
              'disabled:sr-bg-warning-500',
            ]
          ],

          props.plain && [
            'sr-text-warning',
            'sr-border-warning-600',
            'sr-bg-warning-900',

            'hover:sr-text-white',
            'hover:sr-border-warning',
            'hover:sr-bg-warning',

            'focus:sr-text-white',
            'focus:sr-border-warning',
            'focus:sr-bg-warning',

            props.disabled && [
              'disabled:sr-text-warning-400',
              'disabled:sr-border-warning-800',
              'disabled:sr-bg-warning-900',
            ]
          ],

          'active:sr-text-white',
          'active:sr-border-warning-active',
          'active:sr-bg-warning-active',
          'active:sr-outline-none',
        ],
        props.type === 'danger' && [
          // 'el-button--danger',

          !props.plain && [
            'sr-text-white',
            'sr-border-danger',
            'sr-bg-danger',

            'hover:sr-text-white',
            'hover:sr-border-danger-hover',
            'hover:sr-bg-danger-hover',

            'focus:sr-text-white',
            'focus:sr-border-danger-hover',
            'focus:sr-bg-danger-hover',

            props.disabled && [
              'disabled:sr-text-white',
              'disabled:sr-border-danger-500',
              'disabled:sr-bg-danger-500',
            ]
          ],

          props.plain && [
            'sr-text-danger',
            'sr-border-danger-600',
            'sr-bg-danger-900',

            'hover:sr-text-white',
            'hover:sr-border-danger',
            'hover:sr-bg-danger',

            'focus:sr-text-white',
            'focus:sr-border-danger',
            'focus:sr-bg-danger',

            props.disabled && [
              'disabled:sr-text-danger-400',
              'disabled:sr-border-danger-800',
              'disabled:sr-bg-danger-900',
            ]
          ],

          'active:sr-text-white',
          'active:sr-border-danger-active',
          'active:sr-bg-danger-active',
          'active:sr-outline-none',
        ],
        props.disabled && [
          'disabled:cursor-not-allowed',
        ],
        props.round && [
          // 'is-round',

          'rounded-full',
        ],
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
