import useMediaQuery from "./useMediaQuery";

/**
 * Get a set of boolean representing which breakpoint is active
 * and which breakpoints are inactive.
 *
 * Inspired by: https://github.com/contra/react-responsive/issues/162#issuecomment-592082035
 */
export default function useResponsiveBreakpoints() {
  const breakpoints = {
    isSm: useMediaQuery("(min-width: 640px)"),
    isMd: useMediaQuery("(min-width: 768px)"),
    isLg: useMediaQuery("(min-width: 1024px)"),
    isXl: useMediaQuery("(min-width: 1280px)"),
    is2Xl: useMediaQuery("(min-width: 1536px)"),
  };
  return breakpoints;
}
