import Image from "next/image";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

import WorkSection from "./components/WorkSection";
import IndustriesSection from "./components/IndustriesSection";
import TaglineSection from "./components/TaglineSection";
import IncludeContact from "./components/IncludeContact";
import ContactConsultation from "./components/ContactConsultation";

export default function AppDevelopment() {
  return (
    <>
      <section className="ins-slider-hd-sec">
        <Container fluid="xxl">
          <Row>
            <Col xs={12}>
              <div className="ins-slider-hd">
                <h1>Terms and Conditions</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-4 pt-lg-5 pt-xl-6 pb-4">
        <Container fluid="xxl">
          <Row className="d-flex align-items-center">
            <Col xs={12}>
              <div className="branding-intro">
                <p>
                  This website stores cookies on your computer. These cookies
                  are used to improve your website experience and provide more
                  personalised services to you, both on this website and through
                  other media. To find out more about the cookies we use, see
                  our Privacy Policy.
                </p>
                <p>
                  If you decline, your information won&apos;t be tracked when
                  you visit this website. A single cookie will be used in your
                  browser to remember your preference not to be tracked.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-4 py-lg-5 py-xl-6" data-aos="fadeIn">
        <Container fluid="xxl">
          <Row>
            <Col xs={12}>
              <div className="terms-cover">
                <div className="terms-item">
                  <div className="terms-hd">
                    <h3>Privacy Policy</h3>
                  </div>
                  <p>
                    It is Bluberry Labs policy to respect your privacy regarding
                    any information we may collect while operating our website.
                    This Privacy Policy applies to https://www.thebblabs.com
                    (hereinafter, “us”, “we”, or “https://www.thebblabs.com”).
                    We respect your privacy and are committed to protecting
                    personally identifiable information you may provide us
                    through the Website. We have adopted this privacy policy
                    (“Privacy Policy”) to explain what information may be
                    collected on our Website, how we use this information, and
                    under what circumstances we may disclose the information to
                    third parties. This Privacy Policy applies only to
                    information we collect through the Website and does not
                    apply to our collection of information from other sources.
                    This Privacy Policy, together with the Terms and conditions
                    posted on our Website, set forth the general rules and
                    policies governing your use of our Website. Depending on
                    your activities when visiting our Website, you may be
                    required to agree to additional terms and conditions.
                  </p>
                </div>
                <div className="terms-item">
                  <div className="terms-hd">
                    <h4>Gathering of Non-Personally-Identifying Information</h4>
                  </div>
                  <p>
                    Like most website operators, Bluberry labs collects
                    non-personally-identifying information of the sort that web
                    browsers and servers typically make available, such as the
                    browser type, language preference, referring site, and the
                    date and time of each visitor request. Blubery lab’s purpose
                    in collecting non-personally identifying information is to
                    better understand how Bluberry labs visitors use its
                    website. From time to time, Bluberry labs may release
                    non-personally-identifying information in the aggregate,
                    e.g., by publishing a report on trends in the usage of its
                    website. Bluberry labs also collects potentially
                    personally-identifying information like Internet Protocol
                    (IP) addresses of users who visit our site.
                  </p>
                </div>
                <div className="terms-item">
                  <div className="terms-hd">
                    <h4>Gathering of Personally-Identifying Information</h4>
                  </div>
                  <p>
                    We collect data including which pages you visit on our site,
                    the amount of time you spend on specific pages and the
                    overall time spent on our site. We also collect information
                    regarding the internet browser used to access our site, your
                    IP address, the size of the screen used to view our website,
                    the links or advertisements you see and follow, the search
                    terms you enter, and other similar information.
                  </p>
                </div>
                <div className="terms-item">
                  <div className="terms-hd">
                    <h4>How We Use the Information We Collect</h4>
                  </div>
                  <p>
                    We use this information to better understand what our
                    visitors are looking for. This allows us to better serve
                    website visitors in the future by providing information that
                    is useful to visitors and developing the site in a way that
                    is more intuitive and hopefully provides a better user
                    experience. Browser data, screen size, and other information
                    like it allow us to identify areas where we can improve.
                  </p>
                </div>
                <div className="terms-item">
                  <div className="terms-hd">
                    <h4>Bluberry labs uses Google AdWords for remarketing</h4>
                  </div>
                  <p>
                    We use the remarketing services to advertise on third party
                    websites (including Google) to previous visitors to our
                    site. It could mean that we advertise to previous visitors
                    who haven&apos;t completed a task on our site, for example
                    using the contact form to make an enquiry. This could be in
                    the form of an advertisement on the Google search results
                    page, or a site in the Google Display Network. Third-party
                    vendors, including Google, use cookies to serve ads based on
                    someone&apos;s past visits. Of course, any data collected
                    will be used in accordance with our own privacy policy and
                    Google&apos;s privacy policy. You can set preferences for
                    how Google advertises to you using the Google Ad Preferences
                    page, and if you want to you can opt out of interest-based
                    advertising entirely by cookie settings or permanently using
                    a browser plugin.
                  </p>
                </div>
                <div className="terms-item">
                  <div className="terms-hd">
                    <h4>Security</h4>
                  </div>
                  <p>
                    The security of your Personal Information is important to
                    us, but remember that no method of transmission over the
                    Internet, or method of electronic storage is 100% secure.
                    While we strive to use commercially acceptable means to
                    protect your Personal Information, we cannot guarantee its
                    absolute security.
                  </p>
                </div>
                <div className="terms-item">
                  <div className="terms-hd">
                    <h4>Links To External Sites</h4>
                  </div>
                  <p>
                    Our website may contain links to external sites that are not
                    operated by us. If you click on a third party link, you will
                    be directed to that third party&apos;s site. We strongly
                    advise you to review the Privacy Policy and terms and
                    conditions of every site you visit. We have no control over,
                    and assume no responsibility for the content, privacy
                    policies or practices of any third party sites, products or
                    services.
                  </p>
                </div>
                <div className="terms-item">
                  <div className="terms-hd">
                    <h4>Aggregated Statistics</h4>
                  </div>
                  <p>
                    Bluberry labs may collect statistics about the behavior of
                    visitors to its website. Bluberry labs may display this
                    information publicly or provide it to others. However,
                    Bluberry labs does not disclose your personally-identifying
                    information.
                  </p>
                </div>
                <div className="terms-item">
                  <div className="terms-hd">
                    <h4>Cookies</h4>
                  </div>
                  <p>
                    To enrich and perfect your online experience, Bluberry labs
                    uses “Cookies”, similar technologies and services provided
                    by others to display personalized content, appropriate
                    advertising and store your preferences on your computer. A
                    cookie is a string of information that a website stores on a
                    visitor&apos;s computer, and that the visitor&apos;s browser
                    provides to the website each time the visitor returns.
                    Bluberry labs uses cookies to help Bluberry labs identify
                    and track visitors, their usage of
                    https://www.thebblabs.com, and their website access
                    preferences. Bluberry labs visitors who do not wish to have
                    cookies placed on their computers should set their browsers
                    to refuse cookies before using https://www.thebblabs.com,
                    with the drawback that certain features of
                    https://www.thebblabs.com may not function properly without
                    the aid of cookies. By continuing to navigate our website
                    without changing your cookie settings, you hereby
                    acknowledge and agree to Bluberry labs use of cookies.
                  </p>
                </div>
                <div className="terms-item">
                  <div className="terms-hd">
                    <h4>Privacy Policy Changes</h4>
                  </div>
                  <p>
                    Although most changes are likely to be minor, we may change
                    its Privacy Policy from time to time, and in our sole
                    discretion. We encourages visitors to frequently check this
                    page for any changes to this Privacy Policy. Your continued
                    use of this site after any change in this Privacy Policy
                    will constitute your acceptance of such change.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
