export function toast(message: string) {
  window.dispatchEvent(new CustomEvent("vms-toast", { detail: message }));
}
