import ContentBox from "@/components/Profile/ContentBox";
import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function CustomerSafety() {
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
          <h1 className="font-bold text-3xl">Customer Safety</h1>
          <div className="bg-slate-200 space-y-4  rounded-lg p-3  sm:p-6">
            <h4 className="font-bold text-lg">Protect Yourself Online!</h4>
            <h4 className="font-bold text-lg">
              As we do our best to prevent and remove scammers, some do still
              get through. Here are some best practices recommended by the
              Australian Competition & Consumer Commission (ACCC).
            </h4>
            <h4 className="font-bold text-lg">What is a dating scam?</h4>
            <p>
              On a dating website, a scammer is someone who builds a
              relationship with you, pretending to be a legitimate user of a
              dating website, and then uses fraudulent claims to defraud you.
              Scammers will ask you for money, personal or financial
              information, or try to redirect you to websites that require
              payment or download malicious software onto your computer.
            </p>
            <p>
              Scams of this sort can be very sophisticated and scammers will go
              to great lengths to build a relationship with you, spending a lot
              of time communicating with you and perhaps even telling you they
              love you and sending you gifts.
            </p>
            <p>
              The key rule is that you should never send money to anyone you
              meet online and should reconsider your relationship with anyone
              who asks you for money or who you otherwise suspect may be a
              scammer.
            </p>
            <p>
              Scammers will often ask you to send money via a wire transfer
              service and you will usually be unable to recover money sent this
              way. You should also never share personal information, such as
              bank account or credit card details, as you risk falling victim to
              fraud and identity theft.
            </p>
            <h4 className="font-bold text-lg">How do I protect myself?</h4>
            <ul className="list-disc px-6">
              <li>Never send money to anyone you meet online</li>
              <li>
                Met someone recently and they’ve already professed their love?
                Be careful—it could be a scam
              </li>
              <li>
                If someone you met online says they need your help or your money
                it’s probably a scam
              </li>
              <li>If someone asks you for money, don’t reply</li>
              <li>
                Don’t share your banking or credit card details with anyone you
                meet online
              </li>
              <li>
                If someone asks you to transfer money to them via a wire
                service, don’t do it
              </li>
              <li>
                If someone asks to move your communications outside the website
                after only a few contacts, be careful—scammers often ask for
                this
              </li>
              <li>
                Anyone can fall for a scam—be careful and report any suspicious
                conduct here
              </li>
              <li>
                Met someone who sounds too good to be true? Be careful—it could
                be a scam
              </li>
              <li>
                If what you are seeing and hearing from someone does not match
                their profile, be careful—it could be a scam
              </li>
              <li>
                If someone offers to send you money orders to cash on their
                behalf, don’t do it—you may be defrauded
              </li>
            </ul>
            <h4 className="font-bold text-lg">How can I spot a scammer?</h4>
            <p>
              Any of the following behaviors should raise concerns that the
              person you are interacting with is a scammer:
            </p>
            <ul className="list-disc px-6 capitalize">
              <li>
                they ask you to send them money or provide your personal or
                financial details
              </li>
              <li>
                they ask you to transfer money via a wire transfer service
              </li>
              <li>they quickly profess strong feelings or love for you</li>
              <li>
                they are vague about their interests, or what they want in a
                partner
              </li>
              <li>
                they do not answer your questions or their responses are
                formulaic, nonsensical or repetitive
              </li>
              <li>
                they claim to be stationed in or travel frequently to Africa or
                elsewhere overseas
              </li>
              <li>
                their profile, or their communications with you display poor
                spelling or grammar. You should carefully consider your
                relationship with anyone who asks you to move communications
                with them away from the dating website onto email, instant
                messaging, the phone, VoIP or some other medium after only a few
                contacts. Scammers will often ask you to do this so that you
                will be communicating only with them, are more likely to reveal
                personal information and will not receive safety warnings. You
                should never respond to a request for money, personal
                information or banking details, no matter the reason given.
              </li>
            </ul>
            <h4 className="font-bold text-lg">
              What to do if you’ve been scammed?
            </h4>

            <h4 className="font-bold text-lg">1: Cease communication</h4>
            <p>
              If you think you have been scammed, the first step is to
              immediately cease communication with the scammer, to avoid losing
              more money or giving away more personal information.
            </p>
            <h4 className="font-bold text-lg">2: Contact website operator</h4>
            <p>
              You should report the scammer to Christians Online where you first
              contacted them, as they may be targeting other users. Details of
              your report will be kept confidential. You should provide us with
              as much information about the scammer as possible. This may
              include examples of emails or instant messaging communications
              received from the scammer and photos, names and addresses, email
              addresses or phone numbers used by the scammer.
            </p>
            <h4 className="font-bold text-lg">
              3: Contact your financial institution
            </h4>
            <p>
              If you have sent money to the scammer and particularly if you have
              provided any personal or financial details, you should contact
              your financial institution and inform them. If you have given the
              scammer information such as account numbers, credit card numbers
              or passwords you should immediately change them. If you used a
              service, such as a money transfer service to send money to the
              scammer you should contact the service provider.
            </p>
            <h4 className="font-bold text-lg">
              4: Report the scam to the Australian Competition and Consumer
              Commission (ACCC)
            </h4>
            <p>
              Reporting a scam to the ACCC assists with monitoring scam trends.
              You can report a scam to the ACCC via the online reporting form on
              the ACCC’s SCAMwatch website www.scamwatch.gov.au. The details of
              complaints made to the ACCC will be kept confidential.
            </p>
            <h4 className="font-bold text-lg">5: Contact police</h4>
            <p>
              If you have sent money to the scammer, you should contact your
              state or territory police and report your loss. If someone
              attempts to blackmail you, or makes threats of any kind, you
              should contact the police immediately.
            </p>
            <h4 className="font-bold text-lg">6: Beware of future contact</h4>
            <p>
              Scammers will often contact you under new guises to try and get
              more money from you. They may pretend to be lawyers, government
              officials or police, often from another country, and claim that
              they have caught the scammer and need money to recover your
              losses. You should never send money—the scammers are simply trying
              to get more out of you.
            </p>
            <p>
              We ask that you follow these best practices for a safe online
              experience.
            </p>
            <h4 className="font-bold text-lg">Thankyou!</h4>
            <h4 className="font-bold text-lg">The Christians Online Team.</h4>
          </div>
        </div>
      </ContentBox>
    </section>
  );
}

export default CustomerSafety;
