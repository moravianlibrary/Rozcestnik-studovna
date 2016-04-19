Template.registerHelper('getMarkdown', (markdownFile) => {
    // if there is first no empty line in markdownFile
    // meteor's markdown helper renders <h1> as <pre>
    return '\n' + ReactiveMethod.call('getMarkdown', markdownFile);
});