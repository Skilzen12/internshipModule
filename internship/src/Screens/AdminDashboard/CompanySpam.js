import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Checkbox } from "@material-ui/core";

const CompanySpam = () => {
  return (
    // <div className="dashboard__content ml-3">
    <SpamTable />
    // </div>
  );
};

export default CompanySpam;

const Spam1ColumnOrder = [
  "Company",
  "Total interns active",
  "Total spam reports",
  "Recent spam report date",
];
const SpamData = [
  {
    compName: "BookMyShow",
    compImage:
      "https://img.favpng.com/14/7/14/bookmyshow-office-android-ticket-png-favpng-Ln9Hiu0AbwHTrfiCgNDa4h6ur_t.jpg",
    title: "Marketing Manager",
    category: "Marketing",
    postedOn: "10/02/2021",
    postedBy: "person1",
    reportedDate: "11/03/2021",
    reportedBy: "person2",
  },
  {
    compName: "BookMyShow",
    compImage:
      "https://img.favpng.com/14/7/14/bookmyshow-office-android-ticket-png-favpng-Ln9Hiu0AbwHTrfiCgNDa4h6ur_t.jpg",
    title: "Software Developer",
    category: "Programming",
    postedOn: "10/02/2021",
    postedBy: "person1",
    reportedDate: "11/03/2021",
    reportedBy: "person2",
  },
  {
    compName: "BookMyShow",
    compImage:
      "https://img.favpng.com/14/7/14/bookmyshow-office-android-ticket-png-favpng-Ln9Hiu0AbwHTrfiCgNDa4h6ur_t.jpg",
    title: "Digital Marketing",
    category: "Marketing",
    postedOn: "10/02/2021",
    postedBy: "Ashish Hemrajani",
    reportedDate: "11/03/2021",
    reportedBy: "person2",
  },
  {
    compName: "BookMyShow",
    compImage:
      "https://img.favpng.com/14/7/14/bookmyshow-office-android-ticket-png-favpng-Ln9Hiu0AbwHTrfiCgNDa4h6ur_t.jpg",
    title: "Marketing Manager",
    category: "Marketing",
    postedOn: "10/02/2021",
    postedBy: "Ashish Hemrajani",
    reportedDate: "11/03/2021",
    reportedBy: "person2",
  },
];

const SpamRow = ({ spam, action, even }) => {
  // const {status,setStatus}=spam;

  return (
    <tr
      style={{
        backgroundColor: even ? "#F4F5F8" : "#FFFFFF",
        border: "1px solid #E5E5E5",
      }}
    >
      <td className="jobsPosted__row">
        <Checkbox />
      </td>
      <td className="jobsPosted__row applicationsUser p20 mv200">
        <img
          src={spam.compImage}
          className="applicantUser__image"
          alt="user_image"
        />
        <h3 className="jobsPostedtable_cell m20">{spam.compName}</h3>
      </td>
      <td className="jobsPosted__row">
        <h3 className="jobsPostedtable_cell m20 mv150">
          <b>{spam.title}</b>
        </h3>
      </td>
      <td className="jobsPosted__row">
        <h3 className="jobsPostedtable_cell m20 mv150">{spam.category}</h3>
      </td>
      <td className="jobsPosted__row">
        <h3 className="jobsPostedtable_cell m20">{spam.postedBy}</h3>
      </td>
      <td className="jobsPosted__row">
        <h3 className="jobsPostedtable_cell m20">{spam.postedOn}</h3>
      </td>

      <td className="jobsPosted__row">
        <h3 className="jobsPostedtable_cell m20">{spam.reportedBy}</h3>
      </td>
      <td className="jobsPosted__row">
        <h3 className="jobsPostedtable_cell m20">{spam.reportedDate}</h3>
      </td>
      {
        <>
          <td className="jobsPosted__row" onClick={() => {}}>
            <h3 className="jobsPostedtable_cell edit">View</h3>
          </td>
          <td className="jobsPosted__row" onClick={() => {}}>
            <h3 className="jobsPostedtable_cell deactivate">Delete</h3>
          </td>
        </>
      }
    </tr>
  );
};

const SpamTable = () => {
  const [action, setAction] = useState("all");
  const tags = [
    { name: "all", color: "black" },
    { name: "active", color: "rgba(45,132,90,1)" },
    { name: "inactive", color: "rgba(211,46,46,1)" },
    { name: "expiring soon", color: "orange" },
    { name: "expiring soon", color: "orange" },
  ];

  const [search, setSearch] = useState("");
  // const [spam,setspam]= useState(SpamData);
  // const [spam1,setSpam1]= useState(SpamData1);

  return (
    <div className="dashboard__jobsPosted">
      <div className="dashboard__jobsPostedHeader align-items-start">
        {/* <div className="dashboard__jobsTags">
                    <p className="dashboard__jobsPostedheading">
                        Applicants (12)
                    </p>
                    <div className="dashboard__jobstags">
                        {tags.map(tag => (
                            <div className="dashboard__jobsPostedTag" onClick={() => setAction(tag.name) } style={{color: tag.color}}>
                                {tag.name}
                            </div>
                        ))}
                    </div>
                </div> */}
        <div className="ml-4">
          <h1 >BookMyShow</h1>
          <h3 className='mt-4' >Spam Reports</h3>
        </div>
        <div
          className="search__company"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div
            className="searchbar__landing2"
            style={{
              maxWidth: "100%",
              width: "480px",
              backgroundColor: "#fff",
            }}
          >
            <SearchIcon />
            <input
              type="text"
              class="form-control focus-input"
              placeholder="Type company name to search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="dashboard__jobsPostedTaable">
        <div className="table__responsive">
          <table className="JobsPosted__table">
            <thead>
              <tr>
                <th
                  className="jobsPosted__tableHead jobsPosted__row"
                  style={{ textAlign: "center" }}
                >
                  <Checkbox />
                </th>
                {/* {SpamColumnOrder.map(head => (
                                    <th className="jobsPosted__tableHead jobsPosted__row" onClick={()=>sortHandler(head)}>{head}</th>
                                ))} 
                                <th className="jobsPosted__tableHead jobsPosted__row" style={{textAlign: 'center'}} colSpan={2}>Actions</th>
                                */}
                {Spam1ColumnOrder.map((head) => (
                  <th
                    className="jobsPosted__tableHead jobsPosted__row"
                    onClick={() => {}}
                  >
                    {head}
                  </th>
                ))}
                <th
                  className="jobsPosted__tableHead jobsPosted__row"
                  style={{ textAlign: "center" }}
                  colSpan={3}
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {/* {spam.map((spam,_id) => (
                                
                                  (action==='all'||action===spam.status)?
                                  <SpamRow spam={spam} action={action} even={_id%2?false:true} />
                                  :null
                                )
                            )} */}
              {SpamData.map((spam, _id) => (
                <SpamRow
                  spam={spam}
                  action={action}
                  even={_id % 2 ? false : true}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
