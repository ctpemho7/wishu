/// <reference types="vite/client" />
interface ImportMetaEnv {
    RENDERER_VITE_API_BASE_URL: string
    RENDERER_VITE_LEGACY_API_BASE_URL: string
    RENDERER_VITE_HUB_URL: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}