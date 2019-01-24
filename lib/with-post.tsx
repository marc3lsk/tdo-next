import React from "react";
import MyLayout from "components/MyLayout";
import marked from "marked";
import dynamic from "next/dynamic";

const Highlight = dynamic(import("react-highlight").then(module => module.default));

marked.setOptions({ gfm: true, tables: true, breaks: true });

export interface IWithPostOptions {
  content: string;
  title: string;
}

export default function WithPost(options: IWithPostOptions) {
  return class PostPage extends React.Component {
    renderMarkdown() {
      // If a code snippet contains in the markdown content then use Highlight
      // component
      if (/~~~/.test(options.content)) {
        return (
          <>
            <Highlight innerHTML>{marked(options.content)}</Highlight>
          </>
        );
      }

      // If not, simply render the generated HTML from markdown
      return (
        <div
          dangerouslySetInnerHTML={{
            __html: marked(options.content)
          }}
        />
      );
    }

    render() {
      return (
        <MyLayout>
          <h1>{options.title}</h1>
          {this.renderMarkdown()}
        </MyLayout>
      );
    }
  };
}
