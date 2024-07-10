import './index.css'
import Header from '../Header'

import ReactPopUp from '../ReactPopUp'
import ReactPopUp1 from '../ReactPopUp1'
import ReactPopUp2 from '../ReactPopUp2'
import ReactPopUp3 from '../ReactPopUp3'

const Applicant = () => {
  const tableData = [
    {
      applicantid: 1,
      applicantname: 'Ravi',
      email: 'ravi12@gmail.com',
      mobilenumber: 8888122211,
      city: 'Ctown',
      source: 'Dice',
      state: 'Texas',
      applicantstate: 'New Lead',
      jobtitle: 'SDE1',
      ownership: 'Devesh',
      workauthorization: 'US Citizen',
      createdby: 'Devesh',
      createdon: '20/2/2013 15:53:50',
      createddate: '20/2/2013',
    },
    {
      applicantid: 2,
      applicantname: 'John Doe',
      email: 'john.doe@example.com',
      mobilenumber: 1234567890,
      city: 'New York',
      source: 'LinkedIn',
      state: 'New York',
      applicantstate: 'Submitted',
      jobtitle: 'Software Engineer',
      ownership: 'HR Manager',
      workauthorization: 'Permanent Resident',
      createdby: 'HR Manager',
      createdon: '2024-06-30',
      createddate: 'June 30, 2024',
    },
    {
      applicantid: 3,
      applicantname: 'Jane Smith',
      email: 'jane.smith@example.com',
      mobilenumber: 9876543210,
      city: 'Los Angeles',
      source: 'Referral',
      state: 'California',
      applicantstate: 'Under Review',
      jobtitle: 'Marketing Manager',
      ownership: 'Recruiter',
      workauthorization: 'Work Visa',
      createdby: 'Recruiter',
      createdon: '2024-06-28',
      createddate: 'June 28, 2024',
    },
    {
      applicantid: 4,
      applicantname: 'Michael Johnson',
      email: 'michael.johnson@example.com',
      mobilenumber: 5551234567,
      city: 'Chicago',
      source: 'Indeed',
      state: 'Illinois',
      applicantstate: 'New Lead',
      jobtitle: 'Senior Developer',
      ownership: 'Technical Lead',
      workauthorization: 'Green Card',
      createdby: 'Technical Lead',
      createdon: '2024-06-25',
      createddate: 'June 25, 2024',
    },
    {
      applicantid: 5,
      applicantname: 'Sarah Parker',
      email: 'sarah.parker@example.com',
      mobilenumber: 3334445555,
      city: 'Seattle',
      source: 'Glassdoor',
      state: 'Washington',
      applicantstate: 'Under Review',
      jobtitle: 'Product Manager',
      ownership: 'Product Director',
      workauthorization: 'H1B Visa',
      createdby: 'Product Director',
      createdon: '2024-06-22',
      createddate: 'June 22, 2024',
    },
    {
      applicantid: 6,
      applicantname: 'David Lee',
      email: 'david.lee@example.com',
      mobilenumber: 7778889999,
      city: 'San Francisco',
      source: 'LinkedIn',
      state: 'California',
      applicantstate: 'Submitted',
      jobtitle: 'Data Scientist',
      ownership: 'Data Science Manager',
      workauthorization: 'US Citizen',
      createdby: 'Data Science Manager',
      createdon: '2024-06-20',
      createddate: 'June 20, 2024',
    },
    {
      applicantid: 7,
      applicantname: 'Emily Wang',
      email: 'emily.wang@example.com',
      mobilenumber: 6667778888,
      city: 'Boston',
      source: 'Referral',
      state: 'Massachusetts',
      applicantstate: 'New Lead',
      jobtitle: 'HR Specialist',
      ownership: 'HR Director',
      workauthorization: 'Work Visa',
      createdby: 'HR Director',
      createdon: '2024-06-18',
      createddate: 'June 18, 2024',
    },
    {
      applicantid: 8,
      applicantname: 'Alexis Brown',
      email: 'alexis.brown@example.com',
      mobilenumber: 9998887777,
      city: 'Austin',
      source: 'Monster',
      state: 'Texas',
      applicantstate: 'Under Review',
      jobtitle: 'Accountant',
      ownership: 'Finance Manager',
      workauthorization: 'Green Card',
      createdby: 'Finance Manager',
      createdon: '2024-06-15',
      createddate: 'June 15, 2024',
    },
    {
      applicantid: 9,
      applicantname: 'Kevin Davis',
      email: 'kevin.davis@example.com',
      mobilenumber: 1112223333,
      city: 'Denver',
      source: 'Indeed',
      state: 'Colorado',
      applicantstate: 'Submitted',
      jobtitle: 'Sales Manager',
      ownership: 'Sales Director',
      workauthorization: 'US Citizen',
      createdby: 'Sales Director',
      createdon: '2024-06-12',
      createddate: 'June 12, 2024',
    },
    {
      applicantid: 10,
      applicantname: 'Michelle White',
      email: 'michelle.white@example.com',
      mobilenumber: 4445556666,
      city: 'Miami',
      source: 'LinkedIn',
      state: 'Florida',
      applicantstate: 'New Lead',
      jobtitle: 'Marketing Specialist',
      ownership: 'Marketing Manager',
      workauthorization: 'Work Visa',
      createdby: 'Marketing Manager',
      createdon: '2024-06-10',
      createddate: 'June 10, 2024',
    },
  ]

  return (
    <>
      <Header />
      <div className="top-section">
        <div className="left-part">
          <div className="profile">
            <ReactPopUp />
          </div>
          <div className="folder">
            <ReactPopUp1 />
          </div>
        </div>
        <div className="right-part">
          <div className="settings">
            <ReactPopUp2 />
          </div>
          <div className="clipboard">
            <ReactPopUp3 />
          </div>
          <button type="button" className="button">
            + New
          </button>
        </div>
      </div>
      <div className="k">
        <div className="search">
          <input className="search-input" type="search" />
          <img
            src="https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1719825600/icons8-search-64_1_ssnmcw.png"
            alt="search icon"
            className="search-icon"
          />
        </div>
        <div className="filter-section">
          <img
            src="https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1719825993/icons8-filter-50_bzckab.png"
            alt="edit filter"
            className="logo"
          />
          <img
            src="https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1719826005/icons8-filter-64_ryyuvb.png"
            alt="column filter"
            className="logo1"
          />
        </div>
      </div>
      <div className="applicant-container">
        <div className="card">
          <table className="table">
            <thead>
              <tr>
                <th>Applicant ID</th>
                <th>Applicant Name</th>
                <th>Email Address</th>
                <th>Mobile Number</th>
                <th>City</th>
                <th>Source</th>
                <th>State</th>
                <th>Application Status</th>
                <th>Job Title</th>
                <th>Ownership</th>
                <th>Work Authorization</th>
                <th>Created By</th>
                <th>Created On</th>
                <th>Created Date</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map(applicant => (
                <tr>
                  <td>{applicant.applicantid}</td>
                  <td>{applicant.applicantname}</td>
                  <td>{applicant.email}</td>
                  <td>{applicant.mobilenumber}</td>
                  <td>{applicant.city}</td>
                  <td>{applicant.source}</td>
                  <td>{applicant.state}</td>
                  <td>{applicant.applicantstate}</td>
                  <td>{applicant.jobtitle}</td>
                  <td>{applicant.ownership}</td>
                  <td>{applicant.workauthorization}</td>
                  <td>{applicant.createdby}</td>
                  <td>{applicant.createdon}</td>
                  <td>{applicant.createddate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Applicant
