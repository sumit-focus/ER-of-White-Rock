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
                            .title('Insurance & Billing')
                            .child(
                                S.document()
                                    .schemaType('insurancePage')
                                    .documentId('insurancePage')
                            ),
                        S.listItem()
                            .title('Contact Us')
                            .child(
                                S.document()
                                    .schemaType('contactPage')
                                    .documentId('contactPage')
                            ),
                        S.listItem()
                            .title('About Us')
                            .child(
                                S.document()
                                    .schemaType('aboutPage')
                                    .documentId('aboutPage')
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
                            (listItem: any) => !['landingPage', 'settings', 'insurancePage', 'contactPage', 'aboutPage'].includes(listItem.getId() as string)
                        ),
                    ]),
        }),
    ],

    schema: {
        types: schemaTypes,
        templates: (templates) =>
            templates.filter(({ schemaType }) => !['landingPage', 'settings', 'insurancePage', 'contactPage', 'aboutPage'].includes(schemaType)),
    },

    document: {
        actions: (input, context) =>
            ['landingPage', 'settings', 'insurancePage', 'contactPage', 'aboutPage'].includes(context.schemaType)
                ? input.filter(({ action }) => action && ['publish', 'discardChanges', 'restore'].includes(action))
                : input,
    },
});
