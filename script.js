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

    // Define your sexting messages here
    const sextingMessages = [
        "Hey NAME, how's it going?",
        "I can't stop thinking about our last chat, NAME.",
        "I have a naughty idea, NAME. 😏",
        // Add more sexting messages here
    ];

    sextingButton.addEventListener("click", function () {
        const fanName = fanNameSexting.value.trim();
        const randomSextingMessage = getRandomMessage(sextingMessages);
        const updatedMessage = updateMessageWithFanName(randomSextingMessage, fanName);
        sextingMessage.textContent = updatedMessage;
    });

    // Love Messages Section
    const loveButton = document.getElementById("love-button");
    const loveMessage = document.getElementById("love-message");
    const fanNameLove = document.getElementById("fan-name-love");

    // Define your love messages here
    const loveMessages = [
        "You mean the world to me, NAME.",
        "I can't express how much I adore you, NAME.",
        "Every moment with you is special, NAME.",
        // Add more love messages here
    ];

    loveButton.addEventListener("click", function () {
        const fanName = fanNameLove.value.trim();
        const randomLoveMessage = getRandomMessage(loveMessages);
        const updatedMessage = updateMessageWithFanName(randomLoveMessage, fanName);
        loveMessage.textContent = updatedMessage;
    });

    // Love Messages for Offline Fans Section
    const offlineLoveButton = document.getElementById("offline-love-button");
    const offlineLoveMessage = document.getElementById("offline-love-message");
    const fanNameOfflineLove = document.getElementById("fan-name-offline-love");

    // Define your offline love messages here
    const offlineLoveMessages = [
        "I miss you so much, NAME. Can't wait to chat again.",
        "You're always on my mind, NAME.",
        "Sending you all my love, NAME.",
        // Add more offline love messages here
    ];

    offlineLoveButton.addEventListener("click", function () {
        const fanName = fanNameOfflineLove.value.trim();
        const randomOfflineLoveMessage = getRandomMessage(offlineLoveMessages);
        const updatedMessage = updateMessageWithFanName(randomOfflineLoveMessage, fanName);
        offlineLoveMessage.textContent = updatedMessage;
    });

    // Vrăjeală Section
    const vrajealaButton = document.getElementById("vrajeala-button");
    const vrajealaMessage = document.getElementById("vrajeala-message");

    // Define your Vrăjeală messages here
    const vrajealaMessages = [
        "Vrăjeala message 1",
        "Vrăjeala message 2",
        "Vrăjeala message 3",
        // Add more Vrăjeală messages here
    ];

    vrajealaButton.addEventListener("click", function () {
        const randomVrajealaMessage = getRandomMessage(vrajealaMessages);
        vrajealaMessage.textContent = randomVrajealaMessage;
    });
});