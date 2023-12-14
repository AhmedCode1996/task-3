import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <section className="bg-[#F6F7F8] pb-10">
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
