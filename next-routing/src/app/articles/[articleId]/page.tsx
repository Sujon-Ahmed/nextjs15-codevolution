import Link from 'next/link'
import React, { use } from 'react'

const NewsArticle = ({params, searchParams}: {
    params: Promise<{articleId: string}>;
    searchParams: Promise<{lang?: 'en' | 'es' | 'fr'}>
}) => {
    const {articleId} = use(params);
    const {lang= 'en'} = use(searchParams);
  return (
    <>
    <div className='px-6'>
    <p>News Article {articleId}</p>
    <p>Reading in {lang}</p>
    </div>
    <Link href={`/articles/${articleId}?lang=en`}>English</Link>
    <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
    <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
    </>
  )
}

export default NewsArticle