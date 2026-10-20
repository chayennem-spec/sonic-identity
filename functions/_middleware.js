// Send every visitor to one address: https://www.sonicidentityarchitect.com
// Covers the bare domain (sonicidentityarchitect.com) and the production *.pages.dev address.
// Preview deploys (branch or hash subdomains of pages.dev) are left alone so previews keep working.
const CANONICAL = "www.sonicidentityarchitect.com";
const REDIRECT_HOSTS = new Set(["sonicidentityarchitect.com", "sonicidentityarchitect.pages.dev"]);

export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (REDIRECT_HOSTS.has(url.hostname) || (url.hostname === CANONICAL && url.protocol === "http:")) {
    url.hostname = CANONICAL;
    url.protocol = "https:";
    url.port = "";
    return Response.redirect(url.toString(), 301);
  }
  return context.next();
}
