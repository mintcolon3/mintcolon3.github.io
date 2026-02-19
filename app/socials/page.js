"use client";

function SocialsElement({ name, image, link }) {
    const openLink = () => {
        window.open(link, '_blank'); // Opens the link in a new tab
    };

    return (
        <li className="socials-element">
            <img src={image} alt={name} />
            <p>{name}</p>
            <div className="socials-pane">
                <div className="socials-link" onClick={openLink}>Go</div>
            </div>
        </li>
    );
}

export default function Page() {

  return (
    <ul className="socials-page">
        <SocialsElement 
            name="Discord"
            image="https://cdn.discordapp.com/avatars/1170381506460536905/578c83073187fb36c51ea112d25f6395.png"
            link="https://discord.com/users/1170381506460536905"
        />
        <SocialsElement
            name="GitHub"
            image="https://avatars.githubusercontent.com/u/143480965?v=4"
            link="https://github.com/mintcolon3"
        />
        <SocialsElement
            name="Bluesky"
            image="https://cdn.bsky.app/img/avatar/plain/did:plc:teohkpsz2qwzk2dpvmnl5tyw/bafkreigkt5eenhnck2so2rq3lqlf6ls62esgdsgw2oxoy7luybwhlralq4"
            link="https://mintcolon3.bsky.social"
        />
        <SocialsElement
            name="Matrix"
            image="./minty2.png"
            link="https://matrix.to/#/@mintcolon3:matrix.org"
        />
        <SocialsElement
            name="Steam"
            image="https://avatars.fastly.steamstatic.com/4cf7a917f6343dba3b0c22139874be80634a3269_full.jpg"
            link="https://steamcommunity.com/id/mintc3/"
        />
        <SocialsElement
            name="RetroAchievements"
            image="https://media.retroachievements.org/UserPic/mintcolon3.png"
            link="https://retroachievements.org/user/mintcolon3"
        />
        <SocialsElement
            name="YouTube"
            image="./minty.png"
            link="https://www.youtube.com/@mintcolon3"
        />
        <SocialsElement
            name="Twitch"
            image="https://static-cdn.jtvnw.net/jtv_user_pictures/c9f20f68-d4cf-43ee-a7ef-f3ad4670542d-profile_image-70x70.png"
            link="https://www.twitch.tv/mintcolon3"
        />
        <SocialsElement
            name="last.fm"
            image="./minty.png"
            link="https://www.last.fm/user/mintcolon3"
        />
        <SocialsElement
            name="Osu!"
            image="https://a.ppy.sh/36113593?1722238117.png"
            link="https://osu.ppy.sh/users/36113593"
        />
        <SocialsElement
            name="Zenless Zone Zero"
            image="https://upload-os-bbs.hoyolab.com/upload/2025/09/04/d6e0d777f38210ff3c920f4d8a0410a9_4713922902474270548.png"
            link="https://act.hoyolab.com/app/zzz-game-record/index.html?user_id=467951324#/zzz"
        />
        <SocialsElement
            name="Trackmania.io"
            image="https://avatars.ubisoft.com/42a518d9-254d-4ce9-b59d-7b1e9b0ffc56/default_146_146.png"
            link="https://trackmania.io/#/player/eb6b1d45-a760-4c90-b883-9b7c5047fec8"
        />
    </ul>
  );
}
