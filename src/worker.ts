interface Env {
  ASSETS: {
    fetch: (request: Request | string) => Promise<Response>;
  };
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    
    try {
      // Attempt to serve static assets from KV first
      let response = await env.ASSETS.fetch(request);
      
      if (response.status === 404) {
        // If not found, serve index.html (SPA fallback)
        response = await env.ASSETS.fetch(new Request(`${url.origin}/index.html`));
      }
      
      return response;
    } catch (e) {
      return new Response('Not Found', { status: 404 });
    }
  },
};