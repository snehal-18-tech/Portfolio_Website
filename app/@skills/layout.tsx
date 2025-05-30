import SkillsTabNavigatorHeader from '@/components/SkillsTabNavigatorHeader';
import Image from 'next/image';
import SuhaanBhandaryImage from '../../public/SuhaanBhandary.jpg';

export default function SkillsLayouts({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto mb-28 mt-16 scroll-m-24" id="skills">
      <h2 className="mb-6 text-center text-4xl md:mb-14">About Me</h2>
      <div className="md:grid md:grid-cols-2">
        <div className="mx-auto mb-6 hidden overflow-hidden rounded-sm md:mb-0 md:block md:translate-y-2">
        <Image
             src={SuhaanBhandaryImage}
            alt="Suhaan Bhandary Standing with Hoodie On"
     width={300} // Adjust width here
  height={300} // Adjust height here
  className="mx-auto rounded-sm border-[2px] border-textLight-800"
  style={{
    borderRadius: '30% 70% 44% 56% / 72% 30% 70% 28%',
    objectFit: 'cover',
  }}
/>
        </div>
        <div>
          <div>
            <SkillsTabNavigatorHeader />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
