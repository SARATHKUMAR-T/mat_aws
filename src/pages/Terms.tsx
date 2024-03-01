import ContentBox from "@/components/Profile/ContentBox";
import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Terms() {
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
          <h1 className="font-bold text-3xl">Terms And Conditions</h1>
          <div className="bg-slate-200 space-y-4  rounded-lg p-3  sm:p-6">
            <p>
              This online personals service (the "Service") is a way for adults
              to meet each other. Christiansonline.com.au is owned and operated
              by The Baxter Group Pty Ltd (the "Company"). This legal agreement
              ("Agreement") is made between You and Us. This Agreement, as it
              may be amended from time to time, applies to all users of any of
              the Company's websites (the "Websites"). You may not use the
              Service if you are under the age of 18 or you are not able to form
              legally binding contracts, or if your membership has been
              suspended by Us. Please read this Agreement carefully before
              registering for the Service. By registering for the Service, You
              become a Company member (a "Member"), and You agree to be bound by
              the terms and conditions of this Agreement for as long as You
              continue to be a Member. IF YOU DO NOT AGREE WITH THE TERMS AND
              CONDITIONS OF THIS AGREEMENT, DO NOT REGISTER FOR THE SERVICE. THE
              TERMS AND CONDITIONS OF THIS AGREEMENT ARE SUBJECT TO CHANGE BY US
              AT ANY TIME, EFFECTIVE UPON NOTICE TO YOU, WHICH NOTICE SHALL BE
              DEEMED TO HAVE BEEN PROVIDED UPON OUR POSTING OF THE CURRENT
              VERSION OF THIS AGREEEMENT ON THE SERVICE. In this Agreement the
              following terms have the following meanings unless the context
              requires otherwise: "Agreement" means the agreement between You
              and Us incorporating these terms and conditions for the provision
              of the Service, as amended from time to time in the manner set
              forth herein; "We, Us, Our" means the Company; and "You, Your,
              Yourself" means the person who registers for the Service, accepts
              the terms and conditions of this Agreement and whose application
              for membership of the Service is accepted by Us.
            </p>
            <h4 className="font-bold text-lg">
              ELIGIBILITY: MINORS MAY NOT BECOME MEMBERS.
            </h4>
            <p>
              By becoming a Member, You represent and warrant that You are at
              least 18 years old. By using the Service, You represent and
              warrant that You have the right, authority and capacity to enter
              into this Agreement and to abide by the terms and conditions of
              this Agreement. Your membership for the Service is for Your sole,
              personal use. You may not authorize others to use Your membership,
              and You may not assign or otherwise transfer Your account to any
              other person or entity.
            </p>
            <h4 className="font-bold text-lg">REGISTRATION AND SUBSCRIPTION</h4>
            <p>
              Although You may register as a Member of the Service for free, if
              You wish to use the Service to initiate most communication with
              other members and use certain other elements of the Service, You
              must become a Subscriber and pay the fees that are set out in our
              price list. This price list is part of this Agreement and We
              reserve the right, at any time, to change any fees or charges for
              using the Service. To become a Member, You must register for the
              Service. When and if You register to become a Member, You agree to
              provide accurate, current and complete information about Yourself
              as prompted by Our registration form ("Registration Data"), and to
              maintain and update Your information to keep it accurate, current
              and complete. You agree that We may rely on Your Registration Data
              as accurate, current and complete. You acknowledge that if Your
              Registration Data is untrue, inaccurate, not current or incomplete
              in any respect, We may terminate this Agreement and Your use of
              the Service and, in such event, You shall not be entitled to a
              refund of any unused subscription fees. Although we aim to verify
              the accuracy of the information provided by Our Members, We do not
              verify information in profiles, and We have no control over, do
              not guarantee, and are not responsible for the quality, truth,
              accuracy, legality or safety of Our Members.
            </p>
            <h4 className="font-bold text-lg">TERM AND TERMINATION</h4>
            <p>
              This Agreement will remain in full force and effect while You use
              the Service and/or are a Member. You may terminate your membership
              at any time via the Website or by sending Us written or email
              notice of termination. If You terminate Your subscription after
              5:30pm AEST on the day that reoccurring payments fall due, You are
              not entitled to any refund. To learn how to terminate your
              membership, visit the Help section of the Website. Either You or
              We may terminate your membership by removing your profile, at any
              time, for any reason, with or without explanation, effective upon
              sending written or email notice to the other party. In the event
              that (a) You terminate your subscription or membership or (b) We
              determine, in our sole discretion, that You have violated this
              Agreement or our posted Privacy Policy, You shall not be entitled
              to, nor shall We be liable to You for, any refund of any unused
              portion of any subscription payments We have received from You,
              and We may continue to bar Your use of the Service in the future.
              The purchase of eStamps and subscriptions will not be refunded due
              to a circumstance where you are unsatisfied with our quality of
              members or website usability, although we re-issue eStamps for
              customers that have contacted confirmed scammers as an act of
              goodwill. Even after membership is terminated, this Agreement will
              remain in effect. You are required to log into the Service at
              least once every sixty (60) days. If you fail to do so, in
              addition to any other rights or remedies available to the Company
              for a breach of the Terms, the Company reserves the right to purge
              any Registration Data from the Service and / or terminate your
              membership.
            </p>
            <h4 className="font-bold text-lg">PROPRIETARY RIGHTS</h4>
            <p>
              You represent and warrant to Us that the information posted in
              Your profile, including Your photograph, is posted by You and that
              You are the exclusive author of Your profile and the exclusive
              owner of Your photographs. You assign to Us, with full title
              guarantee, all copyright in Your profile, Your photographs posted,
              and any additional information sent to Us at any time in
              connection with Your use of the Service. You waive absolutely any
              and all moral rights to be identified as author of Your profile
              and owner of Your photograph and any similar rights in any
              jurisdiction in the world. In addition, other Members may post
              copyrighted information, which has copyright protection, whether
              or not it is identified as copyrighted. Except for that
              information which is in the public domain or for which You have
              been given express written permission, You will not copy, modify,
              publish, transmit, distribute, perform, display, or sell any such
              proprietary information. By posting information, photographs or
              content on any Service, You automatically grant, and You represent
              and warrant that You have the right to grant, to Us and other
              members, free of charge, an irrevocable, perpetual, non-exclusive,
              royalty-free, fully-paid, worldwide license to use, copy, perform,
              display, promote, publish and distribute such information, content
              and photographs and to prepare derivative works of, or incorporate
              into other works, such information and content, and to grant and
              authorize sub-licenses of the foregoing.
            </p>
            <h4 className="font-bold text-lg">YOUR USE OF THE SERVICE</h4>
            <p>
              As a Member, You agree that: (1) You will use the Service in a
              manner consistent with any and all applicable laws and
              regulations. You will not include in Your profile any telephone
              numbers, street addresses, last names, URL's or email addresses,
              other than in response to Our prompts in the personal or general
              information sections of the Websites. You will not engage in
              advertising to, or solicitation of, other members to buy or sell
              any products or services through the Service. You will not
              transmit any chain letters or junk email to other members. To
              protect Our members against such conduct, depending on the Website
              you Subscribe to, We currently limit the number of messages that
              any subscriber may send in a day. You are solely responsible for
              Your interactions with other members. We reserve the right, but
              have no obligation, to monitor and/or mediate disputes between You
              and other members. (2) You are solely responsible for the content
              or information You publish or display (hereinafter, "post") on the
              Service, or transmit to other members. You will not post on the
              Service, or transmit to other members or to Us or Our employees,
              any defamatory, inaccurate, abusive, obscene, profane, offensive,
              sexually oriented, threatening, harassing, racially offensive, or
              illegal material, or any material that infringes or violates
              another party's rights (including, but not limited to,
              intellectual property rights, and rights of privacy and
              publicity). You will not include in Your profile any offensive
              language, including but not limited to offensive anatomical or
              sexual references, or offensive sexually suggestive or connotative
              language, and You will not post any photos containing nudity or
              personal information. We reserve the right, but We have no
              obligation, to reject any profile or photo that does not comply
              with the prohibitions set forth in this section. We reserve the
              right to refuse service to anyone, at our sole discretion. (3) By
              becoming a Member, You agree to accept and consent to receiving
              email communications initiated from Us or through Us including,
              without limitation: message notification emails, "Your Match"
              emails, emails informing you about events and parties We organize,
              emails informing You of changes to the Service and emails
              informing You of promotions that either We provide or that are
              being provided by third parties. If you choose to respond to
              promotions that are provided by third parties and in the course of
              doing so, disclose information to any external service providers,
              and/or grant them permission to collect information about you,
              then their use of your information is governed by their private
              policies. Message notification emails such as "Your Match" emails,
              emails informing you about events and parties We organize and
              emails informing You of changes to the Service are provided by Us
              as part of the operation of the Service and you will receive these
              messages for as long as you are Our member. Should You not wish to
              receive any of Our email communications, please do not register
              with Us for the Service. However, You may opt-out of receiving
              Email communications sent from Us or through Us offering You third
              party goods or services. To learn how to do so, visit the Help
              section of the Websites. (4) You agree that We have no
              responsibility or liability for the deletion, corruption or
              failure to store any messages or other content maintained or
              transmitted by Our Service. You acknowledge that features,
              parameters or other services We provide may change at any time.
              You acknowledge that We reserve the right to sign out, terminate,
              delete or purge Your account from the Service if it is inactive.
              "Inactive" means that you have not signed in to the Service for a
              particular period of time, as determined by Us, in Our sole
              discretion. (5) Our customer service employees are here to make
              your online experience enjoyable by providing assistance and
              guidance to You. When speaking to Our customer service employees
              on the telephone or communicating with them by any other means,
              You agree not to be abusive, obscene, profane, offensive, sexually
              oriented, threatening, harassing or racially offensive. Should any
              of Our customer service employees feel, at any point, threatened
              or offended by Your conduct, We reserve the right to immediately
              terminate Your membership and You shall not be entitled to the
              refund of any subscription payments We have received from You. We
              are entitled to investigate and terminate Your membership if You
              have misused the Service, or behaved in a way which could be
              regarded as inappropriate, unlawful or illegal. The following is a
              partial, but not exhaustive, list of the types of actions that are
              illegal or prohibited under this Agreement: You will not harass or
              impersonate any person or entity. You will not use any manual or
              automatic device or process to retrieve, index, data mine, or, in
              any way reproduce or circumvent the navigational structure or
              presentation of the Service or its contents. You will not express
              or imply that any of Your statements are endorsed by Us, without
              Our specific prior written consent. You will not interfere with or
              disrupt any Service or any Website, servers or networks connected
              to any Service or Website. You will not post, distribute or
              reproduce, in any way, any copyrighted material, trademarks, or
              other proprietary information without obtaining the prior written
              consent of the owner of such proprietary rights. You will not
              remove any copyright, trademark or other proprietary rights
              notices contained in the Service or forge headers or otherwise
              manipulate identifiers in order to disguise the origin of any
              information transmitted through the Service. You will not use meta
              tags or code or other devices containing any reference to Us or
              the Service or the Website connected to the Service in order to
              direct any person to any other website for any purpose. You will
              not modify, adapt, sublicense, translate, sell, reverse engineer,
              decipher, decompile or otherwise disassemble any portion of the
              Service or any software used on or for the Service or cause or
              enable others to do so. You will not post, email or otherwise
              transmit any material that contains software viruses or any other
              computer code, files or programs designed to interrupt, harm or
              limit the functionality of any computer software or hardware.
            </p>
            <h4 className="font-bold text-lg">INDEMNITY BY MEMBER</h4>
            <p>
              {" "}
              You will defend, indemnify, and hold Us and Our officers,
              directors, employees, agents and third parties harmless, for any
              losses, costs, liabilities or expenses relating to or arising out
              of Your use of the Service, including: (I) Your breach of this
              Agreement; (II) any allegation that any materials that You submit
              to Us or transmit to the Service infringe or otherwise violate the
              copyright, trademark, trade secret or other intellectual property
              or other rights of any third party; and/or (III) Your activities
              in connection with the Service. This indemnity shall be applicable
              without regard to the negligence of any party, including any
              indemnified person.
            </p>
            <h4 className="font-bold text-lg">RELEASE</h4>
            <p>
              If You have a dispute with one or more of Our Members, you release
              Us (and our officers, directors, agents, subsidiaries, joint
              ventures and employees) from any claims, demands and damages
              (actual and consequential) of every kind and nature, known and
              unknown, arising out of or in any way connected with such dispute.
            </p>
            <h4 className="font-bold text-lg">ONLINE CONTENT</h4>
            <p>
              Opinions, advice, statements, offers, or other information or
              content made available through the Service, but not directly by
              Us, are those of their respective authors, and should not
              necessarily be relied upon. Such authors are solely responsible
              for such content. WE DO NOT GUARANTEE THE ACCURACY, COMPLETENESS,
              OR USEFULNESS OF ANY INFORMATION ON THE SERVICE AND WE NEITHER
              ADOPT NOR ENDORSE, NOR ARE WE RESPONSIBLE FOR, THE ACCURACY OR
              RELIABILITY OF ANY OPINION, ADVICE, OR STATEMENT MADE BY ANY PARTY
              OTHER THAN US. UNDER NO CIRCUMSTANCES ARE WE RESPONSIBLE FOR ANY
              LOSS OR DAMAGE RESULTING FROM ANY PERSON'S RELIANCE ON INFORMATION
              OR OTHER CONTENT POSTED ON THE SERVICE OR TRANSMITTED TO MEMBERS.
              WE RESERVE THE RIGHT, BUT WE HAVE NO OBLIGATION, TO MONITOR THE
              MATERIALS POSTED IN THE PUBLIC AREAS OF THE SERVICE. WE SHALL HAVE
              THE RIGHT TO REMOVE ANY SUCH MATERIAL THAT, IN OUR SOLE
              DISCRETION, VIOLATES, OR IS ALLEGED TO VIOLATE, THE LAW OR THIS
              AGREEMENT. NOTWITHSTANDING THIS RIGHT, YOU REMAIN SOLELY
              RESPONSIBLE FOR THE CONTENT OF THE MATERIALS YOU POST IN THE
              PUBLIC AREAS OF THE SERVICE AND IN YOUR PRIVATE EMAIL MESSAGES.
              EMAILS SENT BETWEEN YOU AND OTHER MEMBERS THAT ARE NOT READILY
              ACCESSIBLE TO THE GENERAL PUBLIC MAY BE REVIEWED BY US FOR
              COMPLIANCE WITH THIS AGREEMENT, BUT WILL BE TREATED BY US AS
              PRIVATE TO THE EXTENT REQUIRED BY APPLICABLE LAW.
            </p>
            <h4 className="font-bold text-lg">INTELLECTUAL PROPERTY</h4>
            <p>
              {" "}
              All intellectual property rights in and to the Service are and
              shall be owned by Us, absolutely. Those rights include, but are
              not limited to, database rights, copyright, design rights (whether
              registered or unregistered), patents, trademarks (whether
              registered or unregistered) and other similar rights, wherever
              existing in the world, together with the right to apply for
              protection of the same. All other trademarks, logos, service
              marks, company or product names set forth in the Service are the
              property of their respective owners.
            </p>
            <h4 className="font-bold text-lg">PRIVACY</h4>
            <p>
              The personal information (including sensitive personal
              information) You provide to Us will be stored on computers and/or
              servers. You consent to the use this information to create a
              profile of interests, preferences and browsing patterns and to
              allow You to participate in the Service. You also agree to read,
              review, comply with, uphold and maintain Our Privacy Policy and
              the terms and conditions thereof. If you are located outside of
              Australia, please note that the information that you provide is
              being sent to Australia. By becoming a Member of the Service, you
              consent to your data being sent to Australia and to such other
              third parties and jurisdictions as may be involved in the
              provision and operation of the Service.
            </p>
            <h4 className="font-bold text-lg">DISCLAIMERS</h4>
            <p>
              WE PROVIDE THE SERVICE ON AN "AS IS" BASIS AND GRANT NO WARRANTIES
              OF ANY KIND, EXPRESSED, IMPLIED OR STATUTORY, IN ANY COMMUNICATION
              WITH OUR REPRESENTATIVES, OR US OR OTHERWISE WITH RESPECT TO THE
              SERVICE. WE SPECIFICALLY DISCLAIM ANY IMPLIED WARRANTIES OF
              MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. FURTHER, WE
              DO NOT WARRANT THAT YOUR USE OF THE SERVICE WILL BE SECURE,
              UNINTERRUPTED, ALWAYS AVAILABLE OR ERROR-FREE, OR THAT THE SERVICE
              WILL MEET YOUR REQUIREMENTS OR THAT ANY DEFECTS IN THE SERVICE
              WILL BE CORRECTED. WE DISCLAIM LIABILITY FOR, AND NO WARRANTY IS
              MADE WITH RESPECT TO, CONNECTIVITY AND AVAILABILITY.
            </p>
            <p>
              Although each member must agree to Our terms and conditions, We
              cannot guarantee that each member is at least the required minimum
              age, nor do we accept responsibility or liability for any content,
              communication or other use or access of the Service by persons
              under the age of 18 in violation of this Agreement. Also, it is
              possible that other members or users (including unauthorized
              users, or "hackers") may post or transmit offensive or obscene
              materials through the Service and that You may be involuntarily
              exposed to such offensive or obscene materials. It also is
              possible for others to obtain personal information about You due
              to Your use of the Service. Those others may use your information
              for purposes other than what You intended. We are not responsible
              for the use of any personal information that You disclose on the
              Service. Please carefully select the type of information that You
              post on the Service or release to others. WE DISCLAIM ALL
              LIABILITY, REGARDLESS OF THE FORM OF ACTION, FOR THE ACTS OR
              OMISSIONS OF OTHER MEMBERS OR USERS (INCLUDING UNAUTHORIZED
              USERS), WHETHER SUCH ACTS OR OMISSIONS OCCUR DURING THE USE OF THE
              SERVICE OR OTHERWISE.
            </p>
            <h4 className="font-bold text-lg">LIMITATION OF LIABILITY</h4>
            <p>
              IN NO EVENT WILL WE BE LIABLE TO YOU OR TO ANY OTHER PERSON FOR
              ANY INCIDENTAL, CONSEQUENTIAL, OR INDIRECT DAMAGES (INCLUDING, BUT
              NOT LIMITED TO, DAMAGES FOR LOSS OF DATA, LOSS OF PROGRAMS, COST
              OF PROCUREMENT OF SUBSTITUTE SERVICES OR SERVICE INTERRUPTIONS)
              ARISING OUT OF THE USE OF OR INABILITY TO USE THE SERVICE, EVEN IF
              WE OR OUR AGENTS OR REPRESENTATIVES KNOW OR HAVE BEEN ADVISED OF
              THE POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE
              CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE
              WHATSOEVER, AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL
              TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO US FOR THE
              SERVICE DURING THE TERM OF YOUR MEMBERSHIP. WE DO NOT CONDUCT
              BACKGROUND CHECKS OR OTHERWISE SCREEN MEMBERS REGISTERING TO THE
              SERVICE IN ANY WAY. WE WILL NOT BE LIABLE FOR ANY DAMAGES, DIRECT,
              INDIRECT, INCIDENTAL AND/OR CONSEQUENTIAL, INCLUDING BY NOT
              LIMITED TO PHYSICAL DAMAGES, BODILY INJURY OR EMOTIONAL DISTRESS,
              ARISING OUT OF THE USE OF THIS SERVICE, INCLUDING, WITHOUT
              LIMITATION, DAMAGES ARISING OUT OF YOUR COMMUNICATIONS WITH AND/OR
              INTERACTIONS WITH ANY OTHER MEMBER OF THE SERVICE, OR ANY
              INDIVIDUAL YOU MEET VIA THE SERVICE.
            </p>
            <h4 className="font-bold text-lg">COMPLAINTS</h4>
            <p>
              To resolve a complaint regarding the Service, You should first
              contact Our customer service department by clicking: Contact Us.
            </p>
            <h4 className="font-bold text-lg">DISPUTE RESOLUTION</h4>
            <p>
              This Agreement is governed by the laws of the State of Victoria,
              Australia without regard to its conflict of law provisions. You
              agree to personal jurisdiction by and exclusive venue in the state
              and federal courts of the State of Victoria, Australia, with
              regard to any and all claims by you arising out of or related to
              the Websites. This Agreement shall not be governed by the United
              Nations Convention on Contracts for the International Sale of
              Goods, the application of which is hereby expressly excluded.
            </p>
            <h4 className="font-bold text-lg">
              WAIVER AND SEVERABILITY OF TERMS
            </h4>
            <p>
              Our failure to exercise or enforce any right or provision of this
              Agreement shall not constitute a waiver of such right or
              provision. If any provision of this Agreement is found by a court
              of competent jurisdiction to be void, invalid or unenforceable,
              the parties nevertheless agree that the court should endeavour to
              give effect to the parties' intentions as reflected in the
              provision. In such case, the other provisions of this Agreement
              shall remain in full force and effect. You certify that You have
              read and that You agree to be bound by the terms and conditions in
              this Agreement and our Privacy Policy.
            </p>
          </div>
        </div>
      </ContentBox>
    </section>
  );
}

export default Terms;
