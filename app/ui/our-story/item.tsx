
import clsx from 'clsx';

interface Story {
    decriptColor:string;
    textColor:string;
    bgColor:string;
    year: string;
    image: string;
    title: string;
    descript: string;

  }
export default async function Home({
    story,
  }: {
    story: Story;
  }) {
  return (
    <div className={clsx(
      'flex flex-col md:flex-row px-[20px] py-[75px]  lg:px-[3vw] lg:py-[5vw]',{
        [`${story.bgColor}`] : true
      },
    )}
    >
      <div className="rounded-[15px] min-w-[65%] min-h-[40vh] md:min-h-[70vh] bg-no-repeat bg-cover bg-fixed bg-[position:100%_30%]" style={{ backgroundImage: `url(${story.image})` }}>
      </div>
      <div className="pl-[0] md:pl-[5vw]">
        <div className={clsx(
          'text-[25vw] md:text-[8vw] font-[700] leading-[110%]',{
            [`${story.textColor}`] : true
          },
        )}>
          {story.year}
        </div>
        <h3 className={clsx(
          'text-caribbean-blue mt-[20px] mb-[10px] text-[1.5rem] font-[400] leading-[110%]',{
            [`${story.textColor}`] : true
          },
        )}>
          {story.title}
        </h3>
        <p className={clsx(
          'text-[0.875rem] md:text-[1rem]  ',{
            [`${story.decriptColor}`] : true
          },
        )}>
          {story.descript}
        </p>
      </div>
      
    </div>
  );
}