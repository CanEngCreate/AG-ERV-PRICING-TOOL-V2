window.bus = {
  send: (to, value) =>
    parent.postMessage({ to, value }, "*"),

  receive: (key, fn) =>
    addEventListener("message", e => {
      let d = e.data;
      if (d?.value && typeof d.value === "object") {
        d = d.value;
      }
      if (d?.key === key) fn(d.value);
    })
};


function sendtoframe(frameIdOrElement, elementId, value) {
  const frame = typeof frameIdOrElement === "string"
    ? parent.document.getElementById(frameIdOrElement)
    : frameIdOrElement;

  if (!frame || !frame.contentWindow || !frame.contentWindow.document) return;

  const element = frame.contentWindow.document.getElementById(elementId);
  if (element) {
    element.textContent = value;
  }
}

function calltoframe(frameIdOrElement, functionName, ...args) {
  const frame = typeof frameIdOrElement === "string"
    ? parent.document.getElementById(frameIdOrElement)
    : frameIdOrElement;

  if (!frame || !frame.contentWindow) return;

  frame.contentWindow[functionName](...args);
}