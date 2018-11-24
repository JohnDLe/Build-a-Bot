// function applyStyle(element, binding) {
//   Object.keys(binding.value).forEach((position) => {
//     element.style[position] = binding.value[position];
//   });

//   element.style.position = 'absolute';
// }
// export default {
//   bind: (element, binding) => {
//     if (binding.arg !== 'position') return;

//     Object.keys(binding.modifiers).forEach((key) => {
//       element.style[key] = '5px';
//     });

//     element.style.position = 'absolute';
//     // element.style.bottom = '5px';
//     // element.style.right = '5px';
//   },
//   bind: (element, binding) => {
//     applyStyle(element, binding);
//     // Object.keys(binding.value).forEach((position) => {
//     //   element.style[position] = binding.value[position];
//     // });

//     // element.style.position = 'absolute';
//   },
//   update: (element, binding) => {
//     applyStyle(element, binding);
//   },
// other lifecycle hooks are inserted, componentUpdated, unbind
// };

export default function(element, binding) {
  Object.keys(binding.value).forEach((position) => {
    element.style[position] = binding.value[position];
  });

  element.style.position = 'absolute';
}
