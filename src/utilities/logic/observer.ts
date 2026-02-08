/**
 * Simple Intersection Observer helper to trigger a callback when an element enters the viewport.
 * @param element - The DOM element to observe.
 * @param callback - The function to run when visible.
 * @param options - Optional IntersectionObserverInit options.
 */
export function loadOnVisibility(
  element: HTMLElement,
  callback: () => void,
  options: IntersectionObserverInit = { threshold: 0.1 }
) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback()
        observer.unobserve(element)
      }
    })
  }, options)

  observer.observe(element)
}
