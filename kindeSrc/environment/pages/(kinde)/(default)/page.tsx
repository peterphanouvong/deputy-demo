"use server";

import {
  getKindeWidget,
  getLogoUrl,
  type KindePageEvent,
} from "@kinde/infrastructure";
import React from "react";
// @ts-ignore
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
  },
  loginForm: {
    flex: "1 0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    maxWidth: "50%",
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
                width="48"
                style={styles.logo}
                src={getLogoUrl()}
                alt="Company logo"
              />
            </a>
          </div>
        </div>

        <main style={styles.loginForm}>
          <div>
            {request.authUrlParams.orgCode && (
              <img
                width="72"
                style={styles.logo}
                src={getLogoUrl(request.authUrlParams.orgCode)}
                alt="Organization logo"
              />
            )}
          </div>
          <div style={{ padding: "2rem" }}>
            <h2 style={styles.heading}>{context.widget.content.heading}</h2>
            <p style={styles.description}>
              {context.widget.content.description}
            </p>
            {getKindeWidget()}
          </div>
          <a
            href="/"
            style={{
              color: "#3E27B7",
              textDecoration: "none",
              fontSize: "14px",
              position: "absolute",
              bottom: "4.5rem",
            }}
          >
            Join an existing workplace
          </a>
          <div
            style={{
              fontSize: "14px",
              position: "absolute",
              bottom: "1rem",
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <p>Not using Deputy?</p>
            <a
              href=""
              style={{
                fontWeight: "600",
                color: "#3E27B7",
                backgroundColor: "rgba(235,233,248,0.6)",
                padding: "0.5rem 1rem",
                borderRadius: "10px",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              Start your free trial
            </a>
          </div>
        </main>
      </div>
    </Layout>
  );
};

// Page Component
export default async function Page(event: KindePageEvent): Promise<string> {
  const page = await DefaultPage(event);
  return renderToString(page);
}
