import ContentBox from "@/components/Profile/ContentBox";
import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function PrivacyPolicy() {
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <section className="max-w-6xl  pb-14 lg:max-w-8xl mx-auto" ref={topRef}>
      <Link
        to="/"
        className={buttonVariants({
          variant: "secondary",
          className: "mt-4",
        })}
      >
        <ArrowLeft className="mr-3" />
        Back To Home
      </Link>
      <ContentBox>
        <div className="space-y-4">
          <h1 className="font-bold text-3xl">Privacy Policy</h1>
          <div className="bg-slate-200 space-y-4  rounded-lg p-3  sm:p-6">
            <p>
              ChristiansOnline.com.au was founded on the idea that Australia
              needed an online Christian Community, to bring together people
              with a common belief to pray for world issues, make new Christian
              friends and find anything you may need as a Christian person. We
              understand that your right to privacy is of the utmost importance.
              To that end, we are committed to the protection of your personal
              information. Any information we collect from you is used only to
              fulfil your needs. Our privacy policy appears below in detail.
              Please note by visiting ChristiansOnline.com.au, you are accepting
              the practices described in this Privacy Policy.
            </p>
            <h4 className="font-bold text-lg">What if I contact you?</h4>
            <p>We may keep a copy of any correspondence from you.</p>
            <h4 className="font-bold text-lg">
              Who Do You Share Information With?
            </h4>
            <p>
              We do not sell, trade or rent user information to anyone.
              ChristiansOnline.com.au operates its own customer service
              department. Unlike other online businesses, when you become a
              member or sign up for Christian Singles, your details never leave
              ChristiansOnline.com.au.
            </p>
            <h4 className="font-bold text-lg">
              Under What Circumstances Will You Contact Me?
            </h4>
            <p>
              You will receive an email confirming your membership and the
              occasional Newsletter, advising you of what new sections have been
              launched on ChristiansOnline.com.au. If your membership does not
              contain enough information (eg: Login Name) for us to complete it,
              one of our customer service representatives will contact you via
              email.
            </p>
            <h4 className="font-bold text-lg">What About Cookies?</h4>
            <p>
              Currently, ChristiansOnline.com.au does not use cookies. Please
              note that other sites with links to ChristiansOnline.com.au (eg.
              sites we advertise with) may use cookies and may collect
              additional information about you. We are not responsible for the
              information policies of these sites and users may wish to acquaint
              themselves with the privacy policies of those other sites. Our
              business success depends on our discretion and our understanding
              of the importance of your privacy. If you have suggestions for
              enhancing our privacy policy, please contact
              ChristiansOnline.com.au directly.
            </p>
            <h4 className="font-bold text-lg">Use of Your Personal Data</h4>
            <p>The Company may use Personal Data for the following purposes:</p>
            <ul className="mt-2 list-disc px-6">
              <li>
                To provide and maintain our Service, including to monitor the
                usage of our Service.
              </li>
              <li>
                To manage Your Account: to manage Your registration as a user of
                the Service. The Personal Data You provide can give You access
                to different functionalities of the Service that are available
                to You as a registered user.
              </li>
              <li>
                For the performance of a contract: the development, compliance
                and undertaking of the purchase contract for the products, items
                or services You have purchased or of any other contract with Us
                through the Service.
              </li>
              <li>
                To contact You: To contact You by email, telephone calls, SMS,
                or other equivalent forms of electronic communication, such as a
                mobile application's push notifications regarding updates or
                informative communications related to the functionalities,
                products or contracted services, including the security updates,
                when necessary or reasonable for their implementation.
              </li>
              <li>
                To provide You with news, special offers and general information
                about other goods, services and events which we offer that are
                similar to those that you have already purchased or enquired
                about unless You have opted not to receive such information.
              </li>
              <li>
                To manage Your requests: To attend and manage Your requests to
                Us.
              </li>
            </ul>
            <p className="mt-2">
              We may share your personal information in the following
              situations:
            </p>
            <ul className="list-disc px-6">
              <li>
                With Service Providers: We may share Your personal information
                with Service Providers to monitor and analyze the use of our
                Service, for payment processing, to contact You.
              </li>
              <li>
                For Business transfers: We may share or transfer Your personal
                information in connection with, or during negotiations of, any
                merger, sale of Company assets, financing, or acquisition of all
                or a portion of our business to another company.
              </li>
              <li>
                With Affiliates: We may share Your information with Our
                affiliates, in which case we will require those affiliates to
                honor this Privacy Policy. Affiliates include Our parent company
                and any other subsidiaries, joint venture partners or other
                companies that We control or that are under common control with
                Us.
              </li>
              <li>
                With Business partners: We may share Your information with Our
                business partners to offer You certain products, services or
                promotions.
              </li>
              <li>
                With other users: when You share personal information or
                otherwise interact in the public areas with other users, such
                information may be viewed by all users and may be publicly
                distributed outside. If You interact with other users or
                register through a Third-Party Social Media Service, Your
                contacts on the Third-Party Social Media Service may see Your
                name, profile, pictures and description of Your activity.
                Similarly, other users will be able to view descriptions of Your
                activity, communicate with You and view Your profile.
              </li>
            </ul>

            <h4 className="font-bold text-lg">
              Retention of Your Personal Data
            </h4>
            <p>
              The Company will retain Your Personal Data only for as long as is
              necessary for the purposes set out in this Privacy Policy. We will
              retain and use Your Personal Data to the extent necessary to
              comply with our legal obligations (for example, if we are required
              to retain your data to comply with applicable laws), resolve
              disputes, and enforce our legal agreements and policies. The
              Company will also retain Usage Data for internal analysis
              purposes. Usage Data is generally retained for a shorter period of
              time, except when this data is used to strengthen the security or
              to improve the functionality of Our Service, or We are legally
              obligated to retain this data for longer time periods.
            </p>
            <h4 className="font-bold text-lg">
              Transfer of Your Personal Data
            </h4>
            <p>
              Your information, including Personal Data, is processed at the
              Company's operating offices and in any other places where the
              parties involved in the processing are located. It means that this
              information may be transferred to — and maintained on — computers
              located outside of Your state, province, country or other
              governmental jurisdiction where the data protection laws may
              differ than those from Your jurisdiction. Your consent to this
              Privacy Policy followed by Your submission of such information
              represents Your agreement to that transfer. The Company will take
              all steps reasonably necessary to ensure that Your data is treated
              securely and in accordance with this Privacy Policy and no
              transfer of Your Personal Data will take place to an organization
              or a country unless there are adequate controls in place including
              the security of Your data and other personal information.
            </p>
            <h4 className="font-bold text-lg">
              How to Request Removal of Your Personal Data?
            </h4>
            <ul className="list-disc px-6">
              <li>
                Removal of all personal profile data can be done so within the
                app under "settings", then "delete my account".
              </li>
              <li>
                Removal of your personal profile data on the website can be done
                within "Account settings" then "Cancel account".
              </li>
              <li>
                Both actions permanently remove your profile details from the
                app and the website. All deleted accounts are stored for a short
                period of time to allow for reactivations requested by the user.
              </li>
              <li>
                To request permanent removal of all data before this timeframe,
                please email us with the title "Request total removal" at
                info@christiansonline.com.au
              </li>
              <li>
                All data is removed within 24 hours of initial request and an
                email confirmation is sent to the user.
              </li>
            </ul>
            <h4 className="font-bold text-lg">
              Disclosure of Your Personal Data
            </h4>
            <div className="space-y-1">
              <h4 className="font-bold text-lg">Business Transactions</h4>
              <p>
                If the Company is involved in a merger, acquisition or asset
                sale, Your Personal Data may be transferred. We will provide
                notice before Your Personal Data is transferred and becomes
                subject to a different Privacy Policy.
              </p>
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-lg">Law enforcement</h4>
              <p>
                Under certain circumstances, the Company may be required to
                disclose Your Personal Data if required to do so by law or in
                response to valid requests by public authorities (e.g. a court
                or a government agency).
              </p>
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-lg">Other legal requirements</h4>
              <p>
                The Company may disclose Your Personal Data in the good faith
                belief that such action is necessary to:
              </p>
              <ul className="list-disc px-6">
                <li>Comply with a legal obligation</li>
                <li>
                  Protect and defend the rights or property of the Company
                </li>
                <li>
                  Prevent or investigate possible wrongdoing in connection with
                  the Service
                </li>
                <li>
                  Protect the personal safety of Users of the Service or the
                  public
                </li>
                <li>Protect against legal liability</li>
              </ul>
            </div>
            <h4 className="font-bold text-lg">
              Security of Your Personal Data
            </h4>
            <p>
              The security of Your Personal Data is important to Us, but
              remember that no method of transmission over the Internet, or
              method of electronic storage is 100% secure. While We strive to
              use commercially acceptable means to protect Your Personal Data,
              We cannot guarantee its absolute security. Detailed Information on
              the Processing of Your Personal Data Service Providers have access
              to Your Personal Data only to perform their tasks on Our behalf
              and are obligated not to disclose or use it for any other purpose.
            </p>
            <h4 className="font-bold text-lg">Payments</h4>
            <p>
              We may provide paid products and/or services within the Service.
              In that case, we may use third-party services for payment
              processing (e.g. payment processors). We will not store or collect
              Your payment card details. That information is provided directly
              to Our third-party payment processors whose use of Your personal
              information is governed by their Privacy Policy. These payment
              processors adhere to the standards set by PCI-DSS as managed by
              the PCI Security Standards Council, which is a joint effort of
              brands like Visa, Mastercard, American Express and Discover.
              PCI-DSS requirements help ensure the secure handling of payment
              information.
            </p>
            <h4 className="font-bold text-lg">Apple Store In-App Payments</h4>
            <p>
              Their Privacy Policy can be viewed at
              https://www.apple.com/legal/privacy/en-ww/ Your California Privacy
              Rights (California's Shine the Light law) Under California Civil
              Code Section 1798 (California's Shine the Light law), California
              residents with an established business relationship with us can
              request information once a year about sharing their Personal Data
              with third parties for the third parties' direct marketing
              purposes. If you'd like to request more information under the
              California Shine the Light law, and if you are a California
              resident, You can contact Us using the contact information
              provided below. California Privacy Rights for Minor Users
              (California Business and Professions Code Section 22581)
              California Business and Professions Code section 22581 allow
              California residents under the age of 18 who are registered users
              of online sites, services or applications to request and obtain
              removal of content or information they have publicly posted. To
              request removal of such data, and if you are a California
              resident, You can contact Us using the contact information
              provided below, and include the email address associated with Your
              account. Be aware that Your request does not guarantee complete or
              comprehensive removal of content or information posted online and
              that the law may not permit or require removal in certain
              circumstances.
            </p>
            <h4 className="font-bold text-lg">Links to Other Websites</h4>
            <p>
              Our Service may contain links to other websites that are not
              operated by Us. If You click on a third party link, You will be
              directed to that third party's site. We strongly advise You to
              review the Privacy Policy of every site You visit. We have no
              control over and assume no responsibility for the content, privacy
              policies or practices of any third party sites or services.
            </p>
            <h4 className="font-bold text-lg">
              Changes to this Privacy Policy
            </h4>
            <p>
              We may update our Privacy Policy from time to time. We will notify
              You of any changes by posting the new Privacy Policy on this page.
              We will let You know via email and/or a prominent notice on Our
              Service, prior to the change becoming effective and update the
              "Last Updated" date at the top of this Privacy Policy. You are
              advised to review this Privacy Policy periodically for any
              changes. Changes to this Privacy Policy are effective when they
              are posted on this page.
            </p>
            <h4 className="font-bold text-lg">Contact Christians Online</h4>
            <div>
              <p>
                If you have any questions about this Privacy Policy, You can
                contact us:
              </p>
              <p>By email: info@christiansonline.com.au</p>
              <p>
                By visiting this page on our website:
                <a href="www.christiansonline.com.au">
                  www.christiansonline.com.au
                </a>
              </p>
            </div>
          </div>
        </div>
      </ContentBox>
    </section>
  );
}

export default PrivacyPolicy;
