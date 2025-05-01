export function getDate() {
  const date = new Date();
  const formattedDate = date.toDateString(); // e.g., "Thu May 01 2025"
  const formattedTime = date.toTimeString().split(' ')[0]; // e.g., "01:41:28" (HH:MM:SS)

  return `${formattedDate} ${formattedTime}`;
}