import Head from "next/head";
import React from "react";
import SideBar from "../app/components/SideBar";

const Home = () => {
  return (
    <div>
      <Head>
        <title>AVREL OWONA | Frontend Developer</title>
        <meta name="author" content="AVREL OWONA"/>
        <meta name="language" content="english" />
        <meta name="copyright" content="2022 AVREL OWONA" />
        {/*<meta name='description' content="The most beautiful photographic masterpieces in one place from the world's most generous photography community."/>*/}
        {/*<link rel="icon" type="image/png" href="/small.png" />*/}

        {/*/!*  =========== Medias =============> *!/*/}
        {/*<meta property="og:url"                content="https://www.avrelowona.com" />*/}
        {/*<meta property="og:type"               content="article" />*/}
        {/*<meta property="og:title"              content="AVREL OWONA | Frontend Developer" />*/}
        {/*<meta property="og:description"        content="The most beautiful photographic masterpieces in one place from the world's most generous photography community." />*/}
        {/*<meta property="og:image"              content={'/cover.jpeg'} />*/}
        <meta
          name="description"
          content="I like to make things happen and bring the imaginable to life
      Programmer and a computer science enthusiast."
        />
        <link rel="icon" href="/favi.png" />
      </Head>
      <div className="h-screen absolute bg-black w-screen px-5 sm:px-14 flex items-center">
        <SideBar />
        <div className="absolute left-5 sm:left-14 lg:left-64">
          <div className="flex-col  flex">
            <h3 className="text-white text-xl font-normal italic">Hi</h3>
            <span className="font-bold mt-3 sm:mt-0 text-5xl sm:text-7xl uppercase text-white name">
              Λvrel <br /> owonΛ
            </span>
            <div className="flex justify-center flex-col border-l sm:border-l-2 sm:ml-5 sm:ml-12 mt-5 sm:mt-8 border-white pl-4 pr-7 sm:pl-8 sm:pl-6">
              <span className="text-white font-bold text-lg sm:text-xl">
                Frontend Developer
              </span>
              <p className="text-gray-400 font-thin w-full sm:w-6/12 lg:w-4/12 mt-1 sm:mt-3">
                I like to make things happen and bring the imaginable to life
                Programmer and a computer science enthusiast. Building digital
                products and services. I am currently working at{" "}
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
