import { BsCloudArrowUpFill } from 'react-icons/bs';
import { FaLock, FaServer } from 'react-icons/fa';
import { images } from '../../constants';
import MainLayout from '../../components/Layout/MainLayout';

export default function About() {
  return (
    <MainLayout>
      <div className="pt-20 pb-40 w-full">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10 p-5">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="dark:text-dark-light text-base font-semibold leading-7 text-red-600">
                  Developing a better web experience
                </p>
                <h1 className="dark:text-white mt-2 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
                  A better workflow
                </h1>
                <p className="mt-6 text-md md:text-xl leading-8 text-dark-light">
                  Optimize your web development process with full-stack web
                  development experts from Me and my associates. Our dedicated
                  developers can help you build, expand, and deliver your web
                  assets at scale.
                </p>
              </div>
            </div>
          </div>
          <div className="-mt-12 -ml-12 p-12 lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1  ">
            <img
              className="w-[48rem] max-w-none rounded-xl"
              src={images.Capture}
              alt="webpage"
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 dark:text-dark-light  text-gray-700 lg:max-w-lg">
                <p>
                  Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                  risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                  Id dolor praesent donec est. Odio penatibus risus viverra
                  tellus varius sit neque erat velit. Faucibus commodo massa
                  rhoncus, volutpat. Dignissim sed eget risus enim. Mattis
                  mauris semper sed amet vitae sed turpis id.
                </p>
                <ul
                  role="list"
                  className="mt-8 space-y-8 dark:text-dark-light  text-gray-600"
                >
                  <li className="flex gap-x-3">
                    <BsCloudArrowUpFill
                      className="mt-1 h-5 w-5 flex-none text-red-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="dark:text-white font-semibold text-gray-900">
                        Push to deploy.
                      </strong>{' '}
                      Build frontend, backend, and mobile in a clear and telling
                      UI. Switch between visual and code configuration. Define
                      custom actions, or let our team deliver the features your
                      company needs.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <FaLock
                      className="mt-1 h-5 w-5 flex-none text-red-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="dark:text-white  font-semibold text-gray-900">
                        SSL certificates.
                      </strong>{' '}
                      Me and my associates offer the best SSL certificates
                      options to meet varying needs. Whether you’re an
                      e-Commerce site seeking the highest level of
                      authentication for your domain name, an enterprise looking
                      to secure multiple subdomains, or have different business
                      needs, Sectigo is your trusted certificate provider.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <FaServer
                      className="mt-1 h-5 w-5 flex-none text-red-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="dark:text-white font-semibold text-gray-900">
                        Database backups.
                      </strong>{' '}
                      If you’re looking to optimize your technology systems,
                      improve productivity, and save money, working with Me and
                      my associates can help. With a team of expert consultants
                      and customizable solutions tailored to meet your specific
                      needs, Me and my associates can help you achieve your
                      business goals and build a long-term partnership focused
                      on delivering value. Whether you need help with database
                      management, enterprise portals and collaboration, business
                      intelligence and analytics, or technology consulting, Me
                      and my associates has the expertise to help your business
                      succeed.
                    </span>
                  </li>
                </ul>
                <p className="mt-8">
                  Et vitae blandit facilisi magna lacus commodo. Vitae sapien
                  duis odio id et. Id blandit molestie auctor fermentum
                  dignissim. Lacus diam tincidunt ac cursus in vel. Mauris
                  varius vulputate et ultrices hac adipiscing egestas. Iaculis
                  convallis ac tempor et ut. Ac lorem vel integer orci.
                </p>
                <h2 className="dark:text-white mt-16 text-2xl font-bold tracking-tight text-gray-900">
                  No server? No problem.
                </h2>
                <p className="mt-6">
                  Me and my associates can still write code using your favorite
                  language and platforms! Only now you focus on creating the
                  best APIs for your application. Or, you can use your developer
                  skills to automate the generation of static assets and deploy
                  your application.
                </p>
                <div className="px-10">
                  <ol className="list-disc">
                    <li>Simplify architecture</li>
                    <li>Leverage the best 3rd-party APIs</li>
                    <li>Take advantage of CDNs</li>
                    <li>Intensely focus on delivering business value</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
