<script>
    import chat from '$lib/chat.jpg'
</script>


<style>

.tech-title {
    margin-top: 20px;
    font-size: 1.5em;
    border-radius: 15px;
    padding: 5px 10px;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    text-align: center; /* Center the text */
    margin: 0 auto; /* Center horizontally */
    width: fit-content; /* Adjust width based on content */
    position: relative; /* Allow positioning */
    z-index: -1; /* Ensure it's above other elements */
    margin-bottom: 20px; /* Add some space below the title */
  }


img {
  height: 50%;
  width: 50%;
}
  
  .project-section {
  display: flex;
  justify-content: left;
  align-items: center;
}

.project-info {
  display: flex;
  margin-bottom: 20px;
}

.description {
  margin-left: 20px;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  margin-right: 10px;
}

/* Style the buttons when hovered */
.btn:hover {
  background-color: #0056b3;
}

p {
  font-weight: bold;
  font-size: 1.3em;
}

@media screen and (max-width: 700px) {
    .project-info {
      flex-direction: column;
      align-items: flex-start;
    }

    .description {
      margin-left: 0;
      margin-top: 10px;
    }

    img {
      width: 100%; /* Set width to 100% on mobile */
    }
  }

  </style>


<h2 class = 'tech-title'>Projects</h2>
<div class="project-section">
  <div class="project-info">
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img src={chat} alt="Project Image">
    <div class="description">
      <!-- Description of the project goes here -->
      <p>This is a live chat room made using pocketbase for the backend and svelte for the frontend. It supports images, gifs, text, and video. 
      With it being very easy to extend the allowed file formats.</p>
      <p> </p>
      <p> Why I built it: Currently for communication my friend group mainly uses discord. 
      Inside of discord for free users there is a pretty small data cap for what can be uploaded in server chats. So for the purpose
      of not having to use dropbox or google drive I started making this chat to share larger video files. Since I control the database I can increase or
      decrease the maximum file size we can share. In future I plan on extending this with pdf and zip support so we can share those are well.</p>
      <p> </p>
      <p> Why did I choose pocketbase and Svelte: Pocketbase was chosen since it's database is incredible easy to understand and use for small projects. 
        And using pockethost deployment is easy and cheap. In the past when developing frontend I've only ever used the React framework.
        After hearing many good things about svelte I decided to use it for this project. After developing with it I can say with confidence I'll be using it
        for more of my personal projects moving forward.
      </p>
      <!-- Buttons for live demo, github, blog -->
      <a href="https://github.com/aidanjinn/OnlineChat" class="btn" target="_blank">GitHub</a>
      <a href="/blog/1" class="btn" target="_blank">Blog</a>
      <a href="https://online-chat-indol.vercel.app/" class="btn" target="_blank">Live Version</a>
    </div>
  </div>
</div>