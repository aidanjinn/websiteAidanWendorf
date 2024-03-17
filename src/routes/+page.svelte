<script>
    import profile from '$lib/profile.jpg'
    import TechStackBox from '../lib/components/techStackBox.svelte';
</script>

    <div class="container">
        <div class="text">
            <div class = "hi-there-box">
                <h1 class = "intro-heading"><span class = "emoji">✌🏻</span> <span class = "intro-name">Hi There! I'm Aidan</span></h1>
            </div>
            <h2>A Software Engineer. Currently attending Vanderbilt University.</h2>
            <p>I have a passion for all things <span class = "bold-text">technology and design,</span> from <span class = "bold-text">software engineering to UI/UX.</span></p>
            <p></p>
            <p>In addition to my love of <span class = "bold-text">technology and design,</span> I am also always interested in learning in new <span class = "bold-text">languages 🤖coding or 🧑human.</span></p>
        </div>
        <div class="profile">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img class = "profile" src= {profile} alt="Profile Picture">
        </div>
    </div>
    <TechStackBox />
    

