document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    const submitButton = document.getElementById('submit-review');
    let selectedRating = 0;

    stars.forEach(star => {
        star.addEventListener('click', () => {
            selectedRating = parseInt(star.getAttribute('data-value'));
            stars.forEach(s => {
                s.classList.remove('selected');
                if (parseInt(s.getAttribute('data-value')) <= selectedRating) {
                    s.classList.add('selected');
                }
            });
        });
    });

    submitButton.addEventListener('click', () => {
        if (selectedRating === 5) {
            // Replace with your actual Google Reviews URL
            window.location.href = 'https://search.google.com/local/writereview?placeid=<Your_Place_ID>';
        } else {
            alert('Thank you for your feedback! Please submit a 5-star rating to leave a review on Google.');
        }
    });
});