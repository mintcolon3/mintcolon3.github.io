"use client";
import { useEffect, useState } from "react";

function DesktopSocials() {
  return (
    <main className="content" style={{ flex: 1 }}>
      <div className="quick-icon">
        <ul>
          <li className="link" onClick={() => open("https://discord.com/users/1170381506460536905")}>
            <div className="tag"><p>Discord</p></div>
            <div className="icon"><img src="https://cdn.discordapp.com/avatars/1170381506460536905/578c83073187fb36c51ea112d25f6395.png?size=96" /></div>
          </li>

          <li className="link" onClick={() => open("https://github.com/mintcolon3")}>
            <div className="tag"><p>GitHub</p></div>
            <div className="icon"><img src="https://avatars.githubusercontent.com/u/143480965?v=4" /></div>
          </li>

          <li className="link" onClick={() => open("https://steamcommunity.com/profiles/76561199508753784/")}>
            <div className="tag"><p>Steam</p></div>
            <div className="icon"><img src="https://avatars.fastly.steamstatic.com/4cf7a917f6343dba3b0c22139874be80634a3269_full.jpg" /></div>
          </li>

          <li className="link" onClick={() => open("https://www.youtube.com/@mintcolon3")}>
            <div className="tag"><p>YouTube</p></div>
            <div className="icon"><img src="https://yt3.googleusercontent.com/kIaDw9Q_lR2oj1V1lOfARVC085r17aBNhPZ1QAn7l7eUicWMV6q5txybfhFDogWB1SgwR07a=s88-c-k-c0x00ffffff-no-rj" /></div>
          </li>

          <li className="link" onClick={() => open("https://osu.ppy.sh/users/36113593")}>
            <div className="tag"><p>Osu!</p></div>
            <div className="icon"><img src="https://a.ppy.sh/36113593?1722238117.png" /></div>
          </li>

          <li className="link" onClick={() => open("https://act.hoyolab.com/app/zzz-game-record/index.html?user_id=467951324#/zzz")}>
            <div className="tag"><p>ZZZ</p></div>
            <div className="icon"><img src="https://upload-os-bbs.hoyolab.com/upload/2025/09/04/d6e0d777f38210ff3c920f4d8a0410a9_4713922902474270548.png" /></div>
          </li>

          <li className="link" onClick={() => open("https://trackmania.io/#/player/eb6b1d45-a760-4c90-b883-9b7c5047fec8")}>
            <div className="tag"><p>Trackmania</p></div>
            <div className="icon"><img src="https://avatars.ubisoft.com/42a518d9-254d-4ce9-b59d-7b1e9b0ffc56/default_146_146.png?appId=aa88e512-9395-457d-bcb9-8d59c23f88c9&tm=1762181303777" /></div>
          </li>
        </ul>
      </div>
    </main>
  );
}

function MobileSocials() {
  return (
    <main className="content" style={{ flex: 1 }}>
      <div className="mobile-quick-icon">
        <ul>
          <li className="link" onClick={() => open("https://discord.com/users/1170381506460536905")}>
            <img src="https://cdn.discordapp.com/avatars/1170381506460536905/578c83073187fb36c51ea112d25f6395.png?size=96" />
            <p>Discord</p>
          </li>

          <li className="link" onClick={() => open("https://github.com/mintcolon3")}>
            <img src="https://avatars.githubusercontent.com/u/143480965?v=4" />
            <p>GitHub</p>
          </li>

          <li className="link" onClick={() => open("https://steamcommunity.com/profiles/76561199508753784/")}>
            <img src="https://avatars.fastly.steamstatic.com/4cf7a917f6343dba3b0c22139874be80634a3269_full.jpg" />
            <p>Steam</p>
          </li>

          <li className="link" onClick={() => open("https://www.youtube.com/@mintcolon3")}>
            <img src="https://yt3.googleusercontent.com/kIaDw9Q_lR2oj1V1lOfARVC085r17aBNhPZ1QAn7l7eUicWMV6q5txybfhFDogWB1SgwR07a=s88-c-k-c0x00ffffff-no-rj" />
            <p>YouTube</p>
          </li>

          <li className="link" onClick={() => open("https://osu.ppy.sh/users/36113593")}>
            <img src="https://a.ppy.sh/36113593?1722238117.png" />
            <p>Osu!</p>
          </li>

          <li className="link" onClick={() => open("https://act.hoyolab.com/app/zzz-game-record/index.html?user_id=467951324#/zzz")}>
            <img src="https://upload-os-bbs.hoyolab.com/upload/2025/09/04/d6e0d777f38210ff3c920f4d8a0410a9_4713922902474270548.png" />
            <p>ZZZ</p>
          </li>

          <li className="link" onClick={() => open("https://trackmania.io/#/player/eb6b1d45-a760-4c90-b883-9b7c5047fec8")}>
            <img src="https://avatars.ubisoft.com/42a518d9-254d-4ce9-b59d-7b1e9b0ffc56/default_146_146.png?appId=aa88e512-9395-457d-bcb9-8d59c23f88c9&tm=1762181303777" />
            <p>Trackmania</p>
          </li>
        </ul>
      </div>
    </main>
  );
}

function GetSocials() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    function update() {
      if (typeof window !== "undefined") {
        setIsDesktop(window.innerWidth > 1000);
      }
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return isDesktop ? <DesktopSocials /> : <MobileSocials />;
}

function Profile() {
  return (
    <ul className="profile">
      <li><img src="./minty4.png" /></li>
      <li>
        <p className="username">MintColon3</p>
        <p>Mint • She/Her • 🏳️‍⚧️🇬🇧</p>
        <ul>
          <li>silly lesiab catgirl</li>
          <li>always eepy :3</li>
          <li>queen of bwaa</li>
        </ul>
      </li>
    </ul>
  )
}

function FriendLinks() {
  return (
    <ul className="f_links">
      <li><a href="/#"><img src="./88x31.gif" /></a></li>
      <li><a href="https://aliceweidel.gay" target="_blank"><img src="./88x31/loudy.gif" /></a></li>
      <li><a href="https://lina.sh/" target="_blank"><img src="./88x31/lina.gif" /></a></li>
      <li><a href="https://guhw.dev/" target="_blank"><img src="./88x31/windy.gif" /></a></li>
      <li><a href="https://osagearchive.com/" target="_blank"><img src="./88x31/OsageArchive.gif" /></a></li>
    </ul>
  )
}

export default function Page() {

  return (
    <div>
      <GetSocials />

      <main className="content" style={{ flex: 1, marginTop: "10px"}}>
        <Profile />
        <hr />
        <FriendLinks />
      </main>
    </div>
  );
}
