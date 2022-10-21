import React, { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';
import styles from "./style.module.scss";
import { Div } from "../../../../parts/general";
import { H3, A } from "../../../../parts/txt";
import AQSearch from "../../parts/search";
import { BsFillTriangleFill } from "react-icons/bs";

export default function ItemsLists({title, items}) {
  const [filter, setFilter] = useState("");
  const [filterType, setFilterType] = useState("");

  const handleChanges = (subject) => {
    if (subject) {
      setFilter(subject);
      setFilterType('subject');
    }
  };

  const filterQuestionsList = (filter) => {
    if (!filter) {
      return items;
    }

    if (filterType == 'value') {
      const filteredQuestionsList = items
        .filter((item) => item.title.includes(filter));

      return filteredQuestionsList;
    }

    if (filterType == 'subject') {
      const filteredQuestionsList = items
        .filter((item) => item.subject.includes(filter));

      return filteredQuestionsList;
    }

    return items;
  };

  return (
    <>
      <Div className="page flex-col pt-5 pb-3 align-items-start">
        <Div className={`w-100 p-4 ${styles.Container}`}>
            <H3>{title}</H3>
            <AQSearch filter={filter} setFilter={setFilter} filterType={filterType} setFilterType={setFilterType} />
            <PaginatedItems itemsPerPage={12} items={filterQuestionsList(filter)} handleChanges={handleChanges} />
        </Div>
      </Div>
    </>
  );
}

function Items({ currentItems , handleChanges }) {
    return (
      <>
        {currentItems &&
          currentItems.map((item) => (
            <Div className="d-flex flex-row gap-3 align-items-center">
                <A to={`/qa/${item.url}`} className={styles.VideoPreview}>
                    <img
                        src={`https://www.proprep.com/${item.video_thumbnail_url}`}
                        width={"100%"}
                        alt={"topic"}
                    />
                    <Div className={styles.PlayBtn}>
                      <BsFillTriangleFill />
                    </Div>
                </A>
                <Div className={styles.Content}>
                    <A to={`/qa/${item.url}`} className={styles.Title}>
                        {item.title}
                    </A>
                    <Div className={`d-flex flex-rows gap-1 gap-lg-2 align-items-start align-items-lg-center ${styles.Rows}`}>
                        <Div className={styles.UserIcon}>
                            <img src={item.user_icon}/>
                        </Div>
                        <Div className={styles.UserName}>{item.user_name}</Div>
                        <Div className={`align-self-center ${styles.College}`}>{item.user_college}</Div>
                        <Div className={styles.Subject}>
                            <A onClick={(e) => handleChanges(item.subject)}>
                                #{item.subject}
                            </A>
                        </Div>
                        <Div className={`d-block d-lg-none ${styles.Break}`}></Div>
                        <Div className={styles.VideoPreviewMobile}>
                            <Div className={styles.PlayBtn}>
                              <BsFillTriangleFill />
                            </Div>
                        </Div>
                        <Div className={styles.Count}>
                          <span className="d-none d-lg-inline-block">|</span> {item.count_answers}
                        </Div>
                    </Div>
                </Div>
            </Div>
          ))}
      </>
    );
}

function PaginatedItems({ itemsPerPage, items, handleChanges }) {
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);
  
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      setItemOffset(newOffset);
    }

    return (
        <>
            <Items currentItems={currentItems} handleChanges={handleChanges} />
            <ReactPaginate
              breakLabel="..."
              nextLabel=" >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="<"
              renderOnZeroPageCount={null}
              containerClassName={styles.PaginateContainer}
              pageClassName={styles.PaginateItem}
              activeClassName={styles.PaginateActiveItem}
              previousClassName={styles.PaginatePreviousItem}
              nextClassName={styles.PaginateNextItem}
              disabledClassName={styles.PaginateDisabledItem}
            />
        </>
    );
}