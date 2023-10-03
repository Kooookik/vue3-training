<script setup lang="ts">
import { PrefectureDisplay } from "@/types/prefecture"
import { computed } from "vue"
const props = defineProps<{
  prefecture: PrefectureDisplay
}>()

const emits = defineEmits<{
  (eventName: "check", arg: PrefectureDisplay): void
}>()

const checkBox = computed({
  get: () => props.prefecture.isCheck,
  set: (isCheck: boolean) => emits("check", { ...props.prefecture, isCheck })
})
</script>

<template>
  <div class="prefecture-area">
    <input v-model="checkBox" type="checkbox" />
    <span>{{ prefecture.prefName }}</span>
    <span>{{ prefecture.isCheck }}</span>
  </div>
</template>
<style scoped>
.prefecture-area {
  display: flex;
}
</style>
