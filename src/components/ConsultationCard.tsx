import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const ConsultationCard = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email");
      return;
    }
    toast.success("Thank you for booking a consultation!");
    setEmail("");
  };

  return (
    <div className="bg-purple/90 backdrop-blur-lg rounded-2xl p-6 text-white max-w-md w-full animate-fade-in">
      {/* Logo at the Top */}
      <div className="flex justify-center mb-4">
        <img 
          src="https://t1e.afa.myftpupload.com/wp-content/uploads/2025/02/EXAMPLUS-LOGO-BLACK-TRANS.png" 
          alt="Logo" 
          className="h-12 filter brightness-0 invert"
        />
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Book Your Free Consultation</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white"
            />
          </div>
          <Button 
            type="submit"
            className="w-full bg-white text-purple hover:bg-white/90 transition-colors"
          >
            Schedule Now
          </Button>
        </form>
      </div>
      <div className="space-y-2 text-sm">
        <p className="text-white/80">No Cost Initial Consultation</p>
        <div className="flex justify-between items-center">
          <span className="font-semibold text-lg">Rejuvenate with Confidence</span>
          <span className="text-white/80">Valid through March 15</span>
        </div>
      </div>
    </div>
  );
};

export default ConsultationCard;
