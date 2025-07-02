import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
   images:{
    domains:["aisyr.pythonanywhere.com"]
   }
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
 