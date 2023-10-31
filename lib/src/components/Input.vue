<template>
  <div class="flex flex-col">
    <div class="flex flex-row label-cont">
      <label v-if="label" class="flex flex-col">
        <my-input v-bind="$attrs" v-on="$listeners" class="peer pr-[15px] w-96 h-10 bg-white text-gray-400 text-xl focus:outline-none font-medium placeholder-transparent"/>
        <span class="absolute left-3 -top-2 text-base text-yellow-500
          transition-all
          peer-placeholder-shown:top-4
          peer-placeholder-shown:text-xl
          peer-focus:-top-2
          peer-focus:text-base
        "
        >{{ label }}</span>
      </label>
      <my-input v-else class="pr-[15px] w-96 h-10 bg-white text-gray-400 text-lg focus:outline-none font-medium"/>
      <span v-if="required" class="abs w-[0] h-[0]">
        <div class="relative top-[8px] right-[12px] text-[orange] text-3xl">*</div>
      </span>
    </div>
    <div class="flex flex-row" v-if="info">
      <span class="material-icons info text-gray-300">info</span>
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
    border-bottom: 2px solid orange;
    margin: 2px;
  }

  input[required="required"]::after {
    content:" *";
    color: grey;
  }
</style>
