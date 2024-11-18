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
      <div className="w-full md:h-[60svh] xs:h-[45svh] relative">
        <Image
          src="/images/team/team_main_bg.png"
          alt="team background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <section className="w-full h-full md:py-28 xs:py-14">
        <div className="max-w-1200 mx-auto md:px-0 xs:px-4">
          <h1
            className="text-color-s-gray md:text-5xl xs:text-2xl font-semibold md:mb-20 xs:mb-14 text-center"
            id="aspiration-section"
          >
            Our Team
          </h1>
          {/* C-Level Team Card */}
          <h2 className="text-color-s-gray text-xl font-semibold md:mb-12 xs:mb-8 text-center">
            C-Level
          </h2>
          <div className="flex items-center justify-center md:mb-24 xs:mb-14">
            <div className="flex md:flex-row xs:flex-col items-center justify-center gap-8">
              {cLevelTeamData.map((data, index) => (
                <TeamCard data={data} key={index} />
              ))}
            </div>
          </div>
          {/* Platform Team Card */}
          <h2 className="text-[#29292f] text-2xl font-semibold mb-12 text-center">
            Platform Team
          </h2>
          <div className="w-full flex justify-center mb-24">
            <div className="grid grid-cols-1 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-[6rem] place-items-center">
              {platformTeamData.map((data, index) => (
                <TeamCard data={data} key={index} />
              ))}
            </div>
          </div>
          {/* Healthcare Team Card */}
          <h2 className="text-[#29292f] text-2xl font-semibold mb-12 text-center">
            Healthcare Team
          </h2>
          <div className="w-full flex justify-center mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 justify-items-center">
              {healthcareTeamData.map((data, index) => (
                <TeamCard data={data} key={index} />
              ))}
            </div>
          </div>
          {/* Finance Team Card */}
          <h2 className="text-[#29292f] text-2xl font-semibold mb-12 text-center">
            Finance Team
          </h2>
          <div className="flex items-center justify-center mb-[6rem]">
            <div>
              <TeamCard data={financeTeamData[0]} />
            </div>
          </div>
          {/* Career Team Card */}
          <article className="w-full px-10 bg-[#FEF7F7] rounded-3xl"></article>
          {/* <article className="w-full px-10  my-[6rem] bg-[#FEF7F7] rounded-[1.5rem]">
            <div className="flex justify-between items-center">
              <div className="py-12">
                <h4 className="text-[#29292f] md:text-4xl xs:text-2xl font-semibold mb-6">
                  Careers with Vespexx
                </h4>
                <p className="text-[#5c5f6c] md:text-lg xs:text-sm font-medium mb-10">
                  Join our <strong>Vespexx</strong> team
                  <br />
                  and Revolutionizing couple dynamics
                </p>
                <div className="inline-block">
                  <GetStartedButton title="Explore Careers" />
                </div>
              </div>
              <div className="py-10 md:block xs:hidden">
                <Image
                  src="/images/team/team_careers.png"
                  alt="product team"
                  width={420}
                  height={243}
                  priority={true}
                />
              </div>
            </div>
          </article> */}
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

// const test = () => {
//   return (
//     <div className="container-lg flex flex-col items-center">
//       <h1
//         className="text-[#1e1e1e] text-5xl font-semibold mb-20"
//         id="aspiration-section"
//       >
//         Our Team
//       </h1>
//       {/* C-Level Team Card */}
//       <h2 className="text-[#29292f] text-2xl font-semibold mb-12">
//         C-Level Team
//       </h2>
//       <div className="flex items-center justify-center gap-10 mb-[6rem]">
//         {cLevelTeamData.map((data, index) => (
//           <TeamCard data={data} key={index} />
//         ))}
//       </div>
//       {/* Platform Team Card */}
//       <h2 className="text-[#29292f] text-2xl font-semibold mb-12">
//         Platform Team
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-[6rem]">
//         {platformTeamData.map((data, index) => (
//           <TeamCard data={data} key={index} />
//         ))}
//       </div>
//       {/* Healthcare Team Card */}
//       <h2
//         className="text-[#29292f] text-2xl font-semibold mb-12"
//         id="aspiration-section"
//       >
//         Healthcare Team
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-[6rem]">
//         {healthcareTeamData.map((data, index) => (
//           <TeamCard data={data} key={index} />
//         ))}`
//       </div>
//       {/* Finance Team Card */}
//       <h2 className="text-[#29292f] text-2xl font-semibold mb-12">
//         Finance Team
//       </h2>
//       <div className="flex items-center justify-center mb-[6rem]">
//         <TeamCard data={financeTeamData[0]} />
//       </div>
//       {/* Product Team Card */}
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
//           <div className="py-10 md:block xs:hidden">
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
