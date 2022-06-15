import React from "react";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <div className="Polaris-Page">
        <div className="Polaris-Page-Header Polaris-Page-Header--isSingleRow Polaris-Page-Header--noBreadcrumbs Polaris-Page-Header--mediumTitle">
          <div className="Polaris-Page-Header__Row">
            <div className="Polaris-Page-Header__TitleWrapper">
              <h1 className="Polaris-Header-Title">Getting Started</h1>
            </div>
          </div>
        </div>
        <div className="">
          <div className="Polaris-Layout">
            <div className="Polaris-Layout__Section">
              <div className="Polaris-Card">
                <div className="Polaris-Card__Header">
                  <h2 className="Polaris-Heading">Installation Instructions??</h2>
                </div>
                <div className="Polaris-Card__Section">
                  <div className="Polaris-TextContainer">
                    <p>Might need some instructions on how to enable the app block on the product page.</p>
                  </div>
                </div>
              </div>
              <div className="Polaris-Card">
                <div className="Polaris-Card__Header">
                  <h2 className="Polaris-Heading">Congratulations! You&apos;re all setup</h2>
                </div>
                <div className="Polaris-Card__Section">
                  <div className="Polaris-TextContainer">
                    <p>Your price history is being recorded. Feel free to reach out to us with any further questions</p>
                    <a
                      target="_blank"
                      className="Polaris-Button Polaris-Button--primary"
                      href="https://google.com"
                      rel="noopener noreferrer"
                      data-polaris-unstyled="true"
                    >
                      <span className="Polaris-Button__Content">
                        <span className="Polaris-Button__Text">Leave us a review</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="Polaris-Card">
                <div className="Polaris-Card__Header">
                  <h2 className="Polaris-Heading">For Theme Developers</h2>
                </div>
                <div className="Polaris-Card__Section">
                  <div className="Polaris-TextContainer">
                    <p>Looking to use a custom implementation to display the lowest price metafields?</p>
                    <p>
                      To access the lowest price in the last 30 days on a variant, you can use the following metafield:{" "}
                      <code className="Polaris-TextStyle--variationCode">variant.metafields.price_history.lowest_30_days_price</code>
                    </p>
                  </div>
                </div>
              </div>
              <div className="Polaris-Card">
                <div className="Polaris-Card__Header">
                  <h2 className="Polaris-Heading">Need help?</h2>
                </div>
                <div className="Polaris-Card__Section">
                  <div className="Polaris-TextContainer">
                    <p>If you need help, please reach out to us at</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Polaris-FooterHelp">
            <div className="Polaris-FooterHelp__Text">A collaboration between the teams at Made &amp; Bound + Gadget</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
