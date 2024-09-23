
const el = (tag, props) => Object.assign(document.createElement(tag), props);

const createPictureSlate = ({id, preview, description}) => {
    const article = el("article", {id, className: "picture-slate"});

    const img = el("img", {src: preview, alt: description});

    article.append( img );

    return article;

};

const renderimages = (images, rootList) => {
    const listItems = images.map(createPictureSlate)
        .map(slate => {
            const li = el("li");
            li.append(slate);
            return li;
        });
    const fragment = document.createDocumentFragment();
    fragment.append(...listItems);

    rootList.appendChild(fragment);
};

const galleryList = document.querySelector("ul#gallery-list");
renderimages(images, galleryList);


document.getElementById('stop-link').addEventListener('click', function(event) {
    event.preventDefault();
  });
  