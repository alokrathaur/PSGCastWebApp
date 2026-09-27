import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Cast, Download, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export const NotFoundPage: React.FC = () => {
  useEffect(() => {
    document.title = "404 — Page Not Found | PSG Cast";
  }, []);

  return (
    <main className="min-h-screen pt-36 pb-24 flex items-center justify-center bg-[#FAFAFC] px-4">
      <div className="text-center max-w-md space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mx-auto shadow-xs">
          <Cast className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs text-blue-600 font-bold uppercase tracking-widest">
            Error 404
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Frame Signal Lost
          </h1>
          <p className="text-sm text-slate-600 font-normal">
            The page you're looking for doesn't exist or has moved to a new transport address.
          </p>
        </div>

        <div className="flex items-center justify-center gap-3 pt-2">
          <Link to="/">
            <Button variant="gradient" size="md">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <Link to="/download">
            <Button variant="outline" size="md">
              <Download className="w-4 h-4 mr-2" />
              Download Mac App
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
};
