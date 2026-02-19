"use client";

function ItemElement({ title, info, icon, link }) {
    // this was made by gust (see README)

    return (
        <div className="witem">
            <div className="wleft-panel">
                <div className="woverlay"></div>
                <img className="wicon" src={icon} />
                <div className="wcontent">
                    <span className="wtitle">
                        {title}
                    </span>
                    <span className="winfo">
                        {info}
                    </span>
                </div>
            </div>
            <div className="wright-panel">
                <div className="woverlay"></div>
                <a className="wbutton" href={link}>
                    <div className="woverlay"></div>
                    <span>Go</span>
                </a>
            </div>
        </div>
    );
};

export default function Page() {

    return (
        <div className="windy-container">
            <ItemElement 
                title="aaaaaaaaaaaaaaaaaaaaaaaa"
                info="bwaa"
                icon="https://mintcolon3.github.io/mintcolon3/eepy4.png"
                link="https://mintcolon3.github.io/mintcolon3/eepy"
            />
            <ItemElement 
                title="kirbo"
                info="kirbo"
                icon="https://cdn.discordapp.com/avatars/857823191060578315/297694a756ae1e082d5bdc40149a6960.png"
                link="https://mintcolon3.github.io/mintcolon3/kirbo"
            />
        </div>
    );
};