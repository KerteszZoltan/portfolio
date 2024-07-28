import { NavigationType } from "../../data/navigationData";
import { useNavStore } from "../../store/navigationStore";

type PaginationProps = {
  items: NavigationType[];
  currentPage: number;
  handlePrevPage: () => void;
  handleNextPage: () => void;
};

const Pagination = ({ items }: PaginationProps) => {
  const currentPage = useNavStore((state) => state.currentPage);
  const setNextPage = useNavStore((state) => state.setNextPage);
  const setPreviousPage = useNavStore((state) => state.setPreviousPage);

  const itemsPerPage = 3;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);
  const handleNextPage = () => {
    if (startIndex + itemsPerPage < items.length) {
      setNextPage();
    }
  };
  const handlePrevPage = () => {
    if (currentPage > 0) {
      setPreviousPage();
    }
  };

  return (
    <div>
      <button onClick={handlePrevPage} disabled={currentPage === 0}>
        Previous
      </button>
      <button
        onClick={handleNextPage}
        disabled={startIndex + itemsPerPage >= items.length}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
