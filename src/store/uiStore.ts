import { defineStore } from "pinia";

export const useUIStore = defineStore("ui", {
  state: () => ({
    glowColor: '#404040', // 默认深灰色
  }),
  actions: {
    setGlowColor(color: string) {
      this.glowColor = color;
    },
    resetGlowColor() {
      this.glowColor = '#404040';
    }
  },
});
