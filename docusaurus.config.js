// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require("prism-react-renderer");
const darkCodeTheme = themes.dracula;
const path = require("path");

const BASE_URL = process.env.BASE_URL || "/";

function hideIndexFromSidebarItems(items) {
  const result = items.filter((item) => {
    return !(item.type === "doc" && item.id === "index");
  });
  return result;
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Harness Developer Hub",
  tagline:
    "Learn intelligent software delivery at your own pace. Guides, videos, and reference docs to help you deliver customer happiness.",
  url: "https://developer.harness.io",
  baseUrl: BASE_URL,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  onBrokenAnchors: "ignore",
  favicon: "img/hdh_fav_icon_grey.ico",

  //Mermaid Diagram Functionality
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "harness", // Usually your GitHub org/user name.
  projectName: "developer-hub", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // docs: {
        //   path: "docs",
        //   sidebarPath: require.resolve("./sidebars.js"),
        //   editUrl: "https://github.com/harness/developer-hub/tree/main", // /tree/main/packages/create-docusaurus/templates/shared/
        //   // include: ["tutorials/**/*.{md, mdx}", "docs/**/*.{md, mdx}"],
        //   exclude: ["**/shared/**", "**/static/**"],
        //   routeBasePath: "docs", //CHANGE HERE
        // },
        docs: false,
        sitemap: {
          // changefreq: 'weekly',
          // priority: 0.5,
          ignorePatterns: [
            "/docs/infra-as-code-management",
            "/docs/infra-as-code-management/**",
          ],
          // filename: 'sitemap.xml',
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"), // we could also use scss here
        },
        // gtag: { // use GTM instead
        //   trackingID: 'G-46758J5H8P',
        //   anonymizeIP: false,
        // },
        googleTagManager: {
          containerId: "GTM-MJB7HPB",
        },
      }),
    ],
  ],

  // themes: ["@docusaurus/theme-search-algolia"],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: "og:image",
          content: "https://developer.harness.io/img/hdh-social-card.png",
        },
      ],
      navbar: {
        title: "Harness Developer Hub",
        logo: {
          alt: "Harness Developer Hub",
          src: "/img/logo_dlp.svg",
        },
        items: [
          /*{
            position: "left",
            html: `<img src='${BASE_URL}img/icon_beta.svg' alt='BETA' width='39' height='19' />`,
            href: "#",
          },*/
          {
            position: "right",
            type: "dropdown",
            label: "Documentation",
            to: "docs",
            items: [
              {
                label: "Get Started",
                to: "docs/get-started",
              },
              {
                label: "Code Repository",
                to: "docs/code-repository",
              },
              {
                label: "Continuous Integration",
                to: "docs/continuous-integration",
              },
              {
                label: "Continuous Delivery & GitOps",
                to: "docs/continuous-delivery",
              },
              {
                label: "Infrastructure as Code Management",
                to: "docs/infrastructure-as-code-management",
              },
              {
                label: "Feature Flags",
                to: "docs/feature-flags",
              },
              {
                label: "Cloud Cost Management",
                to: "docs/cloud-cost-management",
              },
              {
                label: "Security Testing Orchestration",
                to: "docs/security-testing-orchestration",
              },
              {
                label: "Software Supply Chain Assurance",
                to: "docs/software-supply-chain-assurance",
              },
              {
                label: "Chaos Engineering",
                to: "docs/chaos-engineering",
              },
              {
                label: "Service Reliability Management",
                to: "docs/service-reliability-management",
              },
              {
                label: "Internal Developer Portal",
                to: "docs/internal-developer-portal",
              },
              {
                label: "Software Engineering Insights",
                to: "docs/software-engineering-insights",
              },
              {
                label: "Platform",
                to: "docs/platform",
              },
              {
                label: "Self-Managed Enterprise Edition",
                to: "docs/self-managed-enterprise-edition",
              },
              {
                label: "FirstGen",
                to: "docs/first-gen",
              },
              {
                label: "Release Notes",
                href: "/release-notes",
              },
              {
                label: "Roadmap",
                href: "/roadmap",
              },
              {
                label: "FAQs",
                to: "docs/faqs",
              },
              {
                label: "Troubleshooting",
                to: "docs/troubleshooting",
              },
              {
                label: "Harness Cloud Operations",
                to: "docs/harness-cloud-operations",
              },
              {
                label: "API Reference",
                to: "https://apidocs.harness.io/",
              },
            ],
          },
          {
            label: "University",
            position: "right",
            type: "dropdown",
            to: "university",
            items: [
              {
                label: "Learn Harness",
                to: "university",
              },
              {
                label: "Continuous Integration",
                to: "university/continuous-integration",
              },
              {
                label: "Continuous Delivery & GitOps",
                to: "university/continuous-delivery",
              },
              {
                label: "Feature Flags",
                to: "university/feature-flags",
              },
              {
                label: "Cloud Cost Management",
                to: "university/cloud-cost-management",
              },
              {
                label: "Security Testing Orchestration",
                to: "university/sto",
              },
              {
                label: "Chaos Engineering",
                to: "university/chaos-engineering",
              },
              {
                label: "Instructions",
                to: "university/instructions",
              },
              {
                label: "FAQs",
                to: "university/faqs",
              },
              {
                label: "Instructor Led Training",
                to: "university/instructor-led-training",
              },
            ],
          },
          {
            label: "Knowledge Base",
            position: "right",
            type: "dropdown",
            to: "kb",
            items: [
              {
                to: "kb",
                label: "Knowledge Base",
              },
              {
                to: "community",
                label: "Community",
              },
            ],
          },

          {
            type: "custom-coveo-search",
            position: "right",
          },
          {
            position: "right",
            html: '<button class="button button--nav">Sign in</button>',
            href: "https://app.harness.io/auth/#/signin/?utm_source=website&utm_medium=harness-developer-hub&utm_campaign=plt-plg&utm_content=sign-in",
          },
          {
            position: "right",
            html: '<button class="button button--cta">Sign up</button>',
            href: "https://app.harness.io/auth/#/signup/&?utm_source=website&utm_medium=harness-developer-hub&utm_campaign=plt-plg&utm_content=get-started",
          },
        ],
      },
      footer: {
        // style: "dark",
        links: [
          {
            title: "Harness Software Delivery Platform",
            items: [
              {
                label: "Overview",
                to: "https://harness.io/products/platform",
              },
              {
                label: "Code Repository",
                to: "https://www.harness.io/products/code-repository",
              },
              {
                label: "Continuous Integration",
                to: "https://harness.io/products/continuous-integration",
              },
              {
                label: "Continuous Delivery & GitOps",
                to: "https://harness.io/products/continuous-delivery",
              },
              {
                label: "Infrastructure as Code Management",
                to: "https://www.harness.io/products/infrastructure-as-code-management",
              },
              {
                label: "Feature Flags",
                to: "https://harness.io/products/feature-flags",
              },
              {
                label: "Cloud Cost Management",
                to: "https://harness.io/products/cloud-cost",
              },
              {
                label: "Security Testing Orchestration",
                to: "https://harness.io/products/security-testing-orchestration",
              },
              {
                label: "Software Supply Chain Assurance",
                to: "https://www.harness.io/products/software-supply-chain-assurance",
              },
              {
                label: "Chaos Engineering",
                to: "https://harness.io/products/chaos-engineering",
              },
              {
                label: "Service Reliability Management",
                to: "https://harness.io/products/service-reliability-management",
              },
              {
                label: "Internal Developer Portal",
                to: "https://www.harness.io/products/internal-developer-portal",
              },
              {
                label: "Software Engineering Insights",
                to: "https://www.harness.io/products/software-engineering-insights",
              },
            ],
          },
          {
            title: "Resources",
            items: [
              {
                label: "Sign up",
                to: "https://app.harness.io/auth/#/signup/&?utm_source=website&utm_medium=harness-developer-hub&utm_campaign=plt-plg&utm_content=get-started",
              },
              {
                label: "Slack",
                to: "https://join.slack.com/t/harnesscommunity/shared_invite/zt-25b35u8j5-qAvb~7FJ1NFXbiW4AN101w",
              },
              {
                label: "API Reference",
                to: "https://apidocs.harness.io/",
              },
              {
                label: "Open Source",
                to: "https://www.harness.io/open-source",
              },
              {
                label: "YouTube",
                to: "https://www.youtube.com/c/Harnessio",
              },
              {
                label: "Developer Hub GitHub",
                to: "https://github.com/harness/developer-hub",
              },
              {
                label: "Release Notes",
                href: "/release-notes",
              },
              {
                label: "Roadmap",
                href: "/roadmap",
              },
              {
                label: "Feature Requests",
                to: "https://ideas.harness.io",
              },
            ],
          },
          {
            title: "Legal",
            items: [
              {
                label: "Terms of Use",
                to: "legal/terms-of-use",
              },
              {
                label: "Privacy Policy",
                to: "https://harness.io/legal/privacy",
              },
              {
                label: "Accessibility",
                to: "legal/accessibility",
              },
              {
                html: "<a href='javascript:void(0)' class='footer__link-item' onclick='window.OneTrust && window.OneTrust.ToggleInfoDisplay()'>Cookie Management</a>",
                // href: "javascript: alert(33)",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Harness Inc.`,
      },
      prism: {
        theme: darkCodeTheme, // lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: "light",
        // disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      /*
      announcementBar: {
        id: "support_us",
        content:
          "Welcome to Harness Developer Hub. Help us improve by providing feedback.",
        backgroundColor: "#000000",
        textColor: "#ffffff",
        isCloseable: true,
      },
      */
      announcementBar: {
        id: "announcementBar_cd_announcement",
        content:
          "<i class='fa-solid fa-circle-exclamation' style='color: #CF2318; margin-right: 4px;'></i><span style='color: #CF2318;'>FirstGen Harness CD will be EOL on 12/30/2023 and EOS on 3/30/2024.</span> Learn more in our <a href='/docs/continuous-delivery/get-started/upgrading/upgrade-nextgen-cd/' target='_self'>Upgrade Guide</a>. Contact  <a href='https://support.harness.io' target='_self'>Harness Support</a> with questions or concerns.",
        backgroundColor: "#FFF5ED",
        textColor: "#000000",
        isCloseable: true,
      },
      announcementBarByPath: {
        // list all pathnames in Regular expressions format
        pathRegExp: [
          // paths for md-doc pages
          "^/docs/first-gen/continuous-delivery.*",
          "^/docs/first-gen/first-gen-quickstarts.*",
          // paths for category pages
          "^/docs/category/quickstarts.*",
          "^/docs/category/continuous-delivery.*",
          "^/docs/category/continuous-delivery-overview.*",
          "^/docs/category/general-deployment-features.*",
          "^/docs/category/deployment-strategies-and-integrations.*",
          "^/docs/category/aws-.*",
          "^/docs/category/general-aws-.*",
          "^/docs/category/azure-.*",
          "^/docs/category/cicd-artifact-build-and-deploy-pipelines.*",
          "^/docs/category/google-cloud.*",
          "^/docs/category/native-helm-deployments.*",
          "^/docs/category/iis-net-deployments.*",
          "^/docs/category/kubernetes-deployments.*",
          "^/docs/category/tanzu-application-service-formerly-pivotal.*",
          "^/docs/category/terraform-1.*",
          "^/docs/category/terragrunt.*",
          "^/docs/category/traditional-deployments-ssh.*",
          "^/docs/category/custom-deployments.*",
          "^/docs/category/continuous-verification.*",
          "^/docs/category/model-your-cd-pipeline.*",
          "^/docs/category/harness-git-based-how-tos.*",
        ],
      },
      utmCookie: {
        prefix: "utm_",
      },
      rss: {
        rssPath: "release-notes/rss.xml",
        rssTitle: "Harness Release Notes",
        copyright: "Harness Inc.",
        rssDescription: "Harness Release Notes",
      },
      redirectExport: {
        destPath: "_redirects",
      },
    }),
  plugins: [
    [
      path.resolve(__dirname, "./plugins/docs-rss-plugin"),
      {
        id: "release-notes",
        path: "release-notes",
        routeBasePath: "release-notes",
        exclude: ["**/shared/**", "**/static/**"],
        sidebarPath: require.resolve("./sidebars-release-notes.js"),
        editUrl: "https://github.com/harness/developer-hub/tree/main",
        async sidebarItemsGenerator({ defaultSidebarItemsGenerator, ...args }) {
          const sidebarItems = await defaultSidebarItemsGenerator(args);
          const sidebarItemsWithoutIndex =
            hideIndexFromSidebarItems(sidebarItems);
          return sidebarItemsWithoutIndex;
        },
      },
    ],
    // redirect plugin start
    [
      path.resolve(__dirname, "./plugins/redirect-plugin"),

      {
        id: "university",
        path: "university",
        routeBasePath: "university",
        exclude: ["**/shared/**", "**/static/**"],
        sidebarPath: require.resolve("./sidebars-university.js"),
        editUrl: "https://github.com/harness/developer-hub/tree/main",
        // ... other options
      },
    ],
    [
      path.resolve(__dirname, "./plugins/redirect-plugin"),

      {
        id: "community",
        path: "community",
        routeBasePath: "community",
        exclude: ["**/shared/**", "**/static/**"],
        sidebarPath: require.resolve("./sidebars-community.js"),
        editUrl: "https://github.com/harness/developer-hub/tree/main",
        // ... other options
      },
    ],
    //[
    //  path.resolve(__dirname, "./plugins/redirect-plugin"),
    //  {
    //    id: "tutorials",
    //    path: "tutorials",
    //    routeBasePath: "tutorials",
    //    exclude: ["**/shared/**", "**/static/**"],
    //    sidebarPath: require.resolve("./sidebars-tutorials.js"),
    //    editUrl: "https://github.com/harness/developer-hub/tree/main",
    //  },
    //],
    [
      path.resolve(__dirname, "./plugins/redirect-plugin"),
      {
        id: "kb",
        path: "kb",
        routeBasePath: "kb",
        exclude: ["**/shared/**", "**/static/**"],
        sidebarPath: require.resolve("./sidebars-kb.js"),
        editUrl: "https://github.com/harness/developer-hub/tree/main",
        // ... other options
      },
    ],

    [
      path.resolve(__dirname, "./plugins/redirect-plugin"),
      {
        id: "docs1",
        path: "docs",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://github.com/harness/developer-hub/tree/main", // /tree/main/packages/create-docusaurus/templates/shared/
        // include: ["tutorials/**/*.{md, mdx}", "docs/**/*.{md, mdx}"],
        exclude: ["**/shared/**", "**/static/**"],
        routeBasePath: "docs", //CHANGE HERE
      },
    ],
    [
      path.resolve(__dirname, "./plugins/redirect-plugin"),
      {
        id: "roadmap",
        path: "roadmap",
        sidebarPath: false,
        editUrl: "https://github.com/harness/developer-hub/tree/main", // /tree/main/packages/create-docusaurus/templates/shared/
        // include: ["tutorials/**/*.{md, mdx}", "docs/**/*.{md, mdx}"],
        exclude: ["**/shared/**", "**/static/**"],
        routeBasePath: "roadmap", //CHANGE HERE
      },
    ],

    "docusaurus-plugin-sass",
    path.join(__dirname, "/plugins/utmcookie-plugin"),
    path.join(__dirname, "/plugins/feedback-plugin"),
    path.join(__dirname, "/plugins/focusOnAnchor-plugin"),
    //path.join(__dirname, "/plugins/scarf-plugin"),
  ],
  clientModules: [path.join(__dirname, "/client_module/searchBar")],
};

module.exports = config;
