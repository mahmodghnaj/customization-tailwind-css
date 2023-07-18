export const scaleValue = (
  value: number,
  from: [number, number],
  to: [number, number]
): number => {
  const scale = (to[1] - to[0]) / (from[1] - from[0]);
  const capped = Math.min(from[1], Math.max(from[0], value)) - from[0];
  return capped * scale + to[0];
};

export const animateValue = (
  targetElement: HTMLElement | null,
  scrollPercentage: [number, number],
  animateRange: [number, number]
) => {
  if (targetElement) {
    return scaleValue(
      ((window.scrollY - targetElement.offsetTop) /
        targetElement.clientHeight) *
        100,
      scrollPercentage,
      animateRange
    );
  }
  return 0;
};
