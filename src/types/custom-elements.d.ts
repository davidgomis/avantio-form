declare namespace JSX {
  interface IntrinsicElements {
    "custom-react-form": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      "accommodation-name"?: string;
      "accommodation-address"?: string;
      "accommodation-description"?: string;
      "accommodation-type"?: string;
      "owner-name"?: string;
      "owner-email"?: string;
      "owner-phone"?: string;
    };
  }
}
