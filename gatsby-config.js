module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://www.kattschan.xyz/`,
    // Your Name
    name: 'Kat Tschan',
    // Main Site Title
    title: `Kat Tschan | Full-Stack Developer`,
    // Description that goes under your name in main bio
    description: `I make cool programs.`,
    // Optional: Twitter account handle
    author: `@kattschan`,
    // Optional: Github account URL
    github: `https://github.com/kattschan`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/ryanafitzgerald/`,
    // Content of the About Me section
    about: `I make code in my spare time. Student and programmer. She/her 🏳️‍⚧️`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'NGMS Daily Ballot',
        description:
          'A voting thingy I made for my school.',
        link: 'https://github.com/tschanadam/daily-ballot-repo',
      },
      {
        name: 'My Email',
        description:
          'Feel free to send a message to this project :)',
        link: 'mailto:kat@wobbuffet.xyz',
      },
    ],
    
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript, HTML, CSS, NodeJS, C#',
      },
      {
        name: 'Databases',
        description: 'MySQL, Microsoft SQL',
      },
      {
        name: 'Other',
        description:
          'Azure, AWS, Heroku, Netlify, Google Cloud',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
