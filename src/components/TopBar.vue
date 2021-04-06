<template>
	<div class="topbar">
		<button class="burger">Menu</button>
		<router-link class="logo" to="/">NoteKeeper</router-link>
		<router-link to="/login">Login</router-link>
	</div>
</template>

<style scoped>
.topbar {
	height: 50px;
	background: rgb(16, 133, 88);
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 20px;
}

button {
	border: none;
	background: transparent;
	color: #ffffff;
	font-size: 18px;
	outline: none;
}
button:active, 
button:focus {
    outline: none;
}
.logo {
	color: #ffffff;
	font-weight: bold;
	font-size: 30px;
}

a {
	display: block;
	color: #ffffff;
	text-decoration: none;
	font-size: 18px;
}
a:hover, button:hover {
	transform: scale(1.1);
    cursor: pointer;
}
</style>

<script>
export default {};
</script>