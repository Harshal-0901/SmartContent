import React, { useEffect, useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useToast } from "@/components/ui/use-toast"; // Import the useToast hook

interface Props {
  aiOutput: string;
}

const OutputSection = ({ aiOutput }: Props) => {
  const editorRef = useRef<any>();
  const { toast } = useToast(); // Destructure the toast function from useToast

  useEffect(() => {
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput);
  }, [aiOutput]);

  const handleCopy = () => {
    const editorInstance = editorRef.current.getInstance();
    const markdownContent = editorInstance.getMarkdown();

    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(markdownContent).then(() => {
        toast({
          title: "Copied to clipboard",
          description: "The content has been copied to your clipboard.",
        });
      });
    } else {
      // Fallback for environments where clipboard API is not supported
      console.error("Clipboard API not supported");
      // Optionally, you can still show a toast or handle this case gracefully
    }
  };

  return (
    <div className="bg-white shadow-lg border rounded-lg">
      <div className="flex justify-between items-center p-5">
        <h2 className="font-bold text-lg">Your Result</h2>
        <Button className="flex gap-2" onClick={handleCopy}>
          <Copy className="w-4 h-4" /> Copy
        </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Your result will appear here..."
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        height="600px"
        onChange={() => editorRef.current.getInstance().getMarkdown()}
      />
    </div>
  );
};

export default OutputSection;
