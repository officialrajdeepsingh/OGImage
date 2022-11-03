import type { NextPage } from 'next'
import { NextSeo } from 'next-seo';
import Link from "next/link";

import data from "../Data/data";

import slugify from "slugify";
import Head from 'next/head';
import { domain } from '../config';

export const Home = () => {


  return (
    <>
     <NextSeo
      title="Minimal blog"
      description="Minimal blog design and built with tailwindcss and nextjs"
        openGraph={{
          type: 'website',
          url: domain,
          title: "Minimal blog",
          description: "minimal blog design and built with tailwindcss and nextjs",
          images: [
            {
              url: `${domain}api/og`,
              width: 1200,
              height: 600,
              alt: "minimal blog",
            },
          ],
        }}
      />

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="mb-10 border-t border-b divide-y">

          {
            data.map(
              item => {
                let slug = slugify(item.title, {
                  replacement: '-',
                  remove: undefined,
                  lower: true,
                  strict: false,
                  trim: true
                })
                return <div key={item.id} className="grid py-8 sm:grid-cols-4">
                  <div className="mb-4 sm:mb-0">
                    <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                      <Link
                        href={{
                          pathname: 'post/[slug]',
                          query: { slug: slug },
                        }}
                        className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        aria-label="Category"
                      >
                        {item.category}
                      </Link>
                      <p className="text-gray-600">{item.date}</p>
                    </div>
                  </div>
                  <div className="sm:col-span-3 lg:col-span-2">
                    <div className="mb-3">
                      <Link

                        href={{
                          pathname: 'post/[slug]',
                          query: { slug: slug },
                        }}
                        aria-label="Article"
                        className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                      >
                        <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                          {item.title}
                        </p>
                      </Link>
                    </div>
                    <p className="text-gray-700">
                      {item.description}
                    </p>
                  </div>
                </div>
              }
            )
          }
        </div>
      </div>
    </>
  );
};

export default Home
