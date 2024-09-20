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
        <title>Best Recruitment Agency in Riyadh | Advanced Staffing Solutions</title>
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
        <meta title="title" content="Best Recruitment Agency in Riyadh | Advanced Staffing Solutions" />
        <meta name="description" content="Partner with us, one of the top Recruitment agencies in Saudi Arabia Riyadh, to scale your workforce and fill critical positions with expert hiring strategies." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Best Recruitment Agency in Riyadh | Advanced Staffing Solutions" />
        <meta property="og:description" content="Partner with us, one of the top Recruitment agencies in Saudi Arabia Riyadh, to scale your workforce and fill critical positions with expert hiring strategies." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Best Recruitment Agency in Riyadh | Advanced Staffing Solutions" />
        <meta property="og:url" content="https://itstaffaugmentation.datasack.in/" />
        <meta property="og:image" content="https://itstaffaugmentation.datasack.in/card_image.webp" />
        <meta property="og:image:width" content="1000" />
        <meta property="og:image:height" content="1000" />
        <meta property="og:locale" content="en_US" />
        <meta property="twitter:title" content="Best Recruitment Agency in Riyadh | Advanced Staffing Solutions" />
        <meta property="twitter:description" content="Partner with us, one of the top Recruitment agencies in Saudi Arabia Riyadh, to scale your workforce and fill critical positions with expert hiring strategies." />
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:image" content="https://itstaffaugmentation.datasack.in/card_image.webp"/>
        <meta property="twitter:image:alt" content="Partner with us, one of the top Recruitment agencies in Saudi Arabia Riyadh, to scale your workforce and fill critical positions with expert hiring strategies."/>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/benefits-webp-1000x684/DSS-Website-Elements_CV View.webp" as="image" type="image/webp" />
        <link rel="preload" href="/benefits-webp-1000x684/DSS-Website-Elements_Work force.webp" as="image" type="image/webp" />
        <link rel="preload" href="/benefits-webp-1000x684/DSS-Website-Elements_precision staffing.webp" as="image" type="image/webp" />
        <link rel="preload" href="/benefits-webp-1000x684/DSS-Website-Elements_Rapid Expansion.webp" as="image" type="image/webp" />
        <link rel="preload" href="/benefits-webp-1000x684/DSS-Website-Elements_Core Focus.webp" as="image" type="image/webp" />
        <link rel="preload" href="/benefits-webp-1000x684/DSS-Website-Elements_onsite.webp" as="image" type="image/webp" />
        <link rel="preload" href="/benefits-webp-1000x684/DSS-Website-Elements_Visa.webp" as="image" type="image/webp" />
        <link rel="preload" href="/benefits-webp-1000x684/DSS-Website-Elements_Resource Deployment.webp" as="image" type="image/webp" />
        <link rel="preload" href="/background_vector.webp" as="image" type="image/webp" />
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
              <img className="background-img" src="/background_vector.webp" alt="Top recruitment agency in Riyadh specializing in IT staffing" />
              <div className="image-overlay"></div>
            </div>
            <div className="title-wrap">
              <p className="subtitle">Need Tech Talent Quickly?</p>
              <h1 className="title">Cost-effective recruitment agency in <span style={{color:'orange'}}>Riyadh</span></h1>
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
                  description="Augment your software team with IT professionals via IT Team Augmentation Services Riyadh."
                >
                  <AnalyticsSlider />
                </EuiCard>
              </div>
            </div>

            <div id="benefit_mobile_view">
              <div className="benefit-left-section benefit-left-section-mobile">
                <h2 style={{ fontSize: '25px', paddingTop: '10px' }}>Benefits of <span style={{ color: 'orange' }}>IT Resource Augmentation </span>Services Riyadh</h2>
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
                <p style={{ fontSize: '15px' }}>DataSack assembles your dream team on-demand, providing expertise without the hassle of full-time hiring. Whether you&apos;re looking for IT outsourcing Riyadh or need to contract resources for specific projects or skills, we ensure you get the right talent exactly when you need it.</p>
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