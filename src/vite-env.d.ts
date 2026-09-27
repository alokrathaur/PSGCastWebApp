/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_NAME?: string;
  readonly VITE_SITE_URL?: string;
  readonly VITE_API_URL?: string;
  readonly VITE_APP_VERSION?: string;
  readonly VITE_DOWNLOAD_DMG_URL?: string;
  readonly VITE_DOWNLOAD_PKG_URL?: string;
  readonly VITE_SUPPORT_EMAIL?: string;
  readonly VITE_TWITTER_URL?: string;
  readonly VITE_BASE_PATH?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
