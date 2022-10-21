import React from "react";
import Head from "../../components/Head";
import ParagraphGenerator from "../../components/paragraph_generator";
import ContentHeadline from "../../components/contentHeadline";

const json = [
  {
    content: "1. INTRODUCTION",
  },
  {
    content: [
      `These terms of service set out the terms under which you may use this website <a href=https://www.proprep.uk>https://www.proprep.uk</a> (“Our Site”), and the terms and conditions between you, the user/customer, and Proprep UK Ltd (“we”, “us”, “our”), governing the use of Our Site, our online digital and downloadable content, therein collectively (“products and services”).`,

      `Use of Our Site, account registration, purchase, download and use of our products & services constitutes your full acceptance of these terms and conditions. If you do not agree with these terms and conditions, you should not use Our site, register an account, or purchase, download or use any of our products and services.`,
    ],
    list_style: "numeric",
    gap: "10px",
  },
  {
    content: `2. INFORMATION ABOUT US`,
  },
  {
    content: `Our Site <a href=https://www.proprep.uk>https://www.proprep.uk</a> is owned and operated by Proprep UK Ltd, a company registered in England, under company number 11404703, whose registered address is 1st Floor 314 Regents Park Road, Finchley, London, United Kingdom, N3 2LT.`,
  },
  {
    content: `3. ACCESS TO OUR SITE`,
  },
  {
    content: [
      `Access to Our Site is free of charge.`,
      `It is your responsibility to make any and all arrangements necessary in order to access Our Site.`,
      `Access to Our Site is provided “as is” and “as available” and “with all faults” basis without warranties or representations of any kind either express or implied. We may alter, suspend, or discontinue Our Site (or any part of it) at any time and without notice. We will not be liable to you in any way if Our Site (or any part of it) is unavailable at any time and for any period.`,
    ],
    list_style: "numeric",
  },
  {
    content: `4. ACCOUNTS`,
  },
  {
    content: [
      `Certain parts of Our Site (including the ability to purchase paid content from us) may require an account in order to access them.`,
      `You may not create an account if you are under 16 years of age. If you are under 18 years of age you should gain parental consent`,
      `When creating an account, the information you provide must be accurate and complete. If any of your information changes at a later date, it is your responsibility to ensure that your account is kept up to date.`,
      `We recommend that you choose a strong password for your account, e.g. a combination of lowercase and uppercase letters, numbers, and symbols. It is your responsibility to keep your password safe.`,
      `You must not share your account with anyone else. If you believe your Account is being used without your permission, you must contact us immediately at <a href=mailto:info@proprep.uk>info@proprep.uk</a>. We will not be liable for any unauthorised use of your account.`,
      `We reserve the right to suspend or terminate with immediate effect, any account that we suspect or know is being used by anyone other than the person who created and owns the account.

      4.7In line with our Privacy Notice, we may monitor personal Internet Protocol addresses (IP’s) in order to identify logins in multiple locations or from multiple devices.`,
      `On suspension of an account we will investigate and act based on our findings. In the event that we terminate your account in response to a breach of these terms no refund will be given.`,
      `Where any referral scheme is active, we reserve the right to stop the issue of discounts or payments if we suspect any user to be using the referral scheme fraudulently, including but not limited to fake or inactive user referrals.`,
      `Any personal information you provide in your account will be collected, used, and held in accordance with your rights and our obligations under data protection law, as set out in our Privacy Notice.`,
      `If you wish to close your account, you may do so at any time. Closing your account will result in the removal of your information. Closing your account will also remove access to any areas of Our Site requiring an account for access.`,
    ],
    list_style: "numeric",
    gap: "10px",
  },
  {
    content: `5. SUBSCRIPTIONS, PAID CONTENT AND PRICING`,
  },
  {
    content: [
      `We make all reasonable efforts to ensure that all descriptions of subscriptions and paid content available from us correspond to the actual subscription and paid content that you will receive. However, this does not mean from time-to-time that minor differences and discrepancies may occur.`,
      `We may from time-to-time change our prices. Changes in price will not affect any subscription that you have already purchased but will apply to any subsequent renewal or new subscription.`,
      `We make all reasonable efforts to ensure that all prices shown on Our Site are correct at the time of going online. Changes in price will not affect any order already placed.`,
      `In the unlikely event that we have shown incorrect pricing information, we will contact you in writing to inform you of the mistake. If the correct price is lower than that shown when you made your order, we will simply charge you the lower amount and continue processing your order. If the correct price is higher, we will give you the option to purchase the subscription at the correct price or to cancel your order (or the affected part of it).`,
      `Minor changes may, from time-to-time, be made to paid content, for example, to reflect changes in relevant laws and regulatory requirements, or to address technical or security issues. These changes will not alter the main characteristics of the paid content and should not normally affect your use of that content. However, if any change is made that would affect your use of the paid content, suitable information will be provided to you.`,
    ],
    list_style: "numeric",
    gap: "10px",
  },
  {
    content: `6. CANCELLING YOUR SUBSCRIPTION`,
  },
  {
    content: [
      `If you are a consumer in the European Union, by default you have a legal right to a “cooling-off” period within which you can cancel the Contract for any reason, including if you have changed your mind, and receive a refund. The period begins once we have sent you your subscription confirmation and ends when you access (e.g. view or download) the paid content, or 30 calendar days after the date of our subscription Confirmation, whichever occurs first.`,
      `Outside of this “cooling-off” period you can cancel your subscription at any time; however, we do not offer refunds on our 1 and 3 month plans.`,
      `When you cancel an annual subscription, we offer a residual refund based on the actual number of months used and the cost of the monthly subscription.`,
    ],
    list_style: "numeric",
    gap: "10px",
  },
  {
    tag: "h2",
    content: `7. AVAILABILITY OF OUR PRODUCTS AND SERVICES`,
  },
  {
    content: [
      `Whilst we will try to provide you with uninterrupted access to our products and services, we may at times need to withdraw, modify, discontinue or temporarily or permanently suspend one or more aspects of Our Site, where we have a legal, technical or other good reason to do so.`,
      `Paid content will be available to you immediately when we send you a subscription confirmation and will continue to be available for the duration of your subscription (including renewals), or until the contract is ended.`,
      `If we need to suspend availability of paid content, we will inform you in advance of the suspension and explain why it is necessary (unless the suspension of availability is urgent or for emergency reasons, in which case we will inform you as soon as reasonably possible after suspension.`,
      `We may suspend the availability of paid content if we do not receive payment on time from you. We will inform you of the non-payment on the due date. If we do not receive payment within 7 days of notifying you, we will suspend the availability of paid content.`,
      `We reserve the right to withhold, remove and/or discard any content available as part of your account, with or without notice at any time.`,
    ],
    list_style: "numeric",
    gap: "10px",
  },
  {
    content: `8. INTELLECTUAL PROPERTY RIGHTS`,
  },
  {
    content: [
      `All content that forms part of our products and services, whether modified or not, and all intellectual property and copyright contained therein, is at all times our sole and exclusive property.`,
      `Under these terms you agree that under no circumstances, whether content has been modified or not, shall you have or attempt to claim ownership of any intellectual property rights or copyright in our content.`,
      `You may not reproduce, copy, distribute, sell, rent, sub-licence, store, or in any other manner re-use content from our products and services unless given express written permission by us.`,
      `You may not use any content printed, saved or downloaded from Our Site for commercial purposes without first obtaining our express consent.`,
    ],

    list_style: "numeric",
    gap: "10px",
  },
  {
    content: `9. LINKING TO OUR SITE`,
  },
  {
    content: [
      `You may not link to any page other than the homepage of Our Site. Linking to other pages requires our express written permission.`,
      `Framing or embedding of Our Site on other websites is not permitted without our express written permission.`,
    ],
    list_style: "numeric",
    gap: "10px",
  },
  {
    content: `10. LINKING TO THIRD PARTY SITES`,
  },
  {
    content: [
      `We are only liable for creating links to third-party websites and services and do not exercise any control over the third-party websites or services. We cannot be held liable for the availability of links directing to third-party websites or services, and cannot be held liable for their content, advertisements, products, features, or services. The use of third-party websites and resources is governed by their individual conditions of use.`,
    ],
    list_style: "numeric",
    gap: "10px",
  },
  {
    tag: "h2",
    content: `11. LIMITATION OF LIABILITIES, INDEMNITY AND WARRANTY`,
  },
  {
    content: [
      `Nothing on Our Site constitutes advice on which you should rely. It is provided for general information purposes only.`,
      ` We make all possible efforts to ensure that our products and services are accurate and fit for use by our customers. However, we take no responsibility whatsoever for the suitability of the products and service, and we provide no warranties as to the function or use of the products and services, whether express, implied or statutory, including without limitation any warranties of merchantability or fitness for a particular purpose.`,
      `You agree to indemnify us against all liabilities, claims, demands, expenses, actions, costs, damages, or loss arising out of your breach of these terms.`,
      `We shall not be liable to you or any party for consequential, indirect, special or exemplary damages including but not limited to damages for loss of profits, business or anticipated benefits whether arising under tort, contract, negligence or otherwise whether or not foreseen, reasonably foreseeable or advised of the possibility of such damages.`,
    ],

    list_style: "numeric",
    gap: "10px",
  },
  {
    content: `12. NO GUARANTEE OF ACADEMIC ACHIEVEMENT`,
  },
  {
    content: [
      `In no way do we guarantee any outcome in formal academic testing, or that the material which appears on the website is exhaustive in the relevant subject matter.`,
    ],

    list_style: "numeric",
  },
  {
    content: `13. VIRUSES, MALWARE AND SECURITY`,
  },
  {
    content: [
      `We exercise all reasonable precautions to ensure that Our Site is secure and free from viruses and other malware.`,
      `You are responsible for protecting your hardware, software, data and other material from viruses, malware, and other internet security risks.`,
      `You must not deliberately introduce viruses or other malware, or any other material which is malicious or technologically harmful either to or via Our Site.`,
      `You must not attempt to gain unauthorised access to any part of Our Site, the server on which Our Site is stored, or any other server, computer, or database connected to Our Site.`,
      `You must not attack Our Site by means of a denial of service attack, a distributed denial of service attack, or by any other means.`,
      `By breaching any of the above you may be committing a criminal offence under the Computer Misuse Act 1990. Any and all such breaches will be reported to the relevant law enforcement authorities.`,
    ],
    list_style: "numeric",
    gap: "10px",
  },
  {
    content: `14. ACCEPTABLE USE`,
  },
  {
    content: [
      `You may only use Our Site in a manner that is lawful and that complies with the provisions of these terms.`,
      `You must ensure that you comply fully with any and all local, national or international laws and/or regulations.`,
      `You must not use Our Site in any way, or for any purpose, that is unlawful or fraudulent.`,
      `You must not use Our Site in any way, or for any purpose, that is intended to harm any person or persons in any way.`,
      `We reserve the right to suspend or terminate your access to Our Site if you breach the provisions of these terms. We may take one or more of the following actions:`,
    ],
    list_style: "numeric",
    gap: "10px",
  },
  {
    content: [
      `Suspend, whether temporarily or permanently, your account and/or your right to access Our Site;`,
      `Issue you with a written warning;`,
      `Take legal proceedings against you for reimbursement of any and all relevant costs on an indemnity basis resulting from your breach;`,
      `Take further legal action against you as appropriate;`,
      ` Disclose such information to law enforcement authorities as required or as We deem reasonably necessary; and/or`,
      `Any other actions which We deem reasonably appropriate and lawful.`,
    ],
  },
  {
    content: `15. PRIVACY AND COOKIES`,
  },
  {
    content: [
      `Use of Our Site is also governed by our Cookie and Privacy Policies, available from <a href=https://www.proprep.uk/Cookies-Policy>https://www.proprep.uk/Cookies-Policy</a> and <a href=https://www.proprep.uk/Privacy-Notice>https://www.proprep.uk/Privacy-Notice</a>. These policies are incorporated into these Terms of Service by this reference.`,
    ],
    list_style: "numeric",
  },
  {
    content: `16. CHANGES TO THESE TERMS`,
  },
  {
    content: [
      `We reserve the right, at our discretion, and at any time, to change, modify, add or remove portions of these terms of service.`,
      `In the event these terms are altered, the amended terms of service will always be available on Our Site and amendments will be binding from your first use following the date of posting.`,
      `If after the terms of service have been altered you do not agree to their terms, you must stop using Our site.`,
    ],
    list_style: "numeric",
    gap: "10px",
  },
  {
    content: `17. CONTACTING US`,
  },
  {
    content: [
      `To contact us, please email us at or using any of the methods provided on Our Site.`,
    ],
    list_style: "numeric",
  },
];

export default function TermsOfService() {
  return (
    <>
      <Head slug="/terms-of-service" />
      <div>
        <ContentHeadline>Terms of Service</ContentHeadline>
        <div className="page py-4 d-flex flex-column gap-3">
          <ParagraphGenerator json={json} />
        </div>
      </div>
    </>
  );
}
