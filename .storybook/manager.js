import { addons } from '@storybook/addons';
import theme from './theme'

console.log("i")

addons.setConfig({
  theme: theme,
  sidebar: {
    showRoots: false,
  },
});