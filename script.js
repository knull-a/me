// Portfolio data
const portfolio = {
    name: "bakhtiyar kainolla, product engineer",
    bio: "passionate about users happiness and solving real-world problems",

    links: [
        "https://github.com/knull-a",
        "https://www.linkedin.com/in/bakhtiyar-kainolla/",
        "https://x.com/kainulla1",
        "https://t.me/kainulla",
        "bakhtiyar.kainolla@gmail.com"
    ],

    projects: [
        {
            text: "ai agents platform for automated customer communication",
            link: "https://qoldau.silkroadtech.kz"
        },
        {
            text: "career guidance platform for professional growth",
            link: "https://orkenlink.kz"
        },
        {
            text: "electronic trading platform for government procurement in kazakhstan",
            link: "https://en.wikipedia.org/wiki/Non-disclosure_agreement"
        },
        {
            text: "state revenue committee at the ministry of finance of kazakhstan",
            link: "https://portal.kgd.gov.kz/en/"
        },
        {
            text: "fastest autopilot bot for kazakhstan's top e-commerce platform",
            link: "https://kaskyr.com"
        },
        {
            text: "smart home mobile app for controlling iot devices",
            link: "https://apps.apple.com/ru/app/connected-home-%D1%83%D0%BC%D0%BD%D1%8B%D0%B9-%D0%B4%D0%BE%D0%BC/id6499302704"
        },
    ]
};

// DOM elements
const output = document.getElementById('output');

function addOutput(text) {
    const line = document.createElement('div');
    line.className = 'output-line';
    line.innerHTML = text;
    output.appendChild(line);
}

function displayPortfolio() {
    // Welcome
    addOutput(`<span class="prompt">$</span> cat portfolio.txt`);
    addOutput('');

    // About
    addOutput(`<span class="section-title">${portfolio.name}</span>`);
    addOutput('');
    addOutput(portfolio.bio);
    addOutput('');
    addOutput('<span class="prompt">─────────────────────────────────</span>');
    addOutput('');

    // Projects
    addOutput(`<span class="prompt">$</span> ls projects/`);
    addOutput('');

    portfolio.projects.forEach((project) => {
        addOutput(`<a href="${project.link}" target="_blank" class="link"><span class="success">${project.text}</span></a>`);
    });

    addOutput('');
    addOutput('and more...');
    addOutput('<span class="prompt">─────────────────────────────────</span>');
    addOutput('');

    // Links
    addOutput(`<span class="prompt">$</span> cat links.txt`);
    addOutput('');

    portfolio.links.forEach((link) => {
        const isEmail = !link.startsWith('http');
        const href = isEmail ? `mailto:${link}` : link;
        addOutput(`<a href="${href}" target="_blank" class="link">${link}</a>`);
    });
}

// Preload background image
function preloadBackground() {
    const img = new Image();
    img.onload = () => {
        document.body.classList.add('bg-loaded');
    };
    img.src = 'img/bg.png';
}

// Initialize on load
displayPortfolio();
preloadBackground();
