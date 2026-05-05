const apiKey = "AIzaSyDghYPJnRqOcsHTNu2HjI0U3k5VcSl04uk";

async function listModels() {
  const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Error listing models:", error.message);
  }
}

listModels();
