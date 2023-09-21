// Define message categories for Sexting
const sextingCategories = {
    normal: [
        "I can't stop thinking about you, NAME.",
        "You drive me crazy, NAME.",
        "What's your wildest fantasy, NAME?",
    ],
    sales: [
        "Buy my exclusive content, NAME!",
        "I have a special offer for you, NAME.",
        "Let's make a deal, NAME.",
    ],
    'fetish-master': [
        "You're my obedient slave, NAME.",
        "Get ready for some domination, NAME.",
        "I'm your master, NAME. Obey my commands.",
    ],
    'fetish-mistress': [
        "You're my submissive slave, NAME.",
        "Get on your knees and worship me, NAME.",
        "I'm your mistress, NAME. Obey or be punished.",
    ],
};

// Define Love Messages and Offline Love Messages
const loveMessages = [
    "The more time we spend together, the stronger our love grows. 🥰❤️💪",
    "No matter how many years we share together in our marriage, there are two times when I want to be with you – now and forever. 🥰❤️📆",
    // Add more love messages here if needed
];

const offlineLoveMessages = [
    "I miss you when you're not here, NAME.",
    "Can't wait to see you again, NAME.",
    "Thinking of you, NAME.",
    // Add more offline love messages here if needed
];

// Vrăjeală Messages
const vrajealaMessages = [
    "Vino să ne întâlnim, NAME!",
    "Ești dragostea vieții mele, NAME.",
    "Să ne pierdem în pasiune, NAME.",
    // Add more vrăjeală messages here if needed
];

// Function to get a random message from an array
function getRandomMessage(messageArray) {
    const randomIndex = Math.floor(Math.random() * messageArray.length);
    return messageArray[randomIndex];
}

// Function to update the message with the fan's name
function updateMessageWithFanName(message, fanName) {
    return message.replace(/NAME/g, fanName);
}

document.addEventListener("DOMContentLoaded", function () {
    // Sexting Section
    const sextingButton = document.getElementById("sexting-button");
    const sextingMessage = document.getElementById("sexting-message");
    const fanNameSexting = document.getElementById("fan-name-sexting");
    const sextingCategory = document.getElementById("sexting-category");
    const copySextingButton = document.getElementById("copy-sexting");

    sextingButton.addEventListener("click", function () {
        const fanName = fanNameSexting.value.trim();
        const selectedCategory = sextingCategory.value;
        const categoryMessages = sextingCategories[selectedCategory];

        if (fanName === "") {
            const randomSextingMessage = getRandomMessage(categoryMessages);
            sextingMessage.textContent = randomSextingMessage.replace(/NAME/g, "");
        } else {
            const randomSextingMessage = getRandomMessage(categoryMessages);
            const updatedMessage = updateMessageWithFanName(
                randomSextingMessage,
                fanName
            );
            sextingMessage.textContent = updatedMessage;
        }
    });

    // Add copy functionality for Sexting
    copySextingButton.addEventListener("click", function () {
        const messageToCopy = sextingMessage.textContent;
        if (messageToCopy) {
            const textarea = document.createElement("textarea");
            textarea.value = messageToCopy;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
        }
    });

    // Love Messages Section
    const loveButton = document.getElementById("love-button");
    const loveMessage = document.getElementById("love-message");
    const fanNameLove = document.getElementById("fan-name-love");
    const copyLoveButton = document.getElementById("copy-love");

    loveButton.addEventListener("click", function () {
        const fanName = fanNameLove.value.trim();
        if (fanName === "") {
            const randomLoveMessage = getRandomMessage(loveMessages);
            loveMessage.textContent = randomLoveMessage.replace(/NAME/g, "");
        } else {
            const randomLoveMessage = getRandomMessage(loveMessages);
            const updatedMessage = updateMessageWithFanName(
                randomLoveMessage,
                fanName
            );
            loveMessage.textContent = updatedMessage;
        }
    });

    // Add copy functionality for Love Messages
    copyLoveButton.addEventListener("click", function () {
        const messageToCopy = loveMessage.textContent;
        if (messageToCopy) {
            const textarea = document.createElement("textarea");
            textarea.value = messageToCopy;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
        }
    });

    // Love Messages for Offline Fans Section
    const offlineLoveButton = document.getElementById("offline-love-button");
    const offlineLoveMessage = document.getElementById("offline-love-message");
    const fanNameOfflineLove = document.getElementById("fan-name-offline-love");
    const copyOfflineLoveButton = document.getElementById("copy-offline-love");

    offlineLoveButton.addEventListener("click", function () {
        const fanName = fanNameOfflineLove.value.trim();
        if (fanName === "") {
            const randomOfflineLoveMessage = getRandomMessage(offlineLoveMessages);
            offlineLoveMessage.textContent = randomOfflineLoveMessage.replace(
                /NAME/g,
                ""
            );
        } else {
            const randomOfflineLoveMessage = getRandomMessage(offlineLoveMessages);
            const updatedMessage = updateMessageWithFanName(
                randomOfflineLoveMessage,
                fanName
            );
            offlineLoveMessage.textContent = updatedMessage;
        }
    });

    // Add copy functionality for Love Messages for Offline Fans
    copyOfflineLoveButton.addEventListener("click", function () {
        const messageToCopy = offlineLoveMessage.textContent;
        if (messageToCopy) {
            const textarea = document.createElement("textarea");
            textarea.value = messageToCopy;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
        }
    });

    // ...

    // Welcome Messages
    const welcomeMessages = [
        "Welcome to my page, NAME!",
        "I'm excited to have you here, NAME.",
        "Let's get to know each other, NAME.",
        // Add more welcome messages here if needed
    ];

    // ...

    // Welcome To My Page Messages Section
    const welcomeButton = document.getElementById("welcome-button");
    const welcomeMessage = document.getElementById("welcome-message");
    const fanNameWelcome = document.getElementById("fan-name-welcome");
    const copyWelcomeButton = document.getElementById("copy-welcome");

    welcomeButton.addEventListener("click", function () {
        const fanName = fanNameWelcome.value.trim();
        if (fanName === "") {
            const randomWelcomeMessage = getRandomMessage(welcomeMessages);
            welcomeMessage.textContent = randomWelcomeMessage.replace(/NAME/g, "");
        } else {
            const randomWelcomeMessage = getRandomMessage(welcomeMessages);
            const updatedMessage = updateMessageWithFanName(
                randomWelcomeMessage,
                fanName
            );
            welcomeMessage.textContent = updatedMessage;
        }
    });

    // Add copy functionality for Welcome To My Page Messages
    copyWelcomeButton.addEventListener("click", function () {
        const messageToCopy = welcomeMessage.textContent;
        if (messageToCopy) {
            const textarea = document.createElement("textarea");
            textarea.value = messageToCopy;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
        }
    });

    // ...

    // Define Storylines Messages for each model
    const storylines = {
        Jessie: "This is Jessie's story...",
        Kylie: "This is Kylie's story...",
        Mellany: "This is Mellany's story...",
        Anastasia: "This is Anastasia's story...",
        Anya: "This is Anya's story...",
        Elisa: "This is Elisa's story...",
        Ivy: "This is Ivy's story...",
        Amber: "This is Amber's story...",
        Ellie: "This is Ellie's story...",
        Ruby: "This is Ruby's story...",
        Vicky: "This is Vicky's story...",
        // Add more model storylines here if needed
    };

    // Storylines Section
    const storyButton = document.getElementById("story-button");
    const storyMessage = document.getElementById("story-message");
    const modelNameInput = document.getElementById("model-name");
    const copyStoryButton = document.getElementById("copy-story");

    storyButton.addEventListener("click", function () {
        const modelName = modelNameInput.value.trim();
        if (modelName in storylines) {
            storyMessage.textContent = storylines[modelName];
        } else {
            storyMessage.textContent = "Model not found.";
        }
    });

    // Add copy functionality for Storylines Section
    copyStoryButton.addEventListener("click", function () {
        const messageToCopy = storyMessage.textContent;
        if (messageToCopy) {
            try {
                const textarea = document.createElement("textarea");
                textarea.value = messageToCopy;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand("copy");
                document.body.removeChild(textarea);
                alert("Copied to clipboard!");
            } catch (err) {
                console.error("Unable to copy:", err);
                alert("Copy failed. Please copy manually.");
            }
        } else {
            alert("Nothing to copy.");
        }
    });
});
