"use client";
import { Ticket, User } from "@prisma/client";
import { useState } from "react";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface Props {
  ticket: Ticket;
  users: User[];
}

const AssignTicket = ({ ticket, users }: Props) => {
  const [isAssigning, setIsAssigning] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const assignTicket = async (userId: string) => {
    setError("");
    setIsAssigning(true);
    await axios
      .patch(`/api/tickets/${ticket.id}`, {
        assignToUserId: userId === "0" ? null : userId,
      })
      .catch(() => {
        setError("Unable to assign ticket");
      });
    setIsAssigning(false);
  };

  return (
    <>
      <Select
        defaultValue={ticket.assignToUserId?.toString() || "0"}
        onValueChange={assignTicket}
        disabled={isAssigning}
      >
        <SelectTrigger>
          <SelectValue
            placeholder="Select User..."
            defaultValue={ticket.assignToUserId?.toString() || "0"}
          ></SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="0">Unassign</SelectItem>
          {users?.map((user) => (
            <SelectItem key={user.id} value={user.id?.toString()}>
              {user.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <p className="text-destructive">{error}</p>
    </>
  );
};

export default AssignTicket;
