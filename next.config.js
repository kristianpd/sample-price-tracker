module.exports = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `frame-ancestors https://*.myshopify.com/ https://admin.shopify.com;`,
          },
        ],
      },
    ];
  },
};
