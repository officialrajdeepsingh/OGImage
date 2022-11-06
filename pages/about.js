import { NextSeo } from 'next-seo';
import { domain } from '../config';


const about = () => {

  return (
    <>
      <NextSeo
        title="Minimal blog -- About us"
        description="Minimal blog design and built with tailwindcss and nextjs"
        twitter={{
          handle: '@Official_R_deep',
          site: '@Official_R_deep',
          cardType: 'summary_large_image',
        }}
        openGraph={{
          type: 'website',
          authorName: "Rajdeep Singh",
          url: domain,
          title: "Minimal blog -- About us",
          description: "Minimal blog design and built with tailwindcss and nextjs",
          authors: [
            'https://officialrajdeepsingh.medium.com/',
          ],
          images: [
            {
              url: `${domain}api/og?title=Minimal blog -- About us&BgColor=pink&color=black`,
              width: 1200,
              height: 640,
              alt: "Minimal blog",
            },
          ],
        }}
      />
      <div className='container mx-auto'>
        <h1 className='mt-3 p-2 text-2xl'>About us </h1>
        <p className='mt-4 p-2 text-xl'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fringilla facilisis libero, id efficitur justo. Integer lorem nulla, accumsan ut commodo vel, bibendum interdum risus. Quisque ultrices imperdiet pretium. Praesent nunc leo, mattis ac vestibulum et, condimentum tempus eros. Maecenas porttitor bibendum sem, ut interdum est viverra at. Quisque pulvinar mi justo, sit amet aliquam mauris hendrerit non. In ut scelerisque nibh. Curabitur interdum tortor purus, vel commodo tortor congue nec. Suspendisse nulla turpis, aliquam eget feugiat ut, convallis quis mauris. Nam dolor arcu, porta bibendum posuere sit amet, facilisis at ipsum. Nulla facilisi. Nunc elementum orci risus, quis molestie orci bibendum ut. Sed eu auctor risus. Nunc lobortis sem vel pellentesque tincidunt. In risus ligula, porta eget mauris sed, fermentum porttitor ligula.
        </p>

      </div>

    </>
  )
};

export default about 