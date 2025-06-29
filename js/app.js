class ThemeManager {
    constructor() {
        this.themeToggle = document.querySelector('.theme-toggle');
        this.htmlElement = document.documentElement;
        this.init();
    }

    init() {
        const savedTheme = localStorage.getItem('theme') || 
            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        this.setTheme(savedTheme);
        
        this.themeToggle.addEventListener('click', () => this.toggleTheme());
    }

    setTheme(theme) {
        this.htmlElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        this.updateToggleIcon(theme);
    }

    toggleTheme() {
        const newTheme = this.htmlElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    }

    updateToggleIcon(theme) {
        const icons = this.themeToggle.querySelectorAll('span');
        icons.forEach(icon => icon.style.display = 'none');
        this.themeToggle.querySelector(`.${theme}-icon`).style.display = 'inline';
    }
}

class I18n {
    constructor() {
        this.language = navigator.language.split('-')[0] || 'es';
        this.elements = document.querySelectorAll('[data-i18n]');
        this.translations = {};
        this.init();
    }

    async init() {
        await this.loadTranslations();
        this.updateElements();
        document.querySelector('.language-switcher').value = this.language;
        document.querySelector('.language-switcher')
            .addEventListener('change', (e) => this.changeLanguage(e.target.value));
    }

    async loadTranslations() {
        try {
            const response = await fetch(`lang/${this.language}.json`);
            this.translations = await response.json();
        } catch (error) {
            console.error('Error loading translations:', error);
        }
    }

    updateElements() {
        this.elements.forEach(element => {
            const key = element.dataset.i18n;
            if (this.translations[key]) {
                element.textContent = this.translations[key];
            }
        });
    }

    async changeLanguage(lang) {
        this.language = lang;
        await this.loadTranslations();
        this.updateElements();
        localStorage.setItem('language', lang);
    }
}

class ChannelManager {
    constructor() {
        this.grid = document.querySelector('.channel-grid');
        this.playerContainer = document.querySelector('.player-container');
        this.player = videojs('main-player');
        this.init();
    }

    async init() {
        await this.loadChannels();
        this.setupEventListeners();
    }

    async loadChannels() {
        try {
            const response = await fetch('https://www.tdtchannels.com/lists/tv.json', {
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });
            
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            
            const channels = await response.json();
            
            // Validate channel data structure
            if (!Array.isArray(channels)) throw new Error('Invalid channel data format');
            
            this.renderChannels(channels);
        } catch (error) {
            console.error('Channel loading error:', error);
            this.grid.innerHTML = `
                <div class="error-message">
                    <p data-i18n="error-loading">Error loading channels</p>
                    <p data-i18n="try-again">Try again later</p>
                </div>
            `;
        }
    }

    renderChannels(channels) {
        this.grid.innerHTML = channels
            .filter(channel => channel.url)
            .map(channel => `
                <div class="channel-card" data-url="${channel.url}">
                    <div class="channel-info">
                        <h3>${channel.name}</h3>
                        <p>${channel.group}</p>
                    </div>
                </div>
            `).join('');
    }

    setupEventListeners() {
        this.grid.addEventListener('click', (e) => {
            const card = e.target.closest('.channel-card');
            if (card) this.playChannel(card.dataset.url);
        });

        document.querySelector('.close-player').addEventListener('click', () => {
            this.player.pause();
            this.playerContainer.classList.add('hidden');
        });
    }

    playChannel(url) {
        this.player.src({ src: url, type: 'application/x-mpegURL' });
        this.player.ready(() => this.player.play());
        this.playerContainer.classList.remove('hidden');
    }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
    new I18n();
    new ChannelManager();
});
