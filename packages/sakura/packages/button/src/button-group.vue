<template>
  <div class="sr-button-group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
} from 'vue'

export default defineComponent({
  name: 'SrButtonGroup',
})
</script>

<style lang="scss">
.sr-button-group {
  .sr-button:not(:first-child):not(:last-child) {
    border-radius: 0;
    border-left-color: hsla(0,0%,100%,.5);
    border-right-color: hsla(0,0%,100%,.5);
  }
  .sr-button:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .sr-button:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
}
</style>
