import React from "react";
import Image from "next/image";
import GetStartedButton from "@/components/GetStartedButton";

function ContactUs() {
  return (
    <main>
      <section className="w-full h-full">
        <div className="w-full h-[60svh] relative">
          <Image
            src="/images/contact/contactUs_main.png"
            alt="contact us background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="container-lg">
          {/* Contact Us Form */}
          <div className="w-full h-full flex gap-16 relative top-[-4rem]">
            {/* Left */}
            <div className="w-full h-full mt-[6rem]">
              <h1 className="text-[#29292f] text-4xl font-semibold mb-10">
                Vespexx
                <br />
                Head Office
              </h1>
              {/* Address */}
              <div className="flex flex-col gap-6">
                <div className="flex gap-3">
                  <div className="relative w-5 h-5 mx-1 my-1">
                    <Image
                      src="/images/icons/location_icon.png"
                      alt="location"
                      fill
                      priority
                    />
                  </div>
                  <span className="text-[#5c5f6c] text-lg font-medium">
                    12, Yeongdong-daero 96-gil, <br />
                    Gangnam-gu, <br />
                    Seoul, Republic of Korea
                  </span>
                </div>
                <div className="flex gap-3">
                  <div className="relative w-5 h-5 mx-1 my-1">
                    <Image
                      src="/images/icons/email_icon.png"
                      alt="email"
                      fill
                      priority
                    />
                  </div>
                  <span className="text-[#5c5f6c] text-lg font-medium">
                    support@vespexx.com
                  </span>
                </div>
              </div>
              {/* Email */}
            </div>
            {/* Right */}
            <div className="w-full h-full bg-white rounded-3xl p-10 shadow-inner">
              <div className="relative w-20 h-4 mb-8">
                <Image
                  src="/images/footerLogo.png"
                  alt="contact us form"
                  fill
                  priority
                />
              </div>
              <h2 className="text-[#29292f] text-3xl font-semibold mb-4">
                Make an Online Enquiry
              </h2>
              <p className="text-[#5c5f6c] text-base font-medium mb-14">
                Fill in the form right and a member of our team will be in touch
              </p>
              <form className="w-full">
                <div className="flex flex-wrap ">adfds</div>
              </form>
            </div>
          </div>

          {/* Careers with Vespexx */}
          <article className="w-full px-10  my-[6rem] bg-[#FEF7F7] rounded-[1.5rem]">
            <div className="flex justify-between items-center">
              <div className="py-12">
                <h4 className="text-[#29292f] text-4xl font-semibold mb-6">
                  Careers with Vespexx
                </h4>
                <p className="text-[#5c5f6c] text-lg font-medium mb-10">
                  Join our <strong>Vespexx</strong> team
                  <br />
                  and Revolutionizing couple dynamics
                </p>
                <div className="max-w-[137px]">
                  <GetStartedButton title="Recruits" />
                </div>
              </div>
              <div className="py-10">
                <Image
                  src="/images/team/team_careers.png"
                  alt="product team"
                  width={500}
                  height={500}
                  priority={true}
                />
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default ContactUs;
