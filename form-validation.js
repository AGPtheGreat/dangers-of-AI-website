
document.addEventListener("DOMContentLoaded", function() {
	const form = document.getElementById("logging-form");
	
	form.addEventListener("submit", function (e) {
    const fields = ["name", "email", "subject", "message"];
    for (const fieldId of fields) {
      const field = document.getElementById(fieldId);
      if (/<|>/.test(field.value)) {
        alert("Input contains disallowed characters. Please remove any angle brackets.");
        field.focus();
        e.preventDefault();
        return;
      }
    }
  });
});