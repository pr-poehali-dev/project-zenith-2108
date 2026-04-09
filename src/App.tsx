
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ArticleCentralBank from "./pages/ArticleCentralBank";
import ArticleCommercialBanks from "./pages/ArticleCommercialBanks";
import ArticleMoney from "./pages/ArticleMoney";
import ArticleRisks from "./pages/ArticleRisks";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/central-bank" element={<ArticleCentralBank />} />
          <Route path="/commercial-banks" element={<ArticleCommercialBanks />} />
          <Route path="/money" element={<ArticleMoney />} />
          <Route path="/risks" element={<ArticleRisks />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;