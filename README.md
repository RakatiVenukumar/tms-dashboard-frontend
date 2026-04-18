# TMS Dashboard

A modern, responsive Task Management System (TMS) dashboard built with HTML, CSS (Bootstrap 5), and JavaScript. This dashboard is designed for employee self-service, project/task tracking, and team collaboration, with a focus on clean UI, advanced interactivity, and mobile-first responsiveness.

## Features

- **Sidebar Navigation:**
  - Modern blue gradient sidebar with icons for dashboard, calendar, tasks, projects, and help.
  - Hamburger menu for mobile devices (icons toggle on small screens).
- **Header & Branding:**
  - Custom logo and company branding.
  - Welcome message and user profile section.
- **Dashboard Cards:**
  - Summary cards for meetings, tasks, pending items, and events.
  - Glassmorphism, border highlights, and animated hover/focus effects.
- **Ongoing Projects & Tasks in Review:**
  - Project progress, team avatars, and activity stats.
  - Task review section with status badges.
- **Feed & Events:**
  - Activity feed for notifications and updates.
  - Upcoming events carousel.
- **Advanced UI:**
  - Animated transitions for modals, dropdowns, and cards.
  - Tooltips for icons and actions.
  - Animated progress bars and status indicators.
- **Responsiveness:**
  - Fully responsive for laptops, tablets, and mobiles.
  - Sidebar collapses to a hamburger menu on mobile.
  - Header and dashboard elements stack and scale for small screens.

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Edge, Firefox, Safari)
- [Node.js](https://nodejs.org/) (optional, for advanced development)

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/RakatiVenukumar/tms-dashboard-frontend.git
   cd tms-dashboard-frontend
   ```
2. Open `index.html` directly in your browser, or use a local server for best results:
   ```sh
   npx serve .
   # or use Live Server extension in VS Code
   ```

## Project Structure

```
├── index.html           # Main dashboard HTML
├── css/
│   └── styles.css       # Custom and responsive styles
├── JS/
│   └── script.js        # Custom JavaScript (interactivity, tooltips, etc.)
├── assets/              # Images, icons, avatars
```

## Customization
- **Sidebar Icons:** Edit the `<nav>` in `index.html` to add/remove icons.
- **Branding:** Update the logo and company name in the header section.
- **Cards & Sections:** Modify or add dashboard cards and sections as needed.
- **Colors & Styles:** Tweak `css/styles.css` for your brand colors and UI preferences.

## Responsiveness & Mobile UX
- Uses Bootstrap grid and custom media queries for seamless adaptation.
- Sidebar becomes a top hamburger menu on mobile; icons are toggled for space.
- Header, cards, and sections stack and resize for all device sizes.

## Interactivity & Advanced UI
- Animated transitions for modals, dropdowns, and cards.
- Tooltips for icons and action buttons (use `data-bs-toggle="tooltip"`).
- Animated progress bars for project/task status.
- Glassmorphism and border highlights for a modern look.

## Data Visualization
- Progress bars are animated.
- For charts (pie, bar, etc.), integrate [Chart.js](https://www.chartjs.org/) or [ApexCharts](https://apexcharts.com/) as needed.

## Accessibility
- High-contrast colors and large clickable areas.
- Keyboard navigation and focus styles for interactive elements.
- ARIA labels for navigation and icons.

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](LICENSE)

## Author
- [Rakati Venukumar](https://github.com/RakatiVenukumar)

---

For questions or support, open an issue or contact the author via GitHub.
