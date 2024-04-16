/*
  make all external links open in a new tab
*/

{
  const onLoad = () => {
    // for each link
    const links = document.querySelectorAll("a");
    for (const link of links)
      try {
        // if link absolute and different domain
        if (new URL(link.href).hostname !== new URL(window.location).hostname)
          // make link open in new tab
          link.setAttribute("target", "_blank");
      } catch (error) {}
  };

  // after page loads
  window.addEventListener("load", onLoad);
}