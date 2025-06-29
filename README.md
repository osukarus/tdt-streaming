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
1. Push to GitHub repository  
2. Create new site in Netlify  
3. Connect GitHub repository  
4. Set build command: `npm install -g serve && serve -s .`  
5. Set publish directory: `.`  
6. Deploy!  

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/tdt-streaming)

## Technology Stack
- **Frontend**: Vanilla HTML/CSS/JavaScript  
- **Player**: Video.js 8.10 + HLS.js  
- **Styling**: CSS Variables + Grid/Flexbox  
- **Localization**: JSON-based i18n system  
- **CI/CD**: Netlify  

## License
MIT License - See [LICENSE](LICENSE)
