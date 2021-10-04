// Hooks added here have a bridge allowing communication between the Web Page and the BEX Content Script.
// More info: https://quasar.dev/quasar-cli/developing-browser-extensions/dom-hooks

export default function attachDomHooks (bridge) {
  const saveToVertoExtension = (data) => {
    return bridge.send('app.save', { data: data })
  }
  window.saveToVertoExtension = saveToVertoExtension
  /*
  bridge.send('message.to.quasar', {
    worked: true
  })
  */
}
