/**
 * Configuration Data and Constants
 */
const CONFIG = {
  // Events
  EVENT: {
    LOAD_COMPLETE: 'loadComplete',
    OPEN_MODAL: 'openModal',
    FILTER_STORIES: 'filterStories',
  },
  // Error Message
  ERROR: {
    400: 'BAD_REQUEST',
    401: 'UNAUTHORIZED',
    403: 'FORBIDDEN',
    404: 'NOT_FOUND',
    500: 'INTERNAL_SERVER_ERROR',
    502: 'BAD_GATEWAY',
    default: 'UNHANDLED_ERROR',
  },
};

export default CONFIG;
