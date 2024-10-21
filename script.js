document.getElementById('submit-rating').addEventListener('click', function() {
    const rating = document.getElementById('rating').value;
    if (rating >= 0 && rating <= 10) {
        localStorage.setItem('projectRating', rating);
        document.getElementById('rating-section').style.display = 'none';
        document.getElementById('thank-you-message').style.display = 'block';
    } else {
        alert('შეფასება უნდა იყოს 0 დან 10-ის ჩათვლით!');
    }
});

