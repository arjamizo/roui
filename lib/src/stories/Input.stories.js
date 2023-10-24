import { userEvent, within, fireEvent, screen } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { RouiInput } from '../components/Input.vue'

export default {
  title: 'FormViewer/Input',
  component: RouiInput,
  tags: ['autodocs'],
  render: (args, { argTypes }) => ({
    inheritAttrs: false,
    props: Object.keys(argTypes),
    components: { RouiInput },
    template: `<roui-input/>`,
  }),
  argTypes: {
  },
};

export const Primary = {
};
