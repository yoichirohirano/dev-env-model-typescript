const cancelEvent = (e: Event): void => {
  e.preventDefault();
};

/**
 * cancel or restart scroll event
 * @param fix true to cancel scroll, false to restart
 */
const toggleScrollEvent = (fix: boolean) => {
  const options: AddEventListenerOptions = {
    passive: false,
    once: false,
  };

  if (fix) {
    document.addEventListener('wheel', cancelEvent, options);
    document.addEventListener('touchmove', cancelEvent, options);
  } else {
    document.removeEventListener('wheel', cancelEvent, options);
    document.removeEventListener('touchmove', cancelEvent, options);
  }
};

export default toggleScrollEvent;
