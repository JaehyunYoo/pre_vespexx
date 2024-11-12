"use client";
import React from "react";
import Image from "next/image";
import GetStartedButton from "../GetStartedButton";

const ReviewSection = () => {
  return (
    <section className="container-xl py-[15rem]">
      <div className="w-full flex gap-10">
        {/* Left Sticky */}
        <div className="w-[42%] h-full sticky top-20">
          <Image
            src="/images/left_section.svg"
            alt="image"
            width={560}
            height={420}
          />
          <h5 className="text-left text-2xl font-medium py-10">
            The ultimate couple's super app: syncing
            <br /> schedules, nurturing relationships, and enhancing lifestyles
          </h5>
          <GetStartedButton />
        </div>
        {/* Right Content flex 2 */}
        <div className="w-[58%] flex gap-10">
          {/* Left Review*/}
          <div className="flex w-full">
            {/* Review Card */}
            <div className="w-full flex flex-col gap-10">
              <ReviewCard
                image="/images/left_card_content01.svg"
                title="It's innovative and the developers really understand what we need"
                description=" This is the only app I've found that allows you to view two women'smenstrual cycles and schedules in a single calendar."
              />
              <Image
                src="/images/left1.svg"
                alt="image"
                width={360}
                height={486}
              />
              <Image
                src="/images/left2.svg"
                alt="image"
                width={360}
                height={382}
              />
              <Image
                src="/images/left3.svg"
                alt="image"
                width={360}
                height={444}
              />
            </div>
          </div>
          {/* Right Review*/}
          <div className="w-full flex flex-col gap-10">
            <Image
              src="/images/right1.svg"
              alt="image"
              width={360}
              height={320}
            />
            <ReviewCard
              aspect="aspect-[9/10]"
              image="/images/right_card_content01.svg"
              title="When we'll be home, what plans we have today, when we can go on a date, what we want for dinner"
              description="There's so much to keep track of, It's a real life saver for couples juggling hectic schedules."
            />
            <Image
              src="/images/right2.svg"
              alt="image"
              width={360}
              height={320}
            />
            <ReviewCard
              aspect="aspect-[16/9]"
              image="/images/right_card_content02.svg"
              title="It's the ultimate productivity tool for couple"
              description="Since it syncs with Google Calendar,we can make all sorts of plans without constantly asking each other about our schedules."
            />
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
    <div className="rounded-[24px]">
      <div
        className={`w-full ${
          aspect === undefined ? "aspect-[3/2]" : aspect
        } max-w-[360px] relative`}
      >
        <Image
          src={image}
          alt="image"
          fill
          className="object-cover rounded-t-[24px]"
        />
      </div>
      <div className="p-6 bg-white border-b border-l border-r border-[#E9EBF1] rounded-b-[24px]">
        <Image
          src="/images/couple_review_photo01.svg"
          alt={`${alt ?? "image"}`}
          width={72}
          height={40}
          className="mb-6"
        />

        <h6 className="text-[#333333] text-[24px] font-semibold tracking-[-.5px] mb-6">
          “<br />
          {title}
        </h6>
        <p className="text-[#777777] text-lg font-mediu leading-snug">
          {description}
        </p>
      </div>
    </div>
  );
};
