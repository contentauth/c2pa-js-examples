const examples = __EXAMPLES__;
const list = document.getElementById('links');

Object.keys(examples).forEach((example) => {
  const item = document.createElement('li');
  item.innerHTML = `
		<a href="${examples[example]}">${example}</li>
	`;
  list.appendChild(item);
});
