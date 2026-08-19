# NodeJS-Basics-Assignment

## 📌 Assignment Description

This assignment introduces the fundamentals of **Node.js** and demonstrates how JavaScript programs can be created and executed outside the browser using the Node.js runtime.

The assignment consists of two tasks:

1. **app.js** – A basic Node.js program that displays messages in the terminal.
2. **introduction.js** – A Node.js program that displays personal introduction details using `console.log()`.

The purpose of this assignment is to understand the basic execution of JavaScript programs using Node.js and become familiar with running `.js` files through the terminal.

---

## 🎯 Objective

The objectives of this assignment are:

- Understand the basics of Node.js.
- Create and execute a simple Node.js application.
- Use `console.log()` to display output in the terminal.
- Execute JavaScript files using the `node` command.
- Understand the basic structure of a Node.js project.
- Practice creating and organizing multiple JavaScript files.
- Document the execution and output of Node.js programs.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| **Node.js** | JavaScript runtime environment |
| **JavaScript** | Programming language used to create the programs |
| **Visual Studio Code** | Code editor |
| **Terminal** | Used to execute Node.js programs |
| **Markdown** | Used for project documentation |

---

## 📂 Project Structure

The main files related to this assignment are:

```text
NodeJS-Basics-Assignment
│
├── app.js
├── introduction.js
├── README.md
│
└── screenshots
    ├── app-output.png
    └── introduction-output.png
```

### 📄 File Description

| File / Folder | Description |
|---|---|
| `app.js` | First Node.js program |
| `introduction.js` | Personal introduction program |
| `README.md` | Assignment documentation |
| `screenshots/` | Contains terminal output screenshots |
| `app-output.png` | Output screenshot of Task 1 |
| `introduction-output.png` | Output screenshot of Task 2 |

> **Note:** The GitHub repository may contain other Node.js files from additional assignments. The structure above shows the files specifically related to this assignment.

---

# 📝 Task 1: Your First Node.js Program

## 📌 Problem Statement

Create your first Node.js application that prints messages in the terminal.

### Requirements

The program should:

- Be created in a file named `app.js`.
- Display the following messages:

```text
Hello, Node.js!
I am learning backend development
```

- Run using the command:

```bash
node app.js
```

---

## 📄 File Name

```text
app.js
```

---

## 💻 Source Code

```javascript
console.log("Hello, Node.js!");
console.log("I am learning backend development");
```

---

## 🔍 Source Code Explanation

The program uses the JavaScript `console.log()` function to display messages in the terminal.

### First statement

```javascript
console.log("Hello, Node.js!");
```

This statement displays:

```text
Hello, Node.js!
```

### Second statement

```javascript
console.log("I am learning backend development");
```

This statement displays:

```text
I am learning backend development
```

Therefore, both messages are displayed when the program is executed using Node.js.

---

## ▶️ Command Used

Open the terminal inside the project directory and run:

```bash
node app.js
```

---

## 📤 Expected Terminal Output

```text
Hello, Node.js!
I am learning backend development
```

---

## 📸 Task 1 Output Screenshot

The following screenshot shows the successful execution of `app.js` in the terminal.

![Task 1 - app.js Output](https://github.com/user-attachments/assets/56ee57ae-83c3-4031-a7a9-0e5bea965bdf)

---

# 📝 Task 2: Simple Introduction Program

## 📌 Problem Statement

Create a Node.js program that displays personal introduction details using `console.log()`.

The program should display:

- Name
- Education
- Current Learning
- Goal

---

## 📄 File Name

```text
introduction.js
```

---

## 💻 Source Code

```javascript
console.log("Name: Rashmeet Kaur");
console.log("Education: B.Tech CSE");
console.log("Current Learning: Node.js");
console.log("Goal: Full Stack Developer");
```

---

## 🔍 Source Code Explanation

The program uses multiple `console.log()` statements to display personal information in the terminal.

### Name

```javascript
console.log("Name: Rashmeet Kaur");
```

Displays:

```text
Name: Rashmeet Kaur
```

### Education

```javascript
console.log("Education: B.Tech CSE");
```

Displays:

```text
Education: B.Tech CSE
```

### Current Learning

```javascript
console.log("Current Learning: Node.js");
```

Displays:

```text
Current Learning: Node.js
```

### Goal

```javascript
console.log("Goal: Full Stack Developer");
```

Displays:

```text
Goal: Full Stack Developer
```

---

## ▶️ Command Used

Run the following command in the terminal:

```bash
node introduction.js
```

---

## 📤 Expected Terminal Output

```text
Name: Rashmeet Kaur
Education: B.Tech CSE
Current Learning: Node.js
Goal: Full Stack Developer
```

---

## 📸 Task 2 Output Screenshot

The following screenshot shows the successful execution of `introduction.js` in the terminal.

![Task 2 - introduction.js Output](https://github.com/user-attachments/assets/11d4df5a-0599-4cce-85ee-07cf5b9b9c22)

---

# ▶️ Steps to Run the Programs

## Step 1: Open the Project

Open the `NodeJS-Basics-Assignment` folder in **Visual Studio Code**.

---

## Step 2: Open the Terminal

In Visual Studio Code, select:

```text
Terminal → New Terminal
```

---

## Step 3: Check Node.js Installation

Run:

```bash
node -v
```

If Node.js is installed correctly, the terminal will display the installed Node.js version.

Example:

```text
v24.x.x
```

---

## Step 4: Run Task 1

Execute:

```bash
node app.js
```

The terminal will display:

```text
Hello, Node.js!
I am learning backend development
```

---

## Step 5: Run Task 2

Execute:

```bash
node introduction.js
```

The terminal will display:

```text
Name: Rashmeet Kaur
Education: B.Tech CSE
Current Learning: Node.js
Goal: Full Stack Developer
```

---

# 💻 Commands Used

| Command | Purpose |
|---|---|
| `node -v` | Checks the installed Node.js version |
| `node app.js` | Runs the first Node.js program |
| `node introduction.js` | Runs the introduction program |

---

# 📚 Concepts Covered

## 1. Node.js

Node.js is a JavaScript runtime environment that allows JavaScript programs to be executed outside a web browser.

## 2. JavaScript

JavaScript is used to create both programs included in this assignment.

## 3. `console.log()`

The `console.log()` function is used to display messages and information in the terminal.

Example:

```javascript
console.log("Hello, Node.js!");
```

## 4. Node Command

The `node` command is used to execute JavaScript files.

Example:

```bash
node app.js
```

---

# 📸 Screenshots

Screenshots of the terminal output are included as proof of successful execution and are required according to the assignment submission guidelines.

## Task 1 – `app.js`

**Command:**

```bash
node app.js
```

**Output:**

```text
Hello, Node.js!
I am learning backend development
```

**Screenshot:**

![Task 1 - app.js Output](https://github.com/user-attachments/assets/56ee57ae-83c3-4031-a7a9-0e5bea965bdf)

---

## Task 2 – `introduction.js`

**Command:**

```bash
node introduction.js
```

**Output:**

```text
Name: Rashmeet Kaur
Education: B.Tech CSE
Current Learning: Node.js
Goal: Full Stack Developer
```

**Screenshot:**

![Task 2 - introduction.js Output](https://github.com/user-attachments/assets/11d4df5a-0599-4cce-85ee-07cf5b9b9c22)

> **Important:** Terminal output screenshots are included as required by the assignment submission guidelines.

---

# 🎓 Learning Outcomes

After completing this assignment, I learned how to:

- Create a basic Node.js program.
- Execute JavaScript files using Node.js.
- Use `console.log()` for terminal output.
- Run Node.js programs from the terminal.
- Create and organize JavaScript files.
- Understand the basic Node.js execution environment.
- Document a Node.js assignment using Markdown.
- Include execution screenshots as part of project documentation.

---

# ✅ Conclusion

This assignment provided a basic introduction to **Node.js and backend development**.

**Task 1** demonstrated how to create and execute a simple Node.js program using `console.log()`.

**Task 2** demonstrated how to create a Node.js program that displays personal information in the terminal.

Overall, this assignment helped build a strong foundation for learning more advanced Node.js concepts such as **HTTP servers, routing, file handling, APIs, asynchronous programming, and backend development**.

---

# 👩‍💻 Author

**Rashmeet Kaur**

**B.Tech Computer Science & Engineering**

---

## ⭐ Assignment Status

| Task | Status |
|---|---|
| Task 1 – First Node.js Program | ✅ Completed |
| Task 2 – Introduction Program | ✅ Completed |
| Terminal Execution | ✅ Successful |
| Output Screenshots | ✅ Included |
| Documentation | ✅ Completed |

---

**⭐ NodeJS-Basics-Assignment — Introduction to Node.js & Backend Development**
