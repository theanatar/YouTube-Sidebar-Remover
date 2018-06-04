// remove sidebar recommendations
let sheets = document.styleSheets;
sheets[0].insertRule(".ytd-watch-next-secondary-results-renderer { display: none !important; }");