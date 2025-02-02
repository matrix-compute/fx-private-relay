declare namespace JSX {
  interface IntrinsicElements {
    // By default TypeScript will mark custom elements as invalid;
    // this defines <firefox-private-relay-addon> (and -data) as equivalent
    // to a <div>, allowing us to e.g. set data attributes on it.
    // See https://github.com/Microsoft/TypeScript/issues/4648#issuecomment-137845601.
    "firefox-private-relay-addon": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >;
    "firefox-private-relay-addon-data": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >;
  }
}
