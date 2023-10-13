<template>
	<div class="content">
		<div class="color"></div>
		<div class="color"></div>
		<div class="color"></div>
		<div class="box">
			<div class="square" style="--i: 0"></div>
			<div class="square" style="--i: 1"></div>
			<div class="square" style="--i: 2"></div>
			<div class="square" style="--i: 3"></div>
			<div class="square" style="--i: 4"></div>
			<div class="container">
				<div class="form">
					<h2>Login Form</h2>
					<div class="inputBox">
						<input type="text" placeholder="Username" autocomplete="off" />
					</div>
					<div class="inputBox">
						<input
							type="password"
							placeholder="Password"
							autocomplete="new-password"
						/>
					</div>
					<div class="inputBox">
						<input type="submit" value="Login" />
					</div>
					<p class="forget">忘记密码? <a href="#">Click Here</a></p>
					<p class="registry">没有账号? <a href="#">Sign Up</a></p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup></script>

<style lang="less" scoped>
.content {
	width: 100%;
	height: 100%;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	.color {
		filter: blur(150px);
	}
	.color:nth-child(1) {
		position: absolute;
		left: 800px;
		top: -50px;
		width: 500px;
		height: 500px;
		background-color: #ff359b;
	}
	.color:nth-child(2) {
		position: absolute;
		width: 500px;
		height: 500px;
		background-color: #fffd87;
		bottom: 100px;
		right: 100px;
	}
	.color:nth-child(3) {
		position: absolute;
		left: 200px;
		bottom: 100px;
		width: 500px;
		height: 500px;
		background-color: #00d2ff;
	}
	.box {
		position: relative;
		.square {
			position: absolute;

			backdrop-filter: blur(5px);
			background-color: rgba(255, 255, 255, 0.1);
			box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
			border: 1px solid rgba(255, 255, 255, 0.5);
			border-right: 1px solid rgba(255, 255, 255, 0.2);
			border-bottom: 1px solid rgba(255, 255, 255, 0.2);
			border-radius: 10px;
			animation: animate 10s linear infinite;
			animation-delay: calc(-1s * var(--i));
		}
		@keyframes animate {
			0%,
			100% {
				transform: translateY(-40px);
			}
			50% {
				transform: translateY(40px);
			}
		}
		.square:nth-child(1) {
			top: -50px;
			right: -60px;
			width: 100px;
			height: 100px;
		}
		.square:nth-child(2) {
			top: 200px;
			left: -100px;
			width: 120px;
			height: 120px;
			z-index: 2;
		}
		.square:nth-child(3) {
			bottom: 50px;
			right: -60px;
			width: 80px;
			height: 80px;
			z-index: 2;
		}
		.square:nth-child(4) {
			bottom: -80px;
			left: 100px;
			width: 50px;
			height: 50px;
			z-index: 2;
		}
		.square:nth-child(5) {
			top: -80px;
			left: 140px;
			width: 60px;
			height: 60px;
			z-index: 2;
		}
		.container {
			position: relative;

			width: 400px;
			min-height: 400px;
			background-color: rgba(255, 255, 255, 0.1);
			border-radius: 10px;
			display: flex;
			justify-content: center;
			align-items: center;
			backdrop-filter: blur(5px);
			box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
			border: 1px solid rgba(255, 255, 255, 0.5);
			border-right: 1px solid rgba(255, 255, 255, 0.2);
			border-bottom: 1px solid rgba(255, 255, 255, 0.2);
			h2 {
				color: #fff;
				font-size: 24px;
				font-weight: 600;
				letter-spacing: 2px;
				position: relative;
				margin-bottom: 50px;
			}
			h2::before {
				content: "";
				position: absolute;
				left: 0;
				bottom: -10px;
				width: 80px;
				height: 4px;
				background-color: #fff;
			}
			.inputBox {
				width: 300px;
				margin-top: 20px;
				input {
					width: 100%;
					background: rgba(255, 255, 255, 0.2);
					border: none;
					outline: none;
					padding: 10px 20px;
					border-radius: 35px;
					border: 1px solid rgba(255, 255, 255, 0.5);
					border-right: 1px solid rgba(255, 255, 255, 0.2);
					border-bottom: 1px solid rgba(255, 255, 255, 0.2);
					-webkit-text-fill-color: #fff;
					font-size: 16px;
					letter-spacing: 1px;
					caret-color: #fff;
					box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
				}
				input[type="submit"] {
					margin-bottom: 20px;
					font-weight: 600;
					letter-spacing: 2px;
				}
				input[type="submit"]:hover {
					cursor: pointer;
				}
			}
			.forget {
				margin-top: 10px;
				color: #fff;
				a {
					color: #fff;
					font-weight: 600;
				}
			}
			.registry {
				margin-top: 15px;
				color: #fff;
				a {
					color: #fff;
					font-weight: 600;
				}
			}
		}
	}
}
</style>
