<template>
  <button :class="['w-button', `w-button--${type}`, `w-button--${size}`, plain ? 'is-plain' : null]" @click="handleClick">
    <slot />
  </button>
</template>

<script setup lang="ts" name="WButton">
import { buttonEmits, buttonProps } from './button'

const props = defineProps(buttonProps)
const emit = defineEmits(buttonEmits)

const handleClick = (evt: MouseEvent) => {
  emit('click', evt)
}
</script>
