import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Checkbox } from "@material-ui/core";
import PopupAuth , {SpamReportsList} from './ActionAuth';
import { useHistory } from "react-router";

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
  "Title",
  "Total spam reports",
  "Recruiter name",
  "Latest Reported date",
 
];
const SpamData = [
  {
    compName: "BookMyShow",
    compImage:
      "https://img.favpng.com/14/7/14/bookmyshow-office-android-ticket-png-favpng-Ln9Hiu0AbwHTrfiCgNDa4h6ur_t.jpg",
    title: "Marketing Manager",
    totalSpams:"10",
    postedOn: "10/02/2021",
    postedBy: "Robert ",
    reportedDate: "11/03/2021",
    reportedBy: "Nicolas Cage",
  },
  {
    compName: "BookMyShow",
    compImage:
      "https://img.favpng.com/14/7/14/bookmyshow-office-android-ticket-png-favpng-Ln9Hiu0AbwHTrfiCgNDa4h6ur_t.jpg",
    title: "Software Developer",
    totalSpams:"4",
    postedOn: "10/02/2021",
    postedBy: "Andrew James",
    reportedDate: "11/03/2021",
    reportedBy: "Sanjay Kumar",
  },
  {
    compName: "BookMyShow",
    compImage:"https://img.favpng.com/14/7/14/bookmyshow-office-android-ticket-png-favpng-Ln9Hiu0AbwHTrfiCgNDa4h6ur_t.jpg",
    title: "Digital Marketing",
    totalSpams:"8",
    postedOn: "10/02/2021",
    postedBy: "Ashish Hemrajani",
    reportedDate: "11/03/2021",
    reportedBy: "Paul Hanks",
  },
  
];

const SpamRow = ({ spam, action, even }) => {
  // const {status,setStatus}=spam;
  const [pop,setPop]=useState(false);
  const [popOnHoldAuth, setPopOnHoldAuth] = useState(false)
  const [popDeleteAuth,setPopDeleteAuth]=useState(false);
  const [spamList,setSpamList]= useState(false)
  const ToggleSpamList=()=>{setSpamList(!spamList)};
  const history=useHistory();
  const onHoldFunction=()=>{
    alert("on hold done");
  }
  const deleteFunction=()=>{
    alert("delete done");
  }

  return (
    <>
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
        <h3 className="jobsPostedtable_cell m20 mv150" style={{cursor:'pointer'}} onClick={()=>{setSpamList(true)}}>
          <b>{spam.title}</b>
        </h3>
      </td>
      <td className="jobsPosted__row">
        <h3 className="jobsPostedtable_cell m20 mv150">{spam.totalSpams}</h3>
      </td>
      <td className="jobsPosted__row">
        <h3 className="jobsPostedtable_cell m20">{spam.postedBy}</h3>
      </td>
      <td className="jobsPosted__row">
        <h3 className="jobsPostedtable_cell m20">{spam.postedOn}</h3>
      </td>
      {
        <>
          <td className="jobsPosted__row" onClick={()=>{setPopOnHoldAuth(true)}}>
              <h3 className="jobsPostedtable_cell shortlist">
                  On Hold
              </h3>
          </td>
          <td className="jobsPosted__row" onClick={()=> (setPopDeleteAuth(true) )}>
            <h3 className="jobsPostedtable_cell deactivate">Delete</h3>
          </td>
        </>
      }
    </tr>
    <PopupAuth
        openPopup={popOnHoldAuth}
        setPop={setPopOnHoldAuth}
        setnext={()=>{setPopOnHoldAuth(false);onHoldFunction();}}
        >
    </PopupAuth>
    <PopupAuth
        openPopup={popDeleteAuth}
        setPop={setPopDeleteAuth}
        setnext={()=>{setPopDeleteAuth(false);deleteFunction();}}
        >
    </PopupAuth>
    {spamList&&<SpamReportsList ToggleSpamList={ToggleSpamList} />}
  </>
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
