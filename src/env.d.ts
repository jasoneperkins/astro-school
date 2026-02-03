/// <reference types="astro/client" />
/// <reference types="@sanity/astro/module" />

interface ImportMetaEnv {
  readonly PUBLIC_SANITY_GRAPHQL_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
