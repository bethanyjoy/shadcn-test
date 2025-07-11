import React, { useEffect } from "react";

function getAppTheme() {
  try {
    const theme = localStorage.getItem("ui-theme") || "system";
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    return theme === "system" ? systemTheme : theme;
  } catch {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    return systemTheme;
  }
}

function setHtmlClass(targetHtml: HTMLElement, theme: string) {
  targetHtml.classList.remove("dark", "light");
  targetHtml.classList.add(theme);
}

export const ModeDecorator = (Story, context) => {
  useEffect(() => {
    const iframe = document.getElementById('storybook-preview-iframe') as HTMLIFrameElement | null;
    const sbBg = context.globals.backgrounds?.value;
    const theme = (sbBg === "dark" || sbBg === "light") ? sbBg : getAppTheme();

    if (iframe && iframe.contentDocument) {
      setHtmlClass(iframe.contentDocument.documentElement, theme);
    } else {
      setHtmlClass(document.documentElement, theme);
    }
  }, [context.globals.backgrounds?.value]);

  return <Story />;
}; 