const calculatorButton = document.querySelector(
	"#calculator__button"
);

const calculatorInputs = document.querySelectorAll(
	".calculator__input"
);

const calculatorLabels = document.querySelectorAll(
	".calculator__label"
);

const calculatorErrors = document.querySelectorAll(
	".calculator__error"
);

calculatorButton.addEventListener("click", () => {
	for (let index = 0; index < calculatorInputs.length; index++) {
		const input = calculatorInputs[index];
		const label = calculatorLabels[index];
		const error = calculatorErrors[index];

		if (inputIsEmpty(input)) {
			input.classList.add("calculator__input--error");
			label.classList.add("color-red");
			error.style.display = "block";
		} else {
			input.classList.remove("calculator__input--error");
			label.classList.remove("color-red");
			error.style.display = "none";
		}
	}
});

function inputIsEmpty(element) {
	return element.value.trim() == "";
}
