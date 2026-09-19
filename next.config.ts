import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  options: {
    // Plugin is referenced by name (not imported) so it can be used with
    // Turbopack, which cannot accept JS functions across the Rust
    // boundary. See: node_modules/next/dist/docs/01-app/02-guides/mdx.md
    remarkPlugins: ["remark-gfm"],
  },
});

export default withMDX(nextConfig);
