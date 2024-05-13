<template>
  <div class="text-input">
    <img
      v-if="props.icon"
      :src="props.icon"
      alt="text input icon"
      class="icon"
    />

    <input
      type="text"
      :placeholder="props.inputPlaceholder"
      :value="props.modelValue"
      @input="emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  icon: { required: true },
  inputPlaceholder: { type: String, required: true },
  modelValue: { type: Object, required: true },
});

const emit = defineEmits(["update:modelValue"]);
</script>
