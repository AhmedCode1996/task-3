import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <section>
        <MaxWidthWrapper>
          <h2 className="text-center text-2xl font-semibold text-[#428BCA] relative p-5">
            Fees and Payment
            <span className="text-[#1E90FF] w-8 h-2 block absolute bottom-0 left-2/4 mt-5 z-10"></span>
          </h2>
          <p className="text-center text-[#A8ABA5] text-sm mb-3">
            REGISTRATION FEES ARE AS FOLLOWS
          </p>
          <table
            className={`${styles.table} w-full capitalize text-[##787B80] font-medium mb-3`}
          >
            <tbody>
              <tr>
                <td>physical presence</td>
                <td className="text-center" rowSpan="2">
                  non egyptian
                </td>
                <td>250 USD</td>
              </tr>
              <tr>
                <td>online participation</td>
                <td>100 USD</td>
              </tr>
              <tr>
                <td>physical presence</td>
                <td className="text-center" rowSpan="2">
                  egyptian
                </td>
                <td>2000 EGP</td>
              </tr>
              <tr>
                <td>online participation</td>
                <td>500 EGP</td>
              </tr>
            </tbody>
          </table>
          <p className="text-[#787b80] text-lg">
            Registration fees cover meeting attendance, publication in the
            online conference proceedings, and publication of selected articles
            with genuine results in the Optical and Quantum Electronics journal,
            as well as conference materials, and coffee breaks.
          </p>
          <h3 className="text-[#374146] text-lg py-3 font-semibold">
            Financial Assistance:
          </h3>
          <p className="text-[#787b80] text-lg">
            A limited number of grants are available to assist
            developing-country participants who will contribute oral and/or
            poster presentations to the conference.
          </p>
          <h3 className="text-[#374146] text-lg py-3 font-semibold">
            Payments can be made by
          </h3>
          <p className="text-[#787b80] text-lg">
            Credit Card via the PayPal to{" "}
            <Link className="text-[#428bca] text-lg" href={"#"}>
              admin@andromedapublisher.com
            </Link>
          </p>
          <h3 className="text-[#374146] text-lg py-3 font-semibold">
            Or by bank transfer to:
          </h3>
          <table
            className={`${styles.miniTable} border-white w-full capitalize text-[##787B80] font-medium	`}
          >
            <tbody>
              <tr>
                <td>Name of bank</td>
                <td>Barclays Bank</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>425-427, Shirley Rd, Southampton SO15 3TH, UK</td>
              </tr>
              <tr>
                <td>Account number</td>
                <td>80632503</td>
              </tr>
              <tr>
                <td>Sort code</td>
                <td>20-79-31</td>
              </tr>
              <tr>
                <td>IBAN account number</td>
                <td>GB47 BUKB 20793180632503</td>
              </tr>
              <tr>
                <td>Swift Code</td>
                <td>BUKBGB22</td>
              </tr>
              <tr>
                <td>Beneficiary’s Name</td>
                <td>Andromeda Publishing and Academic Services</td>
              </tr>
              <tr>
                <td>Beneficiary`&aposs address</td>
                <td>
                  178, Merton High Street, London, SW19 1AY, United Kingdom
                </td>
              </tr>
            </tbody>
          </table>
          <p className="text-center text-2xl font-semibold my-3">
            {" "}
            <Link className="text-[#307CF0]" href="#">
              Registeration
            </Link>
          </p>
        </MaxWidthWrapper>
      </section>
      <section className="bg-[#F6F7F8] pb-10 mt-10">
        <MaxWidthWrapper>
          <div>
            <h2 className="text-[#428BCA] font-medium text-center text-2xl capitalize">
              submissions
            </h2>
            <p className="text-md text-slate-500">
              We would like to invite you to contribute with a review or
              research article presented at the conference for publication in
              the conference proceedings, and publication of selected articles
              with genuine results in the{" "}
              <Link className="text-[#307CF1]" href="#">
                Optical and Quantum Electronics journal.
              </Link>
            </p>
          </div>
          <div className="mt-5">
            <h2 className="text-[#428BCA] font-medium text-center text-2xl capitalize">
              accomodation
            </h2>
            <ul className="text-lg">
              <li>
                <Link className="text-[#307CF1] font-medium" href="#">
                  Hawaii Paradise Aqua Park Resort
                </Link>{" "}
              </li>
              <li className="text-slate-500">
                Prices: $60 single, $75 double, $95 triple
              </li>
            </ul>
          </div>
        </MaxWidthWrapper>
      </section>
      <section>
        <MaxWidthWrapper>
          <div className="py-10">
            <ul className="flex gap-3 justify-between items-center">
              <li className="flex flex-col items-center gap-3">
                <h3 className="text-[#374146] font-semibold text-lg">
                  Organized by
                </h3>
                <Image
                  src="/org1.png"
                  alt="organization"
                  width={150}
                  height={150}
                />
                <p className="text-[#374146] font-semibold text-sm">
                  arab physics society
                </p>
              </li>
              <li className="flex flex-col items-center gap-3">
                <h3 className="text-[#374146] font-semibold text-lg">
                  Hosted by
                </h3>
                <Image
                  src="/waddy.jpg"
                  alt="waddy org"
                  width={150}
                  height={150}
                />
                <p className="text-[#374146] font-semibold text-sm">
                  University of South Valley-Hurgada Branch
                </p>
              </li>
              <li className="flex flex-col items-center gap-3">
                <h3 className="text-[#374146] font-semibold text-lg">
                  Sponsors
                </h3>
                <Image
                  src="/zewial.jpg"
                  alt="zewial org"
                  width={150}
                  height={150}
                />
                <p className="text-[#374146] font-semibold text-sm">
                  Zewail City of Science and Technology
                </p>
              </li>
            </ul>
            <h2 className="text-center my-10 text-2xl font-semibold text-[#374146]">
              Supported Partners
            </h2>
            <ul className="flex justify-center items-center gap-5">
              <li className="flex flex-col items-center">
                <Image src="/uk3.jpg" alt="uk" width={150} height={150} />
                <p>UK Scientific</p>
              </li>
              <li className="flex flex-col items-center">
                <Image src="/or3.png" alt="uk" width={150} height={150} />
                <p>Androme Publishing and academ</p>
              </li>
            </ul>
          </div>
        </MaxWidthWrapper>
      </section>
    </main>
  );
}
