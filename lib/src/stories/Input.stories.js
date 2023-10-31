import RouiInput from './../components/Input.vue';
import { userEvent, within, fireEvent, screen } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
  title: 'FormViewer/Input',
  component: RouiInput,
  tags: ['autodocs'],
  render: (args, { argTypes }) => ({
    inheritAttrs: false,
    props: Object.keys(argTypes),
    components: { MyComponent: RouiInput },
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
    info: {
      control: 'text'
    },
    label: {
      control: 'text'
    },
  },
};

export const Primary = {
  args: {
  },
  play: async (ctx) => {
    /** @type {HTMLElement} */
    const canvasElement = ctx.canvasElement;
    const canvas = within(canvasElement);
    const input = await canvas.getByRole('textbox', {
      // name: /inputName/i,
    });
    await expect(await canvas.getByTestId('test')).toBeInTheDocument();
    const inputById = await canvasElement.querySelector('#idOfInput');
    await userEvent.clear(inputById);
    await userEvent.type(input, 'Wypełniona treść', {delay: 20});
    await userEvent.click(input);
    const user = userEvent.setup()
    user.tab()
  },
};
