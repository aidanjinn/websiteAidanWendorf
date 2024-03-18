<!-- Footer.svelte -->

<script>
    import github from '$lib/github.png'
    import linkedin from '$lib/linkedin.png'
    import instagram from '$lib/instagram.png'
</script>

<footer>
    <div class="container">
        <p>&copy; 2024 AidanWendorf</p>
        <nav>
            <ul>
                <li>
                    <a href="https://github.com/aidanjinn" target="_blank">
                        <img src={github} alt="GitHub" />
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com/aidan.j.wendorf/" target="_blank">
                        <img src={instagram} alt="Instagram" />
                    </a>
                </li>
                <li>
                    <a href="https://linkedin.com/in/aidanwendorf/" target="_blank">
                        <img src={linkedin} alt="LinkedIn" />
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</footer>

<style>
    footer {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 1rem 0;
        background: linear-gradient(to right, #d4fc79, #96e6a1);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .container {
        max-width: 90%; /* Adjusted max-width for better responsiveness */
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    p {
        margin: 0;
        font-size: 0.9rem;
        color: #000;
    }

    nav ul {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
    }

    nav ul li {
        margin-right: 0.5rem; /* Adjusted margin for better spacing */
    }

    nav ul li:last-child {
        margin-right: 0;
    }

    nav ul li a {
        color: #000;
        text-decoration: none;
        transition: color 0.3s ease;
        display: flex; /* Ensuring the icon and text are aligned properly */
        align-items: center;
    }

    nav ul li a:hover {
        color: #666;
    }

    img {
        width: 24px; /* Adjust icon size as needed */
        height: 24px;
        margin-right: 0.25rem; /* Added margin for better spacing between icon and text */
    }
</style>
