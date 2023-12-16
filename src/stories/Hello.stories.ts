import type { Meta, StoryObj } from '@storybook/svelte'

import Hello from '../renderer/src/components/Hello.svelte'

const meta = {
  title: 'Hello',
  component: Hello,
  tags: ['autodocs']
} satisfies Meta<Hello>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: 'Test'
  }
}
