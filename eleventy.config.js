const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  // no-op unless --pathprefix is passed (needed for project pages served from /repo-name/)
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  // iOS universal links for LY74HQDURM.mz.LoginMaster — must ship with the site
  eleventyConfig.addPassthroughCopy("src/apple-app-site-association");

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
