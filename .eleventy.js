module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",
      output: "public",
      //layouts: '_layouts',
    },
    templateFormats: ["html", "md", "njk"],
    pathPrefix: "/prog-roadmap/",
  };
};
