interface EnvironmentVariables {}

/** Google Tag Manager */
interface DataLayer {
  push: (args: any) => void;
}

/** These exist ONLY on window */
interface Window {
  __env__?: Partial<EnvironmentVariables>;
  dataLayer?: DataLayer;
}

declare module "calver" {
  function inc(format: string, previousVersion: string, operation: string);
}

declare namespace JSX {
  interface IntrinsicElements {}
}

declare module "csstype" {
  interface Properties {
    // Allow CSS Custom Properties
    [index: `--${string}`]: any;
  }
}
