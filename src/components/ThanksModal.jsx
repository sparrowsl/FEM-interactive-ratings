import thankYou from "../assets/illustration-thank-you.svg";
import "./modal.css";

export default function ThanksModal(props) {
	return (
		<section class={`thanks-modal ${props.isOpen ? "modal-open" : ""}`}>
			<div class="modal-content">
				{/* thanks-icon */}
				<img src={thankYou} alt="" />

				<div class="rating-display">You selected {props.rating} out of 5</div>

				<h2>Thank you!</h2>

				<p class="">
					We appreciate you taking the time to give a rating. If you ever need more support, don't
					hesitate to get in touch!
				</p>
			</div>
		</section>
	);
}
