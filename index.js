'use strict';

// {% codepen slugHash user|anon tabs theme height width %}

function codepenTagRender(args) {
    const [
        slugHash = args[0],
        user = args[1] || (hexo.config.codepen.user || "anon"),
        defaultTabs = args[2] || (hexo.config.codepen.default_tabs || "result,js"), // html,js,result
        theme = args[3] || (hexo.config.codepen.theme || "dark"), // dark,light,default
        height = args[4] || (hexo.config.codepen.height || 300),
        width = args[5] || (hexo.config.codepen.width || "100%"),
    ] = args;

    // Use Click-to-Load
    let clickLoad = '';
    if (hexo.config.codepen.click_load) {
        clickLoad = '/preview'
    }

    // Make Code Editable
    let editable = '';
    if (hexo.config.codepen.editable) {
        editable = '&editable=true'
    }

    const src = `//codepen.io/${user}/embed${clickLoad}/${slugHash}?theme-id=${theme}${editable}&default-tab=${defaultTabs}`;

    const id = `codePen_embed_${slugHash.replace(/\//g, '_')}`;

    let styles = '';

    let attrs = hexo.config.codepen.style;

    // console.info("hexo-codeopen: global config ==>",JSON.stringify(attrs))
    if (attrs) {
        styles =  Object.keys(attrs).map(s => s + ':' + attrs[s]).join(";");
    }

    return `<iframe id="${id}" src="${src}" scrolling="no" frameborder="no" height="${height}" allowTransparency="true" allowfullscreen="true" class="codePen_embed_iframe" loading="lazy" style="width: ${width}; overflow: hidden; ${styles}"></iframe>`;
}
hexo.extend.tag.register('codepen', codepenTagRender);
