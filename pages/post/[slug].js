import data from "../../Data/data";
import { domain } from '../../config';
import { NextSeo } from 'next-seo';
import slugify from "slugify";

const Post = ({ post, slug }) => {

  return (
    <>
      <NextSeo
      title={post[0].title}
      twitter={{
        handle: '@Official_R_deep',
        site: '@Official_R_deep',
        cardType: 'summary_large_image',
      }}
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
              url: `${domain}api/og?title=${post[0].title}&BgColor=blue&color=black`,
              width: 1200,
              height: 600,
              alt: post[0].title,
            },
          ],
        }}
      />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col">

          <h2 className="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5 mt-1"> {post[0].title}</h2>

          <p className="leading-relaxed text-base mt-1"> {post[0].description}</p>

        <div className="flex flex-row">
          <span>share on :  <a type="button" role="button" title={post[0].title} href={`https://twitter.com/intent/tweet?url=${domain}${slugify(post[0].title, { replacement: '-', lower: true, trim: true })}`} className="text-indigo-500 inline-flex items-center  mt-2">twitter </a></span>
        </div>

          <div className="md:w-3/5 mt-4" dangerouslySetInnerHTML={{ __html: post[0].content }}>
          </div>
        </div>
      </section>
    </>
  )
};

export async function getStaticPaths() {

  // get all the post by slug
  const publish = data.map((item) => ({ params: { slug: slugify(item.title, { replacement: '-', lower: true, trim: true }) } }))


  return { paths: publish, fallback: false, }
}

export async function getStaticProps({ params: { slug } }) {

  let post = data.filter(
    item => {
      return slug === slugify(item.title, { replacement: '-', lower: true, trim: true })
    }
  )


  return { props: { post, slug } }
}

export default Post