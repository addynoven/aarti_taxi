declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export function reportConversion() {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: "AW-18108900085/oHbZCLfvvKIcEPXF_7pD",
    });
  }
}
