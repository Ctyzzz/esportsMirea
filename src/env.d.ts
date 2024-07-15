interface ImportMetaEnv {
  readonly VITE_API_URL: string
}

// overrides default type
interface ImportMeta {
  readonly env: ImportMetaEnv
}