const form = document.getElementById("calc");
const result = document.getElementById("result");

form.onsubmit = (e) => {
  e.preventDefault();

  const numberInputs = e.currentTarget.querySelectorAll('input[type="number"]');

  const [first, second] = Array.from(numberInputs).map((input) =>
    parseInt(input.value)
  );

  result.innerText = first + second;
};
