import { useState, useEffect } from "react";
import Link from "next/link";

import {
  FaAsterisk,
  FaBell,
  FaBriefcase,
  FaCalendarAlt,
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaEnvelope,
  FaFlag,
  FaHome,
  FaKey,
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
  const [_loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("After 2m loading:false");
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const btnDeleteClick = (e, id) => {
    e.preventDefault();

    console.log("Delete click : " + id + " >> process to Backend");
    alert("Delete click : " + id + " >> process to Backend");
  };

  if (_loading)
    return (
      <div className="text-center mt-5">
        <div className="spinner-border spinner-border-sm" />
      </div>
    );

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
                <h3 className="m-2 mx-3">Company Name</h3>

                <hr className="my-1" />

                <Link href="" className="dropdown-item">
                  <span className="mx-2">
                    <FaFlag />
                  </span>
                  Menu 1
                </Link>

                <Link href="" className="dropdown-item">
                  <span className="mx-2">
                    <FaNewspaper />
                  </span>
                  Menu 2
                </Link>

                <Link href="" className="dropdown-item">
                  <span className="mx-2">
                    <FaBriefcase />
                  </span>
                  Menu 3
                </Link>
              </div>
            </div>

            <div className="nav-item me-3">
              <select className="form-select form-control-rounded">
                <option>Category - Company 1</option>
                <option>Category - Company 2</option>
                <option>Category - Company 3</option>
              </select>
            </div>

            <div className="nav-item me-3">
              <Link href="/" title="Dashboard" className="nav-link">
                <FaCalendarAlt size="17" />
              </Link>
            </div>

            <div className="nav-item dropdown me-3">
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
                  01. Menu 01
                </Link>

                <Link href="#" className="dropdown-item mx-2">
                  02. Menu 02
                </Link>

                <hr className="my-1" />

                <Link href="#" className="dropdown-item mx-2">
                  03. Menu 03
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
                  01. Menu 01
                </Link>

                <Link href="#" className="dropdown-item mx-2">
                  02. Menu 02
                </Link>

                <hr className="my-1" />

                <Link href="#" className="dropdown-item mx-2">
                  03. Menu 03
                </Link>

                <Link href="#" className="dropdown-item mx-2">
                  04. Menu 04
                </Link>

                <hr className="my-1" />

                <Link href="#" className="dropdown-item mx-2">
                  05. ...
                </Link>
              </div>
            </div>
          </div>

          <div className="navbar-nav flex-row">
            <div className="nav-item dropdown me-3">
              <Link
                href="#"
                title="Message"
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

            <div className="nav-item dropdown me-3">
              <Link
                href="#"
                title="Notification"
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
              <Link
                href="#"
                title="User"
                className="nav-link"
                data-bs-toggle="dropdown"
              >
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
                  Menu 01
                </Link>

                <Link href="/articles" className="dropdown-item">
                  <span className="mx-2">
                    <FaFlag />
                  </span>
                  Menu 02
                </Link>

                <Link href="/articles" className="dropdown-item">
                  <span className="mx-2">
                    <FaBriefcase />
                  </span>
                  Menu 03
                </Link>

                <hr className="my-1" />

                <Link href="/profile" className="dropdown-item">
                  <span className="mx-2">
                    <FaUser />
                  </span>
                  My Profile
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
                      <td className="text-end">1</td>
                      <td>Code 1</td>
                      <td>Name 1</td>
                      <td>
                        <Link
                          href="/payment/edit/1"
                          title="Edit"
                          className="me-2"
                        >
                          <FaPencilAlt size="15" />
                        </Link>

                        <a
                          title="Delete"
                          onClick={(e) => btnDeleteClick(e, 1)}
                          type="button"
                          className="text-danger"
                        >
                          <FaTimesCircle size="20" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-end">2</td>
                      <td>Code 2</td>
                      <td>Name 2</td>
                      <td>
                        <Link
                          href="/payment/edit/2"
                          title="Edit"
                          className="me-2"
                        >
                          <FaPencilAlt size="15" />
                        </Link>

                        <a
                          title="Delete"
                          onClick={(e) => btnDeleteClick(e, 2)}
                          type="button"
                          className="text-danger"
                        >
                          <FaTimesCircle size="20" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-end">3</td>
                      <td>Code 3</td>
                      <td>Name 3</td>
                      <td>
                        <Link
                          href="/payment/edit/3"
                          title="Edit"
                          className="me-2"
                        >
                          <FaPencilAlt size="15" />
                        </Link>

                        <a
                          title="Delete"
                          onClick={(e) => btnDeleteClick(e, 3)}
                          type="button"
                          className="text-danger"
                        >
                          <FaTimesCircle size="20" />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className="d-flex align-items-center">
                  <p className="m-0 text-muted">
                    Rows : <span>1</span>-<span className="me-2">3</span>
                    <span className="me-2">|</span>
                    <span>3/3</span>
                  </p>
                  <ul className="pagination m-0 ms-auto">
                    <li className="page-item me-1">
                      <select className="form-select">
                        <option>10</option>
                        <option>20</option>
                        <option>50</option>
                        <option>100</option>
                      </select>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <FaChevronCircleLeft size="30" />
                      </a>
                    </li>
                    <li className="page-item pt-2">1/1</li>
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
