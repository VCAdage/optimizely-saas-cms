module.exports = {
    env: {
      OPENAI_API_KEY: process.env.OPENAI_API_KEY
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'app-ocxcvach00la6p001.cms.optimizely.com',
          port: '',
          pathname: '/**',
        },
      ],
    },
  }