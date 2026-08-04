interface Env {
  ASSETS: Fetcher;
}

function canonicalRedirect(request: Request): Response | null {
  const url = new URL(request.url);

  if (url.hostname.startsWith('www.')) {
    url.hostname = url.hostname.slice(4);
    return Response.redirect(url.toString(), 301);
  }

  if (url.protocol === 'http:') {
    url.protocol = 'https:';
    return Response.redirect(url.toString(), 301);
  }

  return null;
}

function stripLangQueryRedirect(request: Request): Response | null {
  const url = new URL(request.url);
  if (!url.searchParams.has('lang')) {
    return null;
  }

  url.searchParams.delete('lang');
  return Response.redirect(url.toString(), 301);
}

function withHtmlCharset(response: Response): Response {
  const contentType = response.headers.get('content-type') ?? '';
  if (!contentType.includes('text/html')) {
    return response;
  }

  const headers = new Headers(response.headers);
  headers.set('Content-Type', 'text/html; charset=utf-8');
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const redirect = canonicalRedirect(request);
    if (redirect) {
      return redirect;
    }

    const langRedirect = stripLangQueryRedirect(request);
    if (langRedirect) {
      return langRedirect;
    }

    const response = await env.ASSETS.fetch(request);
    return withHtmlCharset(response);
  },
};
