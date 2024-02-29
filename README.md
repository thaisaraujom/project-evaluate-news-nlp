# Evaluate a News Article with NLP

A Web Application that utilizes Natural Language Processing (NLP) to analyze the sentiment of news articles.

## 🚀 Quick Start

Before you begin, create a `.env` file in the root directory and add your API key from [MeaningCloud](https://www.meaningcloud.com/developer/login). The file should look like this:

```sh
API_KEY=your-api-key
```

Then, follow these steps:

1. **Clone the Repository**

   `git clone <repository-url>`

2. **Install Dependencies**

   Navigate to your project's directory and run:

   ```sh
   npm install
   ```

3. **Launch the Server**

   ```sh
   npm start
   ```

4. **The Application**

   ```sh
   npm run build-dev
   ```

## 📝 Features

- **URL Submission**: enter the news article URL for NLP evaluation.
- **Sentiment Analysis**: view the breakdown of the sentiment analysis, including score tag, agreement, subjectivity, confidence, and irony.

## 🧪 Testing

Ensure the robustness of your application by running:

```sh
npm test
```

## 📦 Dependencies

- Node.js for the runtime environment.
- Express for server setup.
- Webpack for bundling assets.
- Sass for stylish designs.
- Babel for next-gen JavaScript.
- Jest for performing tests.
- API from MeaningCloud for NLP analysis.

## 📁 Project Structure

- `src/`: core source files.
  - `client/`: front-end scripts and styles.
  - `server/`: back-end server logic.
- `__test__/`: jest test suites.
- `node_modules/`: the heart of Node.js, housing all modules.
- `views/`: HTML canvases of the web application.


## 📜 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.