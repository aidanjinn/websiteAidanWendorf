<!-- src/routes/blog/+page.svelte -->
<script>
	export let data;
</script>

<style>
	h1 {
		color: rgb(33, 35, 37);
		font-size: 2.5rem;
		margin-bottom: 1.5rem;
	}

	ul {
		list-style: none;
		padding: 0;
	}

	li {
		margin-bottom: 2rem;
	}

	h2 {
		font-size: 1.8rem;
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
		color: #6c757d;
		margin-top: 0.5rem;
		font-size: 0.9rem;
	}

	/* Optional: Add a hover effect to the list items */
	li:hover {
		background-color: #f8f9fa;
		border-radius: 8px;
		transition: background-color 0.3s ease;
	}
</style>

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
