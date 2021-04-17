// Dependenies
import { Constants } from '../../config/layout';

/**
 * Standardizes the layout by minimizing the writer of a media-query for reproduction of content on phones.
 * @param query style applied to mobile mode.
 * @returns {string} query with media-query in CSS.
 */

// Mobile
export const isMobile = query => {
  return `@media screen and (min-width: 0px) and (max-width: ${Constants().sizing.MAX_MOBILE_WIDTH}px) { ${query} }`;
};
