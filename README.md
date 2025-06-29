# Spanish TDT Streaming Web Application

A responsive web application for streaming Spanish TDT channels with dark/light themes and bilingual support.

![Demo Screenshot](assets/images/demo.png)

## Features

- 📺 **100+ Live Channels** - National, regional, sports, kids, and news  
- 🌓 **Dark/Light Theme** - Automatic OS preference detection  
- 🌍 **Bilingual Interface** - Spanish/English language support  
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile  
- ⚡ **Instant Playback** - Video.js with HLS stream support  

## Setup & Installation

1. Clone repository:
```bash
git clone https://github.com/yourusername/tdt-streaming.git
cd tdt-streaming
```

2. Serve locally (Python 3):
```bash
python3 -m http.server 8000
```

3. Open in browser:
```bash
open http://localhost:8000
```

## Deployment

### Netlify
1. Push repository to GitHub  
2. Click the Deploy button below  
3. Netlify will automatically detect `netlify.toml` config  
4. No build command needed - it's preconfigured  
5. Site will deploy from `tdt-streaming` directory  

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/osukarus/tdt-streaming)

## Technology Stack
- **Frontend**: Vanilla HTML/CSS/JavaScript  
- **Player**: Video.js 8.10 + HLS.js  
- **Styling**: CSS Variables + Grid/Flexbox  
- **Localization**: JSON-based i18n system  
- **CI/CD**: Netlify  

## License
MIT License - See [LICENSE](LICENSE)
