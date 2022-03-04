const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	// daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: '#0099cc',
          secondary: '#424242',
          accent: '#82b1ff',
          info: '#2196f3',
          success: '#7fad33',
          warning: '#FBBD23',
          error: '#f75a5f',
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },

	theme: {
		extend: {}
	},

	plugins: [require('daisyui')],

	darkMode: 'class'
};

module.exports = config;
