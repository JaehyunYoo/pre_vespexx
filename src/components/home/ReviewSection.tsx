"use client";
import React from "react";
import Image from "next/image";
import GetStartedButton from "../GetStartedButton";

const ReviewSection = () => {
  return (
    <section className='container-xl py-c-15'>
      <div className='grid items-start gap-x-10 xs:gap-y-10  md:grid-cols-11 md:px-0'>
        <div className='md:sticky md:top-20 md:col-span-5'>
          <div className='w-full aspect-[560/406] relative rounded-[24px] overflow-hidden'>
            <video
              src='https://firebasestorage.googleapis.com/v0/b/vespexx-signal-dev-4c404.appspot.com/o/video%2Fmain.mp4?alt=media&token=d46ff5ba-ecc0-4811-9db9-2a27086f7424'
              autoPlay
              muted
              loop
              playsInline
              preload='auto'
              className='w-full absolute top-0 left-0 h-full object-cover overscroll-none z-[-1]'
            />
            <div className='h-full flex flex-col items-center justify-center z-10 rounded-[24px] text-center'>
              <h4 className='text-white text-4xl xs:text-2xl font-bold mb-5'>
                Stay connected,
                <br /> wherever life takes you
              </h4>
              <p className='text-white text-base xs:text-sm font-medium'>
                No matter what you do or where you are
              </p>
            </div>
          </div>
          <p className='md:text-left md:text-2xl xs:text-lg font-medium md:py-10 xs:py-6 text-black '>
            The essential app for couples: syncing
            schedules, nurturing relationships, and
            enriching your lifestyle.
          </p>
          <div className='md:mt-10 xs:mt-4 flex justify-start'>
            <GetStartedButton
              title='Get Started'
              padding='lg:px-7 lg:py-5 xs:px-6 xs:py-4'
              textSize='lg:text-xl xs:text-base'
            />
          </div>
        </div>
        <div className='md:col-span-6'>
          <div className='flex lg:flex-row xs:flex-col gap-10'>
            <div className='flex w-full'>
              <div className='w-full flex flex-col gap-10'>
                <ReviewCard
                  image='/images/home/review_left_signaling01.png'
                  title="It's innovative and the developers really understand what we need"
                  description="This is the only app I've found that allows you to view two women's menstrual cycles and schedules in a single calendar.  "
                />
                <div className='relative w-full aspect-[360/486] rounded-[24px] overflow-hidden md:block xs:hidden'>
                  <Image
                    src='/images/home/left_signaling_01.png'
                    alt='image'
                    className='object-cover'
                    fill
                  />
                </div>
                <div className='relative w-full aspect-[360/382] rounded-[24px] overflow-hidden md:block xs:hidden'>
                  <Image
                    src='/images/home/left_signaling_02.png'
                    alt='image'
                    className='object-cover'
                    fill
                  />
                </div>
                <div className='relative w-full aspect-[360/444] rounded-[24px] overflow-hidden md:block xs:hidden'>
                  <Image
                    src='/images/home/left_signaling_03.png'
                    alt='image'
                    className='object-cover'
                    fill
                  />
                </div>
              </div>
            </div>
            <div className='w-full flex flex-col gap-10'>
              <div className='relative w-full aspect-[360/320] rounded-[24px] overflow-hidden md:block xs:hidden'>
                <Image
                  src='/images/home/right_signaling01.png'
                  alt='right signaling contents'
                  priority
                  className='object-cover'
                  fill
                />
              </div>
              <ReviewCard
                aspect='aspect-[9/10]'
                image='/images/home/review_right_signaling01.png'
                title="When we'll be home, what plans we have today, when we can go on a date, what we want for dinner"
                description="There's so much to keep track of, It's a real life saver for couples juggling hectic schedules."
              />
              <div className='relative w-full aspect-[360/320] rounded-[24px] overflow-hidden md:block xs:hidden'>
                <Image
                  src='/images/home/right_signaling02.png'
                  alt='right signaling contents'
                  className='object-cover'
                  fill
                />
              </div>
              <ReviewCard
                aspect='aspect-[16/9]'
                image='/images/home/review_right_signaling02.png'
                title="It's the ultimate productivity tool for couple"
                description='Since it syncs with Google Calendar,we can make all sorts of plans without constantly asking each other about our schedules.'
                alt='right signaling contents'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;

const ReviewCard = ({
  image,
  title,
  description,
  aspect,
  alt,
}: {
  image: string;
  title: string;
  description: string;
  aspect?: string;
  alt?: string;
}) => {
  return (
    <div className='rounded-[24px]'>
      <div
        className={`w-full ${
          aspect === undefined ? "aspect-[3/2]" : aspect
        } relative`}
      >
        <Image
          src={image}
          alt='image'
          fill
          className='object-cover rounded-t-[24px]'
          priority
        />
      </div>
      <div className='p-6 bg-white border-b border-l border-r border-[#E9EBF1] rounded-b-[24px]'>
        <Image
          src='/images/home/couple_review_photo01.png'
          alt={`${alt ?? "couple review photo"}`}
          width={72}
          height={40}
          className='mb-6'
          priority
        />

        <h6 className='text-[#333333] text-2xl font-semibold tracking-[-.5px] mb-6'>
          “<br />
          {title}
        </h6>
        <p className='text-[#777777] text-lg xs:text-base font-medium leading-snug'>
          {description}
        </p>
      </div>
    </div>
  );
};

// const test =() => {
//   return     <section className='container  xs:mx-auto py-[15rem]'>
//   <div className='w-full flex lg:flex-row xs:flex-col gap-10'>

//     <div className='lg:w-[42%] h-full lg:sticky lg:top-20'>
//       <div className='w-[320px] sm:w-[400px] md:w-[480px] lg:w-[560px] aspect-[560/406] relative rounded-[24px] overflow-hidden'>
//         <div className='w-full h-full bg-black/50 z-10 flex flex-col items-center justify-center'>
//           <h4 className='text-white text-4xl font-bold mb-5'>
//             Better Together
//           </h4>
//           <p className='text-white text-[16px] font-medium'>
//             No matter what you do or where you are
//           </p>
//         </div>
//         <video
//           src='https://firebasestorage.googleapis.com/v0/b/vespexx-signal-dev-4c404.appspot.com/o/video%2Fmain.mp4?alt=media&token=d46ff5ba-ecc0-4811-9db9-2a27086f7424'
//           autoPlay
//           muted
//           loop
//           playsInline
//           preload='auto'
//           className='w-full absolute top-0 left-0 h-full object-cover overscroll-none'
//         />
//       </div>

//       <h5 className='text-left text-2xl font-medium py-10'>
//         The ultimate couple's super app: syncing
//         <br /> schedules, nurturing relationships, and
//         enhancing lifestyles
//       </h5>
//       <div className='max-w-[200px]'>
//         <GetStartedButton
//           title='Get Started'
//           textSize='text-xl'
//           padding='px-7 py-5'
//         />
//       </div>
//     </div>
//     {/* Right Content flex 2 */}
//     <div className='w-[58%] flex gap-10'>
//       {/* Left Review*/}
//       <div className='flex w-full'>
//         {/* Review Card */}
//         {/* <div className="w-full flex flex-col gap-10">
//           <ReviewCard
//             image="/images/home/review_left_signaling01.png"
//             title="It's innovative and the developers really understand what we need"
//             description="This is the only app I've found that allows you to view two women's menstrual cycles and schedules in a single calendar.  "
//           />
//           <Image
//             src="/images/home/left_signaling_01.png"
//             alt="image"
//             width={360}
//             height={486}
//           />
//           <Image
//             src="/images/home/left_signaling_02.png"
//             alt="image"
//             width={360}
//             height={382}
//           />
//           <Image
//             src="/images/home/left_signaling_03.png"
//             alt="image"
//             width={360}
//             height={444}
//           />
//         </div> */}
//       </div>
//       {/* Right Review*/}
//       <div className='w-full flex flex-col gap-10'>
//         {/* <Image
//           src="/images/home/right_signaling01.png"
//           alt="right signaling contents"
//           width={360}
//           height={320}
//           priority
//         />
//         <ReviewCard
//           aspect="aspect-[9/10]"
//           image="/images/home/review_right_signaling01.png"
//           title="When we'll be home, what plans we have today, when we can go on a date, what we want for dinner"
//           description="There's so much to keep track of, It's a real life saver for couples juggling hectic schedules."
//         />
//         <Image
//           src="/images/home/right_signaling02.png"
//           width={360}
//           height={320}
//           alt="right signaling contents"
//         />
//         <ReviewCard
//           aspect="aspect-[16/9]"
//           image="/images/home/review_right_signaling02.png"
//           title="It's the ultimate productivity tool for couple"
//           description="Since it syncs with Google Calendar,we can make all sorts of plans without constantly asking each other about our schedules."
//           alt="right signaling contents"
//         /> */}
//         </div>
//       </div>
//     </div>
//   </section>
// }
