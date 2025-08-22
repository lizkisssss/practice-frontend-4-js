const images = document.querySelectorAll(".fruits-list img");

const onEntry = (elements) => {
    elements.forEach(el => {
        if (el.isIntersecting) {
            el.target.classList.add("appear");
        } else {
            el.target.classList.remove("appear");
        }
    })
}

const options = {
  threshold: 1,
};

const io = new IntersectionObserver(onEntry, options)

images.forEach(img => io.observe(img));
