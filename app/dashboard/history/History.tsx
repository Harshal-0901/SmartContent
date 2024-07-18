// // app/history/History.tsx
// "use client";

// import React from "react";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import Templates from "@/app/(data)/Templates";
// import { parseISO, format } from "date-fns";
// import { useToast } from "@/components/ui/use-toast";

// interface HISTORY {
//   id: number;
//   formData: string;
//   aiResponse: string;
//   templateSlug: string;
//   createdBy: string;
//   createdAt: string | null;
// }

// interface HistoryProps {
//   historyData: HISTORY[];
// }

// const History: React.FC<HistoryProps> = ({ historyData }) => {
//   const { toast } = useToast(); // Destructure the toast function from useToast

//   const handleCopy = (text: string) => {
//     navigator.clipboard.writeText(text).then(() => {
//       toast({
//         title: "Copied to clipboard",
//       });
//     });
//   };
//   return (
//     <div className="bg-gray-100  flex justify-center items-center">
//       <div className="m-5 p-5 border rounded-lg bg-white w-full">
//         <header className="text-center mb-5 mt-5">
//           <h1 className="text-3xl font-bold">History</h1>
//           <p className="mt-2">Search your previously generated AI content</p>
//         </header>
//         <div className="overflow-x-auto">
//           <table className="w-full border-collapse bg-white rounded-lg p-10">
//             <thead>
//               <tr className="bg-gray-100">
//                 <th className="border-b-2 border-gray-200 px-5 py-2">
//                   Template
//                 </th>
//                 <th className="border-b-2 border-gray-200 px-5 py-2">
//                   AI Response
//                 </th>
//                 <th className="border-b-2 border-gray-200 px-5 py-2">Date</th>
//                 <th className="border-b-2 border-gray-200 px-5 py-2">Words</th>
//                 <th className="border-b-2 border-gray-200 px-5 py-2">Copy</th>
//               </tr>
//             </thead>
//             <tbody>
//               {historyData.map((item) => {
//                 const wordCount = item.aiResponse.trim().split(/\s+/).length;
//                 const template = Templates.find(
//                   (t) => t.slug === item.templateSlug
//                 );
//                 const limitedAiResponse = item.aiResponse
//                   .split("\n")
//                   .slice(0, 3)
//                   .join("\n"); // Limit to 3 lines
//                 return (
//                   <tr
//                     key={item.id.toString()}
//                     className="border-b border-gray-200"
//                   >
//                     <td className="px-5 py-2 text-center">
//                       {template && (
//                         <div className="flex items-center">
//                           <Image
//                             src={template.icon}
//                             alt={template.name}
//                             width={24}
//                             height={24}
//                           />
//                           <span className="ml-2">{template.name}</span>
//                         </div>
//                       )}
//                     </td>
//                     <td className="px-5 py-2 max-w-lg break-words truncate text-center">
//                       {item.aiResponse}
//                     </td>
//                     <td className="px-10 py-2 text-center">
//                       {item.createdAt
//                         ? format(parseISO(item.createdAt), "MM/dd/yyyy")
//                         : "-"}
//                     </td>
//                     <td className="px-10 py-2 text-center">{wordCount}</td>
//                     <td className="px-10 py-3 flex justify-center">
//                       <Button
//                         onClick={() => handleCopy(item.aiResponse)}
//                         className="hover:text-black hover:bg-slate-300"
//                       >
//                         Copy
//                       </Button>
//                     </td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default History;
