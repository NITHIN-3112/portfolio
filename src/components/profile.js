import React from "react";
import image from "./image.jpg";
export default function Profile() {
  return (
    <div className="App">
      <nav class="navbar  bg-linear-gradient(45deg, #0cd2d1, #0857c0);">
        <div class="container-fluid">
          <a class="navbar-brand">
            <h1 className="portfolio">
              <span class="text-white">P</span>ort
              <span class="text-white">F</span>olio
            </h1>
          </a>
          <form class="d-flex">
            <ul class="nav justify-content-end">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="https://www.linkedin.com/in/nithin-khammampati-729a8a235/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="dark"
                    class="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://www.github.com/NITHIN-3112">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="dark"
                    class="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                  </svg>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://x.com/Nithiin_31">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="dark"
                    class="bi bi-twitter-x"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                  </svg>
                </a>
              </li>
            </ul>
          </form>
        </div>
      </nav>

      <div class="container">
        <div class="row">
          <div class="col-4">
            <div class="px-5 " className="profile-img">
              <div className="profile-img">
                <img
                  src={image}
                  class="img-thumbnail d-inline-block rounded-circle py-2 px-2"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div class="col-8">
            <div className="name" class="py-5 ">
              <div className="profile-content1">
                <h1 className="nithin">
                  I'm <span class="text-white">N</span>ithin {" "}
                  <span class="text-white">K</span>hammampati
                </h1>
                <h3>Frontend Developer 👋🏾 </h3>
              </div>
              <p class="py-5 px-5 " className="profile-content">
                A frontend developer focuses on building the visual and
                interactive aspects of websites and web applications. They work
                with core technologies like HTML, CSS, and JavaScript to create
                layouts, design elements, and user interfaces. Their tasks often
                include developing responsive websites, ensuring cross-browser
                compatibility, and implementing basic interactivity. 
              </p>
            </div>
          </div>
        </div>
        <div class="py-5 px-5">
          <h2 className="side-headings">Programming Languages</h2>
          <ul style={{ marginLeft: "2vw" }}>
            <li>Java</li>
            <li>JavaScript</li>
            <li>Python</li>
            <li>c</li>
            <li>c++</li>
          </ul>
          <h2 className="side-headings">Frontend</h2>
          <ul style={{ marginLeft: "2vw" }}>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
          <h2 className="side-headings">Database</h2>
          <ul style={{ marginLeft: "2vw" }}>
            <li>MYSQL</li>
          </ul>
        </div>
        <div class="py-2">
          <ul class="nav justify-content-center">
            <li class="nav-item py-3">
              <h3 className="side-headings">CODING PROFILES:</h3>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://www.hackerrank.com/profile/Nithin_31"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="46"
                  height="46"
                  fill="dark"
                  viewBox="0 0 512 512"
                >
                  <path d="M477.5 128C463 103.1 285.1 0 256.2 0S49.3 102.8 34.8 128s-14.5 230.8 0 256 192.4 128 221.3 128S463 409.1 477.5 384s14.5-231 0-256zM316.1 414.2c-4 0-40.9-35.8-38-38.7 .9-.9 6.3-1.5 17.6-1.8 0-26.2 .6-68.6 .9-86.3 0-2-.4-3.4-.4-5.9h-79.9c0 7.1-.5 36.2 1.4 72.9 .2 4.5-1.6 6-5.7 5.9-10.1 0-20.3-.1-30.4-.1-4.1 0-5.9-1.5-5.7-6.1 .9-33.4 3-84-.2-212.7v-3.2c-9.7-.4-16.4-1-17.3-1.8-2.9-2.9 34.5-38.7 38.5-38.7s41.2 35.8 38.3 38.7c-.9 .9-7.9 1.5-16.8 1.8v3.2c-2.4 25.8-2 79.6-2.6 105.4h80.3c0-4.6 .4-34.7-1.2-83.6-.1-3.4 1-5.2 4.2-5.2 11.1-.1 22.2-.1 33.2-.1 3.5 0 4.6 1.7 4.5 5.4C333 354.6 336 341.3 336 373.7c8.9 .4 16.8 1 17.7 1.8 2.9 2.9-33.6 38.7-37.6 38.7z" />
                </svg>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://leetcode.com/u/NITHIN-3112/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="46"
                  height="46"
                  fill="dark"
                  class="bi bi-file-code-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M6.646 5.646a.5.5 0 1 1 .708.708L5.707 8l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708zm2.708 0 2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 8 8.646 6.354a.5.5 0 1 1 .708-.708" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
