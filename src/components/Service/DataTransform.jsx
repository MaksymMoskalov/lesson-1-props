import { format, formatDistanceToNow } from 'date-fns';


export function dataTransform(data) {
  return formatDistanceToNow(new Date(data), { addSuffix: true });
}

export function getData(data) {
 return  format(new Date(data), "Pp")
}