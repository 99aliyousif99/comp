import React, { useCallback } from "react";
import OrderedList from "@tiptap/extension-ordered-list";

import "./RTE.css";
import BulletList from "@tiptap/extension-bullet-list";

import Bold from "../../assets/Bold.svg";
import Italic from "../../assets/italic.svg";
import link from "../../assets/Link.svg";
import Image from "@tiptap/extension-image";
import CodeExtension from "@tiptap/extension-code";
import Para from "../../assets/Paragraph.svg";
import Img from "../../assets/Image.svg";
import Code from "../../assets/Code.svg";
import Ordered from "../../assets/Ordered.svg";
import Unordered from "../../assets/Unordered.svg";
import Left from "../../assets/Left.svg";
import Right from "../../assets/Right.svg";
import Center from "../../assets/Center.svg";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";

const extensions = [StarterKit];

const RTE = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Write something …",
      }),
      Link.configure({
        openOnClick: true,
        autolink: false,
        defaultProtocol: "https",
        protocols: ["http", "https"],
      }),
      CodeExtension,
      Image,
      OrderedList,
      BulletList,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      })
    ],
  });
  const addLink = () => {
    const url = prompt("Enter the URL");
    if (url) {
      editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: url })
        .run();
    }
  };

  const addImage = useCallback(() => {
    const url = window.prompt("URL");

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  if (!editor) {
    return null;
  }
  return (
    <div className="widget">
      <div className="widgetContent">
        <p className="answer">Your answer</p>
        <div className="textArea">
          <div className="buttonsDiv">
            <div className="set1">
              <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={!editor.can().chain().focus().toggleBold().run()}
              >
                <img src={Bold} alt="" />
              </button>
              <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                disabled={!editor.can().chain().focus().toggleItalic().run()}
              >
                <img src={Italic} alt="" />
              </button>
            </div>
            <div className="set2">
              <button
                onClick={addLink}
                disabled={!editor.can().chain().focus().setLink().run()}
              >
                <img src={link} alt="" />
              </button>
              <button>
                <img src={Para} alt="" />
              </button>
              <button onClick={addImage}>
                <img src={Img} alt="" />
              </button>
              <button
                onClick={() => editor.chain().focus().setCode().run()}
                disabled={editor.isActive("code")}
              >
                <img src={Code} alt="" />
              </button>
            </div>
            <div className="set3">
              <button
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
              >
                <img src={Ordered} alt="" />
              </button>
              <button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
              >
                <img src={Unordered} alt="" />
              </button>
            </div>
            <div className="set4">
              <button
                onClick={() =>
                  editor.chain().focus().setTextAlign("left").run()
                }
              >
                <img src={Left} alt="" />
              </button>
              <button
                onClick={() =>
                  editor.chain().focus().setTextAlign("center").run()
                }
              >
                <img src={Center} alt="" />
              </button>
              <button
                onClick={() =>
                  editor.chain().focus().setTextAlign("right").run()
                }
              >
                <img src={Right} alt="" />
              </button>
            </div>
          </div>
          
          <EditorContent editor={editor} />
        </div>
        <button className="post">Post Your Answer</button>
        <p className="policy">
          By clicking “Post Your Answer”, you agree to our <br />
          <a href="#"> terms of service</a> and <a href="#">privacy policy</a>
        </p>
      </div>
    </div>
  );
};

export default RTE;
