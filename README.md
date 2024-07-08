# Blueprint

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

## 💡 About Blueprint

Blueprint is a component-driven library designed to provide comprehensive guidance on building and using web components. It offers documentation, suggestions, and best practices, with a strong emphasis on accessibility.

Each component in Blueprint comes with detailed documentation that includes examples of how the component can be constructed and best practices to consider when using it. This makes it easy for developers to understand how to use the components in their own projects. In addition, we provide the compiled HTML of each component, allowing developers to simply copy and paste the code into their own projects if desired.

One of the key features of Blueprint is its platform agnosticism. Despite being built in Astro, the components and practices outlined in Blueprint are applicable across a variety of platforms, including React, WordPress, Craft, Django, and more. This means that no matter what platform you’re working on, you can draw from the Blueprint documentation to construct and use these components effectively.

## 🚀 Project Structure

Inside of your project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   │   └── config.ts
│   └── env.d.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Custom MDX Components

There are a several custom components available for use in the Blueprint documentation to help with presentation and documentation. These components are available in the `/src/components/starlight/` directory.

### Preview

The `<Preview>` component is a compound component that is used to display a preview of a component along with some associated code. The component is made up of three parts: `<Preview.Root>`, `<Preview.Canvas>`, and `<Preview.Docs>`. The `<Preview.Root>` component is the parent component that wraps the other two components and provides the JS logic to the component. The `<Preview.Canvas>` component is used to display the preview of the component. The `<Preview.Docs>` component is used to display the code associated with the preview.

The `<Preview.Docs>` block is often combined with [Starlight's `<Tabs>` and `<TabItem>` components](https://starlight.astro.build/guides/components/#tabs) to display multiple code examples in different outputs.

See example below:

````jsx
import {(Tabs, TabItem)} from '@astrojs/starlight/components';
import Preview from '@/components/starlight/preview/Preview.ts';

<Preview.Root>
  <Preview.Canvas>
    <Button>Button</Button>
  </Preview.Canvas>
  <Preview.Docs>
    <Tabs>
      <TabItem label="Astro" icon="astro">
        ```astro
        <Button>Button</Button>
        ```
      </TabItem>
      <TabItem label="Compiled" icon="seti:html">
        ```html
        <button type="button" data-component="Button" class="btn-contained">
          Button
        </button>
        ```
      </TabItem>
    </Tabs>
  </Preview.Docs>
</Preview.Root>
````

<img src="https://github.com/ekfuhrmann/viget-blueprint/assets/8878152/f5c5f84f-1bf0-4b9a-8bcd-1733fb00213b" alt="" style="width: 600px;" />

### PropTable

The `<PropTable>` component is used to display a table of the props that are available for a component. The component takes in a `rows` prop which is an array of objects that represent the props that are available for the component. Each object can have the following properties: `prop`, `type`, `description`, `default`, and `children`. Children is used to nest properties within a property, following the same pattern as the parent object.

See example below:

```jsx
import PropTable from '@/components/starlight/PropTable.astro';

<PropTable
  rows={[
    {
      prop: 'foo',
      type: `string`,
      description:
        'This is an example prop named "foo" that can be passed to the component.',
      default: '"this is foo"',
      required: true,
      children: [
        {
          prop: 'childFoo',
          type: 'string',
          description: 'This is a child prop of "foo".',
        },
        {
          prop: 'childFoo2',
          type: 'string',
          description: 'This is another child prop of "foo".',
        },
      ],
    },
    {
      prop: 'bar',
      type: `number`,
      description:
        'This is an example prop named "bar" that can be passed to the component.',
    },
  ]}
/>
```

<img src="https://github.com/ekfuhrmann/viget-blueprint/assets/8878152/d8610b94-2ae6-47e6-ab8e-9bd3e3db8bbb" alt="" style="width: 600px;" />

## ❤️ Contribute

The Blueprint library is still in its early stages, and we have plans to continue expanding the library with more components, examples, and best practices as we go. We are also hoping to include more code examples for different platforms, such as including React, Craft, and Django. If you have any suggestions or examples for components or features you’d like to see in Blueprint, please feel free to [open an issue on GitHub](https://github.com/ekfuhrmann/viget-blueprint/issues).
