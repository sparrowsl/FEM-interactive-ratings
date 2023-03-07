import { createSignal, For } from "solid-js";
import "./ratings.css";

export const [selectedRate, setSelectedRate] = createSignal(null);
export const [openModal, setOpenModal] = createSignal(false);

const ratings = [1, 2, 3, 4, 5];
const submitRate = (e) => {
	e.preventDefault();
	if (selectedRate()) {
		console.log(selectedRate());
		setOpenModal(true);
	}
};

export default function Ratings() {
	return (
		<form onSubmit={submitRate}>
			<ul class="rating-numbers flex">
				<For each={ratings}>
					{(rate) => (
						<li
							class={selectedRate() === rate ? "selected-rate" : ""}
							onClick={() => setSelectedRate(rate)}
						>
							{rate}
						</li>
					)}
				</For>
			</ul>

			<button type="submit" class="form-submit">
				Submit
			</button>
		</form>
	);
}
