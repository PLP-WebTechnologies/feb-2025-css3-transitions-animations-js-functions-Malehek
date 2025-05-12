function savePreference(key, value) {
    localStorage.setItem(key, value);
    console.log(`Preference saved: ${key} = ${value}`);
}

function getPreference(key) {
    return localStorage.getItem(key);
}

// Example usage:
savePreference('theme', 'dark');
console.log(getPreference('theme')); // Output: dark

document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.animated-button');

    button.addEventListener('click', () => {
        button.classList.add('clicked-animation');
        savePreference('buttonClicked', 'true');

        // Remove the animation class after it completes
        setTimeout(() => {
            button.classList.remove('clicked-animation');
        }, 1000);
    });
});