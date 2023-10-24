import Component from './../components/Input.vue';
import { userEvent, within, fireEvent, screen } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
  title: 'FormViewer/Input',
  component: RouiInput,
  tags: ['autodocs'],
  render: (args, { argTypes }) => ({
    inheritAttrs: false,
    props: Object.keys(argTypes),
    components: { MyComponent: Component },
    template: `<div class="flex justify-start">
      <img v-show="showMock" src="empty.png" :class="{
        mock: true,
        [required ? 'input-mock-required' : 'input-mock-normal']: true
      }"/>
      <my-component data-testid="test" id="idOfInput" name="inputName" placeholder="Input" v-on="$listeners" v-bind="$props"/>
    </div>`,
  }),
  argTypes: {
    showMock: {
      control: 'boolean',
      default: true
    },
    required: {
      control: 'boolean'
    },
  },
};

export const Primary = {
  args: {
  },
};
