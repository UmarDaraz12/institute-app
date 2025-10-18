import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Calendar, Eye, Download } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Required for react-pdf to work
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`;

const syllabusData = [
  {
    id: 1,
    title: "O Level Computer Science Syllabus 2025",
    date: "Updated: September 2025",
    pdfUrl: "/olevel.pdf",
  },
  {
    id: 2,
    title: "AS Level Computer Science Syllabus 2025",
    date: "Updated: August 2025",
    pdfUrl: "/aslevel.pdf",
  },
];

const pastPapers = [
  {
    id: 1,
    title: "O Level CS Past Papers (2023-2024)",
    date: "Uploaded: July 2025",
     pdfUrl: "/olevel.pdf",
  },
  {
    id: 2,
    title: "A Level CS Past Papers (2022-2024)",
    date: "Uploaded: July 2025",
    pdfUrl: "/aslevel.pdf",
  },
];

const SyllabusAndPastPapers = () => {
  const [previewPdf, setPreviewPdf] = useState<string | null>(null);

  const handlePreview = (pdfUrl: string) => {
    setPreviewPdf(pdfUrl);
  };

  const handleDownload = (pdfUrl: string) => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = pdfUrl.split("/").pop() || "file.pdf";
    link.click();
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30 py-24 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Syllabus Section */}
          <section>
            <h2 className="text-4xl font-bold mb-10 text-center text-primary">
              📘 Syllabus
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {syllabusData.map((item) => (
                <Card
                  key={item.id}
                  className="p-6 bg-card border-2 border-primary/10 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <FileText className="w-5 h-5 text-primary" />
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <Calendar className="w-4 h-4" /> {item.date}
                  </p>
                  <div className="flex gap-3 mt-6">
                    {/* <Button
                      onClick={() => handlePreview(item.pdfUrl)}
                      className="bg-primary/90 hover:bg-primary transition-all"
                    >
                      <Eye className="w-4 h-4 mr-2" /> Preview
                    </Button> */}
                    <Button
                      onClick={() => handleDownload(item.pdfUrl)}
                      variant="outline"
                      className="hover:bg-accent/10"
                    >
                      <Download className="w-4 h-4 mr-2" /> Download
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Past Papers Section */}
          <section>
            <h2 className="text-4xl font-bold mb-10 text-center text-primary">
              📄 Past Papers
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {pastPapers.map((item) => (
                <Card
                  key={item.id}
                  className="p-6 bg-card border-2 border-primary/10 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <FileText className="w-5 h-5 text-primary" />
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <Calendar className="w-4 h-4" /> {item.date}
                  </p>
                  <div className="flex gap-3 mt-6">
                    {/* <Button
                      onClick={() => handlePreview(item.pdfUrl)}
                      className="bg-primary/90 hover:bg-primary transition-all"
                    >
                      <Eye className="w-4 h-4 mr-2" /> Preview
                    </Button> */}
                    <Button
                      onClick={() => handleDownload(item.pdfUrl)}
                      variant="outline"
                      className="hover:bg-accent/10"
                    >
                      <Download className="w-4 h-4 mr-2" /> Download
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* PDF Preview Modal */}
          {previewPdf && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
              <div className="bg-white dark:bg-neutral-900 rounded-xl p-4 max-w-4xl w-full relative">
                <Button
                  onClick={() => setPreviewPdf(null)}
                  className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white"
                >
                  ✕
                </Button>
                <div className="max-h-[80vh] overflow-y-auto">
                  <Document file={previewPdf}>
                    <Page pageNumber={1} width={700} />
                  </Document>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SyllabusAndPastPapers;
