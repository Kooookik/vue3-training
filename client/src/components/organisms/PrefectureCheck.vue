<script setup lang="ts">
import { PrefectureDisplay } from "@/types/prefecture"
// eslint-disable-next-line import/order
import { computed } from "vue"

const props = defineProps<{
  prefecture: PrefectureDisplay
  // index: number
}>()

const emits = defineEmits<{
  (eventName: "check", prefecture: PrefectureDisplay): void
}>()

const checkBox = computed({
  get: () => props.prefecture.isCheck,
  set: (isCheck: boolean) => emits("check", { ...props.prefecture, isCheck })
})
</script>

<template>
  <div class="prefecture-area">
    <input v-model="checkBox" type="checkbox" />
    {{ prefecture.prefName }}
  </div>
</template>
<style scoped>
.prefecture-area {
  display: flex;
}
</style>
