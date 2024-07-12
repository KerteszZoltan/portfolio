import { NavigationType } from "../../data/navigationData";
import { useNavStore } from "../../store/navigationStore";

type PaginationProps = {
  items: NavigationType[];
  currentPage: number;
  increaseCurrntPage: () => void;
  setCurrentPage: () => void;
  setContent: (element: NavigationType[]) => void;
};

const Pagination = ({ items }: PaginationProps) => {
  const { currentPage, increaseCurrntPage } = useNavStore();
  const pagesCount = Math.ceil(items.length / 3);
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  const isOne = pages.length;

  //console.log(pages);
  if (pages.length != 1) {
    return (
      <>
        {pages.map((page, index) => (
          <button
            key={index}
            className="page-counter-item"
            onClick={increaseCurrntPage}
          >
            {page}
          </button>
        ))}
      </>
    );
  }
  return <button className="page-counter-item">{"1"}</button>;
};

export default Pagination;
