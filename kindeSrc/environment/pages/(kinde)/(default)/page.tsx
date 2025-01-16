"use server";

import {
  getKindeNonce,
  getKindeWidget,
  getLogoUrl,
  type KindePageEvent,
} from "@kinde/infrastructure";
import React from "react";
import { renderToString } from "react-dom/server.browser";
import Layout from "../../layout";

const styles: {
  container: React.CSSProperties;
  sidePanel: React.CSSProperties;
  loginForm: React.CSSProperties;
  heading: React.CSSProperties;
  description: React.CSSProperties;
  logo: React.CSSProperties;
  logoWrapper: React.CSSProperties;
} = {
  container: {
    display: "flex",
    height: "100vh",
  },
  sidePanel: {
    borderTopRightRadius: "5rem",
    backgroundColor: "#3E27B7",
    flex: 1,
    maxWidth: "900x",
  },
  loginForm: {
    flex: "1 0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontWeight: "600",
    fontSize: "2rem",
  },
  description: {
    marginBottom: "1.5rem",
  },
  logo: {
    backgroundColor: "#fff",
    borderRadius: "50%",
    padding: "9px",
  },
  logoWrapper: {
    position: "absolute",
    top: "12px",
    left: "12px",
  },
};

const DefaultPage: React.FC<KindePageEvent> = ({ context, request }) => {
  return (
    <Layout context={context} request={request}>
      <div style={styles.container}>
        <div style={styles.sidePanel}>
          <div style={styles.logoWrapper}>
            <a href="/">
              <img
                width={48}
                style={styles.logo}
                src={getLogoUrl()}
                alt="Company logo"
              />
            </a>
          </div>
        </div>
        <main style={styles.loginForm}>
          <div style={{ padding: "2rem" }}>
            <h2 style={styles.heading}>{context.widget.content.heading}</h2>
            <p style={styles.description}>
              {context.widget.content.description}
            </p>
            {getKindeWidget()}
          </div>
        </main>
      </div>
      <script
        nonce={getKindeNonce()}
        dangerouslySetInnerHTML={{
          __html: `
          const helperText = document.querySelector('[data-kinde-fallback-action-helper-text]');
          helperText.innerHTML = 'Not using Deputy?';

          const registerLink = document.querySelector('[data-kinde-fallback-action] > [data-kinde-text-link]');
          registerLink.innerHTML = 'Start your free trial';
        `,
        }}
      ></script>
    </Layout>
  );
};

// Page Component
export default async function Page(event: KindePageEvent): Promise<string> {
  const page = await DefaultPage(event);
  return renderToString(page);
}
