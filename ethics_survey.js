const questions = [
  "Using an LLM (ex. ChatGPT) to generate a recipe",
  "Using an LLM (ex. ChatGPT) to help make your work more productive",
  "Using an LLM (ex. ChatGPT) to write a poem, and selling a book with that poem in it",
  "Using an image generator to make a meme, and posting it online",
  "Using an image generator to make a political commentary (with real human likeness)",
  "Using an AI image editor to remove flaws in your appearance, and using it on a dating app",
  "Police identifying individuals in a photo using AI to see if they are a known criminal",
  "Taking photos of any individuals who enter your store, and using that data to find out what they purchase usually",
  "Deepfaking a politician's face onto a video of a criminal, and posting it online",
  "Prompt engineering to get personal information from an LLM",
  "As an owner of an LLM, saving queries users had as data, to improve the AI performance in the future",
  "As the owner of an AI image generator, allowing NSFW image generation",
  "As the owner of an AI image generator, using copyrighted content generation",
  "Using an LLM for customer service, instead of hiring a human",
  "Replacing jobs traditionally done by humans with AI, in cases where the AI does an acceptable job",
  "Allowing users to use an LLM as a therapist, when you cannot afford an actual one",
  "Allowing users to use an LLM as an artificial friend",
  "Allowing users to use an LLM for artificial romance",
  "Using AI to boost your content online (fake reviews or comments)",
  "Using AI in military reconnaissance",
  "Using AI in military weapons (ex. AI controlled drone swarms)",
  "Using AI to set prices (profit maximization)",
  "Using AI to increase prices rich customers pay",
  "Using AI to set the prices of insurance (based on area)",
  "Using AI to set the prices of insurance (based on race)",
  "Using AI to set the prices of insurance (based on family history/genetics)",
  "Using AI to set the prices of insurance (based on age)",
  "Using AI to add/deepfake deceased actors into new movies (the movie company owns the actor’s contract)"
];

const tbody = document.getElementById("survey-body");

questions.forEach((question, index) => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td class="question">${question}</td>
    ${[1, 2, 3, 4, 5].map(value => `
      <td><input type="radio" name="q${index + 1}" value="${value}"></td>
    `).join("")}
  `;
  tbody.appendChild(tr);
});

// function for saving survey responses
async function saveResponses() {
  const responses = [];

  questions.forEach((question, index) => {
    const radios = document.getElementsByName(`q${index + 1}`);
    let selectedValue = '';

    for (const radio of radios) {
      if (radio.checked) {
        selectedValue = radio.value;
        break;
      }
    }

    responses.push({
      question: question,
      answer: selectedValue || "No response"
    });
  });

  // send responses to server using POST
  fetch('save_responses.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(responses)
  })
  .then(response => {
    if (response.ok) {
      alert("successfuly saved");
    } else {
      alert("save failure");
    }
  })
  .catch(error => {
    console.error("error saving the responses:", error);
    alert("Error saving responses.");
  });
}
