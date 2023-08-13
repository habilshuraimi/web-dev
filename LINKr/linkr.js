function shortenLink() {
    let originalLink = document.getElementById("originalLink").value;
    let resultElement = document.getElementById("result");

    // Make an API request to your backend to shorten the link
    // Replace the 'YOUR_BACKEND_URL' with your actual backend URL
    fetch('YOUR_BACKEND_URL/shorten', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ originalLink: originalLink })
    })
        .then(response => response.json())
        .then(data => {
            if (data.shortLink) {
                resultElement.innerHTML = "Shortened link: <a href='" + data.shortLink + "' target='_blank'>" + data.shortLink + "</a>";
            } else {
                resultElement.innerHTML = "Failed to shorten the link.";
            }
        })
        .catch(error => {
            console.error('Error:', error);
            resultElement.innerHTML = "An error occurred while shortening the link.";
        });
}