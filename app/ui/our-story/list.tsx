
import Story  from '@/app/ui/our-story/item';
const storys = [
  { decriptColor:"",textColor:"",bgColor:'bg-dark-beige',year:"1968",image:"/our-story/our-story-image-2.webp",title:"Farming for Sustenance",descript:"When we first arrived in this new country, amma and papu, that's what we've always called them, had nothing but a small plot of land and big dreams. We started growing organic fruits and veggies to feed our own family, using the old ways taught by our ancestors."},
  { decriptColor:"",textColor:"",bgColor:'',year:"1979",image:"/our-story/our-story-image-3.webp",title:"Setting Up a Local Stall",descript:"One day, we decided to share our bounty with our neighbors. We set up a little stall near the town market, selling our organic produce. It was a humble start, but seeing the smiles on people's faces made it all worth it."},
  { decriptColor:"text-beige",textColor:"text-dark-beige",bgColor:'bg-onyx-gray', year:"1985",image:"/our-story/our-story-image-4.webp",title:"Opening the First Store",descript:"The response was overwhelming! People loved our veggies and the stories we shared about our farm. Encouraged by our community, we opened our first little organic grocery store. It became a cozy hub for folks who cared about where their food came from."},
  { decriptColor:"",textColor:"",bgColor:' bg-dark-beige',year:"1998",image:"/our-story/our-story-image-5.webp",title:"Expansion to Nearby Towns",descript:"As word spread, we knew we had to share our passion with even more folks. So, we opened more stores in nearby towns. Each one became a gathering spot for organic food lovers and those who cherished sustainability just like us."},
  { decriptColor:"",textColor:"",bgColor:'',year:"now...",image:"/our-story/our-story-image-6.webp",title:"Passing on the Legacy",descript:"Now, amma and papu may be a bit older, but their spirit lives on in our family. Our kids have taken the reins, while our grandkids are learning the ropes. They honoring their amma and papu's commitment to green living. Together, we're carrying forward our family's legacy of love for organic food and respect for the land."},
];
export default async function Home() {
  return (
    <div className="border-b border-[1px] border-solid border-dark-beige">
      <div className="p-[3vw] "> <h2 className="text-[3rem] md:text-[4rem] font-[400] leading-[100%] mb-[10px]">how it all began</h2></div>
        {storys.map((story, idx) => {
        return (
            <Story key={idx} story={story}/>
        );
        })}
    </div>
  );
}