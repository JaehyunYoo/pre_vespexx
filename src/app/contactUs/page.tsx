"use client";
import React from "react";
import Image from "next/image";
import GetStartedButton from "@/components/GetStartedButton";
import { useForm } from "react-hook-form";
import { GoArrowRight } from "react-icons/go";

interface HookFormTypes {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}
function ContactUs() {
  const { register, handleSubmit, reset } = useForm<HookFormTypes>();

  const onValid = (data: FormData) => {
    // 폼 데이터 처리

    console.log(data);
  };
  return (
    <main>
      <section className="w-full h-full">
        <div className="w-full h-[55svh] relative">
          <Image
            src="/images/contact/contactUs_main.png"
            alt="contact us background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="max-w-1200 mx-auto">
          <div className="flex md:px-0 xs:px-4">
            {/* Contact Us Form */}
            <div className="w-full h-full flex lg:flex-row xs:flex-col gap-16 relative lg:top-[-4rem] xs:top-0">
              {/* Left */}
              <div className="w-full h-full mt-24">
                <h1 className="text-[#29292f] md:text-4xl xs:text-3xl font-semibold md:mb-10 xs:mb-6">
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
                    <span className="text-[#5c5f6c] md:text-lg xs:text-base font-medium">
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
                    <span className="text-[#5c5f6c] md:text-lg xs:text-base font-medium">
                      support@vespexx.com
                    </span>
                  </div>
                </div>
              </div>
              {/* Right */}
              <div className="w-full h-full bg-white rounded-3xl md:p-10 xs:p-4 shadow-lg">
                <div className="relative w-20 h-4 mb-8">
                  <Image
                    src="/images/footerLogo.png"
                    alt="contact us form"
                    fill
                    priority
                  />
                </div>
                <h2 className="text-[#29292f] text-3xl font-semibold mb-4">
                  Submit an Inquiry
                </h2>
                <p className="text-[#5c5f6c] text-base font-medium mb-14">
                  Fill in the form right and a member of our team will be in
                  touch
                </p>
                {/* Form */}
                <form className="w-full" onSubmit={handleSubmit(() => onValid)}>
                  {/* First Name */}
                  <div className="flex lg:flex-row xs:flex-col gap-4">
                    <div className="w-full flex flex-col">
                      <label className="text-[#727582] text-base font-medium mb-3">
                        First Name *
                      </label>
                      <input
                        {...register("firstName")}
                        type="text"
                        placeholder="Your first name"
                        className="text-sm text-[#727582] font-medium p-4 border border-[#e9ebf1] rounded-xl"
                      />
                    </div>
                    {/* LastName Name */}
                    <div className="w-full flex flex-col mb-8">
                      <label className="text-[#727582] text-base font-medium mb-3">
                        Last Name *
                      </label>
                      <input
                        {...register("lastName")}
                        type="text"
                        placeholder="Your last name"
                        className="text-sm text-[#727582] font-medium p-4 border border-[#e9ebf1] rounded-xl"
                      />
                    </div>
                  </div>
                  {/* Email */}
                  <div className="w-full flex flex-col mb-8">
                    <label className="text-[#727582] text-base font-medium mb-3">
                      Email *
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="Your email"
                      className="text-sm text-[#727582] font-medium p-4 border border-[#e9ebf1] rounded-xl"
                    />
                  </div>
                  {/* Message */}
                  <div className="w-full flex flex-col mb-14">
                    <label className="text-[#727582] text-base font-medium mb-3">
                      Message *
                    </label>
                    <input
                      {...register("message")}
                      type="text"
                      placeholder="Your message"
                      className="text-sm text-[#727582] font-medium p-4 border border-[#e9ebf1] rounded-xl"
                    />
                  </div>
                  {/* Submit */}
                  <button type="submit" className="w-full">
                    <div className="px-6 py-4 bg-gradient-to-r from-[#ff9328] to-[#feb061] hover:from-[#ff8711] hover:to-[#ffaa55] transition-colors duration-500 ease-in-out rounded-[100px] flex items-center justify-center">
                      <p className="text-white font-bold">Send Inquiry</p>
                      <GoArrowRight color="white" size={24} className="ml-2" />
                    </div>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="my-24 md:px-0 xs:px-4">
            <article className="w-full px-10 py-8 bg-[#FEF7F7] rounded-3xl">
              <div className="grid grid-cols-12">
                <div className="lg:col-span-7 md:col-span-6 xs:col-span-12">
                  <h4 className="text-[#29292f] lg:text-4xl md:text-2xl xs:text-2xl font-semibold mb-6">
                    Careers with Vespexx
                  </h4>
                  <p className="text-[#5c5f6c] md:text-lg xs:text-sm font-medium mb-10">
                    Join our <strong>Vespexx</strong> team
                    <br />
                    and revolutionizing couple dynamics
                  </p>
                  <div className="inline-block">
                    <GetStartedButton title="Explore Careers" />
                  </div>
                </div>
                <div className="lg:col-span-5 md:col-span-6 md:block xs:hidden">
                  <div className="flex items-center justify-end">
                    <Image
                      src="/images/team/team_careers.png"
                      alt="Vespexx careers"
                      width={420}
                      height={243}
                      priority
                    />
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactUs;

// const test = () => {
//   return (
//     <div className="container-lg">
//       {/* Contact Us Form */}
//       <div className="w-full h-full flex gap-16 relative top-[-4rem]">
//         {/* Left */}
//         <div className="w-full h-full mt-[6rem]">
//           <h1 className="text-[#29292f] text-4xl font-semibold mb-10">
//             Vespexx
//             <br />
//             Head Office
//           </h1>
//           {/* Address */}
//           <div className="flex flex-col gap-6">
//             <div className="flex gap-3">
//               <div className="relative w-5 h-5 mx-1 my-1">
//                 <Image
//                   src="/images/icons/location_icon.png"
//                   alt="location"
//                   fill
//                   priority
//                 />
//               </div>
//               <span className="text-[#5c5f6c] text-lg font-medium">
//                 12, Yeongdong-daero 96-gil, <br />
//                 Gangnam-gu, <br />
//                 Seoul, Republic of Korea
//               </span>
//             </div>
//             <div className="flex gap-3">
//               <div className="relative w-5 h-5 mx-1 my-1">
//                 <Image
//                   src="/images/icons/email_icon.png"
//                   alt="email"
//                   fill
//                   priority
//                 />
//               </div>
//               <span className="text-[#5c5f6c] text-lg font-medium">
//                 support@vespexx.com
//               </span>
//             </div>
//           </div>
//           {/* Email */}
//         </div>
//         {/* Right */}
//         <div className="w-full h-full bg-white rounded-3xl p-10 shadow">
//           <div className="relative w-20 h-4 mb-8">
//             <Image
//               src="/images/footerLogo.png"
//               alt="contact us form"
//               fill
//               priority
//             />
//           </div>
//           <h2 className="text-[#29292f] text-3xl font-semibold mb-4">
//             Make an Online Enquiry
//           </h2>
//           <p className="text-[#5c5f6c] text-base font-medium mb-14">
//             Fill in the form right and a member of our team will be in touch
//           </p>
//           {/* Form */}
//           <form className="w-full" onSubmit={handleSubmit(() => onValid)}>
//             {/* First Name */}
//             <div className="flex gap-4">
//               <div className="w-full flex flex-col">
//                 <label className="text-[#727582] text- font-medium mb-3">
//                   First Name *
//                 </label>
//                 <input
//                   {...register("firstName")}
//                   type="text"
//                   placeholder="Your first name"
//                   className="text-sm text-[#727582] font-medium p-4 border border-[#e9ebf1] rounded-xl"
//                 />
//               </div>
//               {/* LastName Name */}
//               <div className="w-full flex flex-col mb-8">
//                 <label className="text-[#727582] text- font-medium mb-3">
//                   Last Name *
//                 </label>
//                 <input
//                   {...register("lastName")}
//                   type="text"
//                   placeholder="Your last name"
//                   className="text-sm text-[#727582] font-medium p-4 border border-[#e9ebf1] rounded-xl"
//                 />
//               </div>
//             </div>
//             {/* Email */}
//             <div className="w-full flex flex-col mb-8">
//               <label className="text-[#727582] text- font-medium mb-3">
//                 Email *
//               </label>
//               <input
//                 {...register("email")}
//                 type="email"
//                 placeholder="Your email"
//                 className="text-sm text-[#727582] font-medium p-4 border border-[#e9ebf1] rounded-xl"
//               />
//             </div>
//             {/* Message */}
//             <div className="w-full flex flex-col mb-14">
//               <label className="text-[#727582] text- font-medium mb-3">
//                 Message *
//               </label>
//               <input
//                 {...register("message")}
//                 type="text"
//                 placeholder="Your message"
//                 className="text-sm text-[#727582] font-medium p-4 border border-[#e9ebf1] rounded-xl"
//               />
//             </div>
//             {/* Submit */}
//             <button type="submit" className="w-full">
//               <div className="px-6 py-4 bg-gradient-to-r from-[#ff9328] to-[#feb061] hover:from-[#ff8711] hover:to-[#ffaa55] transition-colors duration-500 ease-in-out rounded-[100px] flex items-center justify-center">
//                 <p className="text-white font-bold">Submit</p>
//                 <GoArrowRight color="white" size={24} className="ml-2" />
//               </div>
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Careers with Vespexx */}
//       <article className="w-full px-10  my-[6rem] bg-[#FEF7F7] rounded-[1.5rem]">
//         <div className="flex justify-between items-center">
//           <div className="py-12">
//             <h4 className="text-[#29292f] text-4xl font-semibold mb-6">
//               Careers with Vespexx
//             </h4>
//             <p className="text-[#5c5f6c] text-lg font-medium mb-10">
//               Join our <strong>Vespexx</strong> team
//               <br />
//               and Revolutionizing couple dynamics
//             </p>
//             <div className="max-w-[137px]">
//               <GetStartedButton title="Recruits" />
//             </div>
//           </div>
//           <div className="py-10">
//             <Image
//               src="/images/team/team_careers.png"
//               alt="product team"
//               width={500}
//               height={500}
//               priority={true}
//             />
//           </div>
//         </div>
//       </article>
//     </div>
//   );
// };
