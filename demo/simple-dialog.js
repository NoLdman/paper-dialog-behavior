import '../../polymer/polymer.js';
import '../paper-dialog-behavior.js';
import '../paper-dialog-shared-styles.js';

Polymer({
  _template: Polymer.html`
    <style include="paper-dialog-shared-styles"></style>
    <slot></slot>
`,

  is: 'simple-dialog',

  behaviors: [
    Polymer.PaperDialogBehavior
  ]
});
