<!--<script>-->
<!--	import { siteTitle } from '$lib/config';-->

<!--	export let data;-->
<!--</script>-->

<!--<svelte:head>-->
<!--	<title>{siteTitle}</title>-->
<!--</svelte:head>-->

<!--&lt;!&ndash; This is the README.md file in the root of the repo. It serves double duty as the homepage's content. If you'd rather use your own HTML and/or Svelte, you can delete/modify everything in this file. &ndash;&gt;-->
<!--<svelte:component this={data.ReadMe} />-->



<script context="module">
	export const load = async () => {
		const ReadMeFile = await import('../../README.md');
		const ReadMe = ReadMeFile.default;

		return {
			props: {
				ReadMe
			}
		}
	}
</script>

<script>
	export let ReadMe
	export let formLocation = ""
</script>


<svelte:head>
	<title>Studio LG1</title>
</svelte:head>
<img src='/images/studiolg1.jpg'/>

<!--<div>-->
<!--	<svelte:component this={ReadMe} />-->
<!--</div>-->
<!-- This is the README.md file in the root of the repo. It serves double duty as the homepage's content. If you'd rather use your own HTML and/or Svelte, you can delete/modify everything above this line. -->
<h1>Studio LG1</h1>
<p>A bespoke communication studio based in the heart of Edinburgh</p>
<p>Audio. Visual. Digital.</p>


<form name={formLocation}
	  method="POST" netlify-honeypot="bot-field" data-netlify="true">
	<input type="hidden" name="form-name" value={formLocation} />

	<div id="name-section">
		<label for="name">Name</label>
		<input name="name" id="name" required placeholder="Name" type="text" />
	</div>

	<div id='email-section'>
		<label for="email">Email</label>
		<input name="email" id="email" required placeholder="Email" type="email" />
	</div>

	<div>
		<label for="message">Message</label>
		<textarea name="message" id="message" required placeholder="Message" type="text" ></textarea>
	</div>

	<div>
		<input type="submit" class="btn btn-primary" value="Send" />
	</div>
</form>

<style lang="scss">

	.cta {
		margin: var(--xl2) 0 var(--xl) 0;
		font-size: var(--xl);
		font-weight: 400;
		font-family: var(--font-sans);
	}

	form {
		margin: 0 auto;
	}


	div { margin: 0 0 var(--xl); }

	input, #message {
		border: 1px solid #945CFF;
		padding: 0.5rem;
		border-radius: var(--xs7);
		display: block;
		width: 100%;
		font-size: var(--lg);
		font-family: var(--font-serif);
	}

	label { margin: 0 0 var(--xs5) var(--xs5) }

	#message { min-height: calc(var(--lg)*9); }

	input.btn.btn-primary {
		margin-bottom: 2rem;
		font-family: var(--font-sans);
		background-color: #945CFF;
		float: right;
		&:hover {
			background-color: #ea1217;
		}
	}



	img {
		width:100%;
	}

	div, form {
		margin: 100px;
	}

	textarea {
		width: 430px;
		height:160px;
	}

	input {
		background: white;
	}

	button {
		background: white;
		color: black;
	}

	label {
		display: inline-block;
	}

	textarea {
		display: block;
		font-size: inherit;
	}

</style>