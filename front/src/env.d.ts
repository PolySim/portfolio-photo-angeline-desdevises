/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_PUBLIC_KEY_EMAILJS: string;
  readonly VITE_PUBLIC_BACK_URL_DEV: string;
  readonly VITE_PUBLIC_BACK_URL_PROD: string;
  readonly VITE_PUBLIC_CONNECT_MDP_PROD: string;
  readonly VITE_PUBLIC_CONNECT_MDP_DEV: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
