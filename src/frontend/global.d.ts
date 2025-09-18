// TypeScript declaration for the <model-viewer> custom element
// Allows usage of <model-viewer> in JSX/TSX files without type errors

declare namespace JSX {
  interface IntrinsicElements {
    'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      src?: string;
      alt?: string;
      'auto-rotate'?: boolean | string;
      'camera-controls'?: boolean | string;
      style?: React.CSSProperties;
      // Add more attributes as needed
    };
  }
}
