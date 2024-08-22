import Link from 'react-router-dom';

import { images } from '../../constants';
import MainLayout from '../../components/Layout/MainLayout';

const Projects = () => {
  return (
    <MainLayout>
      <div
        className="
    projects flex flex-col pb-40 dark:bg-dark-hard bg-white py-20"
      >
        <h1 className="text-3xl font-bold tracking-tight my-10 dark:text-white mx-10 sm:text-4xl text-center">Projects</h1>
        <article className="md:flex gap-9 m-auto text-justify dark:bg-dark-hard -pt-20w-full bg-white">
          <img src={images.favicon} className="mx-auto h-48 w-48" alt="favicon" />
          <div className="dark:text-white font-semibold text-3xl text-center md:text-right">
            Dominic <h1>Welcomes You</h1>
          </div>
          <p className="flex flex-col mx-auto center text-justify w-auto px-6 md:w-[600px] leading-normal dark:text-white lead ">
            I am Graphic Designer and a front-end web developer. I can provide clean code and pixel perfect design. I also make the website more & more interactive with web animations. I can provide
            clean code and pixel perfect design. I also make the website more & more interactive with web animations. A responsive design makes your website accessible to all users, regardless of
            their device.
          </p>
        </article>
        <div className="justify-center sm:mt-0 flex mt-1 space-x-6">
          <a href="#" className="hover:text-gray-800 dark:hover:text-white text-gray-500">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Facebook page</span>
          </a>
          <a href="#" className="hover:text-gray-800 dark:hover:text-white text-gray-500">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Instagram page</span>
          </a>
          <a href="#" className="hover:text-gray-800 dark:hover:text-white text-gray-500">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
            <span className="sr-only">Twitter page</span>
          </a>
          <a href="#" className="hover:text-gray-800 dark:hover:text-white text-gray-500">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">GitHub account</span>
          </a>
          <a href="#" className="hover:text-gray-800 dark:hover:text-white text-gray-500">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Dribbbel account</span>
          </a>
        </div>
        <img className="m-auto p-4 flex w-40 h-40 rounded-full" src={images.Me2} alt="Dominic Patrick" />

        <section className="flex flex-col text-center">
          <h1 className="text-3xl font-bold tracking-tight dark:text-white sm:text-4xl text-center">My Short Bio</h1>
          <p className="md:text-sm p-6 mx-auto center text-justify md:w-[600px] leading-normal dark:text-white lead ">
            I have over thirtyfive years of experience in layout, web, grapjhic design, and prepress including book and magazine layout, logo design, corporate package design, marketing solutions,
            materials, and advertising design. Working eagerly with press specialists for many years has provided me with thorough knowledge of the printing industry. My ambition is to produce work
            that my clients are marveled by. In these guidelines, I hunger to give each job its own unique identity. No idea is too extreme which gives me the advantage to break free from the everyday
            ways of the world. Branching off to web design and working on being a proficient full stack web developer.
          </p>
          <a href={images.NewResume} target="_blank" rel="noopener noreferrer " className="text-3xl font-bold tracking-tight dark:text-white sm:text-4xl text-center no-underline decoration-inherit">
            My Resume
          </a>
        </section>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 px-8">
          <div className="w-full rounded-lg shadow-md lg:max-w-sm">
            <img className="object-center w-full h-48" src={images.image3} alt="image" />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-blue-600"></h4>
              <p className="mb-2 leading-normal dark:text-white">
                Family is very important to me, so this is a small part of mine. These people make me who I am. This website is based on me and what I'm about, here I am, see me in the back.
              </p>
            </div>
          </div>
          <div className="w-full rounded-lg shadow-md lg:max-w-sm">
            <img className="object-center w-full h-48" src={images.me_abstract} alt="image" />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-blue-600"></h4>
              <p className="mb-2 leading-normal dark:text-white">
                Abstract art isn't my strong suite, I don't know a thing about art but you gotta think as I did this is as abstract as I can get. This is me and I didn't have a clue about what would
                have come of this photo, good you think. I think I Have accomplished abstract in this photo.
              </p>
            </div>
          </div>
          <div className="w-full rounded-lg shadow-md lg:max-w-sm">
            <img className="object-center w-full h-48" src={images.logo72dpi} alt="image" />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-blue-600"></h4>
              <p className="mb-2 leading-normal dark:text-white">
                This is one of my first logos I created more then thirty years ago. This originated from my wife's name Toni and mine's Dominic, it transform to a company name Totaldata.
              </p>
            </div>
          </div>
          <div className="w-full rounded-lg shadow-md lg:max-w-sm">
            <img className="object-center w-full h-48" src={images.CheChe_towing} alt="image" />
            <div className="p-4">
              <p className="mb-2 leading-normal dark:text-white">Here is a simple business card for a tow company. It's logo was converted from clipart logo, by inserting the tow company name.</p>
            </div>
          </div>
          <div className="w-full rounded-lg shadow-md lg:max-w-sm">
            <img className="object-center w-full h-48" src={images.logo_cube} alt="logo_cube" />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-blue-600"></h4>
              <p className="mb-2 leading-normal dark:text-white">
                Totaldata logo I converted to a 3D cube in Adobe After Effect a program that does lot more than this, such as create motion graphics and visual effects for film, TV, video, and web.
              </p>
            </div>
          </div>
          <div className="w-full rounded-lg shadow-md lg:max-w-sm">
            <img className="object-center w-full h-48" src={images.domo} alt="image" />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-blue-600"></h4>
              <p className="mb-2 leading-normal dark:text-white">
                Here's a vector logo created for a company. Which being a vector image allows you to used in all printing formats. Vector is recommended image format for Printers.
              </p>
            </div>
          </div>
          <div className="w-full rounded-lg shadow-md lg:max-w-sm">
            <img className="object-center w-full h-48" src={images.domo_banner} alt="image" />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-blue-600"></h4>
              <p className="mb-2 leading-normal dark:text-white">
                This is a banner for a website domoservices.info, which I toke down in 2019. Creating this from the previous logo made sense to captivate a visitor to the site.
              </p>
            </div>
          </div>
          <div className="w-full rounded-lg shadow-md lg:max-w-sm">
            <img className="object-center w-full h-48" src={images.Warren1} alt="image" />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-blue-600"></h4>
              <p className="mb-2 leading-normal dark:text-white">
                Here's another simple business card for a duct, furnace and AC unit company. It's logo was a simple clipart incorporated with the name an description.
              </p>
            </div>
          </div>
          <div className="w-full rounded-lg shadow-md lg:max-w-sm">
            <img className="object-center w-full h-48" src={images.sambc} alt="image" />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-blue-600"></h4>
              <p className="mb-2 leading-normal dark:text-white">
                Here's a more professional business card style for a accountant company. It's logo is a vector image I created for the company years ago, which is use on pens, hats, cups etc., so I've
                created more print media for this company.
              </p>
            </div>
          </div>
          <div className="w-full rounded-lg shadow-md lg:max-w-sm">
            <img className="object-center w-full h-48" src={images.sambc1} alt="image" />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-blue-600"></h4>
              <p className="mb-2 leading-normal dark:text-white">
                Being a professional business card, my thinking is to give this backside to it. A description of services and credentials seemed appropriate for the backside.
              </p>
            </div>
          </div>
          <div className="w-full rounded-lg shadow-md lg:max-w-sm">
            <img className="object-center w-full h-48" src={images.magic} alt="image" />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-blue-600"></h4>
              <p className="mb-2 leading-normal dark:text-white">
                This flyer for a Jazz player 'Majic', is a replica of an article of him in the Washington Post. To me, he had a great idea for a paper flyer, with the cost of a Sunday newspaper around
                $7?
              </p>
            </div>
          </div>
          <div className="w-full rounded-lg shadow-md lg:max-w-sm">
            <img className="object-center w-full h-48" src={images.PostCards} alt="image" />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-blue-600"></h4>
              <p className="mb-2 leading-normal dark:text-white">
                Me and Majic came up with this "postcard", of course the word "postcard" applies to mailing. I still consider this to be a flyer that happens to be printed on cardstock.
              </p>
            </div>
          </div>
          <div className="w-full rounded-lg shadow-md lg:max-w-sm">
            <img className="object-center w-full h-48" src={images.PostCards1} alt="image" />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-blue-600"></h4>
              <p className="mb-2 leading-normal dark:text-white ">
                We put our heads together to come up with, I think, a nice two sided flyer. Notice the regular photo on one side and that photo embossed on the other. These flyers served two marketing
                purposes, his availability for performing on one side and music lessons on the other.
              </p>
            </div>
          </div>
          <div className="w-full rounded-lg shadow-md lg:max-w-sm">
            <img className="object-center w-full h-48" src={images.RisingSoundBC} alt="image" />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-blue-600"></h4>
              <p className="mb-2 leading-normal dark:text-white ">
                Here's were you do what the client wants, I was presented with a card and was instructed to put this flag in the background. Now that's what I did, I could have presented multiple cool
                layouts. I've found that when a client request something give them what they want. I later designed and printed a menus for them.
              </p>
            </div>
          </div>
          <div className="w-full rounded-lg shadow-md lg:max-w-sm">
            <img className="object-center w-full h-48" src={images.sweetToth} alt="image" />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-blue-600"></h4>
              <p className="mb-2 leading-normal dark:text-white">
                Forms can be tedious, when presented with a clients hardcopy the first thing I thougt was <strong>OK</strong>. We should all be willing to take on challenges to enhance our abilities.
                I recreated the letter size, and then they wanted statment size, as I was learning alone the way.
              </p>
            </div>
          </div>
          <div className="w-full rounded-lg shadow-md lg:max-w-sm">
            <img className="object-center w-full h-48" src={images.BabyShower} alt="image" />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-blue-600"></h4>
              <p className="mb-2 leading-normal dark:text-white">
                On the subject of postcards, this one sided babyshower handout could easily double for postcards and handouts/flyers. This is when a client says postcards, it could not be
                misunderstood. If a client say they need a design for postcards I'm thinking room for mailing address and postage.
              </p>
            </div>
          </div>
          <div className="w-full rounded-lg shadow-md lg:max-w-sm">
            <img className="object-center w-full h-48" src={images.materialBro} alt="image" />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-blue-600"></h4>
              <p className="mb-2 leading-normal dark:text-white">
                Brochures and flyers are popularly used to send subtle messages to customers about your clients. They can give a lot of information to the readers about your client’s products or
                services with more visuals and less text. This was a rough draft that never moved forward. They was pleased, being a newly open company, with the effort of me giving some ideas.
              </p>
            </div>
          </div>
          <div className="w-full rounded-lg shadow-md lg:max-w-sm">
            <img className="object-center w-full h-48" src={images.materialBro1} alt="image" />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-blue-600"></h4>
              <p className="mb-2 leading-normal dark:text-white">
                With the name Material Things, it implies there are things availabile. Putting images of some of thier products in the brochure, to me, would get the viewer to read. After you begin to
                read you'll find that it's all handcrafted wood, ceramic, metal ect., to your liking. I couldn't resist putting thier picture with pet.
              </p>
            </div>
          </div>
          <div className="w-full rounded-lg shadow-md lg:max-w-sm">
            <img className="object-center w-full h-48" src={images.favicon} alt="image" />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-blue-600"></h4>
              <p className="mb-2 leading-normal dark:text-white">
                This logo was inspired by my graphic art background coming together with my web development, it was created with two great open source programs Gimp and Inkscape. Combining these two
                images seemed to make my point
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Projects;
