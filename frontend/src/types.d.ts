declare namespace JSX {
  interface IntrinsicElements {
    // Instead of just mapping firefox-private-relay-addon-data to JSX.IntrinsicElements.div,
    // explicitly allow data-* attributes by extending React.HTMLAttributes<HTMLElement>.
    // This ensures that TypeScript recognizes the valid attributes on your custom element.
    // Define custom elements and allow all standard HTML attributes
    "firefox-private-relay-addon": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >;
    "firefox-private-relay-addon-data": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      id?: string;
      "data-api-token"?: string;
      "data-has-premium"?: boolean;
      "data-fxa-subscriptions-url"?: string;
      "data-aliases-used-val"?: number;
      "data-emails-forwarded-val"?: number;
      "data-emails-blocked-val"?: number;
      "data-email-trackers-removed-val"?: number;
      "data-premium-subdomain-set"?: string;
      "data-premium-enabled"?: string;
    };
  }
}
