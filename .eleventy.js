module.exports = config => {
    config.addPassthroughCopy({
        "src/eleventy/_includes/js/*": "assets/js"
    });
    
    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',

        dir: {
            input: 'src/eleventy',
            output: 'dist'
        }
    };
};
  