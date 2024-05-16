import { buttonVariants } from "@/components/ui/button";
import dynamic from "next/dynamic";
import Link from "next/link";

const TicketForm = dynamic(() => import("@/components/TicketForm"), {
  ssr: false,
});
const NewTicket = () => {
  return (
    <div>
      <div className="pb-3">
        <Link
          href="/tickets"
          className={buttonVariants({ variant: "destructive", size: "sm" })}
        >
          Back
        </Link>
      </div>
      <TicketForm />
    </div>
  );
};

export default NewTicket;
