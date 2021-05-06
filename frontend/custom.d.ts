declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '@env' {
  export const API_BASE: string;
}
