// See package.json for installed node modules

// We installed sanity client via npm (npm install @sanity/client)
import sanityClient from '@sanity/client';

export default sanityClient({
    // every sanity project has a projectId, found either in sanity.json or manage.sanity.io
    projectId: "fzks5u4e",
    // dataset is set to production by default with 'sanity init' command
    dataset: "production",
})