import { PiCertificateBold } from 'react-icons/pi';
import Link from 'next/link';
import { experiences } from '@/constants/experiences'; // Import experiences as usual
import type { Experience } from '@/constants/experiences'; // Import Experience type only
// Import the experiences array and Experience interface

export default function Experience() {
  return (
    <div
      className="min-h-lvhScreen my-10 flex scroll-m-24 flex-col items-center justify-center"
      id="experience"
    >
      <h2 className="mb-10 text-4xl md:mb-14">Experience</h2>
      <div className="relative mx-auto max-w-[800px] lg:before:absolute lg:before:left-[50%] lg:before:h-full lg:before:w-[2px] lg:before:translate-x-[-50%] lg:before:rounded-full lg:before:bg-textLight-400 lg:before:content-['']">
        <ul>
          {experiences.map(
            (
              {
                role,
                company,
                detail,
                skills,
                joinDate,
                endDate,
                certificate,
              }: Experience, // Correctly use the interface here
              index: number // Type the index as a number
            ) => (
              <li
                key={index}
                className="relative top-0 mb-6 rounded-s bg-bgBlack-400 p-5 shadow-boxFade transition-all duration-500 last:mb-0 hover:shadow-boxFull lg:relative lg:mb-12 lg:w-1/2 lg:after:absolute lg:after:aspect-square lg:after:h-4 lg:after:rounded-full lg:after:bg-textLight-400 lg:after:content-[''] lg:odd:float-left lg:odd:clear-right lg:odd:translate-x-[-30px] lg:odd:after:right-[-30px] lg:odd:after:top-0 lg:odd:after:translate-x-[50%] lg:odd:after:translate-y-[-50%] lg:even:float-right lg:even:clear-left lg:even:translate-x-[30px] lg:even:after:left-[-30px] lg:even:after:top-0 lg:even:after:translate-x-[-50%] lg:even:after:translate-y-[-50%] lg:hover:after:bg-accent-400 lg:hover:after:outline lg:hover:after:outline-2"
              >
                <div>
                  {/* Display join and end dates */}
                  <p className="mb-3 text-sm font-medium tracking-wide text-textLight-400 lg:absolute lg:top-[-30px]">{`${joinDate} - ${endDate}`}</p>
                  <h3 className="text-xl">{role}</h3>
                  <h4 className="text-sm">{company}</h4>

                  {/* Display job description */}
                  <ul className="mb-4 mt-3">
                    {detail.map((line: string, i: number) => (
                      <li key={i} className="my-2 text-textLight-400">
                        {line}
                      </li>
                    ))}
                  </ul>

                  {/* Display skills */}
                  <ul className="flex flex-wrap justify-start gap-2">
                    {skills.map((skill: string, i: number) => (
                      <li
                        key={i}
                        className="rounded-md bg-accent-400 bg-opacity-30 px-2 py-1 text-xs text-accent-400 text-opacity-90"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Display certificate link */}
                {certificate && (
                  <Link
                    href={certificate}
                    className="absolute right-5 top-5 rounded-md border-accent-400 px-2 py-1 text-xs text-accent-400 text-opacity-90 hover:border"
                    target="_blank"
                    aria-label="Certificate"
                  >
                    <PiCertificateBold className="text-[1.25rem]" />
                  </Link>
                )}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}
