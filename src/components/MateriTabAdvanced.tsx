import React, { useState } from "react";
import { FileText, Image, Download, Eye, ChevronDown, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface MaterialFile {
  id: string;
  title: string;
  type: "pdf" | "jpg";
  fileName: string;
  uploadDate: string;
  size: string;
}

interface MaterialCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  files: MaterialFile[];
}

export default function MateriTabAdvanced() {
  const [activeCategory, setActiveCategory] = useState<"materi" | "catatan">("materi");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [previewFile, setPreviewFile] = useState<MaterialFile | null>(null);

  // Sample data - replace with actual data from backend
  const categories: Record<"materi" | "catatan", MaterialCategory> = {
    materi: {
      id: "materi",
      name: "Materi & Bank Soal",
      icon: <FileText className="w-6 h-6" />,
      description: "Koleksi lengkap materi pembelajaran dan bank soal dalam format PDF",
      files: [
        {
          id: "pdf-1",
          title: "Pola Bilangan - Materi Lengkap",
          type: "pdf",
          fileName: "Pola_Bilangan_Materi.pdf",
          uploadDate: "2026-06-28",
          size: "2.4 MB",
        },
        {
          id: "pdf-2",
          title: "Bentuk Aljabar - Bank Soal",
          type: "pdf",
          fileName: "Bentuk_Aljabar_Bank_Soal.pdf",
          uploadDate: "2026-06-27",
          size: "3.1 MB",
        },
        {
          id: "pdf-3",
          title: "Sifat-Sifat Operasi - Materi + Latihan",
          type: "pdf",
          fileName: "Sifat_Operasi_Materi_Latihan.pdf",
          uploadDate: "2026-06-26",
          size: "1.8 MB",
        },
        {
          id: "pdf-4",
          title: "SPLDV - Bank Soal Komprehensif",
          type: "pdf",
          fileName: "SPLDV_Bank_Soal.pdf",
          uploadDate: "2026-06-25",
          size: "2.9 MB",
        },
      ],
    },
    catatan: {
      id: "catatan",
      name: "Catatan",
      icon: <Image className="w-6 h-6" />,
      description: "Catatan pembelajaran dalam format gambar (JPG) untuk referensi visual",
      files: [
        {
          id: "jpg-1",
          title: "Catatan Pola Bilangan - Halaman 1",
          type: "jpg",
          fileName: "Catatan_Pola_Bilangan_1.jpg",
          uploadDate: "2026-06-28",
          size: "1.2 MB",
        },
        {
          id: "jpg-2",
          title: "Catatan Pola Bilangan - Halaman 2",
          type: "jpg",
          fileName: "Catatan_Pola_Bilangan_2.jpg",
          uploadDate: "2026-06-28",
          size: "1.3 MB",
        },
        {
          id: "jpg-3",
          title: "Catatan Bentuk Aljabar - Halaman 1",
          type: "jpg",
          fileName: "Catatan_Bentuk_Aljabar_1.jpg",
          uploadDate: "2026-06-27",
          size: "1.1 MB",
        },
        {
          id: "jpg-4",
          title: "Catatan Bentuk Aljabar - Halaman 2",
          type: "jpg",
          fileName: "Catatan_Bentuk_Aljabar_2.jpg",
          uploadDate: "2026-06-27",
          size: "1.4 MB",
        },
      ],
    },
  };

  const currentCategory = categories[activeCategory];
  const isExpanded = (id: string) => expandedId === id;

  const toggleExpand = (id: string) => {
    setExpandedId(isExpanded(id) ? null : id);
  };

  return (
    <div id="alg-materi-advanced-tab" className="relative w-full max-w-4xl mx-auto px-4 py-8">
      {/* Category Selector */}
      <div className="mb-8">
        <div className="flex gap-3 sm:gap-4">
          {(["materi", "catatan"] as const).map((cat) => {
            const cat_data = categories[cat];
            const isActive = activeCategory === cat;
            return (
              <motion.button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setExpandedId(null);
                }}
                className={`flex-1 sm:flex-none flex items-center gap-2.5 px-5 py-3.5 rounded-2xl font-bold transition-all duration-300 border-2 ${
                  isActive
                    ? "bg-gradient-to-r from-joy-orange to-joy-coral text-white border-joy-coral shadow-lg shadow-joy-coral/40"
                    : "bg-white text-slate-600 border-slate-200 hover:border-joy-orange hover:text-joy-orange hover:shadow-md"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-lg">{cat_data.icon}</span>
                <span className="hidden sm:inline">{cat_data.name}</span>
                <span className="sm:hidden text-xs">{cat}</span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Category Info */}
      <div className="mb-6 p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-indigo-100">
        <div className="flex items-start gap-3">
          <div className="mt-1 text-indigo-600">{currentCategory.icon}</div>
          <div>
            <h3 className="text-lg font-bold text-slate-800 mb-1">{currentCategory.name}</h3>
            <p className="text-sm text-slate-600">{currentCategory.description}</p>
          </div>
        </div>
      </div>

      {/* Files List */}
      <div className="space-y-3">
        {currentCategory.files.map((file) => (
          <motion.div
            key={file.id}
            layout
            className="rounded-2xl border-2 border-slate-200 bg-white overflow-hidden hover:border-joy-orange transition-colors duration-300"
          >
            {/* File Header */}
            <button
              onClick={() => toggleExpand(file.id)}
              className="w-full text-left px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-4 flex-1 min-w-0">
                {/* File Icon */}
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                    file.type === "pdf"
                      ? "bg-red-100"
                      : "bg-purple-100"
                  }`}
                >
                  {file.type === "pdf" ? (
                    <FileText className={`w-6 h-6 ${file.type === "pdf" ? "text-red-600" : "text-purple-600"}`} />
                  ) : (
                    <Image className={`w-6 h-6 ${file.type === "pdf" ? "text-red-600" : "text-purple-600"}`} />
                  )}
                </div>

                {/* File Info */}
                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-slate-800 truncate">{file.title}</h4>
                  <p className="text-xs text-slate-500 mt-1">
                    {file.fileName} • {file.size} • {file.uploadDate}
                  </p>
                </div>
              </div>

              {/* Chevron Icon */}
              <motion.div
                animate={{ rotate: isExpanded(file.id) ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0 text-slate-400"
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </button>

            {/* Expanded Content */}
            <AnimatePresence initial={false}>
              {isExpanded(file.id) && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="border-t border-slate-200 bg-slate-50/50"
                >
                  <div className="px-5 py-4 sm:px-6 sm:py-5 space-y-3">
                    {/* Preview/View Section */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => setPreviewFile(file)}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-colors"
                      >
                        <Eye className="w-5 h-5" />
                        <span>Lihat Preview</span>
                      </button>
                      <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition-colors">
                        <Download className="w-5 h-5" />
                        <span>Unduh</span>
                      </button>
                    </div>

                    {/* Additional Info */}
                    <div className="text-xs text-slate-600 bg-white p-3 rounded-lg border border-slate-200">
                      <p className="font-semibold mb-2">Informasi File:</p>
                      <ul className="space-y-1 list-disc list-inside">
                        <li>Format: {file.type.toUpperCase()}</li>
                        <li>Ukuran: {file.size}</li>
                        <li>Diupload: {file.uploadDate}</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Preview Modal */}
      <AnimatePresence>
        {previewFile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
            onClick={() => setPreviewFile(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 flex items-center justify-between p-5 sm:p-6 border-b border-slate-200 bg-white">
                <div>
                  <h3 className="font-bold text-lg text-slate-800">{previewFile.title}</h3>
                  <p className="text-xs text-slate-500 mt-1">{previewFile.fileName}</p>
                </div>
                <button
                  onClick={() => setPreviewFile(null)}
                  className="flex-shrink-0 p-2 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-slate-600" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-5 sm:p-6">
                {previewFile.type === "pdf" ? (
                  <div className="bg-slate-100 rounded-lg p-8 text-center">
                    <FileText className="w-16 h-16 mx-auto text-red-500 mb-4" />
                    <p className="text-slate-600 font-medium mb-4">File PDF - {previewFile.fileName}</p>
                    <button className="px-6 py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition-colors">
                      Buka File PDF
                    </button>
                  </div>
                ) : (
                  <div className="bg-slate-100 rounded-lg overflow-hidden">
                    <img
                      src={`https://via.placeholder.com/800x600?text=${encodeURIComponent(previewFile.title)}`}
                      alt={previewFile.title}
                      className="w-full h-auto"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Empty State (if no files) */}
      {currentCategory.files.length === 0 && (
        <div className="text-center py-16">
          <FileText className="w-12 h-12 mx-auto text-slate-300 mb-4" />
          <p className="text-slate-500 font-medium">Belum ada file dalam kategori ini</p>
          <p className="text-xs text-slate-400 mt-2">File akan ditampilkan di sini setelah diupload</p>
        </div>
      )}
    </div>
  );
}
