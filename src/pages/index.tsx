import AnalyticsSlider from "@/components/Analytics_Slider";
import AnalyticsWeb from "@/components/Analytics_Web";
import Benefits from "@/components/Benefits";
import BenefitsSlider from "@/components/Benefits_Slider";
import FabButtonCallus from "@/components/FabButtonCallus";
import FabButtonHome from "@/components/FabButtonHome";
import FabButton from "@/components/FabButtonWhatsapp";
import Footer from "@/components/Footer";
import HeaderComponent from "@/components/Header";
import ManagedServices from "@/components/ManagedServices";
import PricingPage from "@/components/Pricing";
import { useToastContext } from "@/components/toastContext";
import { EuiCard, EuiGlobalToastList, EuiPage, EuiPageBody, EuiSpacer } from "@elastic/eui";
import Head from "next/head";
import { Fragment, FunctionComponent } from "react";

const Home: FunctionComponent = () => {
  const { toasts, setToasts } = useToastContext()

  return (
    <Fragment>
      <Head>
        <title>Best Recruitment Agency in Riyadh for IT Staffing Solutions</title>
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
        <meta title="title" content="Best Recruitment Agency in Riyadh for IT Staffing Solutions" />
        <meta name="description" content="We are one of the top recruitment agencies in Saudi Arabia Riyadh for expert IT staff augmentation services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Best Recruitment Agency in Riyadh for IT Staffing Solutions" />
        <meta property="og:description" content="We are one of the top recruitment agencies in Saudi Arabia Riyadh for expert IT staff augmentation services." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Best Recruitment Agency in Riyadh for IT Staffing Solutions" />
        <meta property="og:url" content="https://itstaffaugmentation.datasack.in/" />
        <meta property="og:image" content="https://itstaffaugmentation.datasack.in/Icons/card_logo.webp" />
        <meta property="og:image:width" content="1000" />
        <meta property="og:image:height" content="1000" />
        <meta property="og:locale" content="en_US" />
        <meta property="twitter:title" content="Best Recruitment Agency in Riyadh for IT Staffing Solutions" />
        <meta property="twitter:description" content="We are one of the top recruitment agencies in Saudi Arabia Riyadh for expert IT staff augmentation services." />
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:image" content="https://itstaffaugmentation.datasack.in/Icons/card_logo.webp"/>
        <meta property="twitter:image:alt" content="We are one of the top recruitment agencies in Saudi Arabia Riyadh for expert IT staff augmentation services."/>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/Images/strategic_hiring_efficiency.webp" as="image" type="image/webp" />
        <link rel="preload" href="/Images/flexible_workforce.webp" as="image" type="image/webp" />
        <link rel="preload" href="/Images/precision_staffing.webp" as="image" type="image/webp" />
        <link rel="preload" href="/Images/rapid_expansion.webp" as="image" type="image/webp" />
        <link rel="preload" href="/Images/core_focus.webp" as="image" type="image/webp" />
        <link rel="preload" href="/Images/onsite_efficiency.webp" as="image" type="image/webp" />
        <link rel="preload" href="/Images/smooth_visa_logistics.webp" as="image" type="image/webp" />
        <link rel="preload" href="/Images/resource_deployment.webp" as="image" type="image/webp" />
        <link rel="preload" href="/Images/background.webp" as="image" type="image/webp" />
      </Head>
      <EuiPage >
        <EuiPageBody>
          <HeaderComponent />
          <div>
            <FabButton />
          </div>
          <div>
            <FabButtonHome />
          </div>
          <div>
            <FabButtonCallus />
          </div>

          <div>
            <div className="image-container">
              <img className="background-img" src="Images/background.webp" alt="Top recruitment agency in Riyadh specializing in IT staffing" />
              <div className="image-overlay"></div>
            </div>
            <div className="title-wrap">
              <p className="subtitle">Need Tech Talent Quickly?</p>
              <h1 className="title">Cost-effective IT Staffing Agency <span style={{color:'orange'}}>Riyadh</span></h1>
            </div>
            <EuiGlobalToastList
              side="right"
              toasts={toasts}
              dismissToast={() => setToasts([])}
              toastLifeTimeMs={1000000}
            />
          </div>

          <div id="analytics-section" className="analytics-section">
          <AnalyticsWeb/>
            <div id="mobile_view_analytics">
              <div style={{ paddingBottom: '50px' }}>
                <EuiCard hasBorder={true}
                  title=''
                  description="Augment your software team with IT professionals from the IT outsourcing company Riyadh."
                >
                  <AnalyticsSlider />
                </EuiCard>
              </div>
            </div>

            <div id="benefit_mobile_view">
              <div className="benefit-left-section benefit-left-section-mobile">
                <h2 style={{ fontSize: '25px', paddingTop: '10px' }}>Benefits of <span style={{ color: 'orange' }}>Choosing Us - </span>Advanced Recruitment Agency in Riyadh</h2>
                <p style={{ fontSize: '15px' }}>IT Staff Augmentation Services Riyadh provided by Datasack Solutions are advantageous as they offer the following benefits.</p>
              </div>
              <BenefitsSlider />
            </div>

            <div id="benefit_window_view">
              <Benefits />
            </div>

            <EuiSpacer size="l" />
            <div id="benefit_mobile_view">
              <div className="benefit-left-section benefit-left-section-mobile">
                <h2 style={{ fontSize: '25px', paddingTop: '10px' }}>Managed <span style={{ color: 'orange' }}>Services </span></h2>
                <p style={{ fontSize: '15px' }}>DataSack assembles your dream team on demand, providing expertise without the hassle of full-time hiring. Whether you&apos;re looking for a Recruitment Agency in Riyadh or need to contract resources for specific projects or skills, we ensure you get the right talent exactly when you need it.</p>
              </div>
            </div>
            <ManagedServices />

            <div id="window-pricing">
              <div id="benefit_mobile_view">
                <div className="benefit-left-section benefit-left-section-mobile">
                  <h2 style={{ fontSize: '25px', paddingTop: '10px' }}>Craft your own <span style={{ color: 'orange' }}>Pricing </span></h2>
                  <p style={{ fontSize: '15px' }}> Customize your plan with chosen technologies, with pricing calculated
                    <b> monthly</b> to fit your needs.</p>
                </div>
              </div>
              <PricingPage />
            </div>
            <div>
              <EuiSpacer />
            </div>
          </div>

          <Footer />
          <div id="footer-div"></div>
        </EuiPageBody>
      </EuiPage>
    </Fragment>
  );
}

export default Home