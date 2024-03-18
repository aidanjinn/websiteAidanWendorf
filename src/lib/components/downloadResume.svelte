<script>
    import DownloadResume from '$lib/Resume.pdf'
</script>

<style>
    .outer-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        padding: 20px;
        background-color: #e0e0e0;
        height: 20px; /* You might want to adjust the height */
        max-width: 100%; /* Change the max-width to 100% */
        position: relative;
        margin-top: 20px;
        margin-left: auto;
        margin-right: auto;
        max-width: 100px;
    }

    .button-container {
        display: flex;
    }

    .download-button {
        padding: 10px 20px;
        border: none;
        border-radius: 10px;
        background-color: #1d1f20;
        color: #fff;
        font-size: 1em;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .download-button:hover {
        background-color: #0056b3;
    }

    /* Media Query for Mobile Devices */
    @media only screen and (max-width: 600px) {
        .outer-container {
            padding: 10px; /* Adjust padding for smaller screens */
        }

        .download-button {
            padding: 8px 16px; /* Adjust button padding for smaller screens */
            font-size: 0.8em; /* Adjust button font size for smaller screens */
        }
    }
</style>

<div class="outer-container">
    <div class="button-container">
        <a href={DownloadResume} download>
            <button class="download-button">Resume</button>
        </a>
    </div>
</div>
