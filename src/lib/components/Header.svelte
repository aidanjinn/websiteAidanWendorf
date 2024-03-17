<!-- Header.svelte -->
<header>
    <div class="container">
        <a href="/" class="logo">Home</a>

        <nav>
            <ul>
                <li>
                    <a href="/blog">Blog</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="mailto:aidan.j.wendorf@gmail.com">Contact</a>
                </li>
            </ul>
        </nav>
    </div>
</header>

<style>
    header {
        padding: 1rem 0;
        background: linear-gradient(to right, #d4fc79, #96e6a1);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo {
        font-size: 1.5rem;
        font-weight: bold;
        color: #000;
        text-decoration: none;
    }

    nav ul {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
    }

    nav ul li {
        margin-right: 1rem;
    }

    nav ul li:last-child {
        margin-right: 0;
    }

    nav ul li a {
        color: #000;
        text-decoration: none;
        transition: color 0.3s ease;
    }

    nav ul li a:hover {
        color: #666;
    }
</style>
