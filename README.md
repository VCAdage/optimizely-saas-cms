# Anima-Optimizely Next.js Project
## Project Overview
This project leverages Anima, a Figma plugin, to generate Next.js components that are used within an Optimizely CMS environment. The project is designed to create dynamic and efficient web components, enhanced with modern capabilities such as feature experimentation and AI-powered search.

Key Features
1. Figma to Optimizely Next.js Components
We use Anima to streamline the process of converting Figma designs into Optimizely-compatible Next.js components. This enables quick iteration and seamless integration of designs into the web application.

2. Feature Experimentation
The project integrates Optimizely's Feature Experimentation functionality, allowing developers to test different variations of content and features. This helps optimize user experiences by deploying and analyzing A/B tests and other experiments.

3. AI-Powered Search
Our AI-powered search leverages OpenAI and GraphQL to enhance user experience with advanced search capabilities. It generates search results based on user queries and provides AI-based summaries of the results. This feature allows users to find relevant content faster and more efficiently.

4. Automated Deployment with Vercel
This project is connected to Vercel for seamless and automated deployment. Vercel ensures continuous deployment and a smooth development workflow. The live application is deployed at:

[Optimizely SaaS CMS](https://optimizely-saas-cms-plum.vercel.app/en)

## Getting Started

Configure your local env by adding .env.local file in the root folder
Make sure to add the following values:

```bash
# Optimizely Global
OPTIMIZELY_DEBUG=0

# Optimizely Graph
OPTIMIZELY_GRAPH_GATEWAY=https://beta.cg.optimizely.com/
OPTIMIZELY_GRAPH_APP_KEY=YOUR_KEY_HERE
OPTIMIZELY_GRAPH_SECRET=YOUR_SECRET_HERE
OPTIMIZELY_GRAPH_SINGLE_KEY=YOUR_SINGLE_KEY_HERE
OPTIMIZELY_GRAPH_UPDATE_DELAY=2000
OPTIMIZELY_GRAPH_QUERY_LOG=0

# Optimizely CMS
OPTIMIZELY_CMS_URL=YOUR_INSTANCE_URL_HERE
OPTIMIZELY_CMS_CLIENT_ID=YOUR_CLIENT_HERE
OPTIMIZELY_CMS_CLIENT_SECRET=YOUR_CLIENT_SECRET_HERE
OPTIMIZELY_CMS_USER_ID=YOUR_USER_ID_HERE

# Frontend specfic
SITE_DOMAIN=localhost:3002
OPTIMIZELY_PUBLISH_TOKEN=optly-5d5216fe-047f-49e3-b8c6-579712b3606e

NODE_TLS_REJECT_UNAUTHORIZED=0
```

Then make sure you've got your local environment:
```bash
yarn install
```

Finally, start the local development server
```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
