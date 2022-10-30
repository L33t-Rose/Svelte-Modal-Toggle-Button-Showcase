export function portal(
  node,
  { selector = "body", condition = false, moveToTop = false }
) {
  console.log(selector, node, document.querySelector(selector));
  if (condition) {
    const portalLocation = document.querySelector(selector);
    if (!moveToTop) {
      portalLocation.appendChild(node);
    } else {
      portalLocation.prepend(node);
    }
  }
}

export function highlightOnHover(node, selector) {
  console.log(node, document.querySelector(selector));
  const selectedNode = document.querySelector(selector);

  console.log("border-color",selectedNode.style.borderColor)
  const handleMouseEnter = () => {
    selectedNode.dataset.border = selectedNode.style.border;
    const borderColor = selectedNode.style.borderColor;
    selectedNode.style.border = `thick solid ${borderColor}`;
  };

  const handleMouseLeave = () => {
    selectedNode.style.border = selectedNode.dataset.border;
  };
  node.addEventListener("mouseenter", handleMouseEnter);
  node.addEventListener("mouseleave", handleMouseLeave);
  return {
    destroy: () => {
      node.removeEventListener("mouseenter", handleMouseEnter);
      node.removeEventListener("mouseleave", handleMouseLeave);
      selectedNode.removeAttribute("data-border");
    },
  };
}
