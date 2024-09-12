├── forge.config.ts
├── LICENSE
├── package.json
├── README.md
├── scripts
│   └── generateContributors.mjs
├── src
│   ├── assets
│   │   ├── app.css
│   │   ├── fonts
│   │   │   ├── OpenSans-VariableFont_wdth,wght.ttf
│   │   │   └── WorkSans-VariableFont_wght.ttf
│   │   └── icons
│   │       ├── controls
│   │       │   ├── pause-button.png
│   │       │   ├── pause-button.psd
│   │       │   ├── play-button.png
│   │       │   ├── play-button.psd
│   │       │   ├── play-next-button.png
│   │       │   ├── play-next-button.psd
│   │       │   ├── play-previous-button.png
│   │       │   ├── play-previous-button.psd
│   │       │   ├── thumbs-down-button-outline.png
│   │       │   ├── thumbs-down-button-outline.psd
│   │       │   ├── thumbs-down-button.png
│   │       │   ├── thumbs-down-button.psd
│   │       │   ├── thumbs-up-button-outline.png
│   │       │   ├── thumbs-up-button-outline.psd
│   │       │   ├── thumbs-up-button.png
│   │       │   └── thumbs-up-button.psd
│   │       ├── tray.ico
│   │       ├── trayTemplate@2x.png
│   │       ├── trayTemplate.png
│   │       ├── ytmd_black.png
│   │       ├── ytmd.icns
│   │       ├── ytmd.ico
│   │       ├── ytmd.png
│   │       └── ytmd_white.png
│   ├── main
│   │   ├── index.ts
│   │   ├── integrations
│   │   │   ├── companion-server
│   │   │   │   ├── api
│   │   │   │   │   └── v1
│   │   │   │   │       └── index.ts
│   │   │   │   ├── api-shared
│   │   │   │   │   ├── auth.ts
│   │   │   │   │   ├── errors.ts
│   │   │   │   │   └── schemas.ts
│   │   │   │   └── index.ts
│   │   │   ├── custom-css
│   │   │   │   └── index.ts
│   │   │   ├── discord-presence
│   │   │   │   ├── index.ts
│   │   │   │   └── minimal-discord-client
│   │   │   │       ├── index.ts
│   │   │   │       ├── ipc.ts
│   │   │   │       └── types.ts
│   │   │   ├── integration.ts
│   │   │   ├── last-fm
│   │   │   │   ├── index.ts
│   │   │   │   └── schemas.ts
│   │   │   ├── notifications
│   │   │   │   └── index.ts
│   │   │   └── volume-ratio
│   │   │       ├── index.ts
│   │   │       └── script
│   │   │           ├── disable.script.d.ts
│   │   │           ├── disable.script.js
│   │   │           ├── enable.script.d.ts
│   │   │           ├── enable.script.js
│   │   │           ├── forceupdatevolume.script.d.ts
│   │   │           └── forceupdatevolume.script.js
│   │   ├── memory-store
│   │   │   └── index.ts
│   │   ├── player-state-store
│   │   │   └── index.ts
│   │   ├── tsconfig.json
│   │   └── @types
│   │       └── fastify.d.ts
│   ├── renderer
│   │   ├── components
│   │   │   ├── KeybindInput.vue
│   │   │   ├── TitleBar.vue
│   │   │   ├── YTMDSetting.vue
│   │   │   └── YTMViewLoading.vue
│   │   ├── store-ipc
│   │   │   ├── memory-store.ts
│   │   │   └── store.ts
│   │   ├── tsconfig.json
│   │   ├── @types
│   │   │   ├── global.d.ts
│   │   │   └── shims-vue.d.ts
│   │   ├── windows
│   │   │   ├── authorize-companion
│   │   │   │   ├── Auth.vue
│   │   │   │   ├── index.html
│   │   │   │   ├── Index.vue
│   │   │   │   ├── preload.ts
│   │   │   │   └── renderer.ts
│   │   │   ├── main
│   │   │   │   ├── index.html
│   │   │   │   ├── Index.vue
│   │   │   │   ├── preload.ts
│   │   │   │   └── renderer.ts
│   │   │   └── settings
│   │   │       ├── index.html
│   │   │       ├── Index.vue
│   │   │       ├── preload.ts
│   │   │       ├── renderer.ts
│   │   │       └── Settings.vue
│   │   └── ytmview
│   │       ├── preload.ts
│   │       └── scripts
│   │           ├── getplaylists.script.d.ts
│   │           ├── getplaylists.script.js
│   │           ├── hookplayerapievents.script.d.ts
│   │           ├── hookplayerapievents.script.js
│   │           ├── playerbarcontrols.script.d.ts
│   │           ├── playerbarcontrols.script.js
│   │           ├── toggledislike.script.d.ts
│   │           ├── toggledislike.script.js
│   │           ├── togglelike.script.d.ts
│   │           └── togglelike.script.js
│   └── shared
│       ├── integrations
│       │   └── companion-server
│       │       └── types.ts
│       ├── locales
│       ├── store
│       │   └── schema.ts
│       └── types.ts
├── tsconfig.json
├── webpack.main.config.ts
├── webpack.plugins.ts
├── webpack.renderer.config.ts
├── webpack.rules.ts
└── yarn.lock

38 directories, 101 files
coolgamer362@coolgamer362-Predator-PH315-53:~/ytmdesktop$ tree -L 2
.
├── forge.config.ts
├── LICENSE
├── package.json
├── README.md
├── scripts
│   └── generateContributors.mjs
├── src
│   ├── assets
│   ├── main
│   ├── renderer
│   └── shared
├── tsconfig.json
├── webpack.main.config.ts
├── webpack.plugins.ts
├── webpack.renderer.config.ts
├── webpack.rules.ts
└── yarn.lock
