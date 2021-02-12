<template>
	<div class="container-fluid">
		<div class="blueLine"></div>
		<div class="row">
			<div class="col-xs-6 col-md-6">
				<br /><br />
				<img
					style="width: 400px; margin-left: 53px; border-radius: 83px"
					src="@/assets/logoPC.png"
					class="img-fluid"
					alt="Logo"
				/>
				<div style="margin-left: 27%; margin-top: 10px">
					<a href="#" class="mx auto fa fa-facebook"></a>&nbsp;
					<a href="#" class="fa fa-linkedin"></a>&nbsp;
					<a href="#" class="fa fa-instagram"></a>
				</div>
			</div>
			<div class="col-xs-6 col-md-4 col">
				<br />
				<h1 style="margin-left: 75px">MA TKO JE TO ZABORAVIO LOZINKU???</h1>

				<div class="form-group">
					<p class="text-muted">
						Enter your email and we'll send you a link to get back into your
						account
					</p>
					<label for="emailAdress">Email address</label>
					<input
						v-model="email"
						type="email"
						class="form-control"
						id="emailAdress"
						aria-describedby="emailHelp"
						placeholder="Enter email"
					/>
				</div>
				<div id="errorMessage" class="error text-danger"></div>
				<div class="error text-danger">{{ errorMessage }}</div>

				<button
					type="button"
					@click="sendPasswordResetEmail()"
					class="btn btn-lg position-absolute"
					style="margin-left: 29%; background-color: #384f7b; color: #ffffff"
				>
					Send Login Link
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import { firebase } from "@/firebase";
export default {
	name: "forgot-password",
	data() {
		return {
			email: "",
			errorMessage: "",
		};
	},
	methods: {
		sendPasswordResetEmail() {
			firebase
				.auth()
				.sendPasswordResetEmail(this.email)
				.then((result) => {
					if (result) {
						console.log("Rezultat uspjesan");
					} else {
						console.log("IpakJeElse");
					}
				})
				.catch((error) => {
					console.error(error.message);
					this.errorMessage = error.message;
				});
		},
	},
};
</script>

<style scoped>
.btn {
	transition: box-shadow 0.3s;
}
.btn:hover {
	box-shadow: 20px 20px 40px 0px #384f7b;
}

p {
	text-align: center;
	vertical-align: middle;
	display: table-cell;
}
</style>
