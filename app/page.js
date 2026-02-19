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

          <li className="link" onClick={() => open("https://mintcolon3.bsky.social")}>
            <div className="tag"><p>Bluesky</p></div>
            <div className="icon"><img src="https://cdn.bsky.app/img/avatar/plain/did:plc:teohkpsz2qwzk2dpvmnl5tyw/bafkreigkt5eenhnck2so2rq3lqlf6ls62esgdsgw2oxoy7luybwhlralq4" /></div>
          </li>

          <li className="link" onClick={() => open("https://matrix.to/#/@mintcolon3:matrix.org")}>
            <div className="tag"><p>Matrix</p></div>
            <div className="icon"><img src="./minty2.png" /></div>
          </li>

          <li className="link" onClick={() => open("https://steamcommunity.com/id/mintc3")}>
            <div className="tag"><p>Steam</p></div>
            <div className="icon"><img src="https://avatars.fastly.steamstatic.com/4cf7a917f6343dba3b0c22139874be80634a3269_full.jpg" /></div>
          </li>

          <li className="link" onClick={() => open("https://www.youtube.com/@mintcolon3")}>
            <div className="tag"><p>YouTube</p></div>
            <div className="icon"><img src="./minty.png" /></div>
          </li>

          <li className="link" onClick={() => open("/socials", "_self")}>
            <div className="tag"><p>All Socials</p></div>
            <div className="icon"><img src="./minty4.png" /></div>
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

          <li className="link" onClick={() => open("https://mintcolon3.bsky.social")}>
            <img src="https://cdn.bsky.app/img/avatar/plain/did:plc:teohkpsz2qwzk2dpvmnl5tyw/bafkreigkt5eenhnck2so2rq3lqlf6ls62esgdsgw2oxoy7luybwhlralq4" />
            <p>Bluesky</p>
          </li>

          <li className="link" onClick={() => open("https://matrix.to/#/@mintcolon3:matrix.org")}>
            <img src="./minty2.png" />
            <p>Matrix</p>
          </li>

          <li className="link" onClick={() => open("https://steamcommunity.com/id/mintc3")}>
            <img src="https://avatars.fastly.steamstatic.com/4cf7a917f6343dba3b0c22139874be80634a3269_full.jpg" />
            <p>Steam</p>
          </li>

          <li className="link" onClick={() => open("https://www.youtube.com/@mintcolon3")}>
            <img src="./minty.png" />
            <p>YouTube</p>
          </li>

          <li className="link" onClick={() => open("/socials", "_self")}>
            <img src="./minty4.png" />
            <p>All Socials</p>
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
