import Head from 'next/head'
import Image from 'next/image'

import { NextSeo } from 'next-seo';


const about = () => {

  return( 
    <>
  <NextSeo
      title={post[0].title}
        openGraph={{
          type: 'website',
          authorName: "Rajdeep Singh",
          url: `${domain}${slug}`,
          title: post[0].title,
          description: post[0].description,
          authors: [
            'https://officialrajdeepsingh.medium.com/',
          ],
          images: [
            {
              url: `${domain}api/og`,
              width: 1200,
              height: 600,
              alt: post[0].title,
            },
          ],
        }}
      />
    
    <h1 className='mt-3 p-2 text-2xl'>About us </h1>
    <p className='mt-4 p-2 text-xl'> 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fringilla facilisis libero, id efficitur justo. Integer lorem nulla, accumsan ut commodo vel, bibendum interdum risus. Quisque ultrices imperdiet pretium. Praesent nunc leo, mattis ac vestibulum et, condimentum tempus eros. Maecenas porttitor bibendum sem, ut interdum est viverra at. Quisque pulvinar mi justo, sit amet aliquam mauris hendrerit non. In ut scelerisque nibh. Curabitur interdum tortor purus, vel commodo tortor congue nec. Suspendisse nulla turpis, aliquam eget feugiat ut, convallis quis mauris. Nam dolor arcu, porta bibendum posuere sit amet, facilisis at ipsum. Nulla facilisi. Nunc elementum orci risus, quis molestie orci bibendum ut. Sed eu auctor risus. Nunc lobortis sem vel pellentesque tincidunt. In risus ligula, porta eget mauris sed, fermentum porttitor ligula.
    </p>
    </>
  )
};

export default about 