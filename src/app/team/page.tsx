import React, { memo } from "react";
import Image from "next/image";
import {
  cLevelTeamData,
  financeTeamData,
  healthcareTeamData,
  platformTeamData,
  TeamCardDataProps,
} from "@/data/data";
import GetStartedButton from "@/components/GetStartedButton";

function Team() {
  return (
    <main>
      <div className="w-full h-[60svh] relative">
        <Image
          src="/images/team/team_main_bg.png"
          alt="team background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <section className="w-full h-full py-[7.5rem]">
        <div className="container-lg flex flex-col items-center">
          <h1 className="text-[#1e1e1e] text-5xl font-semibold mb-20">
            Our Team
          </h1>
          {/* C-Level Team Card */}
          <h2 className="text-[#29292f] text-2xl font-semibold mb-12">
            C-Level Team
          </h2>
          <div className="flex items-center justify-center gap-10 mb-[6rem]">
            {cLevelTeamData.map((data, index) => (
              <TeamCard data={data} key={index} />
            ))}
          </div>
          {/* Platform Team Card */}
          <h2 className="text-[#29292f] text-2xl font-semibold mb-12">
            Platform Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-[6rem]">
            {platformTeamData.map((data, index) => (
              <TeamCard data={data} key={index} />
            ))}
          </div>
          {/* Healthcare Team Card */}
          <h2 className="text-[#29292f] text-2xl font-semibold mb-12">
            Healthcare Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-[6rem]">
            {healthcareTeamData.map((data, index) => (
              <TeamCard data={data} key={index} />
            ))}
          </div>
          {/* Finance Team Card */}
          <h2 className="text-[#29292f] text-2xl font-semibold mb-12">
            Finance Team
          </h2>
          <div className="flex items-center justify-center mb-[6rem]">
            <TeamCard data={financeTeamData[0]} />
          </div>
          {/* Product Team Card */}
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

export default Team;

const TeamCard = memo(({ data }: { data: TeamCardDataProps }) => {
  return (
    <article className="w-full">
      <Image
        src={data.image}
        alt={data.alt}
        width={380}
        height={285}
        priority={true}
      />
      <h6 className="text-center text-[#29292f] text-2xl font-semibold mt-6 mb-1">
        {data.name}
      </h6>
      <p className="text-center text-[#5c5f6c]text-lg font-medium">
        {data.position}
      </p>
    </article>
  );
});
