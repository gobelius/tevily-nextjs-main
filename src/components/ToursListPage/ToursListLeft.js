import toursListPage from "@/data/toursListPage";
import React, { useState } from "react";
import Slider from "react-rangeslider";
import Select from "react-select";

const { categories, durations } = toursListPage;

const typeOptions = ["Adventure", "Wildlife", "Sightseeing"].map((it) => ({
  value: it,
  label: it,
}));

const customStyle = {
  valueContainer: (provided) => ({
    ...provided,
    color: "#787780",
    fontSize: 13,
    fontWeight: 500,
  }),
  singleValue: (provided) => ({
    ...provided,
    cursor: "pointer",
  }),
  menu: (provided) => ({
    ...provided,
    marginTop: 5,
    border: "none",
    boxShadow: "none",
    zIndex: 10,
  }),
  option: (provided, state) => ({
    ...provided,
    color: "white",
    padding: "4px 20px",
    backgroundColor: state.isSelected ? "#e8604c" : "#313041",
    transition: "all 0.4s ease",
    cursor: "pointer",
    borderBottom:
      state.label === typeOptions[typeOptions.length - 1].label
        ? "none"
        : "0.5px solid #ffffff33",
    "&:hover": {
      backgroundColor: "#e8604c",
    },
    borderRadius:
      state.label === typeOptions[typeOptions.length - 1].label
        ? "0 0 8px 8px"
        : 0,
    fontSize: 16,
    fontWeight: 500,
  }),
  control: (base) => ({
    ...base,
    borderColor: "transparent",
    boxShadow: "none",
    borderRadius: "8px",
    "&:hover": {
      borderColor: "transparent",
    },
    padding: 14,
  }),
};

const ToursListLeft = () => {
  const [showReview, setShowReview] = useState(true);
  const [showCategory, setShowCategory] = useState(true);
  const [showDuration, setShowDuration] = useState(true);
  const [showPrice, setShowPrice] = useState(true);
  const [selected, setSelected] = useState("Adventure");
  const [priceRange, setPriceRange] = useState(10);
  let count = 6;

  const handleSelect = ({ value }) => {
    setSelected(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      type: selected,
      date: formData.get("when"),
      place: formData.get("place"),
    };
    console.log(data);
  };

  const handlePriceChange = (value) => {
    setPriceRange(value);
  };

  return (
    <div className="tours-list__left">
      <div className="tours-list__sidebar">
        <div className="tours-list__sidebar-search">
          <h3 className="tours-list__sidebar-search-title">Search Tours</h3>
          <form onSubmit={handleSubmit} className="tours-list__sidebar-form">
            <div className="tours-list__sidebar-input">
              <input type="text" placeholder="Where to" name="place" />
            </div>
            <div className="tours-list__sidebar-input">
              <input type="text" placeholder="When" name="when" />
            </div>
            <div className="tours-list__sidebar-input">
              <Select
                name="type"
                options={typeOptions}
                onChange={handleSelect}
                styles={customStyle}
                isSearchable={false}
                components={{
                  IndicatorSeparator: () => null,
                }}
                placeholder="Type"
                instanceId="tourTypeSelect4"
              />
            </div>
            <button type="submit" className="thm-btn tours-list__sidebar-btn">
              search
            </button>
          </form>
        </div>
        <div className="tour-sidebar__sorter-wrap">
          <div className="tour-sidebar__sorter-single">
            <div className="tour-sidebar__sorter-top">
              <h3>Price</h3>
              <button
                onClick={() => setShowPrice((preShow) => !preShow)}
                className="tour-sidebar__sorter-toggler"
              ></button>
            </div>
            {showPrice && (
              <div className="tour-sidebar__sorter-content">
                <div className="tour-sidebar__price-range">
                  <div className="form-group">
                    <p>
                      $<span id="min-value-rangeslider">{priceRange}</span>
                    </p>
                    <p>
                      $<span id="max-value-rangeslider">{priceRange}</span>
                    </p>
                  </div>
                  <Slider
                    min={0}
                    max={200}
                    value={priceRange}
                    onChange={handlePriceChange}
                    className="range-slider-price"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="tour-sidebar__sorter-single">
            <div className="tour-sidebar__sorter-top">
              <h3>Review Score</h3>
              <button
                onClick={() => setShowReview((preShow) => !preShow)}
                className="tour-sidebar__sorter-toggler"
              ></button>
            </div>
            {showReview && (
              <div className="tour-sidebar__sorter-content">
                <div className="tour-sidebar__sorter-inputs">
                  {Array.from(Array(5)).map((_, i) => {
                    count--;
                    return (
                      <p key={i}>
                        <input
                          type="checkbox"
                          id={`review-${count}`}
                          name="radio-group"
                        />
                        <label htmlFor={`review-${count}`}>
                          {Array.from(Array(5)).map((_, j) => (
                            <i
                              key={j}
                              className={`fa fa-star${
                                j + 1 <= count ? " active" : ""
                              }`}
                            ></i>
                          ))}
                        </label>
                      </p>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <div className="tour-sidebar__sorter-single">
            <div className="tour-sidebar__sorter-top">
              <h3>Categories</h3>
              <button
                onClick={() => setShowCategory((preShow) => !preShow)}
                className="tour-sidebar__sorter-toggler"
              ></button>
            </div>
            {showCategory && (
              <div className="tour-sidebar__sorter-content">
                <div className="tour-sidebar__sorter-inputs">
                  {categories.map((category, index) => (
                    <p key={index}>
                      <input
                        type="checkbox"
                        id={`cat-${index + 1}`}
                        name="radio-group"
                      />
                      <label htmlFor={`cat-${index + 1}`}>{category}</label>
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="tour-sidebar__sorter-single">
            <div className="tour-sidebar__sorter-top">
              <h3>Duration</h3>
              <button
                onClick={() => setShowDuration((preShow) => !preShow)}
                className="tour-sidebar__sorter-toggler"
              ></button>
            </div>
            {showDuration && (
              <div className="tour-sidebar__sorter-content">
                <div className="tour-sidebar__sorter-inputs">
                  {durations.map((duration, index) => (
                    <p key={index}>
                      <input
                        type="checkbox"
                        id={`duration-${index + 1}`}
                        name="radio-group"
                      />
                      <label htmlFor={`duration-${index + 1}`}>
                        {duration}
                      </label>
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToursListLeft;
