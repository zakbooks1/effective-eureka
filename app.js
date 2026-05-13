async function send() {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");

  output.textContent = "Thinking...";

  const response = await fetch(
    "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        inputs: input
      })
    }
  );

  const data = await response.json();

  output.textContent =
    data?.[0]?.generated_text ||
    JSON.stringify(data, null, 2);
}
