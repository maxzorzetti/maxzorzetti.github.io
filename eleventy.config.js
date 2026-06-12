const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  // no-op unless --pathprefix is passed (needed for project pages served from /repo-name/)
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  // iOS universal links for LY74HQDURM.mz.LoginMaster — must ship with the site
  eleventyConfig.addPassthroughCopy("src/apple-app-site-association");

  // custom-domain marker GitHub Pages reads from the publishing folder;
  // ship it from src/ so clean rebuilds of docs/ don't drop the domain
  eleventyConfig.addPassthroughCopy("src/CNAME");

  // post images: src/images/foo.jpg → /images/foo.jpg
  eleventyConfig.addPassthroughCopy("src/images");

  // {key=value} / {.class} annotations in markdown, e.g. ![alt](/images/x.jpg){width=320},
  // and figure/figcaption wrapping: ![alt](src "the quoted title becomes the caption")
  eleventyConfig.amendLibrary("md", (mdLib) =>
    mdLib
      .use(require("markdown-it-attrs"))
      .use(require("markdown-it-implicit-figures"), { figcaption: "title" })
  );

  eleventyConfig.addFilter("readableDate", (date) =>
    new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    })
  );

  return {
    dir: {
      input: "src",
      output: "docs",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
