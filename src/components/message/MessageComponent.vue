<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{
  message: string
  type: 'success' | 'error' | 'warning' | 'info'
}>()

const iconMap = {
  success: 'i-mingcute:check-circle-fill text-green-500',
  error: 'i-mingcute:close-circle-fill text-red-500',
  warning: 'i-mingcute:warning-fill text-amber-500',
  info: 'i-mingcute:information-fill text-blue-500'
}

const iconClass = computed(() => iconMap[props.type])
</script>

<template>
  <div
    class="fixed top-8 left-1/2 z-[9999] flex items-center gap-3 px-5 py-3.5 rounded-xl bg-[#282828]/95 backdrop-blur-md border border-white/10 shadow-2xl min-w-[300px] max-w-[80vw] animate-slide-in-down">
    <div :class="[iconClass, 'text-xl flex-shrink-0']" />
    <span class="text-sm font-medium text-gray-100 tracking-wide">{{ message }}</span>
  </div>
</template>

<style scoped>
@keyframes slideInDown {
  from {
    opacity: 0;
    transform: translate(-50%, -20px) scale(0.95);
  }

  to {
    opacity: 1;
    transform: translate(-50%, 0) scale(1);
  }
}

.animate-slide-in-down {
  animation: slideInDown 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  /* 确保动画结束后保持居中 */
  transform: translate(-50%, 0);
}
</style>
