// flex justify centre h-screen items-center
import Image from "next/image"
export default function Home() {
  return (
    <body className="bg-[#F7F7F7] overflow-hidden ">
  <header className="bg-[#F7F7F7] border-black xm:hidden border 
font-[400] flex items-center tracking-[21] text-[#000000] font-[Roboto]">
    <span className="h-[21] ml-16 mr-3 flex-shrink-0 w-auto flex items-center">Phone Number: 956 742 455 678</span>
    <span className="border-solid border flex-shrink-0 border-[#676767] mx-3 h-[32px]"></span>
    <span className="h-[21] ml-3 size-14 flex-shrink-0 w-auto flex items-center">Email: info@ddsgnr.com</span>
    <span className="ml-auto">
      <Image
        src="/image/picture.svg"
        alt="Image"
        width={20}
        height={20}
        className="w-[150px] h-auto mr-20"
      />
    </span>
  </header>
  
{/* Header 2 */}
<header className="bg-[#F7F7F7] border-[1px] xm:hidden border-[#676767] py-3 my-3
 font-[400] flex visible items-center tracking-[21] text-[#000000] ">

  <Image src="/image/picture1.svg"
  alt="Image"
  width={900} height={700}
  className="w-[100px] h-[44px] xm:ml-[148px] xm:w-[52px] xm:h-[74px]"/>

  <h1 className=" h-[30] flex font-[700] text-5xl
   size-[25.07] w-[90] xm:text-8xl xm:mt-[48px] xm:ml-0">Ddsgnr</h1>


  <h1 className="mx-[87px] xm:hidden">
  <span className="mx-[23px]">Home</span>
  <span className="mx-[23px]">Courses</span>
  <span className="mx-[23px]">Services</span>
  <span className="mx-[23px]">Achievements</span>
  <span className="mx-[23px]">About Us</span>
  <span className="ml-[29px]">Testinomials</span>
  </h1>
  <h2 className="ml-3 xm:hidden">
  <button className="mx-2 border px-3 py-1 rounded-[5px] border-black">Login</button>
  <button className="text-[#F7F7F7] bg-black border px-3 py-1 mr-7px rounded-[5px]">Sign Up</button></h2> 
</header>
   
<span className="mx:hidden xm:visible">
  <Image 
    src="/image/Container.svg" 
    alt="loading..." 
    width={670} 
    height={875}
    className="w-[100vh] h-[20vh] pt-2 border border-black" 
  />
</span>

   {/* Section 1(1st page) */}
   <section className="flex items-center justify-between pl-[83px]
     xm:w-full xm:pt-[30px] xm:pl-[20px]">
  {/* Text Section */}
  <div className="">
    <h1 className="text-5xl w-[500px] font-bold text-black leading-tight
    xm:mt-[60px] xm:text-4xl xm:ml-4">
      Learn new skills <br />
      online with ease
    </h1>
    <p className="text-black mt-4 w-[500px] xm:hidden xm:2xl ">
      Discover a wide range of courses covering a variety of <br/>
      subjects, taught by expert instructors.</p>

      <p className="text-black mt-4 w-[400px] mx:hidden xm:2xl xm:ml-[3vh]">
      Discover a wide range of courses covering a <br/> 
      variety of subjects, taught by expert instructors.

    </p>
    <div className="mt-6 space-x-4">
      <button className="text-white bg-black px-4 py-2 rounded-[5px] xm:ml-4">
        Start learning now
      </button>
      <button className="text-black border border-black px-4 py-2 rounded-[5px] ">
        Explore Courses
      </button>
    </div>
  </div>

  {/* Image Section */}
  <div>
    <Image
      src="Image/picture11.svg"
      alt="Image"
      width={650}
      height={550}
      className="h-[650px] w-[450px] pl-0 ml-0 mb-0 pb-0 xm:hidden"
    />
  </div>
</section>

<footer className="mb-[80px] text-black bg-[#F7F7F7] items-center mt-[20px] flex xm:block">

<div>
    <Image
      src="Image/picture11.svg"
      alt="Image"
      width={650}
      height={550}
      className="h-[400px] w-[120vh] pl-0 ml-0 mb-0 mt-[40px] pb-0 mx:hidden"
    />
  </div>

  <h1 className="w-[50%] my-[30px] xm:hidden font-[700]">Trusted by 2000+ companies <br/>
    worldwide.</h1>

    <h1 className="mt-20 w-[100vh] my-[30px] mx:hidden font-[700]">Trusted by the
       world's best companies <br/>
       [social proof to build credibility].</h1>

    <Image
    src="/image/pic.svg" alt="Image"
    width={67} height={43}
    className="h-[80px] leading-relaxed w-[60%] object-contain xm:hidden" 
    />

<Image
    src="/image/pic.svg" alt="Image"
    width={67} height={43}
    className="h-[80px] leading-relaxed w-[100vh] object-contain mx:hidden" 
    />

</footer>

{/* Page#2 */}
<header className="text-black mt-[125px]">
  <h1 className="h-[58px] text-5xl font-[700] size[48px] leading-[57.6px] 
  ml-[360px] text-center w-[768px]  xm:hidden">Explore Courses By Category</h1>
  
  <h1 className="text-4xl font-[700]  leading-[57.6px] 
   text-center w-[350px] ml-[10vh] mx:hidden">Explore Courses By < br/>
  Category</h1>

  <p className="h-[58px] xm:hidden leading-[27px] ml-[15px] mt-[12px] text-center">
 Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
    </p>

    <p className="h-[58px] w-[360px] mx:hidden leading-[27px] ml-[12vh] mt-[21px] ">
 Discover a wide range of courses covering a <br/>
 variety of subjects, taught by expert instructors.
    </p>
</header>

{/* Landing page 2 sections */}
<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 xm:hidden">
    {/* "button like icon#1 " */}
    <div className="mt-6 flex items-center bg-gray-100 rounded-lg p-4 shadow-lg">
        <Image src="Image/icon1.svg" alt="Communication Icon" 
    width={53} height={64}
 className="w-12 h-12 mr-4"/>

        <div>
            <h3 className="text-lg font-semibold">Design and Development</h3>
            <p className="text-gray-600">50+ Courses Available</p>
        </div>
    </div>

    {/* "button like icon#2 " */}
    <div className="flex items-center bg-gray-100 rounded-lg p-4 shadow-lg">
        <Image src="Image/icon2.svg" alt="Marketing Icon" 
    width={53} height={64}
   className="w-12 h-12 mr-4"/>
        <div>
            <h3 className="text-lg font-semibold">Marketing</h3>
            <p className="text-gray-600">50+ Courses Available</p>
        </div>
    </div>

    {/* "button like icon#3 " */}
    <div className="flex items-center bg-gray-100 rounded-lg p-4 shadow-lg">
        <Image src="Image/icon3.svg" alt="Development Icon"  
    width={53} height={64}
        className="w-12 h-12 mr-4"/>
        <div>
            <h3 className="text-lg font-semibold">Development</h3>
            <p className="text-gray-600">50+ Courses Available</p>
        </div>
    </div>

    
    {/* "button like icon#4 " */}
    <div className="flex items-center mt-12 bg-gray-100 rounded-lg p-4 shadow-lg">
        <Image src="Image/icon4.svg" alt="Development Icon"  
    width={53} height={64}
        className="w-12 h-12 mr-4"/>
        <div>
            <h3 className="text-lg font-semibold">Communication</h3>
            <p className="text-gray-600">50+ Courses Available</p>
        </div>
    </div>

    
    {/* "button like icon#5 " */}
    <div className="flex items-center bg-gray-100 rounded-lg p-4 shadow-lg">
        <Image src="Image/icon5.svg" alt="Development Icon"  
    width={53} height={64}
        className="w-12 h-12 mr-4"/>
        <div>
            <h3 className="text-lg font-semibold">Digital Marketing</h3>
            <p className="text-gray-600">50+ Courses Available</p>
        </div>
    </div>

    
    {/* "button like icon#6 " */}
    <div className="flex items-center bg-gray-100 rounded-lg p-4 shadow-lg">
        <Image src="Image/icon6.svg" alt="Development Icon"  
    width={53} height={64}
        className="w-12 h-12 mr-4"/>
        <div>
            <h3 className="text-lg font-semibold">Self Development</h3>
            <p className="text-gray-600">50+ Courses Available</p>
        </div>
    </div>

    
    {/* "button like icon#7 " */}
    <div className="flex items-center mt-12 bg-gray-100 rounded-lg p-4 shadow-lg">
        <Image src="Image/icon7.svg" alt="Development Icon"  
    width={53} height={64}
        className="w-12 h-12 mr-4"/>
        <div>
            <h3 className="text-lg font-semibold">Business</h3>
            <p className="text-gray-600">50+ Courses Available</p>
        </div>
    </div>

    
    {/* "button like icon#8 " */}
    <div className="flex items-center bg-gray-100 rounded-lg p-4 shadow-lg">
        <Image src="Image/icon8.svg" alt="Development Icon"  
    width={53} height={64}
        className="w-12 h-12 mr-4"/>
        <div>
            <h3 className="text-lg font-semibold">Finance</h3>
            <p className="text-gray-600">50+ Courses Available</p>
        </div>
    </div>


    {/* "button like icon#9 " */}
    <div className="flex items-center bg-gray-100 rounded-lg p-4 shadow-lg">
        <Image src="Image/icon9.svg" alt="Development Icon"  
    width={53} height={64}
        className="w-12 h-12 mr-4"/>
        <div>
            <h3 className="text-lg font-semibold">Consulting</h3>
            <p className="text-gray-600">50+ Courses Available</p>
        </div>
    </div>
</section>



{/* Mobile design icons*/}
   {/* "button like icon#1 " */}
    <section className="mx:hidden">
   <div className="mt-6 flex items-center bg-gray-100 rounded-lg p-4 shadow-lg">
        <Image src="Image/icon1.svg" alt="Communication Icon" 
    width={53} height={64}
 className="w-12 h-12 mr-4 mt-3 ml-[7vh]"/>

        <div>
            <h3 className="text-lg font-semibold">Design and Development</h3>
            <p className="text-gray-600">50+ Courses Available</p>
        </div>
    </div>
    <div className="flex items-center bg-gray-100 rounded-lg p-4 shadow-lg">
        <Image src="Image/icon2.svg" alt="Marketing Icon" 
    width={53} height={64}
   className="w-12 h-12 mr-4 mt-16 ml-[7vh]"/>
        <div>
            <h3 className="text-lg font-semibold">Marketing</h3>
            <p className="text-gray-600">50+ Courses Available</p>
        </div>
    </div>

    {/* "button like icon#3 " */}
    <div className="flex items-center bg-gray-100 rounded-lg p-4 shadow-lg">
        <Image src="Image/icon3.svg" alt="Development Icon"  
    width={53} height={64}
        className="w-12 h-12 mr-4 mt-16 ml-[7vh]"/>
        <div>
            <h3 className="text-lg font-semibold">Development</h3>
            <p className="text-gray-600">50+ Courses Available</p>
        </div>
    </div>
    </section>

    <button className="ml-[96vh] bg-[#F7F7F7] mt-8 text-black border border-black px-3 py-1 mr-7px rounded-[5px] xm:ml-[23vh] xm:mt-24">View All Courses</button>

{/* Landing page#3 */}
<section className="text-black mt-[180px] xm:mt-28">
  <h1 className=" text-center text-5xl font-[700] xm:ml-7 xm:text-4xl xm:w-[60vh]">
    Our Achivements</h1>

    <p className="text-center mt-[24px] xm:hidden">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra <br/>
   ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
    </p>

    <p className="text-center mt-[24px] mx:hidden">
    Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Suspendisse 
    varius enim in<br/> eros elementum tristique.
    </p>

    <div className="flex mt-[90px] justify-center space-x-[249px] 
    xm:space-x-4 xm:text-4xl xm:flex-wrap  xm:justify-between xm:hidden">
  <div className="flex flex-col items-center xm:space-x-2">
    <h1 className="text-5xl font-[700]">+200</h1>
    <span className="text-xs">Courses</span>
  </div>

  <div className="flex flex-col items-center xm:space-x-2 ">
    <h1 className="text-5xl font-[700]">50K</h1>
    <span className="text-xs">Mentors</span>
  </div>


  <div className="flex flex-col items-center xm:space-x-2">
    <h1 className="text-5xl font-[700]">370K</h1>
    <span className="text-xs">Students </span>
  </div>

  <div className="flex flex-col items-center xm:space-x-2">
    <h1 className="text-5xl font-[700]">100+</h1>
    <span className="text-xs">Recognition</span>
  </div>
</div>

{/* Mobile Screen Design (200+ Courses , etc) */}
<div className="flex mt-[90px] justify-center space-x-[10px] 
    xm:space-x-4 xm:text-4xl xm:flex-wrap  xm:justify-between mx:hidden">
  <div className="flex flex-col items-center ml-14 xm:space-x-1">
    <h1 className="text-4xl font-[700]">+200</h1>
    <span className="text-xs">Courses</span>
  </div>

  <div className="flex flex-col items-center xm:space-x-2 ">
    <h1 className="text-4xl font-[700]">50K</h1>
    <span className="text-xs">Mentors</span>
  </div>
</div>

  <div className="flex mt-[90px] justify-center space-x-[249px] 
    xm:space-x-4 xm:text-4xl xm:flex-wrap  xm:justify-between mx:hidden">
  <div className="flex flex-col items-center xm:space-x-2">
    <h1 className="text-4xl ml-14 font-[700]">370K</h1>
    <span className="text-xs">Students </span>
  </div>

  <div className="flex flex-col items-center xm:space-x-2">
    <h1 className="text-4xl font-[700]">100+</h1>
    <span className="text-xs">Recognition</span>
  </div>
</div>


{/* MOBILE SCREEN DESIGNED */}
    <div className="px-[64px] pt-[224px]">
      <h1 className="flex justify-center xm:text-4xl font-[700] text-5xl">Courses</h1>
    </div>
    <p className="flex justify-center mt-[26px] xm:text-lg">Your Ultimate Guide to learning</p>
</section>

{/* Popular, Recomended, Best Service */}

<div className="flex flex-row space-x-16 mx:pl-[565px] mt-16 text-lg
 xm:flex xm:flex-row xm:space-x-9 xm:ml-12 xm:mt-8">
<div className="border-b border-black">Popular</div>
<div>Recommended</div>
<div>Best Service</div>
</div>

{/* Laptop */}
<div className="mx:flex mx:flex-row mx:space-x-3">
<div>
<Image
src="Image/Image.lap.svg" alt="Code..."
width={24} height={33}
className="ml-5 mt-14 w-[95vh] h-[60vh] mx:w-[70vh] mx:h-[50vh] mx:ml-0"
/>

<div className="flex flex-row space-x-56 mt-6">
<h1 className="ml-12">Design</h1>
<Image 
src="/image/Star.svg" alt="Design"
width={54} height={46}
className="w-[8vh] h-[5vh] "
/></div>

<h1 className="ml-12 font-bold text-3xl mt-3">UX/UI Design 201</h1>

<p className="ml-12 mt-5 text-lg">
  Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit. Suspendisse 
  varius enim in<br/> eros.</p>

<div className="flex">
<button className="text-black border border-black px-4 py-2 rounded-[5px]
 ml-12 mt-5">Enroll Now</button>
<h1 className="font-bold mt-7 text-lg ml-6">$400</h1>
</div>
</div>


{/* Code */}
<div>
<Image
src="Image/Image.code.svg" alt="Code..."
width={24} height={33}
className="ml-5 mt-14 w-[95vh] h-[60vh] mx:w-[70vh] mx:h-[50vh] mx:ml-0"
/>

<div className="flex flex-row space-x-56 mt-6">
<h1 className="ml-12">Programmimg</h1>
<Image 
src="/image/Star.svg" alt="Design"
width={54} height={46}
className="w-[8vh] h-[5vh] "
/></div>

<h1 className="ml-12 font-bold text-3xl mt-3">Introduction to Python</h1>

<p className="ml-12 mt-5 text-lg">
  Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit. Suspendisse 
  varius enim in<br/> eros.</p>

<div className="flex">
<button className="text-black border border-black px-4 py-2 rounded-[5px]
 ml-12 mt-5">Enroll Now</button>
<h1 className="font-bold mt-7 text-lg ml-6">$400</h1>
</div>
</div>


{/*Trade Trend */}
<div>
<Image
src="Image/image.trend.svg" alt="Trade Trend..."
width={24} height={33}
className="ml-5 mt-14 w-[95vh] h-[60vh] mx:w-[70vh] mx:h-[50vh] mx:ml-0"
/>


<div className="flex flex-row space-x-56 mt-6">
<h1 className="ml-12">Business</h1>
<Image 
src="/image/Star.svg" alt="Design"
width={54} height={46}
className="w-[8vh] h-[5vh] "
/></div>

<h1 className="ml-12 font-bold text-3xl mt-3">Data Analysis for Beginners</h1>

<p className="ml-12 mt-5 text-lg">
  Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit. Suspendisse 
  varius enim in<br/> eros.</p>

<div className="flex">
<button className="text-black border border-black px-4 py-2 rounded-[5px]
 ml-12 mt-5">Enroll Now</button>
<h1 className="font-bold mt-7 text-lg ml-6">$400</h1>
</div>
</div>
</div>

{/* Line 2 pictures */}

{/* Art */}
<div className="mx:flex mx:flex-row mx:space-x-3 xm:hidden">
<div>
<Image
src="Image/paint.svg" alt="painting..."
width={24} height={33}
className="ml-5 mt-14 w-[95vh] h-[60vh] mx:w-[70vh] mx:h-[50vh] mx:ml-0"
/>

<div className="flex flex-row space-x-56 mt-6">
<h1 className="ml-12">Art</h1>
<Image 
src="/image/Star.svg" alt="Design"
width={54} height={46}
className="w-[8vh] h-[5vh] "
/></div>

<h1 className="ml-12 font-bold text-3xl mt-3">Art Specialization</h1>

<p className="ml-12 mt-5 text-lg">
  Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit. Suspendisse 
  varius enim in<br/> eros.</p>

<div className="flex">
<button className="text-black border border-black px-4 py-2 rounded-[5px]
 ml-12 mt-5">Enroll Now</button>
<h1 className="font-bold mt-7 text-lg ml-6">$400</h1>
</div>
</div>


{/* Library/Rule*/}
<div>
<Image
src="Image/library.svg" alt="Code..."
width={24} height={33}
className="ml-5 mt-14 w-[95vh] h-[60vh] mx:w-[70vh] mx:h-[50vh] mx:ml-0"
/>

<div className="mx:grid mx:grid-flow-row mt-6">
<h1 className="ml-12">Law</h1>
<Image 
src="/image/Star.svg" alt="Design"
width={54} height={46}
className="w-[8vh] h-[5vh] "
/></div>

<h1 className="ml-12 font-bold text-3xl mt-3">Rule of Law</h1>

<p className="ml-12 mt-5 text-lg">
  Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit. Suspendisse 
  varius enim in<br/> eros.</p>

<div className="flex">
<button className="text-black border border-black px-4 py-2 rounded-[5px]
 ml-12 mt-5">Enroll Now</button>
<h1 className="font-bold mt-7 text-lg ml-6">$400</h1>
</div>
</div>


{/*Introduction to webflow */}
<div>
<Image
src="Image/webflow.svg" alt="..."
width={24} height={33}
className="ml-5 mt-14 w-[95vh] h-[60vh] mx:w-[70vh] mx:h-[50vh] mx:ml-0"
/>


<div className="flex flex-row space-x-56 mt-6">
<h1 className="ml-12">Tech</h1>
<Image 
src="/image/Star.svg" alt="Design"
width={54} height={46}
className="w-[8vh] h-[5vh] "
/></div>

<h1 className="ml-12 font-bold text-3xl mt-3">Introduction to webflow</h1>

<p className="ml-12 mt-5 text-lg">
  Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit. Suspendisse 
  varius enim in<br/> eros.</p>

<div className="flex">
<button className="text-black border border-black px-4 py-2 rounded-[5px]
 ml-12 mt-5">Enroll Now</button>
<h1 className="font-bold mt-7 text-lg ml-6">$400</h1>
</div>
</div>
</div>


<div className="flex justify-center items-center min-h-48">
<button className="justify-between center bg-[#F7F7F7] mt-8 text-black
border border-black px-3 py-1 mr-7px rounded-[5px]">View All Courses</button>
</div>

<div className="">
<h1 className="justify-center flex text-4xl font-bold mt-28 xm:mt-10">Our team</h1>
<p className="mx:hidden flex justify-center text-lg mt-[24px]">Lorem ipsum dolor sit amet, consectetur </p>
<p className="flex justify-center mx:hidden"> adipiscing elit.</p>

<p className="xm:hidden text-lg flex justify-center mt-8 mb-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>

<div className="mx:hidden">
<div className="mx:grid mx:grid-cols-3 mx:grid-rows-1 gap-7">
<Image 
  src="Image/james.svg" alt="james"
  width={63} height={78}
  className="w-32 h-32 flex justify-between mt-10 ml-[147px]"
/>


<h1 className="font-bold text-2xl justify-center flex
 mx:m-0 mx:flex-col mt-10">James Nduku</h1>
<p className=" text-2xl mx:flex-col justify-center flex">Marketing Coordinator</p>


<Image 
  src="Image/SocialIcons.svg" alt="icon"
  width={63} height={78}
  className="w-32 h-32 flex justify-between mx:ml-0 ml-[147px]"
/>
</div>

{/* Joseph Picture */}
<Image 
  src="Image/jusaph.svg" alt="joseph"
  width={63} height={78}
  className="w-32 h-32 flex justify-between mt-10 ml-[147px]"
/>

<h1 className="font-bold text-2xl justify-center flex mt-10">Joseph Munyambu</h1>
<p className=" text-2xl justify-center flex ">Nursing Assistant</p>


<Image 
  src="Image/SocialIcons.svg" alt="icon"
  width={63} height={78}
  className="w-32 h-32 flex justify-between  ml-[147px]"
/>

{/* Ngumbau Picture */}
<Image 
  src="Image/kal.svg" alt="james"
  width={63} height={78}
  className="w-32 h-32 flex justify-between mt-10 ml-[147px]"
/>

<h1 className="font-bold text-2xl justify-center flex mt-10">Joseph Ngumbau</h1>
<p className=" text-2xl justify-center flex ">Medical Assistant</p>


<Image 
  src="Image/SocialIcons.svg" alt="icon"
  width={63} height={78}
  className="w-32 h-32 flex justify-between  ml-[147px]"
/>
</div>

<div className="grid grid-cols-3 xm:hidden grid-rows-2 md:grid-rows-3 h-screen gap-y-64 p-2">
    
     {/* James Nduku */}
      <div className="row-start-1 row-end-2 col-start-1 col-end-2">
      <Image 
  src="Image/james.svg" alt="james"
  width={63} height={78}
  className="h-32 flex justify-center items-center w-[454px]"/>

  <h1 className="font-bold text-lg items-center flex justify-center mt-3">James Nduku</h1>
  <p className=" text-lg items-center flex justify-center">Marketing Coordinato</p>

<Image
  src="Image/SocialIcons.svg" alt="james"
  width={63} height={78}
  className="h-16 flex justify-center ml-[170px] items-center w-24"/>

      </div>

      {/* Joseph */}
      <div className="col-start-2 col-end-3 ml-20 row-start-1 row-end-2">
      <Image 
  src="Image/jusaph.svg" alt="james"
  width={63} height={78}
  className="h-32 ml-[76px] w-32"/>

  <h1 className="font-bold text-lg ml-[57px] mt-3">Joseph Munyambu</h1>
<p className="text-lg ml-16">Nursing Assistant</p>
      
<Image
  src="Image/SocialIcons.svg" alt="james"
  width={63} height={78}
  className="h-9 ml-[90px] mt-4 w-24"/>
      </div>


      {/* kal */}
      <div className="col-start-3 col-end-4 row-start-1 row-end-2">
      <Image 
  src="Image/kal.svg" alt="kal"
  width={63} height={78}
  className="h-32 ml-[142px] w-32"/>

<h1 className="font-bold text-lg ml-[126px] mt-3">Joseph Ngumbau</h1>
<p className="text-lg ml-[134px]">Medical Assistant</p>
      
      <Image
        src="Image/SocialIcons.svg" alt="james"
        width={63} height={78}
        className="h-9 ml-[155px] mt-4 w-24"/>
      </div>

      {/* Row 2 of Images */}


     {/* Erick kim */}
     <div className="row-start-2 row-end-3 col-start-1 col-end-2">
      <Image 
  src="Image/erick.svg" alt="james"
  width={63} height={78}
  className="h-32 flex justify-center items-center w-[454px]"/>

  <h1 className="font-bold text-lg items-center flex justify-center mt-4">Erick Kipkemboi</h1>
  <p className=" text-lg items-center flex justify-center">Web Designer</p>
  
      
<Image
  src="Image/SocialIcons.svg" alt="james"
  width={63} height={78}
  className="h-9 ml-[175px] mt-4 w-24"/>
      </div>

      {/* Stephen */}
      <div className="col-start-2 col-end-3 row-start-2 row-end-3">
      <Image 
  src="Image/stephen.svg" alt="stephen"
  width={63} height={78}
  className="h-32 w-32 ml-[150px]"/>

  <h1 className="font-bold text-lg ml-[142px] mt-4">Stephen Kerubo</h1>
<p className="text-lg ml-[140px]">President of Sales</p>
      
<Image
  src="Image/SocialIcons.svg" alt="james"
  width={63} height={78}
  className="h-9 ml-[165px] mt-4 w-24"/>
      </div>

      {/* John */}
      <div className="col-start-3 col-end-4 row-start-2 row-end-3">
      <Image 
  src="Image/kal2.svg" alt="kal"
  width={63} height={78}
  className="h-32 ml-[142px] w-32"/>

<h1 className="font-bold text-lg ml-[154px] mt-3">John Leboo</h1>
<p className="text-lg ml-[159px]">Dog Trainer</p>
<Image
  src="Image/SocialIcons.svg" alt="james"
  width={63} height={78}
  className="h-9 ml-[165px] mt-4 w-24"/>
      </div>
      </div>

<button className="mx:hidden bg-[#F7F7F7] mt-4 text-black
border ml-44 border-black px-3 py-1 mr-7px rounded-[5px]">View All</button>

<div className="xm:hidden mt-16">
<h1 className="ml-24 font-bold text-4xl">Customer testimonials</h1>
<p className="ml-24 text-base mt-6 font-[500]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div>

<Image
src="Image/Content.svg" alt="Image"
width={64} height={73}
className="w-[350vh] max:hidden h-[50vh] mt-24 xm:hidden"
/>      

<h1 className="text-3xl font-bold mt-20 text-center justify-center mx:hidden">What Our Student Say</h1>
<p className="mt-3 mx:hidden text-center justify-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
<p className="text-center mx:hidden justify-center"> adipiscing elit.</p>

<Image
src="Image/Cantent.svg" alt="Image"
width={64} height={73}
className="w-[350vh] max:hidden h-[50vh] mt-24 mx:hidden"
/> 

<Image
src="Image/Contentb.svg" alt="Image"
width={640} height={730}
className="w-[70vh] h-[8vh] mb-36 mt-242 mx:h-[100px] mx:w-[1290px]"
/>   

{/* Next page */}
<span className="text-lg font-bold xm:ml-24 ">Subscribe to our newsletter<br/></span>
<span className="xm:justify-center xm:text-center xm:flex text-lg mt-0 pt-0">
  Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.</span>


  <span className="border xm:hidden rounded py-3 pl-3 ml-[690px] pr-32 color-[#505050]
   border-black">Enter your email</span>
  <span className="border xm:hidden rounded py-3 px-3 ml-3 border-black">Subscribe</span>
<p className="text-xs mt-6 ml-[949px]">By subscribing you agree to with our Privacy Policy</p>

<div>
<span className="border mx:hidden rounded py-3 pl-3 ml-[10vh] pr-[40vh] color-[#505050]
 border-black">Enter your email</span>
<h1 className="border mx:hidden rounded ml-[10vh] mr-[5vh] py-2 mt-6 text-center justify-center border-black">Subscribe</h1>
<p className="text-xs mt-6 ml-[949px] mx:hidden">By subscribing you agree to with our Privacy Policy</p>
</div>


{/* Lat page */}
<h1 className="text-3xl mt-20 font-bold flex justify-center mx:hidden">
  What Our Student Say</h1>

<p className="text-lg flex justify-center mt-6 mx:hidden">Lorem ipsum dolor sit amet, consectetur </p>
  <p className="text-lg flex justify-center mx:hidden">adipiscing elit.</p>


{/* x---------------------------x------------------------x*/}



{/* Logo Section */}
<Image
  src="Image/Ddsgnr.svg" 
  alt="Image"
  width={64} 
  height={73}
  className="w-[50vh] xm:ml-8 h-[50vh] ml-[130px] mx:ml-0"
/>

<div className="flex justify-between mx:justify-center xm:flex-col xm:items-center xm:space-y-96">
  {/* Courses Section */}
  <div className="mb-8 ml-40 xm:ml-8">
    <h2 className="font-bold text-center text-lg mb-4">Courses</h2>
    <ul className="text-center">
      <li className="mb-2">Business</li>
      <li className="mb-2">Development</li>
      <li className="mb-2">Technology</li>
      <li className="mb-2">Design</li>
      <li className="mb-2">Programming</li>
    </ul>
  </div>

  {/* Resources Section */}
  <div className="mb-8 ml-40 xm:ml-8">
    <h2 className="font-bold text-center text-lg mb-4">Resources</h2>
    <ul className="text-center">
      <li className="mb-2">Career</li>
      <li className="mb-2">Resume</li>
      <li className="mb-2">Learning</li>
      <li className="mb-2">Interview Preparation</li>
      <li className="mb-2">Jobs</li>
    </ul>
  </div>

  {/* About Us Section */}
  <div className="mb-8 ml-40 xm:ml-0">
    <h2 className="font-bold text-center text-lg mb-4">About Us</h2>
    <ul className="text-center">
      <li className="mb-2">Contact</li>
      <li className="mb-2">Help/Support</li>
      <li className="mb-2">FAQ</li>
      <li className="mb-2">Terms and Conditions</li>
      <li className="mb-2">Partners</li>
    </ul>
  </div>
</div>


  {/*Footer Links */}
</div>
<div className="border-t border-black pt-4 text-sm text-center">
    <ul className="flex justify-center space-x-4">
    <p className="xm:hidden"> 2023 Ddsgnr. All rights reserved.</p>
      <li><a href="#" className="underline">Privacy Policy</a></li>
      <li><a href="#" className="underline">Terms of Service</a></li>
      <li><a href="#" className="underline">Cookies Settings</a></li>
    
  <div className=" pl-[440px] xm:hidden mb-24"> <Image
src="/image/Social Links.svg" alt="Image"
width={45} height={76}
className="w-[140px] h-[30px]"
/></div>

    </ul>
    <p className="mt-4 mx:hidden">&copy; 2023 Ddsgnr. All rights reserved.</p>
  </div>

  <Image
src="/image/Social Links.svg" alt="Image"
width={45} height={76}
className="w-[140px] ml-[130px] h-[120px] mx:hidden"
/>
    </body>
  )
}
