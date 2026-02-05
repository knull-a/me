# Terminal Portfolio

A simple, elegant terminal-style portfolio for software engineers and founders.

## Features

- 🖥️ Terminal UI aesthetic with static display
- 📱 Fully responsive design
- ⚡ Pure HTML/CSS/JS - no build step required
- 🎨 Clean gradient background with professional styling
- 📄 All information displayed immediately
- 🔗 Social links and project showcase

## Getting Started

1. **Customize your data** in `script.js`:
   - Edit the `portfolio` object with your information
   - Update name, role, bio
   - Add your links (GitHub, LinkedIn, Twitter, etc.)
   - Add your projects with descriptions and tech stacks

2. **Open locally**:
   ```bash
   open index.html
   ```
   Or use a local server:
   ```bash
   python -m http.server 8000
   # Visit http://localhost:8000
   ```

3. **Deploy**:
   - GitHub Pages: Push to repo, enable Pages in settings
   - Vercel: `vercel --prod`
   - Netlify: Drag and drop the folder
   - Any static host

## Content Sections

The terminal displays:
- About section with name, role, and bio
- Projects with descriptions, tech stacks, and links
- Social and contact links

## Customization

### Colors
Edit `style.css` to change the color scheme:
- Background gradient: `body` background
- Terminal colors: `.terminal`, `.terminal-header`
- Text colors: `.command`, `.success`, `.error`, `.info`

### Content
Edit `script.js` portfolio object:
- Personal information
- Social links
- Projects with tech stacks and links

### Layout
Adjust terminal size in `style.css`:
- `max-width` in `.terminal` class
- `min-height` and `max-height` in `.terminal-body`

## Browser Support

Works in all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

MIT - Feel free to use and modify for your own portfolio!
