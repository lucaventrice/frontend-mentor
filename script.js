const projects = [
  'four-card-feature-section',
  'base-apparel-coming-soon',
  'signup-form',
  'single-price-grid-component',
  'ping-coming-soon-page',
  'huddle-landing-page-with-alternating-feature-blocks'
];

const list = document.getElementById('list');

projects.forEach((project, i) => {
  const listItem = document.createElement('li');
  const link = document.createElement('a');
  link.href = `/${project}/index.html`;
  link.innerText = `${i+1}. ${formatProjectName(project)}`;

  const img = document.createElement('img');
  img.src = `/${project}/design/desktop-preview.jpg`;

  link.prepend(img);
  listItem.appendChild(link);
  list.appendChild(listItem);
})

function formatProjectName(name) {
  return name.split('-').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}