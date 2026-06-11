const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  // no-op unless --pathprefix is passed (needed for project pages served from /repo-name/)
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  // iOS universal links for LY74HQDURM.mz.LoginMaster — must ship with the site
  eleventyConfig.addPassthroughCopy("src/apple-app-site-association");

  // custom-domain marker GitHub Pages reads from the publishing folder;
  // ship it from src/ so clean rebuilds of docs/ don't drop the domain
  eleventyConfig.addPassthroughCopy("src/CNAME");

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
