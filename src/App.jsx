import { Show } from "solid-js";
import iconStar from "./assets/icon-star.svg";
import Ratings, { openModal } from "./components/Ratings";
import { selectedRate } from "./components/Ratings";
import ThanksModal from "./components/ThanksModal";

function App() {
	return (
		<main>
			<Show
				when={!openModal()}
				fallback={<ThanksModal rating={selectedRate()} isOpen={openModal()} />}
			>
				<section class="rating-card">
					<div class="star-icon">
						<img src={iconStar} alt="" />
					</div>

					<h2 class="rate-question">How did we do? {selectedRate()}</h2>

					<p class="summary">
						Please let us know how we did with your support request. All feedback is appreciated to
						help us improve our offering!
					</p>
					<Ratings />
				</section>
			</Show>
		</main>
	);
}

export default App;
