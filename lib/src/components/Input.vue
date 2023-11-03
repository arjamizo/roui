<template>
  <div class="flex flex-col py-3 pr-8">
    <div class="flex flex-row label-cont">
      <label v-if="label" class="flex flex-col relative">
        <my-input v-bind="$attrs" v-on="$listeners" class="peer pr-[15px] w-96 h-10 bg-white text-gray-500 text-lg focus:outline-none font-medium placeholder-transparent"/>
        <span class="absolute left-1 -top-2 text-xs text-yellow-500 font-medium
          transition-all
          peer-placeholder-shown:top-2
          peer-placeholder-shown:text-xl
          peer-focus:-top-2
          peer-focus:text-xs
        "
        >{{ label }}</span>
      </label>
      <my-input v-else class="pr-[15px] w-96 h-10 bg-white text-gray-500 text-lg focus:outline-none font-medium"/>
      <span v-if="required" class="abs w-[0] h-[0]">
        <div class="relative top-1 right-4 text-yellow-500 text-3xl font-medium">*</div>
      </span>
    </div>
    <div class="flex flex-row gap-2 text-xs items-center -mg-top-2" v-if="info">
      <span class="material-icons info text-gray-500">info</span>
      <span class="text-gray-500">{{ info }}</span>
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
