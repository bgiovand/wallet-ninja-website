/** @type {import('next').NextConfig} */
module.exports = {
  eslint: {
    dirs: ['src'],
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'x-robots-tag',
            value: 'noindex, nofollow',
          },
        ],
      },
    ];
  },

  reactStrictMode: true,

  // Uncoment to add domain whitelist
  // images: {
  //   domains: [
  //     'res.cloudinary.com',
  //   ],
  // },

  // SVGR
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    });

    return config;
  },
};
