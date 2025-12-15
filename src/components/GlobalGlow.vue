<script setup lang="ts">
import { useUIStore } from '../store/uiStore'

const uiStore = useUIStore()
</script>

<template>
  <div class="fixed top-0 left-0 w-full h-40 pointer-events-none z-1 transition-all duration-700 ease-in-out" :style="{
    background: `linear-gradient(to bottom, ${uiStore.glowColor}26, #12121200)`
  }" />
</template>
