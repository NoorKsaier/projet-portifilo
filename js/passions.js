document.addEventListener("DOMContentLoaded", () => {
    const demoButtons = document.querySelectorAll('.work__button');
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('closeModal');
    const modalTitle = modal.querySelector('.modal-title');
    const modalDescription = modal.querySelector('.modal-description');
    const modalMediaContainer = modal.querySelector('.portfolio-modal-image'); // Updated to hold both images and videos
    const modalVideo = modal.querySelector('.modal-video'); // New element to handle video

    if (demoButtons.length > 0 && modal && closeModal) {
        demoButtons.forEach(button => {
            button.addEventListener('click', () => {
                const skillCard = button.closest('.skill-card');
                if (skillCard) {
                    const title = skillCard.querySelector('.skill-title').textContent;
                    const description = skillCard.querySelector('.description').textContent;

                    // Reset modal content to be empty before filling it
                    modalMediaContainer.innerHTML = ''; // Clear previous content

                    // Recherche de l'image ou de la vidéo
                    const imgElement = skillCard.querySelector('.skill-img');
                    const videoElement = skillCard.querySelector('.skill-video');

                    if (imgElement) {
                        // If the skill card contains an image
                        const img = document.createElement('img');
                        img.src = imgElement.src;
                        img.alt = title;
                        img.classList.add('modal-img');
                        modalMediaContainer.appendChild(img);
                    } else if (videoElement) {
                        // If the skill card contains a video
                        const video = document.createElement('video');
                        video.src = videoElement.currentSrc;
                        video.controls = true;
                        video.classList.add('modal-video');
                        modalMediaContainer.appendChild(video);
                    } else {
                        console.error('No media found in this skill card.');
                    }

                    // Update modal title and description
                    modalTitle.textContent = title;
                    modalDescription.textContent = description;

                    // Open the modal
                    modal.classList.add('open');
                }
            });
        });

        closeModal.addEventListener('click', () => {
            modal.classList.remove('open');
            // Optional: Pause video when modal is closed
            const video = modal.querySelector('.modal-video');
            if (video) {
                video.pause();
            }
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('open');
                // Optional: Pause video when modal is closed
                const video = modal.querySelector('.modal-video');
                if (video) {
                    video.pause();
                }
            }
        });
    } else {
        console.error('Modal or required elements are missing. Check the HTML structure.');
    }
});
    