import type { AppRouter } from '@pellegrims/goldgetters/server';
import { createTRPCNext } from '@trpc/next';
import { httpBatchLink } from '@trpc/client';

const getBaseUrl = () => {
  if (typeof window !== 'undefined')
    // browser should use relative path
    return '';
  if (process.env.VERCEL_URL)
    // reference for vercel.com
    return `https://${process.env.VERCEL_URL}`;
  if (process.env.RENDER_INTERNAL_HOSTNAME)
    // reference for render.com
    return `http://${process.env.RENDER_INTERNAL_HOSTNAME}:${process.env.PORT}`;
  // assume localhost
  return `http://localhost:${process.env.PORT ?? 3000}`;
};

export const trpc = createTRPCNext<AppRouter>({
  config: () => ({
    links: [httpBatchLink({ url: `${getBaseUrl()}/api/trpc` })],
  }),
  ssr: false,
});
