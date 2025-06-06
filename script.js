async function generateText() {
  const userInput = document.getElementById('userInput').value;
  const outputDiv = document.getElementById('output');
  
  async function generate() {
  const input = document.getElementById('userInput').value;
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "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"
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: input }]
    })
  });

  const data = await response.json();
  document.getElementById("output").innerText = data.choices[0].message.content;
}