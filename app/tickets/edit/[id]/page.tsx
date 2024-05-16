import prisma from "@/prisma/db";
import dynamic from "next/dynamic";

const TicketForm = dynamic(() => import("@/components/TicketForm"), {
  ssr: false,
});
interface Props {
  params: { id: string };
}
const EditTicket = async ({ params }: Props) => {
  const ticket = await prisma.ticket.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!ticket) {
    return <p className="text-destructive">Ticket Not Found !</p>;
  }

  return <TicketForm ticket={ticket} />;
};

export default EditTicket;
