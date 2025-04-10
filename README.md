# 📚 Book API Assignment (In-Memory Edition)

## Problem Statement

Build a REST API to manage a book collection using **Node.js** and **Express**, storing data in an **in-memory array**.
The scaffolding has been given in the project folder, you have to implement the following API endpoints. If a book is not found it should return 404 error.

### Assignment :

1. `GET /books` – List all books
2. `POST /books` – Add a new book (expects `title` and `author` in JSON body)

### Requirements

- Use an in-memory array (NO database)
- Pass all tests provided in `test/book.test.js`

---

### 📦 Setup Instructions

---

### ✅ 1. **Fork the Repository**

Go to the GitHub repo (e.g., `https://github.com/YOUR-ORG/book-api-starter`)  
Click the **Fork** button (top right) to create a copy under your own account.

---

### ✅ 2. **Clone the Forked Repo**

```bash
git clone git@github.com:<your-username>/book-api-starter.git
cd book-api-starter
```

🔁 Or if you're using HTTPS:

```bash
git clone https://github.com/<your-username>/book-api-starter.git
cd book-api-starter
```

---

### ✅ 3. **Install Dependencies**

Make sure you have Node.js and npm installed.

Then run:

```bash
npm install
```

---

### ✅ 4. **Work on the Assignment**

Open the folder in your code editor (like VS Code).

You’ll mostly work in the following places:

- `src/` – main backend code
- `test/public/` – public tests (if required to edit or write)
- You **will not** have access to `test/private/`

Add features, routes, or logic as per your assignment prompt.

---

### ✅ 5. **Run the Server**

```bash
npm start
```

---

### ✅ 6. **Run Tests**

```bash
npm test
```

✅ Make sure **all tests pass** before submission.

---

### ✅ 7. **Add and Commit Your Changes**

After making your changes, stage and commit them:

```bash
git add .
git commit -m "Complete assignment: added book routes and logic"
```

---

### ✅ 8. **Push to Your Forked Repo**

```bash
git push origin main
```

If you're on a different branch:

```bash
git push origin your-branch-name
```

---

### ✅ 9. **Create a Pull Request**

1. Go to your repo on GitHub.
2. Click **"Compare & pull request"**.
3. Write a meaningful title and description.
4. Submit the pull request to the **original repo’s `main` branch**.

---

### 🧠 Bonus: Keeping Your Fork Updated (optional)

If the original repo is updated and you want to sync:

```bash
git remote add upstream git@github.com:ORIGINAL-OWNER/book-api-starter.git
git fetch upstream
git merge upstream/main
```

---

```bash
npm install
npm start            # start server
npm test             # run tests
```

## Submission

- Push to GitHub
