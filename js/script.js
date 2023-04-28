/* Form Elements */
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

const information = document.querySelectorAll(".information");

/* Actual Date Information */
const actualDate = new Date();
const actualDay = actualDate.getDate();
const actualMonth = 1 + actualDate.getMonth();
const actualYear = actualDate.getFullYear();

/* Realtime data information */
let day = actualDay;
let month = actualMonth;
let year = actualYear;

/* Event to control validations. */
calculatorButton.addEventListener("click", () => {
	for (let index = 0; index < calculatorInputs.length; index++) {
		const input = calculatorInputs[index];
		const label = calculatorLabels[index];
		const error = calculatorErrors[index];

		if (inputIsEmpty(input)) {
			setErrors(input, label, error, "This field is required");
		} else {
			const value = Number(input.value);
			if (
				index === 0 &&
				value >= 1 &&
				value <= 31 &&
				value <= actualDay
			) {
				removeErrors(input, label, error);
			} else if (
				index === 1 &&
				value >= 1 &&
				value <= 12 &&
				value <= actualMonth
			) {
				removeErrors(input, label, error);
				month -= value;

				if (month === 0) {
					month = 11;
				} else {
					month += 12;
				}
			} else if (index === 2 && value <= 2023) {
				removeErrors(input, label, error);
				year -= value;
			} else if (index === 2 && value > 2023) {
				setErrors(input, label, error, `Must be in the past`);
			} else {
				setErrors(
					input,
					label,
					error,
					`Must be a valid ${input.id}`
				);
			}
		}
	}
});

/* Function to display errors */
function setErrors(input, label, error, string) {
	input.classList.add("calculator__input--error");
	label.classList.add("color-red");
	error.style.display = "block";
	error.innerText = string;
}

/* Function to remove errors */
function removeErrors(input, label, error) {
	input.classList.remove("calculator__input--error");
	label.classList.remove("color-red");
	error.style.display = "none";
}

/* Function to validate if a string is empty */
function inputIsEmpty(element) {
	return element.value.trim() == "";
}
