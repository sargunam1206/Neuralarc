import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/**
 * false while React hydrates a pre-rendered page (matching the build-time
 * HTML), true afterwards and on every client-side navigation. Use it for UI
 * driven by things the pre-render can't know, like ?query parameters, so the
 * first render matches the static HTML and hydration doesn't fail.
 */
export const useIsClient = () =>
  useSyncExternalStore(subscribe, () => true, () => false);
