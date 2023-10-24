<template>
  <div class="flex flex-col">
    <div class="flex flex-row label-cont">
      <label v-if="label" class="flex flex-col">
        <my-input v-bind="$attrs" v-on="$listeners" class="pr-[15px]"/>
        <span>{{ label }}</span>
      </label>
      <my-input v-else class="pr-[15px]"/>
      <span v-if="required" class="abs w-[0] h-[0]">
        <div class="relative top-[8px] right-[12px] text-[orange] text-[2rem]">*</div>
      </span>
    </div>
    <div class="flex flex-row" v-if="info">
      <span class="material-icons info text-[#bfbfbf]">info</span>
      {{ info }}
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

const MyInput = defineComponent({
  template: `<input type="text" v-bind="$attrs" :placeholder="$attrs.label" v-on="$listeners"/>`,
})

export const RouiInput = defineComponent({
  name: 'roui-input',
  inheritAttrs: false,
  props: ['info', 'required', 'label'],
  components: {
    MyInput,
  },
})

export default RouiInput
</script>

<style>
  input[type='text'] {
    border-bottom: 2px solid grey;
    margin: 2px;
  }

  input[required="required"]::after {
    content:" *";
    color: grey;
  }
</style>
