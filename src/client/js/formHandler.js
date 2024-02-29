// Async function for handling form submission
async function handleSubmit(event) {
    event.preventDefault();

    const formText = document.getElementById('name').value;
    const errorMessageElement = document.getElementById('error-message');

    if (!Client.checkForUrl(formText)) {
        errorMessageElement.textContent = 'Please enter a valid URL.';
        return;
    }

    errorMessageElement.textContent = ''; // Clear error message
    console.log("::: Form Submitted :::");
    
    try {
        const sentimentResult = await postSentimentAnalysis(formText);
        updateUIWithSentimentResults(sentimentResult);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Function to perform the sentiment analysis fetch operation
async function postSentimentAnalysis(url) {
    const response = await fetch('http://localhost:8080/getSentiment', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url })
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
}

// Function to update the UI with the sentiment analysis results
function updateUIWithSentimentResults(results) {
    const formattedResults = formatSentimentResults(results);

    //Iterates over the formatted results and updates the UI with the values
    Object.keys(formattedResults).forEach(key => {
        // Builds the ID of the element to be updated
        const elementId = key;
        const element = document.getElementById(elementId);

        if (element) {
            // Updates the element with the formatted value
            element.textContent = `${key.charAt(0).toUpperCase() + key.slice(1).replace('_', ' ')} - ${formattedResults[key]}`;
        }
    });
}

// Function to format the sentiment results
function formatSentimentResults(data) {
    return {
        score_tag: describeScore(data.score_tag),
        agreement: data.agreement,
        subjectivity: data.subjectivity,
        confidence: data.confidence,
        irony: data.irony
    };
}

// Function to describe the score tag
function describeScore(scoreTag) {
    const descriptions = {
        "P+": "Very Positive",
        "P": "Positive",
        "NEU": "Neutral",
        "N": "Negative",
        "N+": "Very Negative",
        "NONE": "No sentiment detected",
    };
    return descriptions[scoreTag] || "Invalid Sentiment Score";
}

export { handleSubmit };
