
export default function stripTags(str = '') {
  return str.replace(/<\/?[^>]+(>|$)/g, "");
}