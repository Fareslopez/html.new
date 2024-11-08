<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Palindrome Checker</title>
    <!-- Your Name -->
    <style>
        /* Add some creative elements */
        body {
            background-color: #f0f8ff; /* Light blue background */
            font-family: Arial, sans-serif; /* Font style */
            text-align: center; /* Center align text */
            margin: 0;
            padding: 0;
        }
        .container {
            margin-top: 50px;
        }
        .result {
            font-size: 1.5em;
            color: #333;
        }
        .input-container {
            margin: 20px 0;
        }
        input[type="text"] {
            padding: 10px;
            font-size: 1em;
            width: 80%;
            max-width: 400px;
        }
        button {
            padding: 10px 20px;
            font-size: 1em;
            cursor: pointer;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
        }
        button:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Palindrome Checker</h1>
        <div class="input-container">
            <input type="text" id="userInput" placeholder="Enter a string">
            <button id="checkButton">Check</button>
        </div>
        <p class="result" id="result"></p>
        <button id="anotherWord" style="display: none;">Enter another word</button>
    </div>
    <script src="script.js"></script>
</body>
</html>
