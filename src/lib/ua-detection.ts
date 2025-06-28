// Utility to detect if a user agent is a mobile device
export function isMobileUserAgent(
  userAgent: string | undefined | null
): boolean {
  if (!userAgent) return false;
  // Simple regex to match common mobile user agents
  return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|Opera Mini|IEMobile|Mobile/i.test(
    userAgent
  );
}
