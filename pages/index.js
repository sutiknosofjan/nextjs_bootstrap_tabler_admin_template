import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaAsterisk,
  FaBattleNet,
  FaBell,
  FaBoxOpen,
  FaBriefcase,
  FaCalendar,
  FaCalendarAlt,
  FaCalendarDay,
  FaChartArea,
  FaChartBar,
  FaChartPie,
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaCodepen,
  FaDeskpro,
  FaDesktop,
  FaEnvelope,
  FaFlag,
  FaHome,
  FaKey,
  FaLaptop,
  FaLaptopCode,
  FaLaptopHouse,
  FaMoneyBill,
  FaNewspaper,
  FaPencilAlt,
  FaPlusCircle,
  FaPowerOff,
  FaSearch,
  FaShareAlt,
  FaTimesCircle,
  FaUser,
  FaUsers,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="page">
      <header className="navbar fixed-top bg-azure-lt">
        <div className="container">
          <div className="navbar-nav flex-row">
            <div className="nav-item dropdown me-2">
              <Link
                href="/"
                title="Home"
                className="nav-link"
                data-bs-toggle="dropdown"
              >
                <FaHome size="17" />
              </Link>

              <div className="dropdown-menu dropdown-menu-arrow">
                <h3 className="m-2 mx-3">n e x t o</h3>

                <hr className="my-1" />

                <Link href="" className="dropdown-item">
                  <span className="mx-2">
                    <FaFlag />
                  </span>
                  Orgz
                </Link>

                <Link href="" className="dropdown-item">
                  <span className="mx-2">
                    <FaNewspaper />
                  </span>
                  News
                </Link>

                <Link href="" className="dropdown-item">
                  <span className="mx-2">
                    <FaBriefcase />
                  </span>
                  Jobs
                </Link>
              </div>
            </div>

            <div className="nav-item me-1">
              <Link href="/" title="Dashboard" className="nav-link">
                <FaCalendarAlt size="17" />
              </Link>
            </div>

            <div className="nav-item dropdown me-1">
              <Link
                href="/"
                title="HR"
                className="nav-link"
                data-bs-toggle="dropdown"
              >
                <FaUsers size="17" />
              </Link>

              <div className="dropdown-menu dropdown-menu-arrow">
                <h3 className="m-2 mx-3">HR</h3>

                <hr className="my-1" />

                <Link href="#" className="dropdown-item mx-2">
                  01. Positions
                </Link>

                <Link href="#" className="dropdown-item mx-2">
                  02. Vacancies
                </Link>

                <hr className="my-1" />

                <Link href="#" className="dropdown-item mx-2">
                  03. Recruitments
                </Link>

                <Link href="#" className="dropdown-item mx-2">
                  04. Staffs
                </Link>

                <hr className="my-1" />

                <Link href="#" className="dropdown-item mx-2">
                  05. Attendances
                </Link>
              </div>
            </div>

            <div className="nav-item dropdown">
              <Link
                href="/"
                title="Finance"
                className="nav-link"
                data-bs-toggle="dropdown"
              >
                <FaMoneyBill size="17" />
              </Link>

              <div className="dropdown-menu dropdown-menu-arrow">
                <h3 className="m-2 mx-3">Finance</h3>

                <hr className="my-1" />

                <Link href="#" className="dropdown-item mx-2">
                  01. Purchases
                </Link>

                <Link href="#" className="dropdown-item mx-2">
                  02. Purchases Payment
                </Link>

                <hr className="my-1" />

                <Link href="#" className="dropdown-item mx-2">
                  03. Sales
                </Link>

                <Link href="#" className="dropdown-item mx-2">
                  04. Sales Payment
                </Link>

                <hr className="my-1" />

                <Link href="#" className="dropdown-item mx-2">
                  05. ...
                </Link>
              </div>
            </div>
          </div>

          <div className="navbar-nav flex-row">
            <div className="nav-item dropdown me-1">
              <Link
                href="/message"
                className="nav-link"
                data-bs-toggle="dropdown"
              >
                <FaEnvelope size="17" />
                <span className="badge bg-red"></span>
              </Link>

              <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <h3 className="m-2 mx-3">Message</h3>
                <hr className="my-0" />

                <div className="list-group list-group-flush list-group-hoverable">
                  <div className="list-group-item py-2">
                    <div className="row align-items-center ">
                      <div className="col-auto">12 Dec</div>
                      <div className="col text-truncate">
                        <div className="d-block text-muted text-truncate mt-n1">
                          Subject Message what are you doing ?
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="list-group-item py-2">
                    <div className="text-center bg-gray-light">Read All</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="nav-item dropdown me-2">
              <Link
                href="/notifications"
                className="nav-link"
                data-bs-toggle="dropdown"
              >
                <FaBell size="17" />
                <span className="badge bg-red"></span>
              </Link>

              <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <h3 className="m-2 mx-3">Notification</h3>
                <hr className="my-0" />

                <div className="list-group list-group-flush list-group-hoverable">
                  <div className="list-group-item py-2">
                    <div className="row align-items-center">
                      <div className="col-auto">
                        <span className="status-dot status-dot-animated bg-red d-block" />
                      </div>
                      <div className="col text-truncate">
                        <div className="d-block text-muted text-truncate mt-n1">
                          Change deprecated html tags to text
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="list-group-item py-2">
                    <div className="text-center bg-gray-light">Read All</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="nav-item dropdown">
              <Link href="#" className="nav-link" data-bs-toggle="dropdown">
                <img
                  src="images/avatars/3.png"
                  className="avatar avatar-sm rounded-circle"
                />
              </Link>

              <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <h3 className="m-2 mx-3">User</h3>

                <hr className="my-1" />

                <Link href="/articles" className="dropdown-item">
                  <span className="mx-2">
                    <FaShareAlt />
                  </span>
                  my Articles
                </Link>

                <Link href="/articles" className="dropdown-item">
                  <span className="mx-2">
                    <FaFlag />
                  </span>
                  my Pages
                </Link>

                <Link href="/articles" className="dropdown-item">
                  <span className="mx-2">
                    <FaBriefcase />
                  </span>
                  my Jobs
                </Link>

                <hr className="my-1" />

                <Link href="/profile" className="dropdown-item">
                  <span className="mx-2">
                    <FaUser />
                  </span>
                  Profile
                </Link>

                <Link href="/changepassword" className="dropdown-item">
                  <span className="mx-2">
                    <FaKey />
                  </span>
                  Change Password
                </Link>

                <Link href="/" className="dropdown-item">
                  <span className="mx-2">
                    <FaAsterisk />
                  </span>
                  Change Pin
                </Link>

                <hr className="my-1" />

                <Link href="/" className="dropdown-item">
                  <span className="mx-2">
                    <FaPowerOff />
                  </span>
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="page-wrapper mt-5">
        <div className="page-header d-print-none mt-5">
          <div className="container-xl my-2">
            <div className="row align-items-center">
              <div className="col">
                <div className="page-pretitle">Finance</div>
                <h2 className="page-title">Payment List</h2>
              </div>

              <div className="col-auto ms-auto d-print-none">
                <div className="btn-list">
                  <span className="d-none d-sm-inline">
                    <div className="mb-1">
                      <ol className="breadcrumb" aria-label="breadcrumbs">
                        <li className="breadcrumb-item">Finance</li>
                        <li className="breadcrumb-item">Payment</li>
                        <li className="breadcrumb-item active">List</li>
                      </ol>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="page-body mt-2">
          <div className="container-xl">
            <div className="card">
              <div className="card-body p-2">
                <form onSubmit={(e) => formSubmit(e)}>
                  <div className="form-selectgroup">
                    <label className="form-selectgroup-item">
                      <Link href="#" className="text-info">
                        <FaPlusCircle size="35" />
                      </Link>
                    </label>

                    <label className="form-selectgroup-item">
                      <select className="form-select">
                        <option>All Status</option>
                        <option>Lock</option>
                        <option>Unlock</option>
                      </select>
                    </label>

                    <label className="form-selectgroup-item">
                      <input
                        autoFocus
                        id="search_name"
                        className="form-control"
                        placeholder=""
                        value={""}
                        onChange={(e) => {
                          setSearchName(e.target.value);
                          document.getElementById("search_page").value = 1;
                          formSubmit(e);
                        }}
                      />
                    </label>

                    <label className="form-selectgroup-item">
                      <input
                        id="search_name"
                        className="form-control"
                        placeholder={".."}
                        value={""}
                        onChange={(e) => {
                          setSearchName(e.target.value);
                          document.getElementById("search_page").value = 1;
                          formSubmit(e);
                        }}
                      />
                    </label>
                    <label className="form-selectgroup-item">
                      <button className="btn bg-secondary-lt text-white px-2">
                        <FaSearch size="20" />
                      </button>
                    </label>
                  </div>
                </form>

                <table className="table table-sm table-nowrap table-bordered table-striped table-hover my-2">
                  <thead>
                    <tr>
                      <th className="th-code">#</th>
                      <th>Code</th>
                      <th>Name</th>
                      <th className="th-action2">&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>123</td>
                      <td>123</td>
                      <td>123</td>
                      <td>
                        <Link href="#" title="Edit" className="me-2">
                          <FaPencilAlt size="15" />
                        </Link>

                        <a
                          title="Delete"
                          onClick={""}
                          type="button"
                          className="text-danger"
                        >
                          <FaTimesCircle size="20" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>123</td>
                      <td>123</td>
                      <td>123</td>
                      <td>
                        <td>
                          <Link href="#" title="Edit" className="me-2">
                            <FaPencilAlt size="15" />
                          </Link>

                          <a
                            title="Delete"
                            onClick={""}
                            type="button"
                            className="text-danger"
                          >
                            <FaTimesCircle size="20" />
                          </a>
                        </td>
                      </td>
                    </tr>
                    <tr>
                      <td>123</td>
                      <td>123</td>
                      <td>123</td>
                      <td>
                        <td>
                          <Link href="#" title="Edit" className="me-2">
                            <FaPencilAlt size="15" />
                          </Link>

                          <a
                            title="Delete"
                            onClick={""}
                            type="button"
                            className="text-danger"
                          >
                            <FaTimesCircle size="20" />
                          </a>
                        </td>
                      </td>
                    </tr>
                    <tr>
                      <td>123</td>
                      <td>123</td>
                      <td>123</td>
                      <td>
                        <td>
                          <Link href="#" title="Edit" className="me-2">
                            <FaPencilAlt size="15" />
                          </Link>

                          <a
                            title="Delete"
                            onClick={""}
                            type="button"
                            className="text-danger"
                          >
                            <FaTimesCircle size="20" />
                          </a>
                        </td>
                      </td>
                    </tr>
                    <tr>
                      <td>123</td>
                      <td>123</td>
                      <td>123</td>
                      <td>
                        <td>
                          <Link href="#" title="Edit" className="me-2">
                            <FaPencilAlt size="15" />
                          </Link>

                          <a
                            title="Delete"
                            onClick={""}
                            type="button"
                            className="text-danger"
                          >
                            <FaTimesCircle size="20" />
                          </a>
                        </td>
                      </td>
                    </tr>
                    <tr>
                      <td>123</td>
                      <td>123</td>
                      <td>123</td>
                      <td>
                        <td>
                          <Link href="#" title="Edit" className="me-2">
                            <FaPencilAlt size="15" />
                          </Link>

                          <a
                            title="Delete"
                            onClick={""}
                            type="button"
                            className="text-danger"
                          >
                            <FaTimesCircle size="20" />
                          </a>
                        </td>
                      </td>
                    </tr>
                    <tr>
                      <td>123</td>
                      <td>123</td>
                      <td>123</td>
                      <td>
                        <td>
                          <Link href="#" title="Edit" className="me-2">
                            <FaPencilAlt size="15" />
                          </Link>

                          <a
                            title="Delete"
                            onClick={""}
                            type="button"
                            className="text-danger"
                          >
                            <FaTimesCircle size="20" />
                          </a>
                        </td>
                      </td>
                    </tr>
                    <tr>
                      <td>123</td>
                      <td>123</td>
                      <td>123</td>
                      <td>
                        <td>
                          <Link href="#" title="Edit" className="me-2">
                            <FaPencilAlt size="15" />
                          </Link>

                          <a
                            title="Delete"
                            onClick={""}
                            type="button"
                            className="text-danger"
                          >
                            <FaTimesCircle size="20" />
                          </a>
                        </td>
                      </td>
                    </tr>
                    <tr>
                      <td>123</td>
                      <td>123</td>
                      <td>123</td>
                      <td>
                        <td>
                          <Link href="#" title="Edit" className="me-2">
                            <FaPencilAlt size="15" />
                          </Link>

                          <a
                            title="Delete"
                            onClick={""}
                            type="button"
                            className="text-danger"
                          >
                            <FaTimesCircle size="20" />
                          </a>
                        </td>
                      </td>
                    </tr>
                    <tr>
                      <td>123</td>
                      <td>123</td>
                      <td>123</td>
                      <td>
                        <td>
                          <Link href="#" title="Edit" className="me-2">
                            <FaPencilAlt size="15" />
                          </Link>

                          <a
                            title="Delete"
                            onClick={""}
                            type="button"
                            className="text-danger"
                          >
                            <FaTimesCircle size="20" />
                          </a>
                        </td>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className="d-flex align-items-center">
                  <p className="m-0 text-muted">
                    Rows : <span>1</span>-<span className="me-2">10</span>
                    <span className="me-2">|</span>
                    <span>10/26</span>
                  </p>
                  <ul className="pagination m-0 ms-auto">
                    <li className="page-item me-1">
                      <select className="form-select">
                        <option>100</option>
                      </select>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <FaChevronCircleLeft size="30" />
                      </a>
                    </li>
                    <li className="page-item pt-2">1/2</li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <FaChevronCircleRight size="30" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
