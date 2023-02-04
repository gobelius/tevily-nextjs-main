import { tourDetailsSidebar } from "@/data/tourDetailsPage";
import React, { useState } from "react";
import { Image } from "react-bootstrap";
import DatePicker from "react-datepicker";
import Select from "react-select";
import { tourDetailsOne } from "@/data/tourDetailsPage";

const typeOptions = ["Adventure", "Wildlife", "Sightseeing"].map((it) => ({
  value: it,
  label: it,
}));

const { title } = tourDetailsOne;

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

const TourDetailsSidebar = () => {
  const [startDate, setStartDate] = useState(new Date());

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      people: formData.get("people"),
      email: formData.get("email"),
      date: startDate,
      whereTo: title,
    };
    const res = await fetch("/api/reservation", {
      body: JSON.stringify({
        personalizations: [
          {
            to: [
              {
                email: data.email,
              },
            ],
          },
          {
            to: [
              {
                email: "kenan@adventureinbosnia.ba",
              },
            ],
          },
        ],
        email: data.email,
        date: data.date,
        whereTo: data.whereTo,
        people: data.people,
      }),

      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      console.log(error);
      return;
    } else {
      window.alert("Poslo");
    }
  };

  return (
    <div className='tour-details-two__sidebar'>
      <div className='tour-details-two__book-tours'>
        <h3 className='tour-details-two__sidebar-title'>Book {title}</h3>
        <form
          onSubmit={handleSubmit}
          className='tour-details-two__sidebar-form'
        >
          <div className='tour-details-two__sidebar-form-input'>
            <input type='text' placeholder='Number of People' name='people' />
          </div>
          <div className='tour-details-two__sidebar-form-input'>
            <input type='email' placeholder='Your email address' name='email' />
          </div>
          {/* <div className='tour-details-two__sidebar-form-input'>
            <Select
              name='type'
              options={typeOptions}
              onChange={handleSelectType}
              styles={customStyle}
              isSearchable={false}
              components={{
                IndicatorSeparator: () => null,
                DropdownIndicator: () => null,
              }}
              placeholder='Type'
              instanceId='tourTypeSelect10'
            />
            <div className='tour-details-two__sidebar-form-icon'>
              <i className='fa fa-angle-down'></i>
            </div>
          </div> */}
          <div className='tour-details-two__sidebar-form-input'>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholderText='Select date'
              id='datepicker'
            />
            <div className='tour-details-two__sidebar-form-icon'>
              <i className='fa fa-angle-down'></i>
            </div>
          </div>
          {/* <div className='tour-details-two__sidebar-form-input'>
            <Select
              name='ticket'
              options={typeOptions}
              onChange={handleSelectTicket}
              styles={customStyle}
              isSearchable={false}
              components={{
                IndicatorSeparator: () => null,
                DropdownIndicator: () => null,
              }}
              placeholder='Choose Ticket'
              instanceId='tourTypeSelect15'
            />
            <div className='tour-details-two__sidebar-form-icon'>
              <i className='fa fa-angle-down'></i>
            </div>
          </div> */}
          <button
            style={{ zIndex: 0 }}
            type='submit'
            className='thm-btn tour-details-two__sidebar-btn'
          >
            Book Now
          </button>
        </form>
      </div>
      <div className='tour-details-two__last-minute'>
        <h3 className='tour-details-two__sidebar-title'>Last Minute</h3>
        <ul className='tour-details-two__last-minute-list list-unstyled'>
          {tourDetailsSidebar.map(({ id, title, image, price, location }) => (
            <div
              key={id}
              className='tour-details-two__last-minute'
              style={{
                backgroundImage: `linear-gradient(
                  rgba(255, 255, 255, 0.45), 
                  rgba(255, 255, 255, 0.45)
                ),url(${image.src})`,
                backgroundSize: "cover",
              }}
            >
              <h5>{title}</h5>
              <p className='last-minute-book'>{location}</p>
              {/* <div className='layer'></div> */}
            </div>
            // <li key={id}>
            /* <div className='tour-details-two__last-minute-image'>
                <Image
                  src={require(`@/images/resources/${image}`).default.src}
                  alt=''
                />
              </div> */
            // </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TourDetailsSidebar;
