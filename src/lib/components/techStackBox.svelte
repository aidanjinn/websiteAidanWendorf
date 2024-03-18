<script>
    // Import the icons you want to use
    import github from '$lib/github.png'
    import git from '$lib/Git.png'
    import C from '$lib/C++.png'
    import Javascript from '$lib/JavaScript.png'
    import HTML from '$lib/HTML5.png'
    import CSS from '$lib/CSS3.png'
    import React from '$lib/React.png'
    import Vercel from '$lib/Vercel.png'
</script>

<style>
.outer-container {
    display: flex;
    justify-content: center;
    align-items: center; /* Center content vertically */
    border-radius: 20px;
    padding: 20px; /* Adjust padding as needed */
    background-color: #e0e0e0; /* Background color for the outer container */
    height: 40px; /* Set the height */
    max-width: 100%; /* Limit the maximum width */
      position: relative; /* Establish positioning context */
}

.tech-stack-icons {
    display: flex;
    justify-content: center;
    align-items: center; /* Center content vertically */
}


.tech-stack-icons {
    display: flex;
    justify-content: center;
}

.icon-container {
    display: inline-block;
    padding: 10px;
    border-radius: 10px;
    transition: background-color 0.3s ease; /* Smooth transition for highlight effect */
}

.icon-container:hover {
    background-color: #f0f0f0; /* Highlight color on hover */
}

.tech-icon {
    width: 50px; /* Set width and height for the icon */
    height: 50px;
    cursor: pointer; /* Change cursor to pointer on hover */
    transition: filter 0.3s ease; /* Smooth transition for brightness effect */
}

.tech-icon:hover {
    filter: brightness(1.2); /* Increase brightness on hover */
}

.tech-title {
    font-size: 1.5em; /* Adjust font size of the title */
    position: absolute; /* Position above the container */
    top: -55px; /* Adjust as needed to position above the container */
    left: 50%; /* Center horizontally */
    transform: translateX(-50%); /* Center horizontally */
    border-radius: 15px; /* Rounded border */
    padding: 5px 10px; /* Adjust padding as needed */
    background-color: #fff; /* Background color for the title */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Add shadow */
}

.icon-name {
    text-align: center; /* Center the icon name */
    font-size: 0.8em; /* Adjust font size of the name */
    font-weight: bold;
}
</style>


<div class="outer-container">
    <h2 class = "tech-title">Tooling</h2>
    <div class="tech-stack-icons">
        <div class="icon-container">
            <a href="https://github.com">
                <img src={github} alt="GitHub Icon" class="tech-icon" title="GitHub">
            </a>
            <div class="icon-name">Git</div>
        </div>
        <div class="icon-container">
            <a href="https://git-scm.com/">
                <img src={git} alt="Git Icon" class="tech-icon" title="Git">
            </a>
            <div class="icon-name">GitHub</div>
        </div>
        <div class="icon-container">
            <a href="https://isocpp.org/">
                <img src={C} alt="C++ Icon" class="tech-icon" title="C++">
            </a>
            <div class="icon-name">C++</div>
        </div>
        <div class="icon-container">
            <a href="https://www.javascript.com/">
                <img src={Javascript} alt="Javascript Icon" class="tech-icon" title="Javascript">
            </a>
            <div class="icon-name">Javascript</div>
        </div>
        <div class="icon-container">
            <a href="https://www.w3.org/Style/CSS/Overview.en.html">
                <img src={CSS} alt="CSS3" class="tech-icon" title="CSS3">
            </a>
            <div class="icon-name">CSS3</div>
        </div>
        <div class="icon-container">
            <a href="https://html.spec.whatwg.org/multipage">
                <img src={HTML} alt="HTML5" class="tech-icon" title="HTML5">
            </a>
            <div class="icon-name">HTML5</div>
        </div>
        <div class="icon-container">
            <a href="https://react.dev">
                <img src={React} alt="React" class="tech-icon" title="React">
            </a>
            <div class="icon-name">React</div>
        </div>
        <div class="icon-container">
            <a href="https://vercel.com/">
                <img src={Vercel} alt="Vercel" class="tech-icon" title="Vercel">
            </a>
            <div class="icon-name">Vercel</div>
        </div>
    </div>
</div>


