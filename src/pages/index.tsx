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
        <title>IT Staff Augmentation Services in Dammam and Riyadh | Fill Your Skill Gaps Fast</title>
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
        <meta title="title" content="IT Staff Augmentation Services Riyadh | Fill Your Skill Gaps Fast" />
        <meta name="description" content="Get the right talent at the right price. Find DataSack's IT Staff Augmentation Services in Dammam and Riyadh. Resolve skill shortages for project excellence." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="IT Staff Augmentation Services in Dammam and Riyadh | Fill Your Skill Gaps Fast" />
        <meta property="og:description" content="Get the right talent at the right price. Find DataSack's IT Staff Augmentation Services in Dammam and Riyadh. Resolve skill shortages for project excellence." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="IT Staff Augmentation Services in Dammam and Riyadh | Fill Your Skill Gaps Fast" />
        <meta property="og:locale" content="en_US" />
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
              <img className="background-img" src="/background_vector.webp" alt="It staff augmentation services riyadh" />
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
                  description="Augment your software team with IT professionals via IT Team Augmentation Services in Dammam and Riyadh."
                >
                  <AnalyticsSlider />
                </EuiCard>
              </div>
            </div>

            <div id="benefit_mobile_view">
              <div className="benefit-left-section benefit-left-section-mobile">
                <h2 style={{ fontSize: '25px', paddingTop: '10px' }}>Benefits of <span style={{ color: 'orange' }}>IT Resource Augmentation </span>Services in Dammam and Riyadh</h2>
                <p style={{ fontSize: '15px' }}>IT Staff Augmentation Services in Dammam and Riyadh provided by Datasack Solutions are advantageous as they offer the following benefits.</p>
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
                <p style={{ fontSize: '15px' }}>DataSack assembles your dream team on-demand, providing expertise without the hassle of full-time hiring. Contract resources as needed for specific projects or skills.</p>
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