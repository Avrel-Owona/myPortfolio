import Head from "next/head";
import SideBar from "../app/components/SideBar";

const Home = () => {
  return (
    <div>
      <div className="h-screen absolute bg-black w-screen px-10 sm:px-14 flex items-center">
        <SideBar />
        <div className="absolute left-64">
          <div className="flex-col  flex">
            <h3 className="text-white text-xl font-normal italic">Hi</h3>
            <span className="font-bold text-7xl uppercase text-white">
              Λvrel <br /> OWONΛ
            </span>
            <div className="flex justify-center flex-col border-l-2 ml-12 mt-8 border-white pl-6">
              <span className="text-white font-bold text-xl">
                Frontend Developer
              </span>
              <p className="text-gray-400 font-thin w-full sm:w-4/12 mt-3">
                A nice guy who just likes to get things done. Programmer and a
                computer science enthusiast. Building digital products and
                services. I am currently working at{" "}
                <a href="#" className="font-bold cursor-pointer">
                  Bhent Inc
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <Head>
        <title>Template of app</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
                integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
                crossOrigin="anonymous" referrerPolicy="no-referrer"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center items-center bg-blue-600 h-screen w-screen text-red-600">
        <h1 className="text-9xl text-gray-100 text-center font-bold">SWIVE</h1>
      </div>
        <footer className="text-xs text-gray-100 absolute bottom-0 w-full text-center my-2">
            Art by <span className='font-bold underline cursor-pointer'>Avrel OWONA</span>
        </footer> */}
    </div>
  );
};

export default Home;
