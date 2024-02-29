function checkForUrl(inputUrl) {
    if (!inputUrl) return false;

    // Regular expression to check if the input is a valid URL
    const urlPattern = /^https?:\/\/([a-zA-Z\d-]+\.)*[a-zA-Z]{2,}(\/[^\s]*)?$/;

    return urlPattern.test(inputUrl);
}

export { checkForUrl };
