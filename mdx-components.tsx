import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  // GFM tables (e.g. the VentureGPS scoring-pillar breakdown) can exceed
  // the readable content width on narrow screens; wrap them so they
  // scroll horizontally instead of overflowing the page.
  table: (props) => (
    <div className="tableScroll">
      <table {...props} />
    </div>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
