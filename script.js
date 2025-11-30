console.log('Starting mangapark addon')
const redirectedURL = "https://s02.mpvim.org/*"
// URL we will redirect to
let redirectUrl = "https://s10.mpvim.org/";
browser.webRequest.onBeforeRequest.addListener(
    req => {
        const query_route = req.url.match(redirectedURL+'(.*)')[1]
        const redirection = redirectUrl+query_route
        console.log('proxying', req.url, 'to', redirection)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ redirectUrl: redirection });
            }, 2000);
        });
    },
    { urls: [redirectedURL], types: ["image"] },
    ["blocking","requestBody"],
)