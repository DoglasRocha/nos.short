import { useState, useEffect } from "react";
import { getLastLinkFromLocalStorage } from "../features/history";
import ClipboardSVG from "../assets/Clipboard.svg";
import CheckSVG from "../assets/Check.svg";
import "./styles.css";
import { Props } from "./defs";

export function ClipElement({ last, link }: Props) {
  const [buttonPressed, setButtonPressed] = useState(false);
  const [currentTime, setCurrentTime] = useState(Date.now());
  const calcRemainingTime = () => {
    return Math.floor((currentTime - link.date) / 1000);
  };

  useEffect(() => {
    if (buttonPressed) {
      setTimeout(() => {
        setButtonPressed(false);
      }, 2500);
    }
  }, [buttonPressed]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (calcRemainingTime() > link.ttl) return <></>;

  return (
    <>
      {!last && (
        <div>
          <p className="light-text">Link original: {link?.url}</p>
          <p className="light-text">
            Expira em: {link.ttl - calcRemainingTime()} segundos
          </p>
        </div>
      )}

      <div className="field">
        <p className="input-field">{link?.link_url}</p>
        <button
          className={"clip-button " + (buttonPressed ? "check" : "")}
          onClick={async () => {
            setButtonPressed(true);
            await navigator.clipboard.writeText(link.link_url);
          }}
        >
          {buttonPressed ? (
            <img src={CheckSVG} alt="Logo de cópia" />
          ) : (
            <img src={ClipboardSVG} alt="Logo de check" />
          )}
        </button>
      </div>
    </>
  );
}
