export async function copyText(text: string) {
  if (!navigator.clipboard) return false;
  await navigator.clipboard.writeText(text);
  return true;
}

export function downloadDataUrl(dataUrl: string, filename: string) {
  const link = document.createElement("a");
  link.href = dataUrl;
  link.download = filename;
  link.click();
}
