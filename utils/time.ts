export function formatDuration(durationMillis: number): string {
  const totalSeconds: number = Math.floor(durationMillis / 1000);
  const minutes: number = Math.floor(totalSeconds / 60);
  const seconds: number = totalSeconds % 60;
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}
