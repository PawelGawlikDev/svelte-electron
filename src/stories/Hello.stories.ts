import type { Meta, StoryObj } from '@storybook/svelte'

import Hello from '../renderer/src/components/Hello.svelte'

// export default {
//   component: Hello,
//   title: 'Hello',
//   tags: ['autodocs']
// }

// const Template = ({ ...args }) => ({
//   Component: Hello,
//   props: args
// })

// export const Default = Template.bind({})
// Default.args = {
//   name: 'Paweł'
// }

const meta = {
  title: 'Hello',
  component: Hello,
  tags: ['autodocs']
} satisfies Meta<Hello>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: 'Paweł'
  }
}
