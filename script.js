const el = (tag, props) => Object.assign(document.createElement(tag), props);

const createPictureSlate = ({id, preview, original, description}) => {
    const article = el("article", {id, className: "picture-slate"});

    const img = el("img", {src: preview, alt: description});
    const link = el("a", {href: original, className: "image-link"});
    link.appendChild(img);

    link.addEventListener("click", (event) => {
        event.preventDefault();

        const lightbox = basicLightbox.create(
            `<img src="${original}" alt="${description}">`
        );

        lightbox.show();

        const closeModalOnEscape = (event) => {
            if (event.key === "Escape") {
                lightbox.close();
                document.removeEventListener("keydown", closeModalOnEscape);
            }
        };

        document.addEventListener("keydown", closeModalOnEscape);
    });

    article.appendChild(link);

    return article;
};

const renderImages = (images, rootList) => {
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
renderImages(images, galleryList);

document.getElementById('my-link').addEventListener('click', function(event) {
    event.preventDefault();
});