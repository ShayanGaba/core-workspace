# core-workspace

A clean, high-density single-page developer workspace built to test modular frontend utility architectures using modern Angular. 
The entire system is styled with a strict, dark-mode brutalist design language using Tailwind CSS, balancing high-readability sans-serif data with technical monospace components.

## Core Engine Architecture

* **Standalone Paradigm:** Built entirely without legacy `NgModules` for an ultra-lightweight, decoupled component tree.
* **Fine-Grained Reactivity:** Bypasses global zone checking by managing local component states surgically using **Angular Signals** (`signal`, `computed`).
* **Optimized Routing:** Implements a lazy-loaded router pipeline to stream view modules on-demand, maximizing initial paint performance.
* **Native Control Flow:** Driven by Angular's native `@for`, `@if`, and `@empty` block syntax for clean template interpolation.

---

## Integrated Modules

### 01 // Pulse Meter
A localized state utility built to monitor continuous numerical scaling. Features custom step multipliers (1x, 5x, 10x) driving declarative data updates.

### 02 // Task Pipeline
A structural operations queue engineered to manage development tasks and project milestones. Includes dynamic multi-tier priority tags (`CRITICAL`, `STANDARD`, `ROUTINE`) and continuous validation.

### 03 // Asset Telemetry
A high-density tabular dashboard for tracking hardware setups and software subscriptions. Features direct inline-editing mutations that automatically trigger computed state updates to recalculate net valuations instantly.

---

## Technical Stack

* **Framework:** Angular 22 (Standalone configuration)
* **Build Tool:** Vite Application Compiler
* **Style Engine:** Tailwind CSS
* **Language:** TypeScript (Strict typing enabled)

---

## Setup & Initialization

To initialize the development engine locally, clone the repository and run the setup sequence:

```bash
# Install node packages and dependencies
npm install

# Run the local development server via Vite
ng serve