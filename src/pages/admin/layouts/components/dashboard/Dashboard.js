import React from "react";
import ReactPaginate from "react-paginate";
import FeatherIcon from "feather-icons-react";

const Dashboard = () => {
  return (
    <div className="mtpx9 prpx10 plpx10 ptpx20 pbpx20 cust-scroll bgwhite dashboard">
      <div className="grid-cols-4 gap-12">
        <div className="h-dash primary-border d-shadow flex items-center ">
          <div className="p15 flex justify-between w-full items-center">
            <div>
              <p className="fsize12 mtpx1 mbpx1 textgray">Porfolio</p>
              <h2 className="fsize29 mtpx1 mbpx1 textprimary">1000 +</h2>
            </div>
            <div className="dash-social flex items-center rounded-full justify-center bgprimary">
              <FeatherIcon icon="folder" size="32" className="textwhite" />
            </div>
          </div>
        </div>
        <div className="h-dash secondary-border d-shadow flex items-center ">
          <div className="p15 flex justify-between w-full items-center">
            <div>
              <p className="fsize12 mtpx1 mbpx1 textgray">Enquiry Members</p>
              <h2 className="fsize29 mtpx1 mbpx1 textsecondary">100 +</h2>
            </div>
            <div className="dash-social flex items-center rounded-full justify-center bgsecondary">
              <FeatherIcon icon="users" size="32" className="textwhite" />
            </div>
          </div>
        </div>
        <div className="h-dash warning-border d-shadow flex items-center ">
          <div className="p15 flex justify-between w-full items-center">
            <div>
              <p className="fsize12 mtpx1 mbpx1 textgray">Testimonials</p>
              <h2 className="fsize29 mtpx1 mbpx1 textwarning">10 +</h2>
            </div>
            <div className="dash-social flex items-center rounded-full justify-center bgwarning">
              <FeatherIcon icon="star" size="32" className="textwhite" />
            </div>
          </div>
        </div>
        <div className="h-dash success-border d-shadow flex items-center ">
          <div className="p15 flex justify-between w-full items-center">
            <div>
              <p className="fsize12 mtpx1 mbpx1 textgray">Services</p>
              <h2 className="fsize29 mtpx1 mbpx1 textsuccess">6</h2>
            </div>
            <div className="dash-social flex items-center rounded-full justify-center bgsuccess">
              <FeatherIcon icon="settings" size="32" className="textwhite" />
            </div>
          </div>
        </div>
      </div>
      <div className="mtpx25 mbpx15 flex gap-12 items-center">
        <div className="w-60">
          <div className="relative">
            <input
              className="w-full h-input fsize14 rounded-5 plpx10 border-ec"
              placeholder="Search"
            />
            <div className="absolute top-0 right-0 mtpx9 mrpx2">
              <FeatherIcon
                icon="search"
                className="textgray cursor-pointer"
                size={20}
              />
            </div>
          </div>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th className="fsize13 textforth w-20 font-300">
              <p>First Name</p>
            </th>
            <th className="fsize13 textforth w-20 font-300">
              <p>Last Name</p>
            </th>
            <th className="fsize13 textforth w-20 font-300">
              <p>Email</p>
            </th>
            <th className="fsize13 textforth w-20 font-300">
              <p>Phone</p>
            </th>
            <th className="fsize13 textforth w-20 font-300">
              <p>Message</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="fsize13 textgray w-20 font-300">
              <p>name</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>name</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>Email</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>mobile</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>message</p>
            </td>
          </tr>
          <tr>
            <td className="fsize13 textgray w-20 font-300">
              <p>name</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>name</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>Email</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>mobile</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>message</p>
            </td>
          </tr>
          <tr>
            <td className="fsize13 textgray w-20 font-300">
              <p>name</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>name</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>Email</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>mobile</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>message</p>
            </td>
          </tr>
          <tr>
            <td className="fsize13 textgray w-20 font-300">
              <p>name</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>name</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>Email</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>mobile</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>message</p>
            </td>
          </tr>
          <tr>
            <td className="fsize13 textgray w-20 font-300">
              <p>name</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>name</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>Email</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>mobile</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>message</p>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex w-full justify-end">
        <ReactPaginate
          className="pagination"
          breakLabel="..."
          nextLabel=">"
          previousLabel="<"
          pageCount={4}
          pageRangeDisplayed={4}
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
};

export default Dashboard;
