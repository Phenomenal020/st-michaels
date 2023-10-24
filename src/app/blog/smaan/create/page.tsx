// "use client";

// import { $getRoot, $getSelection, EditorState } from "lexical";
// import { useEffect } from "react";

// import { LexicalComposer } from "@lexical/react/LexicalComposer";
// import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
// import { ContentEditable } from "@lexical/react/LexicalContentEditable";
// import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
// import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
// import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
// import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";

// import styles from "./page.module.css";

// const theme = {
//   // Theme styling goes here
// };

// // ---------------------- ERROR HANDLER -----------------------
// // Catch any errors that occur during Lexical updates and log them
// // or throw them as needed. If you don't throw them, Lexical will
// // try to recover gracefully without losing user data.
// function onError(error: Error): void {
//   console.error(error);
// }

// // ----------------- PLUG-INS ------------------------------
// // Lexical React plugins are React components, which makes them
// // highly composable. Furthermore, you can lazy load plugins if
// // desired, so you don't pay the cost for plugins until you
// // actually use them.
// // function MyCustomAutoFocusPlugin() {
// //   const [editor] = useLexicalComposerContext();

// //   useEffect(() => {
// //     // Focus the editor when the effect fires!
// //     editor.focus();
// //   }, [editor]);

// //   return null;
// // }

// // function MyOnChangePlugin(props: {
// //   // onchange handler gives us access to the editor the plugin is registered on
// //   onChange: (editorState: EditorState) => void;
// // }): null {
// //   // the editor
// //   const [editor] = useLexicalComposerContext();
// //   //   destructure props
// //   const { onChange } = props;
// //   useEffect(() => {
// //     // register an update listener
// //     return editor.registerUpdateListener(({ editorState }) => {
// //       onChange(editorState);
// //     });
// //   }, [onChange, editor]);
// //   return null;
// // }

// export default function Editor() {
//   const initialConfig = {
//     namespace: "MyEditor",
//     theme,
//     onError,
//   };

//   return (
//     <LexicalComposer initialConfig={initialConfig}>
//       <PlainTextPlugin
//         contentEditable={<ContentEditable className={styles.contentEditable} />}
//         placeholder={
//           <div className={styles.placeHolder}>Enter some text...</div>
//         }
//         ErrorBoundary={LexicalErrorBoundary}
//       />
//       {/* History Plugin: Undo, Redo */}
//       <HistoryPlugin />
//       {/* <MyOnChangePlugin
//         onChange={(editorState) => {
//           console.log(editorState);
//         }}
//       /> */}
//       {/* <MyCustomAutoFocusPlugin /> */}
//     </LexicalComposer>
//   );
// }

// ----------------- LESSON 2: RICH TEXT, THEME, NODES ---------------------
// "use client";

// import { $createTextNode, $getRoot, $getSelection, EditorState } from "lexical";
// import { useEffect } from "react";

// import { LexicalComposer } from "@lexical/react/LexicalComposer";
// import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
// import { ContentEditable } from "@lexical/react/LexicalContentEditable";
// import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
// import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
// import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
// import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
// import { HeadingNode, $createHeadingNode } from "@lexical/rich-text";

// import styles from "./page.module.css";

// const theme = {
//   text: {
//     bold: styles.phenomenalBold,
//   },
// };

// // h1 Plugin
// function HeadingPlugin(): JSX.Element {
//   const [editor] = useLexicalComposerContext();
//   const onClick = (e: React.MouseEvent): void => {
//     editor.update(() => {
//       const root = $getRoot();
//       root.append($createHeadingNode("h1").append($createTextNode("Hello")));
//     });
//   };
//   return <button onClick={onClick}>Heading</button>;
// }

// function onError(error: Error): void {
//   console.error(error);
// }

// export default function Editor() {
//   const initialConfig = {
//     namespace: "MyEditor",
//     theme,
//     onError,
//     nodes: [HeadingNode],
//   };

//   return (
//     <LexicalComposer initialConfig={initialConfig}>
//       <HeadingPlugin />
//       <RichTextPlugin
//         contentEditable={<ContentEditable className={styles.contentEditable} />}
//         placeholder={
//           <div className={styles.placeHolder}>Enter some text...</div>
//         }
//         ErrorBoundary={LexicalErrorBoundary}
//       />
//       <HistoryPlugin />
//     </LexicalComposer>
//   );
// }

// ----------------- MORE NODES --------------
"use client";

import {
  $createTextNode,
  $getRoot,
  $getSelection,
  $isRangeSelection,
  EditorState,
} from "lexical";
import { useEffect } from "react";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { HeadingNode, $createHeadingNode } from "@lexical/rich-text";
import { $setBlocksType } from "@lexical/selection";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";

import styles from "./page.module.css";
import {
  INSERT_UNORDERED_LIST_COMMAND,
  INSERT_ORDERED_LIST_COMMAND,
  ListNode,
  ListItemNode,
} from "@lexical/list";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

const theme = {
  text: {
    bold: styles.phenomenalBold,
  },
};

function HeadingPlugin(): JSX.Element {
  const [editor] = useLexicalComposerContext();
  const onClick = (tag: string): void => {
    editor.update(() => {
      // Get the selection this time
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        switch (tag) {
          case "h1":
            $setBlocksType(selection, (): any => $createHeadingNode("h1"));
            break; // Add break statement here
          case "h2":
            $setBlocksType(selection, (): any => $createHeadingNode("h2"));
            break; // Add break statement here
          case "h3":
            $setBlocksType(selection, (): any => $createHeadingNode("h3"));
            break; // Add break statement here
          case "h4":
            $setBlocksType(selection, (): any => $createHeadingNode("h4"));
            break; // Add break statement here
          case "h5":
            $setBlocksType(selection, (): any => $createHeadingNode("h5"));
            break; // Add break statement here
          case "h6":
            $setBlocksType(selection, (): any => $createHeadingNode("h6"));
            break; // Add break statement here
          default:
            break;
        }
      }
    });
  };
  return (
    <div>
      <button onClick={() => onClick("h1")}>h1</button>
      <button onClick={() => onClick("h2")}>h2</button>
      <button onClick={() => onClick("h3")}>h3</button>
      <button onClick={() => onClick("h4")}>h4</button>
      <button onClick={() => onClick("h5")}>h5</button>
      <button onClick={() => onClick("h6")}>h6</button>
    </div>
  );
}

function ListToolBarPlugin(): JSX.Element {
  const [editor] = useLexicalComposerContext();
  const onClick = (tag: string): void => {
    editor.update(() => {
      // Get the selection this time
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        switch (tag) {
          case "ul":
            editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
            break; // Add break statement here
          case "ol":
            editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
            break; // Add break statement here
          default:
            break;
        }
      }
    });
  };
  return (
    <div>
      <button onClick={() => onClick("ol")}>ol</button>
      <button onClick={() => onClick("ul")}>ul</button>
    </div>
  );
}

function ToolBarPlugin(): JSX.Element {
  return (
    <div>
      <HeadingPlugin />
      <ListToolBarPlugin />
    </div>
  );
}

function onError(error: Error): void {
  console.error(error);
}

export default async function Editor() {
  const router = useRouter();

  const supabase = createClientComponentClient();
  // const { data } = await supabase.auth.getSession();
  // if (!data.session) {
  //   console.log("pushing to login")
  //   router.push("/");
  // } else {
  //   console.log(data.session)
  // }

  const initialConfig = {
    namespace: "MyEditor",
    theme,
    onError,
    nodes: [HeadingNode, ListNode, ListItemNode],
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <ToolBarPlugin />
      <ListPlugin />
      <RichTextPlugin
        contentEditable={<ContentEditable className={styles.contentEditable} />}
        placeholder={
          <div className={styles.placeHolder}>Enter some text...</div>
        }
        ErrorBoundary={LexicalErrorBoundary}
      />
      <HistoryPlugin />
    </LexicalComposer>
  );
}
