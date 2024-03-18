<!-- src/routes/blog/+page.svelte -->
<script>
	export let data;
</script>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	h1 {
		color: rgb(33, 35, 37);
		font-size: 3vw; 
		margin-bottom: auto;
	}

	ul {
		list-style: none;
		padding: 0;
	}

	li {
		margin-bottom: 2rem;
	}

	li:hover {
		background-color: #f8f9fa; /* Background color for the hover effect */
		border-radius: 8px;
		transition: background-color 0.3s ease;
	}

	h2 {
		font-size: 2vw; 
		margin-bottom: 0.5rem;
	}

	a {
		color: #343a40;
		text-decoration: none;
		transition: color 0.3s ease;
	}

	a:hover {
		color: #d5d6d8;
	}

	p {
		font-size: 1vw; 
		color: #6c757d;
		margin-top: 0.5rem;
	}

	/* Optional: Add a hover effect to the list items */
	li:hover {
		background-color: #f8f9fa;
		border-radius: 8px;
		transition: background-color 0.3s ease;
	}

	/* Media Query for adjusting font size based on screen width */
	@media screen and (max-width: 768px) {
		h1 {
			font-size: 2rem;
		}
		h2 {
			font-size: 1.5rem;
		}
		p {
			font-size: 0.8rem;
		}
	}
</style>

<div class="container">
	<h1>Blog</h1>

	<ul>
		{#each data.posts as post}
			<li>
				<h2>
					<a href={post.path}>
						{post.meta.title}
					</a>
				</h2>
				<p>Published {post.meta.date}</p>
			</li>
		{/each}
	</ul>
</div>
