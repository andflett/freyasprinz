import Head from 'next/head'

interface MetaProps {
    meta: {
        title?: string,
        url: string,
        description?: string,
        noIndex?: boolean,
        image?: string
    }
}

export function MetaTags({ meta, ...rest }: MetaProps) {

    return (
        <Head {...rest}>

            <meta name="viewport" content="width=device-width, initial-scale=1" />

            <meta property="og:url" content={meta.url} />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />

            {meta.title &&
                <>
                    <title>{meta.title}</title>
                    <meta itemProp="name" content={meta.title} key="itemprop_name" />
                    <meta property="og:title" content={meta.title} key="og_title" />
                    <meta name="twitter:title" content={meta.title} key="twitter_title" />
                </>
            }

            {meta.description &&
                <>
                    <meta name="description" content={meta.description} key="description" />
                    <meta itemProp="description" content={meta.description} key="itemprop_description" />
                    <meta property="og:description" content={meta.description} key="og_description" />
                    <meta name="twitter:description" content={meta.description} key="twitter_description" />
                </>
            }

            {meta.image &&
                <>
                    <meta itemProp="image" content={meta.image} key="itemprop_image" />
                    <meta property="og:image" content={meta.image} key="og_image" />
                    <meta name="twitter:image" content={meta.image} key="twitter_image" />
                </>
            }

            {meta.noIndex &&
                <meta name="robots" content="noindex" key="robots" />
            }

        </Head>
    )

}
