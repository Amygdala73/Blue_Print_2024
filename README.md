# WorkWise - Collaborative Task Management Platform

> **Blueprint Hackathon 2024 | Team 29**

WorkWise is a modern web-based collaborative task management and availability tracking platform designed to streamline team coordination and project management. Built with vanilla TypeScript, HTML, and CSS, it provides an intuitive interface for managing projects, tracking team availability, and organizing tasks in a Kanban-style board.

## 🌟 Features

### Core Functionality
- **Project Management**: Create, organize, and manage multiple projects with due dates
- **Interactive Timetable**: Visual time slot selection with drag-and-drop availability tracking
- **Kanban Task Board**: Three-column task management (To Do, Doing, Done)
- **Team Availability**: Real-time availability coordination and room booking
- **Responsive Design**: Clean, modern interface with custom color scheme

### User Experience
- **Dynamic Sidebar**: Project navigation with expandable/collapsible sections
- **Modal Overlays**: Seamless task and project creation workflows
- **Real-time Updates**: Instant UI updates using local storage persistence
- **Notification System**: In-app notifications for team updates

## 🏗️ Architecture

### Technology Stack
- **Frontend**: TypeScript, HTML5, CSS3 (Vanilla JavaScript)
- **Styling**: Custom CSS with CSS Variables, Boxicons for icons
- **Typography**: Google Fonts (Inter)
- **Build System**: TypeScript compiler with watch mode
- **Storage**: Browser localStorage for data persistence

## 🚀 Quick Start

### Prerequisites
- Node.js and npm installed on your system
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Amygdala73/Blue_Print_2024.git
   cd Blue_Print_2024
   ```

2. **Initialize npm and install dependencies**
   ```bash
   npm init -y
   npm install
   ```

3. **Install global tools** (optional but recommended)
   ```bash
   npm install -g typescript http-server
   ```

### Development Workflow

1. **Start TypeScript compilation in watch mode**
   ```bash
   npx tsc -w
   ```
   This monitors `ts/` directory and automatically compiles changes to `js/` directory.

2. **Start development server** (in a new terminal)
   ```bash
   http-server .
   ```
   
3. **Access the application**
   Open your browser and navigate to `http://127.0.0.1:8080/pages/home.html`

### Important Development Notes
- **Always reference `.js` files in HTML**, never `.ts` files
- TypeScript source code goes in `ts/` directory
- Compiled output automatically appears in `js/` directory
- HTML pages must link to compiled JavaScript: `<script src="../js/main.js"></script>`

## 📱 Usage Guide

### Creating Projects
1. Click the "Create Project" button in the sidebar
2. Fill in project details (name, description, due date)
3. Projects automatically appear in the sidebar navigation

### Managing Availability
1. Use the interactive timetable to select available time slots
2. Click and drag to select multiple time periods
3. Selected times automatically populate the availability list
4. Use "Book a Room" for meeting coordination

### Task Management
1. Navigate to the task board section
2. Add new tasks using the "+ New Task" buttons in each column
3. Tasks are organized in three states: To Do, Doing, Done
4. Assign team members to tasks for collaboration tracking

## 📄 License

This project was created for the Blueprint Hackathon 2024. Please refer to the hackathon guidelines for usage and distribution terms.

## 🏆 Blueprint Hackathon 2024

**Team 29** - WorkWise represents our vision for the future of collaborative team management, combining intuitive design with powerful functionality to help teams work more effectively together.

---

*Built with ❤️ for Blueprint Hackathon 2024*

