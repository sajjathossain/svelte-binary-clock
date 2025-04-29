import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = ({ setHeaders }) => {
  setHeaders({
    "cache-control": `max-age=0, s-maxage=${60 * 60}`,
  })
}
