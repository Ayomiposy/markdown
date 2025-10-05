# 📝 Marked-Down A Modern Markdown Editor

![Markdown Preview Demo](https://raw.githubusercontent.com/adam-p/markdown-here/master/src/common/images/icon48.png)

> A fast, lightweight, and minimal Markdown editor built with **React**, **Vite**, **TailwindCSS**, and **TanStack Query** — designed for developers and writers who want instant preview and smooth file management.

---

## 🧭 Table of Contents

1. [Features](#-features)
2. [Tech Stack](#-tech-stack)
3. [Architecture Overview](#-architecture-overview)
4. [Installation & Setup](#️-installation--setup)
5. [Available Scripts](#-available-scripts)
6. [API Documentation](#-api-documentation)
7. [Screenshots](#-screenshots)
8. [Known Issues](#️-known-issues--limitations)
9. [Future Improvements](#-future-improvements)
10. [Contributors](#-contributors)
11. [License](#-license)

---

## 🚀 Features

✅ **Live Markdown Preview** — Real-time conversion using `marked` and `DOMPurify` for secure rendering.  
✅ **Save to Local Storage (Mock API)** — Persistent save and retrieval powered by TanStack Query.  
✅ **Download as `.md` File** — Export your markdown instantly with one click.  
✅ **Load from File** — Import existing markdown documents into the editor.  
✅ **History Dropdown** — Fetch and reload recent markdowns.  
✅ **Responsive UI** — Works beautifully on mobile and desktop.  
✅ **Modern Styling** — TailwindCSS + Typography for elegant Markdown display.

---

## 🧩 Tech Stack

| Tool                        | Purpose                                  |
| --------------------------- | ---------------------------------------- |
| **React + Vite**            | Frontend framework and build tool        |
| **TailwindCSS**             | Utility-first CSS styling                |
| **@tailwindcss/typography** | Improved Markdown readability            |
| **marked**                  | Fast Markdown parser                     |
| **DOMPurify**               | Sanitizes parsed HTML to prevent XSS     |
| **TanStack Query**          | API calls, caching, and state management |
| **localStorage (Mock API)** | Simulates backend storage                |

---

## 🧱 Architecture Overview
