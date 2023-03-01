import {
  // create naive ui
  create,
  // component
  NButton,
  NConfigProvider,
  NGlobalStyle,
  NIcon,
  NInput,
  NLayout,
  NForm,
} from 'naive-ui'

export const naive = create({
  components: [NButton, NConfigProvider, NGlobalStyle, NIcon, NInput, NLayout, NForm],
})
