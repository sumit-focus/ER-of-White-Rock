import { createClient } from '@sanity/client';

const sanityClient = createClient(
            {"apiVersion":"v2023-08-24","projectId":"hdx7hgqq","dataset":"production","useCdn":false}
          );

export { sanityClient as s };
