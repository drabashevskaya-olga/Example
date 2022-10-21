export default function writeDataLayer(data) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(data);
}
