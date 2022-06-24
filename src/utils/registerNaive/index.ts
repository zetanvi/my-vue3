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
} from 'naive-ui'

export const naive = create({
	components: [NButton, NConfigProvider, NGlobalStyle, NIcon, NInput, NLayout],
})
