document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.querySelectorAll('.gallery img');
    const modal = $('#modal');
    const modalImg = document.getElementById('modal-image');
    const captionText = document.getElementById('caption');
    const imageDescription = document.getElementById('image-description');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');

    let currentIndex;

    gallery.forEach((img, index) => {
        img.onclick = function() {
            currentIndex = index;
            showImage();
            modal.modal('show');
        };
    });

    function showImage() {
        const img = gallery[currentIndex];
        modalImg.src = img.src;
        captionText.innerHTML = `Image ${currentIndex + 1}`;
        imageDescription.innerHTML = img.alt;
    }

    prev.onclick = function() {
        currentIndex = (currentIndex - 1 + gallery.length) % gallery.length;
        showImage();
    };

    next.onclick = function() {
        currentIndex = (currentIndex + 1) % gallery.length;
        showImage();
    };
});