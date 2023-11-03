const imageForm = document.getElementById('image-form');
        const imageUrlInput = document.getElementById('image-url');
        const imageGallery = document.getElementById('image-gallery');

        imageForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const imageUrl = imageUrlInput.value.trim();
            if (imageUrl) {
                addImageToGallery(imageUrl);
                imageUrlInput.value = '';
            }
        });

        function addImageToGallery(imageUrl) {
            const galleryItem = document.createElement('div');
            galleryItem.classList.add('gallery-item');

            const image = document.createElement('img');
            image.src = imageUrl;

            const removeButton = document.createElement('button');
            removeButton.classList.add('remove-button');
            removeButton.innerText = 'Eliminar';
            removeButton.addEventListener('click', function () {
                imageGallery.removeChild(galleryItem);
            });

            galleryItem.appendChild(image);
            galleryItem.appendChild(removeButton);
            imageGallery.appendChild(galleryItem);
        }