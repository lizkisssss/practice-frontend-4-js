const pictures = document.querySelectorAll(".feed__item img");
console.log(pictures);

const options = {
    treshold: 1,
    // rootMargin: "150px",
}

const onEntry = (elements , observer) => {
    console.log(elements);
    elements.forEach(element => {
        // console.log(element.target);
        console.log(element);

        if (element.isIntersecting) {
            element.target.src = element.target.dataset.lazy;
            element.target.classList.add("appear");
            console.log(element.target.src);
        }
        
    });
};

const io = new IntersectionObserver(onEntry, options);

pictures.forEach(picture => io.observe(picture));

