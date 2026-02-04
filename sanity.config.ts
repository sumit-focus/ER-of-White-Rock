import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schema';

export default defineConfig({
    name: 'default',
    title: 'ER of White Rock',

    projectId: 'hdx7hgqq',
    dataset: 'production',

    plugins: [
        structureTool({
            structure: (S: any) =>
                S.list()
                    .title('Content')
                    .items([
                        S.listItem()
                            .title('Landing Page')
                            .child(
                                S.document()
                                    .schemaType('landingPage')
                                    .documentId('landingPage')
                            ),
                        S.listItem()
                            .title('Site Settings')
                            .child(
                                S.document()
                                    .schemaType('settings')
                                    .documentId('settings')
                            ),
                        S.divider(),
                        ...S.documentTypeListItems().filter(
                            (listItem: any) => !['landingPage', 'settings'].includes(listItem.getId() as string)
                        ),
                    ]),
        }),
    ],

    schema: {
        types: schemaTypes,
        templates: (templates) =>
            templates.filter(({ schemaType }) => !['landingPage', 'settings'].includes(schemaType)),
    },

    document: {
        actions: (input, context) =>
            ['landingPage', 'settings'].includes(context.schemaType)
                ? input.filter(({ action }) => action && ['publish', 'discardChanges', 'restore'].includes(action))
                : input,
    },
});
