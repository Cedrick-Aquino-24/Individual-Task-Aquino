const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Your info
const fullName = "Cedrick Jerome Aquino";
const classSection = "BA-4102";
const quotes = [
  "Believe in yourself!",
  "Every day is a new opportunity.",
  "Stay positive and work hard.",
  "Your potential is endless.",
  "Dream it. Do it.",
  "Success starts with self-discipline.",
  "Mistakes are proof that you are trying.",
  "Small steps every day lead to big results.",
  "Stay patient and trust your journey.",
  "Your mindset shapes your reality."
];

app.get('/', (req, res) => {
  const quotesJSON = JSON.stringify(quotes);

  // Generate 5 random quotes initially
  const initialQuotes = [];
  for (let i = 0; i < 5; i++) {
    const randIndex = Math.floor(Math.random() * quotes.length);
    initialQuotes.push(quotes[randIndex]);
  }
  const initialText = initialQuotes.join(" ");

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>My Node App</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #add8e6;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
          }
          .info-box {
            background-color: white;
            padding: 40px;
            border-radius: 15px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.2);
            text-align: center;
            max-width: 600px;
            width: 90%;
          }
          #quotes {
            margin-top: 20px;
            padding: 15px;
            background-color: #f0f8ff;
            border-radius: 10px;
            box-shadow: inset 0 2px 5px rgba(0,0,0,0.1);
            font-size: 16px;
            line-height: 1.5;
          }
          button {
            margin-top: 20px;
            padding: 10px 20px;
            border: none;
            border-radius: 8px;
            background-color: #1e90ff;
            color: white;
            font-size: 16px;
            cursor: pointer;
            transition: background-color 0.3s;
          }
          button:hover {
            background-color: #0d6efd;
          }
        </style>
      </head>
      <body>
        <div class="info-box">
          <h1>${fullName}</h1>
          <p>Section: ${classSection}</p>
          <div id="quotes">${initialText}</div>
          <button id="randomizeBtn">Randomize All Quotes</button>
        </div>

        <script>
          const quotes = ${quotesJSON};
          const quotesDiv = document.getElementById('quotes');
          const button = document.getElementById('randomizeBtn');

          button.addEventListener('click', () => {
            const newQuotes = [];
            for (let i = 0; i < 5; i++) {
              const randIndex = Math.floor(Math.random() * quotes.length);
              newQuotes.push(quotes[randIndex]);
            }
            quotesDiv.textContent = newQuotes.join(" ");
          });
        </script>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});
