import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://866720b6c97223a6af14cb3ffa76469e@o4509700108713984.ingest.us.sentry.io/4509700110352384",
  integrations: [
    Sentry.replayIntegration(),
  ],
  tracesSampleRate: 1,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  debug: false,
});

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;