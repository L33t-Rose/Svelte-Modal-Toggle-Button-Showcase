export function portal(node, { selector = "body", condition = false, moveToTop = false }) {
  console.log(selector, node, document.querySelector(selector));
  if (condition) {
    const portalLocation = document.querySelector(selector);
    if(!moveToTop){
        portalLocation.appendChild(node);
    }else{
        portalLocation.prepend(node);
    }
  }
}
