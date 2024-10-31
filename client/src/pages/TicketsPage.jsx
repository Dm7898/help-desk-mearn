import TicketList from "../components/TicketList";
import TicketSubmitForm from "../components/TicketSubmitFrom";

const TicketsPage = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
        <div className="flex-1 md:w-auto rounded bg-white p-4">
          <TicketSubmitForm />
        </div>

        <div className="flex-1 md:w-auto rounded bg-white p-4">
          <TicketList />
        </div>
      </div>
    </div>
  );
};

export default TicketsPage;
