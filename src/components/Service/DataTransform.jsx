import { formatDistanceToNow } from 'date-fns';

export function dataTransform(data) {
  return formatDistanceToNow(new Date(data), { addSuffix: true });
}
