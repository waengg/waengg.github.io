export function openInNewTab(url: string): void {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}
  
export const onClickUrl = (url: string): (() => void) => () => openInNewTab(url)
  