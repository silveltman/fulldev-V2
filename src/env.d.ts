/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

// Add types (any) for .yml files, used via rullup-plugin-yaml in vite config
declare module '*.yml' {
  const value: any // Add type definitions here if desired
  export default value
}
