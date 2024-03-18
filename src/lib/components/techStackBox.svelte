<script>
    // Import the icons you want to use
    import github from '$lib/github.png'
    import git from '$lib/Git.png'
    import C from '$lib/C++.png'
    import Javascript from '$lib/JavaScript.png'
    import HTML from '$lib/HTML5.png'
    import CSS from '$lib/CSS3.png'
    import React from '$lib/React.png'
    import Svelte from '$lib/Svelte.png'
</script>

<style>
    .outer-container {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        padding: 20px;
        background-color: #e0e0e0;
        max-width: 100%;
        position: relative;
        max-width: 700px;
        margin: 0 auto; /* Center the container horizontally */
    }

    .tech-stack-icons {
        display: flex;
        justify-content: center;
        flex-wrap: wrap; /* Allow icons to wrap on smaller screens */
    }

    .icon-container {
        display: flex;
        flex-direction: column;
        justify-content: center; /* Center items vertically */
        align-items: center;
        padding: 10px;
        border-radius: 10px;
        transition: background-color 0.3s ease;
    }

    .icon-container:hover {
        background-color: #f0f0f0;
    }

    .tech-icon {
        width: 50px;
        height: 50px;
        cursor: pointer;
        transition: filter 0.3s ease;
    }

    .tech-icon:hover {
        filter: brightness(1.2);
    }

    .tech-title {
        font-size: 1.5em;
        position: absolute;
        top: -55px;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 15px;
        padding: 5px 10px;
        background-color: #fff;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }

    .icon-name {
        text-align: center;
        font-size: 0.8em;
        font-weight: bold;
        width: 100%; 
    }

    /* Media Query for Mobile Devices */
    @media only screen and (max-width: 600px) {
        .outer-container {
            padding: 10px; /* Adjust padding for smaller screens */
        }

        .icon-container {
            padding: 5px; /* Adjust padding for smaller screens */
        }

        .tech-icon {
            width: 40px; /* Adjust icon size for smaller screens */
            height: 40px;
        }

        .tech-title {
            font-size: 1.2em; /* Adjust title font size for smaller screens */
            top: -45px; /* Adjust title position for smaller screens */
        }

        .icon-name {
            font-size: 0.7em; /* Adjust icon name font size for smaller screens */
        }
    }
</style>



<div class="outer-container">
    <h2 class="tech-title">Tooling</h2>
    <div class="tech-stack-icons">
        <div class="icon-container">
            <a href="https://github.com" target="_blank">
                <img src={github} alt="GitHub Icon" class="tech-icon" title="GitHub">
            </a>
            <div class="icon-name">Git</div>
        </div>
        <div class="icon-container">
            <a href="https://git-scm.com/" target="_blank">
                <img src={git} alt="Git Icon" class="tech-icon" title="Git">
            </a>
            <div class="icon-name">GitHub</div>
        </div>
        <div class="icon-container">
            <a href="https://isocpp.org/" target="_blank">
                <img src={C} alt="C++ Icon" class="tech-icon" title="C++">
            </a>
            <div class="icon-name">C++</div>
        </div>
        <div class="icon-container">
            <a href="https://www.javascript.com/" target="_blank">
                <img src={Javascript} alt="Javascript Icon" class="tech-icon" title="Javascript">
            </a>
            <div class="icon-name">Javascript</div>
        </div>
        <div class="icon-container">
            <a href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank">
                <img src={CSS} alt="CSS3" class="tech-icon" title="CSS3">
            </a>
            <div class="icon-name">CSS3</div>
        </div>
        <div class="icon-container">
            <a href="https://html.spec.whatwg.org/multipage" target="_blank">
                <img src={HTML} alt="HTML5" class="tech-icon" title="HTML5">
            </a>
            <div class="icon-name">HTML5</div>
        </div>
        <div class="icon-container">
            <a href="https://react.dev" target="_blank">
                <img src={React} alt="React" class="tech-icon" title="React">
            </a>
            <div class="icon-name">React</div>
        </div>
        <div class="icon-container">
            <a href="https://svelte.dev/" target="_blank">
                <img src={Svelte} alt="Svlete" class="tech-icon" title="Svelte">
            </a>
            <div class="icon-name">Svelte</div>
        </div>
    </div>
</div>


