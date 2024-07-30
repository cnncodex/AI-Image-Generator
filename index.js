export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const prompt = url.searchParams.get('prompt');

    if (!prompt) {
      return new Response('Missing prompt parameter', { status: 400 });
    }

    const inputs = {
      prompt: prompt
    };

    try {
      const response = await env.AI.run(
        '@cf/lykon/dreamshaper-8-lcm',
        inputs
      );

      return new Response(response, {
        headers: {
          'content-type': 'image/png'
        }
      });
    } catch (error) {
      return new Response('Error generating image', { status: 500 });
    }
  }
};
