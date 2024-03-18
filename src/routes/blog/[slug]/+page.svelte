<!-- src/routes/[slug]/+page.svelte -->
<script>
	export let data;
</script>

<style>
	article {
		text-align: center;
		font-size: 2vw; /* Using vw unit for font size */
	}

	h1 {
		color: rgb(33, 35, 37);
		font-size: 4vw; /* Using vw unit for font size */
		margin-bottom: 1.5rem;
		margin-top: 40px;
	}

	p {
		color: #6c757d;
		margin-top: 0.5rem;
		font-size: 2vw; /* Using vw unit for font size */
	}

	/* Media query for smaller screens */
	@media screen and (max-width: 768px) {
		h1 {
			font-size: 6vw; /* Adjusted font size for smaller screens */
		}

		p {
			font-size: 3.5vw; /* Adjusted font size for smaller screens */
		}

		article {
			text-align: center;
			font-size: 3.5vw; /* Adjusted font size for smaller screens */
	}
	}
</style>

<article>
	<h1>{data.title}</h1>
	<p>Published: {data.date}</p>
	<svelte:component this={data.content} />
</article>
