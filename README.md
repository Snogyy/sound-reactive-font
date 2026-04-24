# Sound Reactive Font Project

A sound-based typographic experience created in collaboration with **CMDMAJ.V**, a graphic designer specializing in typography.

This project showcases an adaptive typeface designed to evolve in real time through sound captured from the microphone. Built in the context of a project around **free parties**, the site acts as a sandbox for exploring how the typeface reacts to different musical environments.

## About

The goal is simple: to show that a variable font can become a living material.

The project lets you:

- make the font react to microphone input in real time,
- test different weights and sizes,
- change the text color,
- adjust the sensitivity of the reaction,
- type anything you want to fully customize the display.

The result is an experimental space focused on the relationship between sound, rhythm, and typographic form.

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- Web Audio API / `getUserMedia`
- Parcel for bundling and the development server
- Variable fonts with `font-variation-settings`

## Installation

### Requirements

- Node.js installed on your machine
- A modern browser with microphone support

### Install Dependencies

```bash
npm install
```

### Run the Project Locally

```bash
npm start
```

Warning ! Make sure to allow microphone access.

## Project Structure

- `src/index.html` : main interface structure
- `src/styles.css` : global styles and layout
- `src/range-bars.css` : control styles
- `src/scripts/` : interaction logic written in JavaScript
- `src/assets/fonts/` : font files
- `src/assets/images/` : interface visuals

## Credits

Project created with **CMDMAJ.V**.

Development by **Jules Nourdin**.