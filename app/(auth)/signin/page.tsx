import Form from '@/app/ui/auth/signin/form';


export default  function Page() {
  return (
    <main>
      <div className="grid auto-cols-fr grid-rows-[auto] gap-x-[0] gap-y-[0]  lg:grid-cols-2">
        <div className="h-screen flex items-center justify-center">
          <div className="flex-none basis-[58%] lg:max-w-[58]">
            <h3 className="text-[2rem] font-[500] leading-[1.2] mb-[1rem]">Login to <strong>Colorlib</strong></h3>
            <Form/>
          </div>
        </div>
        <div className="row-start-1 lg:col-start-2 h-[200px] lg:h-[100%] bg-cover bg-center"style={{ backgroundImage: `url(/login/signin.webp)`}}>
        </div>
        
      </div>
    </main>
  );
}