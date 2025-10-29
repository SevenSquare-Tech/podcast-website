# How to Run the App Locally

Follow these steps to run the Podverse web app on your local machine:

## 1. Prerequisites
- Make sure you have **Node.js version 16 or higher** installed on your system.

## 2. Create an Environment File
Create a `.env` file in the project root directory by copying the existing example file:

```bash
cp .env.example .env
```

This file contains default configuration values that will load production data from **https://api.podverse.fm**.
You can later modify it to connect to your **local database** as explained in the [CONTRIBUTING.md](https://github.com/SevenSquare-Tech/podcast-website/blob/master/CONTRIBUTING.md) file.

## 3. Install Dependencies
Install all the necessary Node modules by running:

```bash
npm install
```

## 4. Start the Development Server
Run the app using the following command:

```bash
npm run dev
```

After the app starts, open your browser and go to:
👉 [http://localhost:3000](http://localhost:3000)

---

# Git History Configuration

## Ignoring Linter-Only Commits in Git History

To keep your Git history clean and ignore commits that only include linter fixes, use the provided `.git-blame-ignore-revs` file.

You can configure Git globally to use this file by running:

```bash
git config --global blame.ignoreRevsFile .git-blame-ignore-revs
```

This helps ensure that unnecessary lint commits are skipped when using Git blame or viewing inline file history.
