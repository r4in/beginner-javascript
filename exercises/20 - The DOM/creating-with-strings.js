const item = document.querySelector('.item');

const width = 500;
const src = `http://picsum.photos/${width}`;
const desc = `cute pop`;
const myHTML = `
<div class="wrapper">
    <h2>Cute ${desc}</h2>
    <img src="${src}" alt="${desc}" />
</div>
`;

const myFragment = document.createRange().createContextualFragment(myHTML);

document.body.appendChild(myFragment);
