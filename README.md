
# Pomodoro Timer

This is a simple Pomodoro Timer application built with **HTML**, **CSS**, and **JavaScript**. It helps you follow the Pomodoro Technique, a time management method that uses a timer to break work into intervals, typically 25 minutes in length, separated by short breaks.

## Features

- **Start / Pause Timer**: Start and pause the timer with a single button.
- **Work and Break Cycles**: 25 minutes of work followed by a 5-minute break.
- **Timer Reset**: Reset the timer back to 25 minutes of work and 5 minutes of break.
- **Timer Display**: Shows the remaining time in minutes and seconds.

## How to Use

1. **Start the Timer**: Click the **Start** button to begin the Pomodoro timer (25 minutes of work).
2. **Pause the Timer**: If needed, click the **Pause** button to stop the timer.
3. **Take a Break**: After the work cycle ends (25 minutes), the timer will automatically switch to a 5-minute break.
4. **Reset the Timer**: Click the **Reset** button to reset the timer back to the initial work time (25 minutes).
5. **Switch Between Focus and Break**: The status will automatically change between **Focus** and **Take a Break** to let you know what phase you're in.

## Installation

1. Clone or download the repository to your local machine.
2. Open the `main.html` file in a browser to start using the Pomodoro Timer.

### Folder Structure:
```
/PomodoroTimer
    ├── main.html           # The main HTML file
    ├── body.css            # The CSS file for styling
    ├── script.js           # The JavaScript file for functionality
    └── README.md           # This readme file
```

## Technologies Used

- **HTML**: Used for the structure of the application.
- **CSS**: Used for styling the layout and the timer.
- **JavaScript**: Used to handle the timer functionality, including counting down the time, toggling between work and break intervals, and resetting the timer.

## How It Works

- The timer starts at **25 minutes** (Work Interval) and counts down every second.
- When the work time ends, the timer switches to **5 minutes** of break time.
- Once the break time ends, the timer resets and starts a new work cycle.
- You can pause the timer at any point and resume from where you left off.
- Resetting the timer brings it back to the starting 25-minute work period.

## License

This project is open-source and available under the [MIT License](LICENSE).

